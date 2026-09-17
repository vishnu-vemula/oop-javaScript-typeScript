import type { LineItem, Product } from "./models.js";

export class OrderService {
  calculateTotal(items: readonly LineItem[]): number {
    if (items.length === 0) {
      throw new Error("Cannot calculate an empty order.");
    }

    return Number(
      items
        .reduce((total, item) => {
          this.assertValidItem(item.product, item.quantity);
          return total + item.product.price * item.quantity;
        }, 0)
        .toFixed(2),
    );
  }

  private assertValidItem(product: Product, quantity: number): void {
    if (quantity <= 0 || !Number.isFinite(quantity)) {
      throw new Error(`Invalid quantity for ${product.name}.`);
    }
    if (product.price < 0 || !Number.isFinite(product.price)) {
      throw new Error(`Invalid price for ${product.name}.`);
    }
  }
}
