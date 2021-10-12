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
  return materialPrice * pickedAmount - materialPrice * pickedAmount * 0.2;
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

export function calculatePlayerWholeMaterialInMagazine(
  ironOreQunatity,
  ironOreConcentrateQuantity
) {
  return ironOreQunatity + ironOreConcentrateQuantity;
}
