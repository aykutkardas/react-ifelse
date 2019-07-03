# React-IfElse
Condition Components for React

## Import

```js
import { Condition, If, Else, ElseIf } from "./condition";
```

## Usage

```jsx
const App = () => (
  <div className="App">
    <Condition>
      <If condition={false}>
        <div>If Content</div>
      </If>
      <ElseIf condition={false}>
        <div>First Else If Content</div>
      </ElseIf>
      <ElseIf condition={true}>
        <div>Second Else If Content</div>
      </ElseIf>
      <Else>
        <div>Else Content</div>
      </Else>
    </Condition>
  </div>
);

// Result
/*
<div class="App">
  <div>Second Else If Content</div>
</div>
*/
```