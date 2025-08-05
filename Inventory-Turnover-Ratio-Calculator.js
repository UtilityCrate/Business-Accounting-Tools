
function calculateInventoryTurnover() {
  const cogs = parseFloat(document.getElementById("costOfGoodsSold").value);
  const avgInventory = parseFloat(document.getElementById("averageInventory").value);
  const result = document.getElementById("inventoryTurnoverResult");

  if (isNaN(cogs) || isNaN(avgInventory) || avgInventory === 0) {
    result.innerHTML = `<p class="text-red-600">Please enter valid values. Average Inventory cannot be zero.</p>`;
    return;
  }

  const ratio = cogs / avgInventory;
  result.innerHTML = `<p>Inventory Turnover Ratio = <strong>${ratio.toFixed(2)}</strong></p>`;
}

