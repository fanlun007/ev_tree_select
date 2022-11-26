<script setup lang="ts">
import { ref, unref, watch } from "vue";
import EVTreeSelect from "@lib/tree-select/index.vue";
// import { EVTreeSelect } from "../../dist/ev_tree_select.js";

defineProps<{ msg: string }>();

const count = ref(0);
const sourceData = [
  {
    value: "1",
    label: "Level one 1",
    children: [
      {
        value: "1-1",
        label: "Level two 1-1",
      },
    ],
  },
  {
    value: "2",
    label: "Level one 2",
    children: [
      {
        value: "2-1",
        label: "Level two 2-1",
      },
      {
        value: "2-2",
        label: "Level two 2-2",
      },
      {
        value: "2-3",
        label: "Level two 2-2",
      },
      {
        value: "2-4",
        label: "Level two 2-2",
      },
      {
        value: "2-5",
        label: "Level two 2-2",
      },
    ],
  },
  {
    value: "3",
    label: "Level three 3",
    children: [
      {
        value: "3-1",
        label: "Level three 3-1",
      },
      {
        value: "3-2",
        label: "Level three 3-2",
      },
      {
        value: "3-3",
        label: "Level three 3-3",
      },
      {
        value: "3-4",
        label: "Level three 3-3",
      },
      {
        value: "3-5",
        label: "Level three 3-3",
      },
      {
        value: "3-6",
        label: "Level three 3-3",
      },
    ],
  },
];
const data = ref(sourceData);
const valueStrictly = ref(["2"]);
watch(valueStrictly, (newVal, oldVal) => {
  console.log("check select: ", unref(valueStrictly));
});
</script>

<template>
  <h1>{{ msg }}</h1>

  <EVTreeSelect
    v-model="valueStrictly"
    :data="data"
    multiple
    :render-after-expand="false"
    show-checkbox
    collapse-tags
    check-on-click-node
    :expand-on-click-node="false"
    :single-between-group="true"
    :onlyParentKey="true"
  />

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Install
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
