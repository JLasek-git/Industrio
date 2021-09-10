export function calculateProductionCost(
  pickedAmount,
  pickedMachinesAmount,
  singleProductionCost
) {
  return pickedAmount * singleProductionCost * pickedMachinesAmount;
}

export function claculatePlayerMoneyAfter(wholeProductionCost, playerMoney) {
  return playerMoney - wholeProductionCost;
}

export function calculateMaterialReceived(
  pickedAmount,
  playerReceivedMaterialQuantityInEq,
  playerMachines,
  currentlyPickedMachine,
  playerInfo
) {
  let materialInEqAfterProduction = 0;
  materialInEqAfterProduction +=
    pickedAmount + playerReceivedMaterialQuantityInEq;
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
  machinePerformance
) {
  return (
    ((materialDurability / machinePerformance) * 1000 * pickedAmount) /
    pickedMachinesAmount
  );
}

export function calculateReceivedExp(
  pickedAmount,
  materialGivenExperience,
  playerExperience
) {
  return materialGivenExperience * pickedAmount + playerExperience;
}
