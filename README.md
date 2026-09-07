# Web-dev-3-Assignment-1
# Smart Utility Toolkit

A Node.js mini-project demonstrating the use of built-in Node.js
modules through different practical utilities.

## Modules Used

- process
- http
- fs
- crypto
- Custom modules using module.exports and require()

## Project Files

### 1. calculator.js
A command-line calculator supporting:
- Addition
- Subtraction
- Multiplication
- Division

Example:

node calculator.js add 10 5

### 2. isEven.js
A reusable custom module that checks whether a number is even.

### 3. useIsEven.js
Imports and demonstrates the isEven custom module.

Run:

node useIsEven.js

### 4. server.js
A basic HTTP server with multiple routes.

Start the server:

node server.js

Available routes:

/
 /about
 /contact

Any unknown route returns a 404 message.

### 5. fileManager.js
Demonstrates file operations using the fs module:

- Create
- Read
- Update
- Delete

Run:

node fileManager.js

### 6. dice.js
A random dice simulator using the crypto module.

It generates five random values between 1 and 6.

Run:

node dice.js

## Bonus Features

- Timestamp-based logging
- Reusable logger module
- Execution-flow messages in the terminal

## Requirements

Node.js is required to run this project.

No external npm packages or frameworks are used.
