function subLocation() {
  var location = document.getElementById("location").value;
  
  // RESETS THE GROUP SIZE TO 1-3
  document.getElementById("bossNumber1").hidden = true;
  document.getElementById("bossNumber2").hidden = true;
  document.getElementById("bossNumber3").hidden = true;
  document.getElementById("bossNumber4").hidden = true;
  // HIDING THE BUILDING FLOORS AT THE START
  document.getElementById("buildingFloors").hidden = true;

  // SWITCH STATEMENT THAT HIDES AND REVEALS SUBLOCATIONS FOR EACH HQ
  switch (location) {
    case "sellbotHQ":
    // setting each element to true where needed so all 4 don't eventually show up
    document.getElementById("sellbotLocation").hidden = false;
    document.getElementById("cashbotLocation").hidden = true;
    document.getElementById("lawbotLocation").hidden = true;
    document.getElementById("bossbotLocation").hidden = true;
    document.getElementById("toontownCentralLocation").hidden = true;
    document.getElementById("barnacleBoatyardLocation").hidden = true;
    document.getElementById("yeOldeToontowneLocation").hidden = true;
    document.getElementById("daffodilLocation").hidden = true;
    document.getElementById("mezzoLocation").hidden = true;
    document.getElementById("brghLocation").hidden = true;
    document.getElementById("acornLocation").hidden = true;
    document.getElementById("drowsyLocation").hidden = true;
    document.getElementById("buildingFloors").hidden = true;
    document.getElementById("cogBuildingType").hidden = true;
    break;
    case "cashbotHQ":
    document.getElementById("sellbotLocation").hidden = true;
    document.getElementById("cashbotLocation").hidden = false;
    document.getElementById("lawbotLocation").hidden = true;
    document.getElementById("bossbotLocation").hidden = true;
    document.getElementById("toontownCentralLocation").hidden = true;
    document.getElementById("barnacleBoatyardLocation").hidden = true;
    document.getElementById("yeOldeToontowneLocation").hidden = true;
    document.getElementById("daffodilLocation").hidden = true;
    document.getElementById("mezzoLocation").hidden = true;
    document.getElementById("brghLocation").hidden = true;
    document.getElementById("acornLocation").hidden = true;
    document.getElementById("drowsyLocation").hidden = true;
    document.getElementById("buildingFloors").hidden = true;
    document.getElementById("cogBuildingType").hidden = true;
    break;
    case "lawbotHQ":
    document.getElementById("sellbotLocation").hidden = true;
    document.getElementById("cashbotLocation").hidden = true;
    document.getElementById("lawbotLocation").hidden = false;
    document.getElementById("bossbotLocation").hidden = true;
    document.getElementById("toontownCentralLocation").hidden = true;
    document.getElementById("barnacleBoatyardLocation").hidden = true;
    document.getElementById("yeOldeToontowneLocation").hidden = true;
    document.getElementById("daffodilLocation").hidden = true;
    document.getElementById("mezzoLocation").hidden = true;
    document.getElementById("brghLocation").hidden = true;
    document.getElementById("acornLocation").hidden = true;
    document.getElementById("drowsyLocation").hidden = true;
    document.getElementById("buildingFloors").hidden = true;
    document.getElementById("cogBuildingType").hidden = true;
    break;
    case "bossbotHQ":
    document.getElementById("sellbotLocation").hidden = true;
    document.getElementById("cashbotLocation").hidden = true;
    document.getElementById("lawbotLocation").hidden = true;
    document.getElementById("bossbotLocation").hidden = false;
    document.getElementById("toontownCentralLocation").hidden = true;
    document.getElementById("barnacleBoatyardLocation").hidden = true;
    document.getElementById("yeOldeToontowneLocation").hidden = true;
    document.getElementById("daffodilLocation").hidden = true;
    document.getElementById("mezzoLocation").hidden = true;
    document.getElementById("brghLocation").hidden = true;
    document.getElementById("acornLocation").hidden = true;
    document.getElementById("drowsyLocation").hidden = true;
    document.getElementById("buildingFloors").hidden = true;
    document.getElementById("cogBuildingType").hidden = true;
    break;
    case "toontownCentral":
    document.getElementById("sellbotLocation").hidden = true;
    document.getElementById("cashbotLocation").hidden = true;
    document.getElementById("lawbotLocation").hidden = true;
    document.getElementById("bossbotLocation").hidden = true;
    document.getElementById("toontownCentralLocation").hidden = false;
    document.getElementById("barnacleBoatyardLocation").hidden = true;
    document.getElementById("yeOldeToontowneLocation").hidden = true;
    document.getElementById("daffodilLocation").hidden = true;
    document.getElementById("mezzoLocation").hidden = true;
    document.getElementById("brghLocation").hidden = true;
    document.getElementById("acornLocation").hidden = true;
    document.getElementById("drowsyLocation").hidden = true;
    document.getElementById("buildingFloors").hidden = false;
    document.getElementById("cogBuildingType").hidden = false;

    break;
    case "barnacleBoatyard":
    document.getElementById("sellbotLocation").hidden = true;
    document.getElementById("cashbotLocation").hidden = true;
    document.getElementById("lawbotLocation").hidden = true;
    document.getElementById("bossbotLocation").hidden = true;
    document.getElementById("toontownCentralLocation").hidden = true;
    document.getElementById("barnacleBoatyardLocation").hidden = false;
    document.getElementById("yeOldeToontowneLocation").hidden = true;
    document.getElementById("daffodilLocation").hidden = true;
    document.getElementById("mezzoLocation").hidden = true;
    document.getElementById("brghLocation").hidden = true;
    document.getElementById("acornLocation").hidden = true;
    document.getElementById("drowsyLocation").hidden = true;
    document.getElementById("buildingFloors").hidden = false;
    document.getElementById("cogBuildingType").hidden = false;
    break;
    case "yeOldeToontowne":
    document.getElementById("sellbotLocation").hidden = true;
    document.getElementById("cashbotLocation").hidden = true;
    document.getElementById("lawbotLocation").hidden = true;
    document.getElementById("bossbotLocation").hidden = true;
    document.getElementById("toontownCentralLocation").hidden = true;
    document.getElementById("barnacleBoatyardLocation").hidden = true;
    document.getElementById("yeOldeToontowneLocation").hidden = false;
    document.getElementById("daffodilLocation").hidden = true;
    document.getElementById("mezzoLocation").hidden = true;
    document.getElementById("brghLocation").hidden = true;
    document.getElementById("acornLocation").hidden = true;
    document.getElementById("drowsyLocation").hidden = true;
    document.getElementById("buildingFloors").hidden = false;
    document.getElementById("cogBuildingType").hidden = false;
    break;
    case "daffodilGardens":
    document.getElementById("sellbotLocation").hidden = true;
    document.getElementById("cashbotLocation").hidden = true;
    document.getElementById("lawbotLocation").hidden = true;
    document.getElementById("bossbotLocation").hidden = true;
    document.getElementById("toontownCentralLocation").hidden = true;
    document.getElementById("barnacleBoatyardLocation").hidden = true;
    document.getElementById("yeOldeToontowneLocation").hidden = true;
    document.getElementById("daffodilLocation").hidden = false;
    document.getElementById("mezzoLocation").hidden = true;
    document.getElementById("brghLocation").hidden = true;
    document.getElementById("acornLocation").hidden = true;
    document.getElementById("drowsyLocation").hidden = true;
    document.getElementById("buildingFloors").hidden = false;
    document.getElementById("cogBuildingType").hidden = false;
    break;
    case "mezzoMelodyland":
    document.getElementById("sellbotLocation").hidden = true;
    document.getElementById("cashbotLocation").hidden = true;
    document.getElementById("lawbotLocation").hidden = true;
    document.getElementById("bossbotLocation").hidden = true;
    document.getElementById("toontownCentralLocation").hidden = true;
    document.getElementById("barnacleBoatyardLocation").hidden = true;
    document.getElementById("yeOldeToontowneLocation").hidden = true;
    document.getElementById("daffodilLocation").hidden = true;
    document.getElementById("mezzoLocation").hidden = false;
    document.getElementById("brghLocation").hidden = true;
    document.getElementById("acornLocation").hidden = true;
    document.getElementById("drowsyLocation").hidden = true;
    document.getElementById("buildingFloors").hidden = false;
    document.getElementById("cogBuildingType").hidden = false;
    break;
    case "brgh":
    document.getElementById("sellbotLocation").hidden = true;
    document.getElementById("cashbotLocation").hidden = true;
    document.getElementById("lawbotLocation").hidden = true;
    document.getElementById("bossbotLocation").hidden = true;
    document.getElementById("toontownCentralLocation").hidden = true;
    document.getElementById("barnacleBoatyardLocation").hidden = true;
    document.getElementById("yeOldeToontowneLocation").hidden = true;
    document.getElementById("daffodilLocation").hidden = true;
    document.getElementById("mezzoLocation").hidden = true;
    document.getElementById("brghLocation").hidden = false;
    document.getElementById("acornLocation").hidden = true;
    document.getElementById("drowsyLocation").hidden = true;
    document.getElementById("buildingFloors").hidden = false;
    document.getElementById("cogBuildingType").hidden = false;
    break;
    case "acornAcres":
    document.getElementById("sellbotLocation").hidden = true;
    document.getElementById("cashbotLocation").hidden = true;
    document.getElementById("lawbotLocation").hidden = true;
    document.getElementById("bossbotLocation").hidden = true;
    document.getElementById("toontownCentralLocation").hidden = true;
    document.getElementById("barnacleBoatyardLocation").hidden = true;
    document.getElementById("yeOldeToontowneLocation").hidden = true;
    document.getElementById("daffodilLocation").hidden = true;
    document.getElementById("mezzoLocation").hidden = true;
    document.getElementById("brghLocation").hidden = true;
    document.getElementById("acornLocation").hidden = false;
    document.getElementById("drowsyLocation").hidden = true;
    document.getElementById("buildingFloors").hidden = false;
    document.getElementById("cogBuildingType").hidden = false;
    break;
    case "drowsyDreamland":
    document.getElementById("sellbotLocation").hidden = true;
    document.getElementById("cashbotLocation").hidden = true;
    document.getElementById("lawbotLocation").hidden = true;
    document.getElementById("bossbotLocation").hidden = true;
    document.getElementById("toontownCentralLocation").hidden = true;
    document.getElementById("barnacleBoatyardLocation").hidden = true;
    document.getElementById("yeOldeToontowneLocation").hidden = true;
    document.getElementById("daffodilLocation").hidden = true;
    document.getElementById("mezzoLocation").hidden = true;
    document.getElementById("brghLocation").hidden = true;
    document.getElementById("acornLocation").hidden = true;
    document.getElementById("drowsyLocation").hidden = false;
    document.getElementById("buildingFloors").hidden = false;
    document.getElementById("cogBuildingType").hidden = false;
    break;
    default:
    document.getElementById("sellbotLocation").hidden = true;
    document.getElementById("cashbotLocation").hidden = true;
    document.getElementById("lawbotLocation").hidden = true;
    document.getElementById("bossbotLocation").hidden = true;
    document.getElementById("toontownCentralLocation").hidden = true;
    document.getElementById("barnacleBoatyardLocation").hidden = true;
    document.getElementById("yeOldeToontowneLocation").hidden = true;
    document.getElementById("daffodilLocation").hidden = true;
    document.getElementById("mezzoLocation").hidden = true;
    document.getElementById("brghLocation").hidden = true;
    document.getElementById("acornLocation").hidden = true;
    document.getElementById("buildingFloors").hidden = true;
    document.getElementById("drowsyLocation").hidden = true;
    document.getElementById("cogBuildingType").hidden = false;
  }
}
