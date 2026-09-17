# JavaScript, OOP & TypeScript — Production Learning Course

An end-to-end, hands-on course for learning modern JavaScript, object-oriented
programming, and TypeScript by building small pieces of a realistic domain.
The examples use strict validation, encapsulation, immutable return values,
tests, and a repeatable build workflow rather than isolated syntax snippets.

## What you will learn

| Module                     | Focus                                                                     | Example                          |
| -------------------------- | ------------------------------------------------------------------------- | -------------------------------- |
| 1. JavaScript foundations  | modules, values, functions, arrays, errors, and data transformation       | `src/javascript/fundamentals.js` |
| 2. Application composition | importing modules and running a small use case                            | `src/javascript/app.js`          |
| 3. OOP fundamentals        | classes, constructors, private fields, validation, and composition        | `src/oop/library.js`             |
| 4. TypeScript design       | interfaces, literal unions, `readonly`, strict types, and service classes | `src/typescript/`                |
| 5. Professional workflow   | tests, type-checking, formatting, linting, and a production build         | `test/`, `package.json`          |

## Requirements

- Node.js 20 or newer
- npm 10 or newer
- A code editor with TypeScript support (VS Code is recommended)

## Quick start

```bash
npm install
npm run start
npm test
npm run typecheck
npm run build
```

The browser OOP example is available in `index.html`. Because it uses native
ES modules, serve the repository instead of opening the file with `file://`:

```bash
npx serve .
```

Then open the URL printed by `serve`.

## Suggested course path

### 1. JavaScript foundations

Start with `src/javascript/fundamentals.js`. Notice that
`calculateOrderTotal`:

- validates input at the boundary;
- uses `reduce` without mutating the input array;
- returns a predictable number; and
- throws an explicit error for invalid data.

Then run `npm run start` and follow the import from `src/javascript/app.js`.
Experiment with the data and add a test before changing behavior.

### 2. Object-oriented programming

Open `src/oop/library.js` and identify:

- **encapsulation**: `#read` and `#books` cannot be changed directly;
- **abstraction**: callers use `markAsRead`, `addBook`, and `findByAuthor`;
- **invariants**: constructors and methods reject invalid state; and
- **composition**: `Library` manages `Book` objects.

`OOPS-LIB.js` adapts this domain model to the browser. This is the same
production pattern used by a UI: the domain object owns its rules, while the
entry point handles rendering.

### 3. TypeScript

Read `src/typescript/models.ts` first, then
`src/typescript/order-service.ts`. The model types express the allowed
currency values and make products immutable. The service uses strict typing
and still validates runtime input because TypeScript types do not protect
against data received from an API or user.

`npm run typecheck` checks the source without writing files. `npm run build`
writes JavaScript to `dist/`, which is intentionally ignored by Git.

### 4. Testing and extension exercises

Tests use Node's built-in test runner, so the course has no runtime test
framework dependency. Read `test/fundamentals.test.js` and
`test/library.test.js`, then try these exercises:

1. Add a `removeBook(isbn)` method and test both success and missing ISBNs.
2. Add a `discount` field to `LineItem` with a runtime range check.
3. Add a `search` method that matches a title or author case-insensitively.
4. Replace the console application with an HTTP API, keeping domain classes
   independent from transport code.
5. Add integration tests for the API boundary.

## Project conventions

- Use ESM imports with explicit `.js` extensions.
- Keep domain rules in `src/`; keep UI and transport adapters at the edges.
- Validate external input before it enters the domain.
- Prefer `const`, pure functions, private fields, and readonly types.
- Add a failing test before fixing a behavior.
- Run `npm test`, `npm run typecheck`, and `npm run lint` before sharing work.

## Repository layout

```text
.
├── index.html                 # Browser entry point
├── OOPS-LIB.js                # Browser adapter for the OOP example
├── src/
│   ├── javascript/            # JavaScript foundations and app entry point
│   ├── oop/                   # Encapsulated library domain
│   └── typescript/            # Strict TypeScript models and service
├── test/                      # Node test-runner examples
├── package.json               # Scripts and project identity
├── tsconfig.json              # Strict TypeScript build configuration
└── eslint.config.js           # JavaScript lint rules
```

## License

Use and adapt the examples for learning and portfolio projects.
