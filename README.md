# Easy Email Validator

A **simple**, **lightweight**, and **reliable** npm module to validate email addresses.  
`easy-email-validator` checks if a given string is a valid email based on its format. It's easy to use, with no unnecessary complexity or dependencies.

---

## Features

- 🟢 **Simple to use**: Just one function to validate email strings.
- ⚡ **Lightweight**: Minimal size, no unnecessary dependencies.
- ✅ **Reliable**: Strictly follows email format validation standards.
- 📦 Perfect for projects needing quick email validation.

---

## Installation

Install via npm or yarn:

```bash
npm install easy-email-validator
```

## Usage

Import the easy-email-validator module and use the validate function to check email validity.

#### JavaScript

```javascript
// Import the module
const { validate } = require('easy-email-validator');

// Valid email example
const validEmail = "example@domain.com";
console.log(validate(validEmail)); // Output: true

// Invalid email example
const invalidEmail = "example@domain";
console.log(validate(invalidEmail)); // Output: false
```

## Why Use easy-email-validator?

Focused: Specifically designed to validate email address format.

Performance: Processes quickly with minimal overhead.

Simplicity: No additional configurations or complex setup.

Lightweight: Adds minimal footprint to your project.

## Limitations

The module does not verify deliverability or check if the email exists.

It focuses solely on email format validation.

## License

This project is licensed under the MIT License.

## Contributions

Contributions, issues, and feature requests are welcome! Feel free to submit a PR or open an issue on GitHub.

# Happy Validating! 🚀





