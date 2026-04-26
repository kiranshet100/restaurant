/**
 * Calculates the sum of `price` properties for all items in an array.
 * @param {Array<Object>} items - An array of item objects. Each object must have a `price` property of type `number`.
 * @returns {number} The total sum of prices.
 */
function calculateTotal(items) {
    return items.reduce((sum, item) => sum + item.price, 0)
  }
/**
 * Filters an array of item objects, returning only those that match a given category.
 * @param {Array<Object>} items - An array of item objects. Each object must have a `category` property of type `string`.
 * @param {string} category - The category string to filter by.
 * @returns {Array<Object>} A new array containing only items that match the specified category.
 */
  function filterByCategory(items, category) {
    return items.filter(item => item.category === category)
  }

/**
 * Formats a numerical amount into a currency string, prefixed with '$' and fixed to two decimal places.
 * @param {number} amount - The numerical amount to format.
 * @returns {string} The formatted price string (e.g., "$12.34").
 */
  function formatPrice(amount) {
    return '$' + amount.toFixed(2)
  }

/**
 * Retrieves a limited number of items, sorted by their `popularity` in descending order.
 * @param {Array<Object>} items - An array of item objects. Each object must have a `popularity` property of type `number`.
 * @param {number} limit - The maximum number of top items to return.
 * @returns {Array<Object>} A new array containing the `limit` most popular items, sorted in descending order of popularity.
 */
  function getTopItems(items, limit) {
    return items.sort((a, b) => b.popularity - a.popularity).slice(0, limit)
  }