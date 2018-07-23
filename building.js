function cogBuilding() {
  var toontownCentralSublocation = document.getElementById("toontownCentralLocation").value;
  var boatyardSublocation = document.getElementById("barnacleBoatyardLocation").value;
  var oldeToontowneSublocation = document.getElementById("yeOldeToontowneLocation").value;
  var mainLocation = document.getElementById("location").value;

  var buildingFloors = document.getElementById("buildingFloors");
  var cogType = document.getElementById("cogBuildingType");

  switch (mainLocation) {
    case "toontownCentral":
      if (toontownCentralSublocation != "Derrickman") {
        buildingFloors.hidden = false;
        cogType.hidden = false;
      } else {
        buildingFloors.hidden = true;
        cogType.hidden = true;
      }
    break;
    case "barnacleBoatyard":
      if (boatyardSublocation != "directoroflandacquisition") {
        buildingFloors.hidden = false;
        cogType.hidden = false;
      } else {
        buildingFloors.hidden = true;
        cogType.hidden = true;
      }
    break;
    case "yeOldeToontowne":
      if (oldeToontowneSublocation != "directorofpublicrelations") {
        buildingFloors.hidden = false;
        cogType.hidden = false;
      } else {
        buildingFloors.hidden = true;
        cogType.hidden = true;
      }
    break;
    default:
      buildingFloors.hidden = false;
      cogType.hidden = false;
  }
}