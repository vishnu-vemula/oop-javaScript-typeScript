/**
 * Foundations: immutable data, array transformations, and explicit errors.
 * These patterns are useful before introducing classes.
 */
export const calculateOrderTotal = (items, taxRate = 0.18) => {
  if (!Array.isArray(items) || items.length === 0) {
    throw new Error("An order must contain at least one item.");
  }

  const subtotal = items.reduce((total, item) => {
    if (item.quantity <= 0 || item.unitPrice < 0) {
      throw new Error(`Invalid item: ${item.name}`);
    }
    return total + item.quantity * item.unitPrice;
  }, 0);

  return Number((subtotal * (1 + taxRate)).toFixed(2));
};

export const groupBy = (values, keySelector) =>
  values.reduce((groups, value) => {
    const key = keySelector(value);
    groups[key] ??= [];
    groups[key].push(value);
    return groups;
  }, {});
