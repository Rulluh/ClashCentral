// function that changes the group section from 1-3 to 1-7 for cog bosses
function bossGroup(cogHQEntry) {
  if (cogHQEntry == "VP" || cogHQEntry == "CFO" ||
  cogHQEntry == "CJ" || cogHQEntry == "CEO") {
    document.getElementById("bossNumber1").hidden = false;
    document.getElementById("bossNumber2").hidden = false;
    document.getElementById("bossNumber3").hidden = false;
    document.getElementById("bossNumber4").hidden = false;
  } else {
    document.getElementById("bossNumber1").hidden = true;
    document.getElementById("bossNumber2").hidden = true;
    document.getElementById("bossNumber3").hidden = true;
    document.getElementById("bossNumber4").hidden = true;
  }
}