# Element Plus tree-select component minor feature enhance

Based on Element Plus tree-select component, multiple select within group, but single select between group.   

## Enhance props
```javascript
// multiple select within group, but single select between group
singleBetweenGroup: {
    type: Boolean,
    default: false
}
```

> Notice !!! <br>
Devloped under auhtor's team business requirement, just promise it run normally under tree data that has only two level. 

## Usage

1. npm install ev_tree_select
2. import css : ```import 'ev_tree_select/dist/style.css'```
3. import into your single vue file component : ```import { EVTreeSelect } from 'ev_tree_select';```

Basic usage and more attributes/props/method please reference [Elment-plus]( https://element-plus.gitee.io/en-US/component/tree-select.html)