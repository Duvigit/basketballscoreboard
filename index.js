const scoreBoardHome = document.getElementById("numfirst");
const scoreBoardGuest = document.getElementById("numsecond");
let teamHome = 0;
let teamGuest = 0;

console.log(scoreBoardHome, scoreBoardGuest);

document.addEventListener("click", (event) => {
  if (event.target.parentElement.id === "buttonshome") {
    addPointsHome(event.target.textContent);
  } else {
    addPointsGuest(event.target.textContent);
  }
});

function addPointsHome(points) {
  if (points === "+1") {
    teamHome++;
  } else if (points === "+2") {
    teamHome += 2;
  } else {
    teamHome += 3;
  }
  scoreBoardHome.innerText = teamHome;
}

function addPointsGuest(points) {
  if (points === "+1") {
    teamGuest++;
  } else if (points === "+2") {
    teamGuest += 2;
  } else {
    teamGuest += 3;
  }
  scoreBoardGuest.innerText = teamGuest;
}
