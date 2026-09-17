export type Currency = "INR" | "USD";

export interface Product {
  readonly id: string;
  readonly name: string;
  readonly price: number;
  readonly currency: Currency;
}

export interface LineItem {
  readonly product: Product;
  readonly quantity: number;
}
