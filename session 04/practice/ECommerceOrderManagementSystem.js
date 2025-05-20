/**
 * E-COMMERCE ORDER MANAGEMENT SYSTEM - PRACTICE EXERCISE
 *
 * This file demonstrates:
 * - Object-oriented programming in JavaScript
 * - Custom error handling with error class extension
 * - Product management in an order system
 * - Order calculations including discounts
 * - Array manipulation with find, findIndex, and reduce methods
 * - Try-catch error handling
 */

// QUESTION:
// =========
// E-Commerce Order Management System
//
// Requirements:
// 1. Implement an Order class with properties:
//    - orderId
//    - customerName
//    - products (an array of product objects)
//
// 2. Each product object should have:
//    - productId
//    - name
//    - price
//    - quantity
//
// 3. Implement methods in Order to:
//    - Add a product to the order
//    - Remove a product from the order
//    - Calculate the total order value
//    - Apply a discount (if the total exceeds a certain amount)
//
// 4. Implement a custom error class ProductNotFoundError that is thrown
//    if an attempt is made to remove a product that is not in the order.

/**
 * Custom error class for handling cases when a product is not found
 * Extends the built-in Error class to provide specific error information
 */
class ProductNotFoundError extends Error {
  /**
   * Create a new ProductNotFoundError instance
   *
   * @param {string} message - The error message to display
   */
  constructor(message) {
    // Call the parent Error constructor with the provided message
    super(message);
    // Set the name property to identify the type of error
    this.name = "ProductNotFoundError";
  }
}

/**
 * Order class representing a customer order in an e-commerce system
 * Manages the product collection and order calculations
 */
class Order {
  /**
   * Create a new Order instance
   *
   * @param {string|number} orderId - Unique identifier for the order
   * @param {string} customerName - Name of the customer placing the order
   */
  constructor(orderId, customerName) {
    // Initialize the order with an ID and customer name
    this.orderId = orderId;
    this.customerName = customerName;
    // Create an empty array to store product objects
    this.products = [];
  }

  /**
   * Add a product to the order or increment quantity if it already exists
   *
   * @param {Object} product - The product to add with properties: productId, name, price, quantity
   */
  addProduct(product) {
    // Check if the product already exists in the order by matching productId
    const existingProduct = this.products.find(
      (p) => p.productId === product.productId
    );

    // If the product already exists, increase its quantity
    if (existingProduct) {
      existingProduct.quantity += product.quantity;
    } else {
      // Otherwise, add the new product to the products array
      this.products.push(product);
    }

    // Log a confirmation message
    console.log(`Product ${product.name} added to the order.`);
  }

  /**
   * Remove a product from the order by its ID
   * Throws ProductNotFoundError if the product doesn't exist in the order
   *
   * @param {string|number} productId - The ID of the product to remove
   * @throws {ProductNotFoundError} If the product is not found in the order
   */
  removeProduct(productId) {
    // Find the index of the product in the products array
    const index = this.products.findIndex((p) => p.productId === productId);

    // If product isn't found (index is -1), throw the custom error
    if (index === -1) {
      throw new ProductNotFoundError(
        `Product with ID ${productId} not found in order.`
      );
    }

    // Remove the product from the array using splice
    this.products.splice(index, 1);
    // Log a confirmation message
    console.log(`Product with ID ${productId} removed from the order.`);
  }

  /**
   * Calculate the total value of all products in the order
   * Multiplies each product's price by its quantity and sums the results
   *
   * @returns {number} The total order value
   */
  calculateTotal() {
    // Use reduce to sum up the price*quantity for each product
    const total = this.products.reduce((acc, product) => {
      return acc + product.price * product.quantity;
    }, 0);

    // Return the calculated total
    return total;
  }

  /**
   * Apply a percentage discount if the order total exceeds a threshold amount
   *
   * @param {number} threshold - The minimum order value required for the discount to apply
   * @param {number} discountPercentage - The percentage discount to apply (e.g., 10 for 10%)
   * @returns {number} The final order total after any applicable discount
   */
  applyDiscount(threshold, discountPercentage) {
    // Calculate the current order total
    const total = this.calculateTotal();

    // Check if the total exceeds the discount threshold
    if (total > threshold) {
      // Calculate the discount amount based on the percentage
      const discountAmount = (total * discountPercentage) / 100;
      // Log the applied discount amount
      console.log(`Discount applied: $${discountAmount.toFixed(2)}`);
      // Return the discounted total
      return total - discountAmount;
    }

    // If no discount applies, return the original total
    return total;
  }
}

// =====================================================================
// TEST CODE
// =====================================================================
// Create a new order with ID 1 for customer "John Doe"
const order1 = new Order(1, "John Doe");

// Add a laptop product to the order
order1.addProduct({ productId: 101, name: "Laptop", price: 1500, quantity: 1 });
// Add two mouse products to the order
order1.addProduct({ productId: 102, name: "Mouse", price: 50, quantity: 2 });

// Display the total order value before any discount
console.log("Total Before Discount:", order1.calculateTotal());

// Attempt to remove a product that doesn't exist (ID 103)
// This should trigger the custom error handler
try {
  order1.removeProduct(103); // This will throw ProductNotFoundError
} catch (error) {
  // Log the error name and message
  console.log(`${error.name}: ${error.message}`);
}

// Apply a 10% discount if the order total exceeds $1000
// and display the final discounted total
console.log("Total After Discount:", order1.applyDiscount(1000, 10));
