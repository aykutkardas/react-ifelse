const Condition = ({ children }) => {
  let ifCondition = null;
  let ifChildren = null;
  let elseIfConditions = [];
  let elseChildren = null;
  const childrens = [];

  if (Array.isArray(children)) {
    childrens.push(...children);
  } else {
    childrens.push(children);
  }

  childrens.forEach(({ type, props }) => {
    const { name } = type;
    const { condition, children } = props;
    if (name === "If") {
      ifCondition = condition;
      ifChildren = children;
    } else if (name === "ElseIf") {
      elseIfConditions.push({
        condition,
        children
      });
    } else if (name === "Else") {
      elseChildren = children;
    }
  });

  if (ifCondition) {
    return ifChildren;
  }

  if (elseIfConditions.length > 0) {
    const child = elseIfConditions.find(cond => cond.condition);
    if (child) {
      return child.children;
    }
  }

  return elseChildren;
};

const If = ({ condition, children }) => (condition ? children : null);

const ElseIf = ({ condition, children }) => (condition ? children : null);

const Else = ({ children }) => children;

export { Condition, If, Else, ElseIf };
