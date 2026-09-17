import { calculateOrderTotal, groupBy } from "./fundamentals.js";

const items = [
  { name: "Notebook", category: "stationery", quantity: 2, unitPrice: 120 },
  { name: "Pen", category: "stationery", quantity: 3, unitPrice: 30 },
];

console.log(`Order total: ₹${calculateOrderTotal(items)}`);
console.log(groupBy(items, (item) => item.category));
