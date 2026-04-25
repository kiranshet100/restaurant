function calculateTotal(items) {
    return items.reduce((sum, item) => sum + item.price, 0)
  }

  function filterByCategory(items, category) {
    return items.filter(item => item.category === category)
  }

  function formatPrice(amount) {
    return '$' + amount.toFixed(2)
  }

  function getTopItems(items, limit) {
    return items.sort((a, b) => b.popularity - a.popularity).slice(0, limit)
  }
