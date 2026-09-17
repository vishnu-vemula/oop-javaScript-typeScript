import { OrderService } from "./order-service.js";
import type { Product } from "./models.js";

const notebook: Product = {
  id: "notebook",
  name: "Notebook",
  price: 120,
  currency: "INR",
};

const total = new OrderService().calculateTotal([{ product: notebook, quantity: 2 }]);

console.log(`TypeScript order total: ${notebook.currency} ${total}`);
