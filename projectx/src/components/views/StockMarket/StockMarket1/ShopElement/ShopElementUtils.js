/* BUYING CALCULATIONS */

export function calculateMaxPlayerCanBuy(playerMoney, materialPrice) {
  return playerMoney / materialPrice;
}

export function calculateBuyingCost(pickedAmount, materialPrice) {
  return materialPrice * pickedAmount;
}

export function calculatePlayerMoneyAfterBuy(buyingCost, playerMoney) {
  return playerMoney - buyingCost;
}

export function calculatePlayerMaterialAfterBuy(
  pickedAmount,
  playerMaterialOwned
) {
  return playerMaterialOwned + pickedAmount;
}

/* SELLING CALCULATIONS */

export function calculateItemsWorth(pickedAmount, materialPrice) {
  return materialPrice * pickedAmount;
}

export function calculatePlayerMoneyAfterSell(sellingItemsWorth, playerMoney) {
  return playerMoney + sellingItemsWorth;
}

export function calculatePlayerMaterialAfterSell(
  pickedAmount,
  playerMaterialOwned
) {
  return playerMaterialOwned - pickedAmount;
}
