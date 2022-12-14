<script lang="ts">
// @ts-nocheck
import { computed, defineComponent, h, onMounted, reactive, ref } from "vue";
import { pick } from "lodash-unified";
import { ElSelect, ElTree } from "element-plus";
import { useSelect } from "./select";
import { useTree } from "./tree";

export default defineComponent({
  name: "EVTreeSelect",
  // disable `ElSelect` inherit current attrs
  inheritAttrs: false,
  props: {
    ...ElSelect.props,
    ...ElTree.props,
    singleBetweenGroup: {
      type: Boolean,
      default: false,
    },
    onlyParentKey: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, context) {
    const { slots, expose } = context;

    const select = ref<InstanceType<typeof ElSelect>>();
    const tree = ref<InstanceType<typeof ElTree>>();

    const key = computed(() => props.nodeKey || props.valueKey || "value");

    const selectProps = useSelect(props, context, { select, tree, key });
    const treeProps = useTree(props, context, { select, tree, key });

    // expose ElTree/ElSelect methods
    const methods = reactive({});
    expose(methods);
    onMounted(() => {
      // console.log("check tree ref,", tree.value);

      Object.assign(methods, {
        ...pick(tree.value, [
          "filter",
          "updateKeyChildren",
          "getCheckedNodes",
          "setCheckedNodes",
          "getCheckedKeys",
          "setCheckedKeys",
          "setChecked",
          "getHalfCheckedNodes",
          "getHalfCheckedKeys",
          "getCurrentKey",
          "getCurrentNode",
          "setCurrentKey",
          "setCurrentNode",
          "getNode",
          "remove",
          "append",
          "insertBefore",
          "insertAfter",
        ]),
        ...pick(select.value, ["focus", "blur"]),
      });
    });

    return () =>
      h(
        ElSelect,
        /**
         * 1. The `props` is processed into `Refs`, but `v-bind` and
         * render function props cannot read `Refs`, so use `reactive`
         * unwrap the `Refs` and keep reactive.
         * 2. The keyword `ref` requires `Ref`, but `reactive` broke it,
         * so use function.
         */
        reactive({
          ...selectProps,
          ref: (ref) => (select.value = ref),
        }),
        {
          ...slots,
          default: () =>
            h(
              ElTree,
              reactive({
                ...treeProps,
                ref: (ref) => (tree.value = ref),
              })
            ),
        }
      );
  },
});
</script>
<style>
@import "element-plus/theme-chalk/el-tree-select.css";
</style>
