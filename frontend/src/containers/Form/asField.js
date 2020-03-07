import React, { useContext, useMemo } from "react";
import { context } from "./context";

/**
 * This HOC wraps a given component to connect it to the forms main component
 *
 * Will catch the change events
 */
const asField = WrappedField => props => {
  const contextValue = useContext(context);

  const updateFieldValue = value => {
    contextValue.updateFieldValue(props.fieldName, value);
  };

  return <WrappedField {...props} onChange={updateFieldValue} />;
};

export default asField;
