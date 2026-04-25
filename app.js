/**
 * Calculates the total price of a list of items.
 * @param {Array<Object>} items - An array of item objects, each with a `price` property.
 * @returns {number} The total sum of prices.
 */
function calculateTotal(items) {
    return items.reduce((sum, item) => sum + item.price, 0)
  }

/**
 * Filters a list of items by a specified category.
 * @param {Array<Object>} items - An array of item objects, each with a `category` property.
 * @param {string} category - The category to filter by.
 * @returns {Array<Object>} A new array containing only items that match the category.
 */
  function filterByCategory(items, category) {
    return items.filter(item => item.category === category)
  }

/**
 * Formats a numerical amount into a currency string with two decimal places.
 * @param {number} amount - The numerical amount to format.
 * @returns {string} The formatted price string (e.g., "$12.34").
 */
  function formatPrice(amount) {
    return '$' + amount.toFixed(2)
  }

/**
 * Retrieves a specified number of top items based on their popularity.
 * @param {Array<Object>} items - An array of item objects, each with a `popularity` property.
 * @param {number} limit - The maximum number of top items to return.
 * @returns {Array<Object>} A new array containing the top items, sorted by popularity in descending order.
 */
  function getTopItems(items, limit) {
    return items.sort((a, b) => b.popularity - a.popularity).slice(0, limit)
  }