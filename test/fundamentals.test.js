import test from "node:test";
import assert from "node:assert/strict";
import { calculateOrderTotal, groupBy } from "../src/javascript/fundamentals.js";

test("calculates a tax-inclusive order total", () => {
  assert.equal(
    calculateOrderTotal([{ name: "Book", quantity: 2, unitPrice: 100 }], 0.1),
    220,
  );
});

test("rejects invalid order lines", () => {
  assert.throws(() =>
    calculateOrderTotal([{ name: "Book", quantity: 0, unitPrice: 100 }]),
  );
});

test("groups values by a selected key", () => {
  assert.deepEqual(
    groupBy(
      [
        { team: "a", id: 1 },
        { team: "a", id: 2 },
        { team: "b", id: 3 },
      ],
      (x) => x.team,
    ),
    {
      a: [
        { team: "a", id: 1 },
        { team: "a", id: 2 },
      ],
      b: [{ team: "b", id: 3 }],
    },
  );
});
