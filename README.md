# 🧪 UI & API Automation Testing

## 📖 Project Overview
This repository contains automated tests for both the UI and API parts of a web application.  
Tests are written using **Cypress** and cover key scenarios.

---

## 📂 Project Structure

```
📦 your-repo/
 ├── 📂 cypress/
 │   ├── 📂 e2e/               # Contains all test files (UI & API tests)
 │   ├── 📂 fixtures/           # Test data (JSON files)
 │   ├── 📂 pageObjects/        # Page Object Models (POM)
 │   ├── 📂 constants/          # Constants like error messages
 │   ├── 📂 support/            # Custom commands and global configurations
```
## 🚀 Setup & Execution Instructions

## 🛠 **Prerequisites**
Before running the tests, ensure you have the following installed:

- **Node.js** (v14 or higher) → [Download Node.js](https://nodejs.org/)
- **npm** (comes with Node.js)

---

### 1️⃣ **Clone the Repository**
To start, clone this repository to your local machine:

git clone https://github.com/your-org/your-repo.git -> cd your-repo
### 2️⃣ **Install cypress**
Run this command in the clonned repository - npx install cypress --save-dev

### 3️⃣ **Install Dependencies**
Run this command in the clonned repository - npm install

### 4️⃣ **Run the tests via UI**
Run the command - npx cypress open -> select e2e testing -> select browser -> select any test

### 5️⃣ **Run the tests in the Headless Mode**
Run the command - npx cypress run

---

## 🔍 Test Coverage

- **UI Tests**: Verifies user interactions like login, adding items to the cart, and navigating the application.
- **API Tests**: Validates API endpoints like creating posts, fetching posts, updating posts, and deleting posts.


