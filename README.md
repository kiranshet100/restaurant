# Restaurant
A foundational set of JavaScript utilities for restaurant data operations.

[![GitHub license](https://img.shields.io/github/license/kiranshet100/restaurant)](https://github.com/kiranshet100/restaurant/blob/main/LICENSE)
[![GitHub Workflow Status (main)](https://img.shields.io/github/actions/workflow/status/kiranshet100/restaurant/main.yml?branch=main)](https://github.com/kiranshet100/restaurant/actions?query=branch%3Amain)
[![GitHub package.json version](https://img.shields.io/github/package-json/v/kiranshet100/restaurant)](https://github.com/kiranshet100/restaurant/package.json)

Restaurant is a robust and intuitive application designed to streamline various aspects of restaurant management. It aims to simplify daily operations, from order processing to inventory tracking, helping restaurant owners and staff enhance efficiency and customer satisfaction. This system is tailored for small to medium-sized restaurants looking for a comprehensive digital solution.

## Key Features
-   **Item Price Aggregation:** Efficiently calculates the total price for a collection of menu items or order components.
-   **Category-Based Item Filtering:** Organizes and retrieves menu items by specific categories for easier management and display.
-   **Standardized Price Formatting:** Ensures all monetary amounts are displayed consistently and legibly (e.g., "$12.34").
-   **Popularity Ranking:** Identifies and returns top-performing menu items based on a given popularity metric, useful for analytics.

## Installation

To get the core Restaurant utilities up and running on your local machine, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/kiranshet100/restaurant.git
    cd restaurant
    ```

2.  **Install dependencies:**
    This project is assumed to use Node.js and npm for dependency management.
    ```bash
    npm install
    ```

## Usage

The `restaurant` package provides a set of utility functions for common restaurant data operations. You can import and use them in your JavaScript project:

```javascript
// Import the utility functions
const { calculateTotal, filterByCategory, formatPrice, getTopItems } = require('./app');

// Example data representing menu items or inventory
const menuItems = [
  { name: 'Classic Burger', category: 'Main', price: 12.50, popularity: 5 },
  { name: 'French Fries', category: 'Side', price: 3.00, popularity: 4 },
  { name: 'Coca-Cola', category: 'Drink', price: 2.00, popularity: 3 },
  { name: 'Pepperoni Pizza', category: 'Main', price: 15.75, popularity: 6 },
  { name: 'Caesar Salad', category: 'Appetizer', price: 8.25, popularity: 2 },
];

// 1. Calculate the total price for a selection of items
const orderItems = [menuItems[0], menuItems[1], menuItems[2]]; // Burger, Fries, Coke
const orderTotal = calculateTotal(orderItems);
console.log(`Current Order Total: ${formatPrice(orderTotal)}`); 
// Expected output: Current Order Total: $17.50

// 2. Filter menu items by a specific category
const mainDishes = filterByCategory(menuItems, 'Main');
console.log('Available Main Dishes:', mainDishes.map(item => item.name));
// Expected output: Available Main Dishes: [ 'Classic Burger', 'Pepperoni Pizza' ]

// 3. Get the top N popular items
const topSellingItems = getTopItems(menuItems, 2);
console.log('Top Selling Items:', topSellingItems.map(item => item.name));
// Expected output: Top Selling Items: [ 'Pepperoni Pizza', 'Classic Burger' ]

// 4. Format a numerical amount into a currency string
const rawAmount = 25.5;
console.log(`Formatted Price: ${formatPrice(rawAmount)}`);
// Expected output: Formatted Price: $25.50
```

## How It Works

The Restaurant project's core functionality is built upon a concise set of JavaScript utility functions:

-   **Pure JavaScript Functions:** Core functionalities are implemented as independent, pure JavaScript utility functions, ensuring predictable and testable behavior.
-   **Modular Design:** Designed for reusability, these functions can be easily integrated into larger applications or specific modules without tight coupling.
-   **Core Data Primitives:** Focuses on foundational data manipulation tasks such as aggregation, filtering, and formatting of item data.
-   **No External Dependencies:** The primary utility functions operate standalone without relying on external libraries or frameworks for their core logic.

## Contributing

We welcome contributions to the Restaurant project! If you'd like to contribute, please follow these steps:

1.  **Fork** the repository on GitHub.
2.  **Clone** your forked repository to your local machine.
    ```bash
    git clone https://github.com/your-username/restaurant.git
    cd restaurant
    ```
3.  **Create a new branch** for your feature or bug fix.
    ```bash
    git checkout -b feature/your-feature-name
    ```
4.  **Make your changes** and commit them with clear, concise messages.
5.  **Push** your branch to your forked repository.
    ```bash
    git push origin feature/your-feature-name
    ```
6.  **Open a Pull Request** from your branch to the `main` branch of the original repository.

Please ensure your code adheres to the project's coding standards and includes appropriate tests.

## License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/kiranshet100/restaurant/blob/main/LICENSE) file for details.