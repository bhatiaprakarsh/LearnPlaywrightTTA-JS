# LearnPlaywrightTTA - JavaScript + Playwright Learning Repository

A practical learning repository for JavaScript fundamentals, browser automation, and end-to-end testing with Playwright. It is designed for beginners to intermediate learners who want to build a solid foundation in scripting, UI automation, and modern testing workflows.

## 📚 Project Overview

This repository includes structured JavaScript lessons, hands-on examples, and Playwright-based automation exercises covering:

- JavaScript basics and syntax
- Variables, scope, and hoisting
- Operators, loops, conditionals, and arrays
- Function design, callbacks, promises, and async/await
- String handling and practical problem-solving exercises
- ES modules, objects, classes, and object-oriented programming
- Encapsulation and inheritance examples
- Playwright project setup and browser automation tests

The goal is to combine theory with executable examples so learners can practice and understand real-world usage quickly.

## 📝 Progress Update

- Added and expanded JavaScript lessons across arrays, functions, strings, callbacks, promises, and async/await.
- Added Playwright-based login automation examples and structured test scenarios.
- Added lessons for ES module imports and exports, objects, classes, encapsulation, and inheritance.
- Configured the root Node.js project for ES modules with `"type": "module"`.
- Continued building a hands-on learning path for both JavaScript foundations and browser test automation.
- Updated the repository documentation to better reflect the current learning structure and project organization.

---

## 📁 Project Structure

```
LearnPlaywrightTTA/
├── .github/                               # GitHub config and repository metadata
├── .playwright-cli/                       # Playwright CLI working files
├── chapter_00_GENAI/                      # GenAI concepts and prompt-based exercises
│   ├── Prompt/
│   ├── Selenium Framework/
│   ├── Template/
│   ├── Test Cases/
│   ├── Test Plan/
│   ├── convert_to_formats.py
│   ├── Test Case.csv
│   ├── Test Plan.txt
│   └── write_vwo_test_files.py
│
├── chapter_01_Basics/                     # Beginner JavaScript basics
│   ├── 01_Basic.js
│   ├── 02_JS.js
│   └── 03_JS_Commands.js
│
├── chapter_02_JavaScript_Concepts/        # Core JavaScript concepts
│   └── 05_JS_Basics.js
│
├── chapter_03_Identifier_Literals/        # Identifiers, literals, and comments
│   ├── 06_Identifier_Rules.js
│   ├── 07_Identifier_Part2.js
│   └── 08_Comments.js
│
├── chapter_04_JavaScript_Concepts/        # Variables, scope, hoisting, functions
│   ├── 09_var_let_const.js
│   ├── 10_functions.js
│   ├── 11_Var.js
│   ├── 12_Let.js
│   ├── 13_Const.js
│   ├── 14_var_functionScope.js
│   ├── 15_let_scope.js
│   ├── 16_Hoisting.js
│   └── 17_Hoisting_fn.js
│
├── chapter_05_Literals/                   # Literals, strings, templates, and values
│   ├── 22_Literals.js
│   ├── 23_null_undefined.js
│   ├── 26_Literal_numbers.js
│   ├── 27_String_Literals.js
│   ├── 28_Template_Literals.js
│   └── 29_Backtick_Single_Double.js
│
├── chapter_06_Operators/                  # Operators and expressions
│   ├── 30_Operator.js
│   ├── 31_Assignment_op.js
│   ├── 32_modulus.js
│   ├── 33_expo..js
│   ├── 35_Comparision_OP.js
│   ├── 39_Logical_OP.js
│   ├── 40_String_OP.js
│   ├── 41_Ternary_OP.js
│   ├── 42_TypeOf_OP.js
│   ├── 43_Increment_Decrement_OP.js
│   ├── 44_Null_OP.js
│   ├── 45_Post_Increment.js
│   ├── 46_Pre_Increment.js
│   ├── 47_Post_Decrement.js
│   ├── 48_Pre_Decrement.js
│   └── 49_Advance_Increment_Decrement.js
│
├── chapter_07_if_else/                    # Conditional logic examples
├── chapter_08_Switch_Statement/           # Switch statement exercises
├── chapter_09_User_Input/                 # Console input and user interaction
├── chapter_10_Loops/                      # Loops and iteration practice
│   ├── 63_ForLoop.js
│   ├── 64_While_Loop.js
│   ├── 65_Do_While_Loop.js
│   ├── 66_Difference_Between_DoWhile_And_While_Loop.js
│   ├── 67_Nested_For_Loop.js
│   └── 68_Task.js
│
├── chapter_11_Array/                      # Arrays and array helpers
│   ├── 69_Array.js
│   ├── 70_Arrays.js
│   ├── 71_Functions2_Array.js
│   ├── 71_Funstions_Array.js
│   ├── 72_Searching_Array.js
│   ├── 73_Array_Iterate.js
│   ├── 74_Array_Transform.js
│   ├── 75_Array_Sort.js
│   ├── 76_Array_SLICE.js
│   ├── 77_Concat.js
│   ├── 78.Copy.js
│   ├── 78_Checking.js
│   ├── 79_Copy2.js
│   └── 80_Deconstructing.js
│
├── chapter_12_Functions/                  # Function practice and examples
├── chapter_14_Strings/                    # String manipulation exercises
├── chapter_16_Callback/                   # Callback-based examples
├── chapter_17_Promise/                    # Promise fundamentals and async patterns
├── chapter_18_Async_Await/                # Async/await examples and scenarios
├── chapter_19_ExportImport/                # ES module exports and imports
├── chapter_20_Objects/                     # Object literals and object patterns
├── chapter_21_ClassObject/                 # Classes, constructors, access, and static members
├── chapter_22_OOPs_Encapsulation/           # Encapsulation and private state examples
├── chapter_23_OOPs_Inheritance/            # Single and multilevel inheritance examples
├── JavaScript/                            # Extra JS references and notes
├── Pattern Questions/                     # Coding pattern and interview-style practice
├── Playwright/                            # Playwright automation workspace
│   ├── README.md
│   ├── cheat-sheet.md
│   ├── login-prompt.md
│   ├── login-test-cases.md
│   ├── playwright.config.ts
│   ├── playwright-report/
│   ├── tests/
│   └── package.json
├── tests/                                 # Root-level Playwright test samples
├── package.json                           # Root Node.js dependencies
├── package-lock.json                      # Lockfile for installed packages
├── playwright.config.ts                   # Root Playwright configuration
├── README.md                              # Repository overview and guide
├── Set-ExecutionPolicy                    # Local script execution utility
├── .gitignore                             # Git ignore rules
├── playright-report/                      # Generated Playwright HTML reports
├── test-results/                          # Generated test output
└── .playwright-cli/                       # Local Playwright CLI metadata
```

---

## ✨ Recent Additions

The repository now includes deeper practice material in:

- Arrays and array transformations
- Function-based problem solving
- String operations and string logic
- Callback examples
- Promise-based workflows
- Async/await usage patterns
- ES module exports and imports
- Objects, classes, constructors, and static members
- Encapsulation and inheritance
- Playwright login and automation test scenarios

These additions make the project more useful for both JavaScript learning and practical UI automation practice.

---

## 🎯 Learning Path

### **Chapter 1: Basics** (Files: 01-03)

Learn the fundamentals of JavaScript including:

- Basic syntax and structure
- JavaScript commands and execution
- Console output and basic operations

**Files:**

- `01_Basic.js` - Introduction to JavaScript
- `02_JS.js` - JavaScript basics
- `03_JS_Commands.js` - Common JavaScript commands

### **Chapter 2: JavaScript Concepts** (Files: 05)

Core concepts and foundational knowledge:

- `05_JS_Basics.js` - JavaScript fundamentals review

### **Chapter 3: Identifiers & Literals** (Files: 06-08)

Understanding naming conventions and code documentation:

- `06_Identifier_Rules.js` - Rules for naming variables and functions
- `07_Identifier_Part2.js` - Advanced identifier concepts
- `08_Comments.js` - Single-line and multi-line comments

### Chapter 5: Literals and Strings (Files: 22, 23, 26-29)

Learn JavaScript literals, value types, and string syntax:

- `22_Literals.js` - JavaScript literal examples for numbers, strings, objects, arrays, booleans, null, and regex
- `23_null_undefined.js` - Difference between `null` and `undefined`
- `26_Literal_numbers.js` - Numeric literals: decimal, binary, octal, hexadecimal, BigInt, and separators
- `27_String_Literals.js` - String literal examples with single and double quotes
- `28_Template_Literals.js` - Template literals and expression interpolation
- `29_Backtick_Single_Double.js` - Backticks, single quotes, and double quotes in strings

### Chapter 4: Advanced JavaScript Concepts (Files: 09-17)

Dive deep into variables, scope, and hoisting:

#### **Variables (var, let, const)**

- `09_var_let_const.js` ⭐ **COMPREHENSIVE GUIDE**
  - Detailed explanations of var, let, and const
  - Scope differences (global, function, block)
  - Redeclare capabilities for each keyword
  - Reassign behavior
  - Hoisting explanation
  - Practical examples and best practices
  - Comparison table

- `11_Var.js` - Deep dive into var keyword
- `12_Let.js` - Deep dive into let keyword
- `13_Const.js` - Deep dive into const keyword

#### **Scope Management**

- `14_var_functionScope.js` - Function scope with var
- `15_let_scope.js` - Block scope with let

#### **Hoisting**

- `16_Hoisting.js` - Variable hoisting concepts
- `17_Hoisting_fn.js` - Function hoisting

#### **Functions**

- `10_functions.js` - Function declaration, expression, and arrow functions

### Chapters 19-23: Modules and Object-Oriented JavaScript

Build on the JavaScript fundamentals with reusable modules and object-oriented programming:

- `chapter_19_ExportImport/` - Named exports, default exports, imports, and shared utilities
- `chapter_20_Objects/` - Object properties, methods, configuration objects, and object exercises
- `chapter_21_ClassObject/` - Classes, constructors, public/private members, and static methods
- `chapter_22_OOPs_Encapsulation/` - Encapsulation, private state, getters, setters, and practical problems
- `chapter_23_OOPs_Inheritance/` - Inheritance, parent-child classes, method reuse, and overrides

Run a lesson from the repository root with Node.js:

```bash
node chapter_22_OOPs_Encapsulation/171_Bank.js
```

The project uses ES modules, so module lessons use `import` and `export` syntax.

### Chapter 10: Looping Constructs (Files: 63-67)

Practice iteration patterns and understand the differences between loop types:

- `63_ForLoop.js` - Classic for-loop iteration
- `64_While_Loop.js` - Condition-controlled repetition
- `65_Do_While_Loop.js` - Post-check loop execution
- `66_Difference_Between_DoWhile_And_While_Loop.js` - Comparison between while and do...while
- `67_Nested_For_Loop.js` - Loop nesting and multi-dimensional traversal

### Playwright Automation Workspace

The repository also includes browser automation examples and setup for Playwright-based testing:

- `Playwright/playwright.config.ts` - Playwright configuration
- `Playwright/tests/` - Example automation tests
- `tests/` - Root-level sample tests

---

## ✨ Key Topics Covered

### Variables

| Feature   | var            | let      | const    |
| --------- | -------------- | -------- | -------- |
| Scope     | Function       | Block    | Block    |
| Redeclare | ✅ Yes         | ❌ No    | ❌ No    |
| Reassign  | ✅ Yes         | ✅ Yes   | ❌ No    |
| Hoisting  | ✅ (undefined) | ❌ (TDZ) | ❌ (TDZ) |

### Scope Types

- **Global Scope** - Variables accessible everywhere
- **Function Scope** - Variables accessible within a function (var)
- **Block Scope** - Variables accessible within a block: { } (let, const)
- **Closures** - Functions accessing outer scope variables

### Hoisting

- Variable declarations are moved to the top of their scope
- `var` is hoisted with `undefined` value
- `let` and `const` are hoisted but not initialized (Temporal Dead Zone)
- Function declarations are fully hoisted
- Function expressions are not hoisted

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v12.0 or higher) - [Download here](https://nodejs.org/)
- **Git** (for cloning and version control) - [Download here](https://git-scm.com/)
- **Text Editor/IDE** - VS Code recommended - [Download here](https://code.visualstudio.com/)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/bhatiaprakarsh/LearnPlaywrightTTA.git
   cd LearnPlaywrightTTA
   ```

2. **Verify Node.js installation**
   ```bash
   node --version
   npm --version
   ```

### Running the Lessons

Run any JavaScript file using Node.js:

```bash
# Run a specific lesson
node chapter_01_Basics/01_Basic.js

# Run the comprehensive var/let/const guide
node chapter_04_JavaScript_Concepts/09_var_let_const.js

# Run loop examples
node chapter_10_Loops/63_ForLoop.js
node chapter_10_Loops/66_Difference_Between_DoWhile_And_While_Loop.js
```

### Running Playwright Tests

```bash
# From the root workspace
npx playwright test

# Or use the nested Playwright folder
cd Playwright
npx playwright test
```

---

## 📖 File Descriptions

### Chapter 1: Basics

| File                | Description                                            |
| ------------------- | ------------------------------------------------------ |
| `01_Basic.js`       | Introduction to JavaScript syntax and basic operations |
| `02_JS.js`          | JavaScript fundamentals and basic concepts             |
| `03_JS_Commands.js` | Common JavaScript commands and methods                 |

### Chapter 2: JavaScript Concepts

| File              | Description                         |
| ----------------- | ----------------------------------- |
| `05_JS_Basics.js` | Core JavaScript basics and concepts |

### Chapter 3: Identifiers & Literals

| File                     | Description                                                    |
| ------------------------ | -------------------------------------------------------------- |
| `06_Identifier_Rules.js` | Rules for creating valid identifiers (variable/function names) |
| `07_Identifier_Part2.js` | Advanced identifier patterns and conventions                   |
| `08_Comments.js`         | Single-line (//) and multi-line (/\* \*/) comment examples     |

### Chapter 5: Literals and Strings

| File                           | Description                                                                                              |
| ------------------------------ | -------------------------------------------------------------------------------------------------------- |
| `22_Literals.js`               | JavaScript literal examples for values like numbers, strings, objects, arrays, booleans, null, and regex |
| `23_null_undefined.js`         | Difference between `null` and `undefined` with examples                                                  |
| `26_Literal_numbers.js`        | Numeric literals: decimal, binary, octal, hexadecimal, BigInt, and separators                            |
| `27_String_Literals.js`        | String literal examples using single and double quotes                                                   |
| `28_Template_Literals.js`      | Template literals with expression interpolation and multiline strings                                    |
| `29_Backtick_Single_Double.js` | Backticks, single quotes, and double quotes in strings                                                   |

### Chapter 6: Operators

| File                                | Description                                                    |
| ----------------------------------- | -------------------------------------------------------------- | --- | ------------------------------------------ |
| `30_Operator.js`                    | Overview of common JavaScript operators with examples          |
| `31_Assignment_op.js`               | Assignment operators and shorthand assignment examples         |
| `32_modulus.js`                     | Modulus operator and remainder examples                        |
| `33_expo..js`                       | Exponentiation operator examples                               |
| `35_Comparision_OP.js`              | Comparison operators such as `==`, `===`, `>`, `<`, `>=`, `<=` |
| `39_Logical_OP.js`                  | Logical operators `&&`, `                                      |     | `, and `!` with truth table style examples |
| `40_String_OP.js`                   | String concatenation and string-related operator examples      |
| `41_Ternary_OP.js`                  | Ternary operator examples for short conditional logic          |
| `42_TypeOf_OP.js`                   | `typeof` operator examples for checking data types             |
| `43_Increment_Decrement_OP.js`      | Increment and decrement operator examples                      |
| `44_Null_OP.js`                     | `null` examples and how it differs from other falsy values     |
| `45_Post_Increment.js`              | Post-increment operator behavior and examples                  |
| `46_Pre_Increment.js`               | Pre-increment operator behavior and examples                   |
| `47_Post_Decrement.js`              | Post-decrement operator behavior and examples                  |
| `48_Pre_Decrement.js`               | Pre-decrement operator behavior and examples                   |
| `49_Advance_Increment_Decrement.js` | Advanced increment/decrement patterns and use cases            |

### Chapter 7: Control Flow - If/Else

Conditional statements for decision-making in code:

- `if` statements - Execute code based on a condition
- `if/else` - Provide alternative code paths
- `if/else if/else` - Multiple conditions
- Nested conditionals - Complex decision logic

### Chapter 8: Control Flow - Switch Statements

Switch statements for cleaner multi-branch logic:

- `switch` syntax and cases
- `break` statements to prevent fall-through
- `default` case handling
- Best practices for switch statements

### Chapter 9: User Input

Handling user interaction and input:

- Reading input from the console
- Processing user data
- Input validation basics
- Interactive program examples

### Chapter 0: GenAI Introduction

Introduction to AI and machine learning concepts:

- Basic AI/ML terminology
- Introduction to generative AI
- Overview of AI in JavaScript
  | `45_Post_Increment.js` | Post-increment operator behavior and examples |
  | `46_Pre_Increment.js` | Pre-increment operator behavior and examples |
  | `47_Post_Decrement.js` | Post-decrement operator behavior and examples |
  | `48_Pre_Decrement.js` | Pre-decrement operator behavior and examples |
  | `49_Advance_Increment_Decrement.js` | Advanced increment/decrement patterns and use cases |

### Chapter 4: Advanced Concepts

| File                      | Description                                                                                                       |
| ------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `09_var_let_const.js`     | ⭐ **Comprehensive guide**: var vs let vs const with scope, redeclare, reassign, hoisting, and practical examples |
| `10_functions.js`         | Function declarations, expressions, arrow functions, and scope                                                    |
| `11_Var.js`               | In-depth var keyword behavior and hoisting                                                                        |
| `12_Let.js`               | In-depth let keyword and block scoping                                                                            |
| `13_Const.js`             | In-depth const keyword and immutability                                                                           |
| `14_var_functionScope.js` | Function scope examples with var                                                                                  |
| `15_let_scope.js`         | Block scope examples with let                                                                                     |
| `16_Hoisting.js`          | Variable hoisting and Temporal Dead Zone                                                                          |
| `17_Hoisting_fn.js`       | Function hoisting behavior                                                                                        |

---

## 💡 Key Learning Points

### 1. **Use CONST by Default**

```javascript
const API_URL = "https://api.example.com";
```

Const prevents accidental reassignment and is safer.

### 2. **Use LET When Reassignment Needed**

```javascript
let counter = 0;
counter++; // Allowed - reassignment
```

Let is block-scoped and safer than var.

### 3. **Avoid VAR**

```javascript
// ❌ Avoid
var name = "John"; // Function scoped, can cause bugs

// ✅ Prefer
let name = "John"; // Block scoped, cleaner
```

Var's function scope can lead to unexpected behavior.

### 4. **Understand Scope**

```javascript
function example() {
  if (true) {
    let blockVar = "I am block scoped";
  }
  // console.log(blockVar); // ReferenceError
}
```

Let and const are block-scoped; var is function-scoped.

### 5. **Closures**

```javascript
function createCounter() {
  let count = 0;
  return () => ++count;
}
const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2
```

Functions can access variables from their outer scope.

---

## 🔗 Resources & References

- [MDN Web Docs - var, let, const](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Variables)
- [JavaScript.info - Variable scope, closure](https://javascript.info/closure)
- [MDN - Hoisting](https://developer.mozilla.org/en-US/docs/Glossary/Hoisting)
- [Node.js Documentation](https://nodejs.org/en/docs/)

---

## 📝 How to Use This Repository

1. **Start with Chapter 1** - Get comfortable with basic syntax
2. **Progress through chapters sequentially** - Each builds on previous knowledge
3. **Run each file** - Use Node.js to execute and see output
4. **Modify examples** - Experiment by changing code and re-running
5. **Refer to comprehensive guides** - Use `09_var_let_const.js` as a reference

### Recommended Study Order

```
01_Basic.js
    ↓
02_JS.js
    ↓
03_JS_Commands.js
    ↓
05_JS_Basics.js
    ↓
06_Identifier_Rules.js → 07_Identifier_Part2.js → 08_Comments.js
    ↓
09_var_let_const.js ⭐ (COMPREHENSIVE - Read this!)
    ↓
11_Var.js → 12_Let.js → 13_Const.js
    ↓
14_var_functionScope.js → 15_let_scope.js
    ↓
16_Hoisting.js → 17_Hoisting_fn.js
    ↓
10_functions.js
```

---

## 🐛 Common Mistakes to Avoid

1. **Redeclaring let/const** - Will throw SyntaxError
2. **Reassigning const** - Will throw TypeError
3. **Using var in modern code** - Causes scope confusion
4. **Accessing variables before initialization** - TDZ error with let/const
5. **Not understanding block vs function scope** - Major source of bugs

---

## 📊 Statistics

- **Total Files**: 17+ JavaScript lessons
- **Total Lines of Code**: 1000+ with comprehensive examples
- **Topics Covered**: Variables, Scope, Hoisting, Functions, Identifiers
- **Examples**: 50+ practical, executable examples
- **Comments**: Extensive inline documentation

---

## ✅ Checklist - What You'll Learn

- [ ] JavaScript basics and syntax
- [ ] Variable declaration with var, let, const
- [ ] Understanding scope (global, function, block)
- [ ] Redeclare vs reassign behavior
- [ ] Hoisting and Temporal Dead Zone
- [ ] Function declaration and expression
- [ ] Closures and scope chains
- [ ] Best practices for modern JavaScript
- [ ] Identifying and avoiding common pitfalls

---

## 🤝 Contributing

Feel free to fork this repository and add more lessons or examples. To contribute:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/new-lesson`)
3. Add your content
4. Commit changes (`git commit -m "Add new lesson on topic"`)
5. Push to branch (`git push origin feature/new-lesson`)
6. Open a Pull Request

---

## 📄 License

This project is open source and available under the MIT License.

---

## 👤 Author

**Prakarsh Bhati**

- GitHub: [@bhatiaprakarsh](https://github.com/bhatiaprakarsh)
- Repository: [LearnPlaywrightTTA](https://github.com/bhatiaprakarsh/LearnPlaywrightTTA)

---

## 🎓 Learning Tips

- **Read code carefully** - Understanding is more important than speed
- **Run examples multiple times** - Try modifying them to see what happens
- **Use console.log()** - Debug and understand code behavior
- **Write your own examples** - Reinforce learning through practice
- **Reference the guides** - Use `09_var_let_const.js` when unsure
- **Ask questions** - Research and find answers in MDN docs

---

## 📞 Support

If you have questions or issues:

1. Check the relevant JavaScript file comments
2. Review MDN documentation
3. Open an issue on GitHub
4. Reference the examples in the repository

---

## 🌟 Highlights

⭐ **Must-Read Files:**

- `09_var_let_const.js` - Comprehensive guide with 200+ lines of examples
- `16_Hoisting.js` - Understanding how JavaScript handles variable hoisting
- `10_functions.js` - Function concepts and patterns

---

**Happy Learning! 🚀**

Last Updated: July 9, 2026
