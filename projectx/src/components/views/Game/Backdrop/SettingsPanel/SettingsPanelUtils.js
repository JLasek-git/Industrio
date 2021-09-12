export function calculateProductionCost(
  pickedAmount,
  pickedMachinesAmount,
  singleProductionCost,
  employeeBonuses
) {
  const productionCostRaw =
    pickedAmount * singleProductionCost * pickedMachinesAmount;
  const productionCostWithBonuses =
    productionCostRaw - productionCostRaw * employeeBonuses.productionCostBoost;
  return productionCostWithBonuses;
}

export function calculatePlayerMoneyAfter(wholeProductionCost, playerMoney) {
  return playerMoney - wholeProductionCost;
}

export function calculateMaterialReceived(
  pickedAmount,
  playerReceivedMaterialQuantityInEq,
  playerMachines,
  currentlyPickedMachine,
  playerInfo,
  employeeBonuses
) {
  let materialInEqAfterProduction = 0;
  const playerMaterialRaw = pickedAmount + playerReceivedMaterialQuantityInEq;
  const playerMaterialWithBoost =
    playerMaterialRaw + playerMaterialRaw * employeeBonuses.quantityBoost;
  materialInEqAfterProduction += playerMaterialWithBoost;
  for (let machine in playerMachines) {
    if (
      machine !== "allMachinesQuantity" &&
      machine !== currentlyPickedMachine
    ) {
      materialInEqAfterProduction +=
        playerInfo.equipment.machines[machine].materialFromProduction;
    }
  }
  return materialInEqAfterProduction;
}

export function calculateMaterialUsed(
  pickedAmount,
  playerUsedMaterialEqQuantity
) {
  return playerUsedMaterialEqQuantity - pickedAmount;
}

export function calculateDuration(
  pickedAmount,
  pickedMachinesAmount,
  materialDurability,
  machinePerformance,
  employeeBonuses
) {
  const rawDuration =
    ((materialDurability / machinePerformance) * 1000 * pickedAmount) /
    pickedMachinesAmount;

  const boostedDuration =
    rawDuration - rawDuration * employeeBonuses.productionTimeBoost;
  return boostedDuration;
}

export function calculateReceivedExp(
  pickedAmount,
  materialGivenExperience,
  playerExperience,
  employeeBonuses
) {
  const rawExperience =
    materialGivenExperience * pickedAmount + playerExperience;
  const boostedExperience =
    rawExperience + rawExperience * employeeBonuses.experienceBoost;
  return boostedExperience;
}
