const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const imagesContainer = document.querySelector(".images-container");
const imagesTriangle = document.querySelector(".img-triangle");
const image = document.querySelectorAll("img");
const images = document.querySelectorAll(".call");
const firstOne = document.getElementById("firstOne");
const secondOne = document.getElementById("secondOne");
const computerContribution = document.querySelector(".computerContribution");
const computerImage = document.querySelector(".computerImage");
const rules = document.querySelector(".rules");
const rulesvg = document.querySelector(".rulesvg");
const close = document.querySelector(".close");

const countValue = document.getElementById("countValue");

close.addEventListener("click", () => {
  rulesvg.classList.add("invisible");
});
// Retrieve countValue from local storage
const savedCountValue = localStorage.getItem("countValue");

if (savedCountValue) {
  countValue.innerText = savedCountValue;
}

let computerChoice;

rules.addEventListener("click", () => {
  rulesvg.style.visibility = "visible";
  close.style.visibility = "visible";
});
close.addEventListener("click", () => {
  rulesvg.style.visibility = "hidden";
});

const arrayMethod = ["You win", "You lose", "It's a tie"];

rock.addEventListener("click", () => {
  const computerChoiceNum = Math.floor(Math.random() * 3) + 1;
  const img = document.createElement("img");

  // adding winning or losing option

  if (computerChoiceNum === 1) {
    const drawText = document.createElement("h1");
    const rockButton = document.createElement("button");
    rockButton.innerText = "PLAY AGAIN";
    rockButton.className = "rockbtn";
    drawText.textContent = arrayMethod[2];
    countValue.innerText = countValue.innerText;
    drawText.className = "drawtext";

    computerContribution.append(drawText, rockButton);
    rules.style.marginTop = "280px";

    const rockbtn = document.querySelector(".rockbtn");

    rockbtn.addEventListener("click", () => {
      location.reload();
    });
  } else if (computerChoiceNum === 2) {
    const drawText = document.createElement("h1");
    const rockButton = document.createElement("button");
    rockButton.innerText = "PLAY AGAIN";
    rockButton.style.marginLeft = "-65px";
    rockButton.className = "rockbtn";
    drawText.textContent = arrayMethod[1];
    drawText.className = "drawtext";
    drawText.style.marginLeft = "-48px";
    computerContribution.append(drawText, rockButton);
    rules.style.marginTop = "280px";

    const rockbtn = document.querySelector(".rockbtn");
    // rockbtn.style.marginLeft = "-300px";
    rockbtn.addEventListener("click", () => {
      location.reload();
    });
  } else if (computerChoiceNum === 3) {
    const drawText = document.createElement("h1");

    const rockButton = document.createElement("button");

    rockButton.innerText = "PLAY AGAIN";

    rockButton.className = "rockbtn";

    // const countIncrement = countValue.innerText++;
    drawText.style.marginLeft = "118px";

    rockButton.style.marginLeft = "118px";
    // localStorage.setItem(countValue, countValue);

    countValue.innerText = parseInt(countValue.innerText) + 1;
    localStorage.setItem("countValue", countValue.innerText);

    drawText.textContent = arrayMethod[0];

    drawText.className = "drawtext";

    computerContribution.append(drawText, rockButton);

    rules.style.marginTop = "200px";

    const rockbtn = document.querySelector(".rockbtn");

    rockbtn.addEventListener("click", () => {
      location.reload();
    });
  }

  if (computerChoiceNum === 1) {
    computerChoice = "rock";
  } else if (computerChoiceNum === 2) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissors";
  }

  scissors.style.display = "none";

  paper.style.display = "none";

  imagesTriangle.style.display = "none";

  rock.style.marginTop = "200px";

  rock.style.marginLeft = "-80px";

  firstOne.textContent = "You picked";

  firstOne.style.marginTop = "-400px";

  firstOne.style.marginLeft = "20px";

  secondOne.textContent = "The house picked";

  secondOne.style.marginLeft = "150px";

  secondOne.style.marginTop = "-25px";

  console.log(computerChoiceNum, computerChoice);

  computerImage.classList.add(`${computerChoice}`);

  computerImage.src = `${computerChoice}.svg`;

  computerContribution.style.marginTop = "170px";

  if (computerChoice === "rock") {
    computerContribution.style.marginTop = "-100px";
    computerContribution.style.marginLeft = "100px";
    firstOne.style.marginTop = "-90px";
    firstOne.style.marginLeft = "-85px";

    secondOne.style.transform = "translateX(-80px)";
    secondOne.style.whiteSpace = "nowrap";
  } else if (computerChoice === "paper") {
    computerContribution.style.marginTop = "-28px";
    computerContribution.style.marginLeft = "160px";
    firstOne.style.marginTop = "-190px";
    firstOne.style.marginLeft = "-130px";
    secondOne.style.marginLeft = "-15px";
  }
});

// adding event listeners for scissors

scissors.addEventListener("click", () => {
  const computerChoiceNum = Math.floor(Math.random() * 3) + 1;
  const img = document.createElement("img");

  if (computerChoiceNum === 1) {
    computerChoice = "rock";
  } else if (computerChoiceNum === 2) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissors";
  }

  scissors.style.display = "block";
  paper.style.display = "none";
  rock.style.display = "none";
  imagesTriangle.style.display = "none";
  scissors.style.marginTop = "450px";
  scissors.style.marginLeft = "-170px";
  firstOne.textContent = "You picked";
  firstOne.style.marginTop = "-400px";
  firstOne.style.marginLeft = "20px";
  secondOne.textContent = "The house picked";
  secondOne.style.marginLeft = "160px";
  secondOne.style.marginTop = "-25px";
  console.log(computerChoiceNum, computerChoice);
  computerImage.classList.add(`${computerChoice}`);
  computerImage.src = `${computerChoice}.svg`;
  computerContribution.style.marginTop = "-100px";

  if (computerChoice === "rock") {
    computerContribution.style.marginTop = "-370px";
    computerContribution.style.marginLeft = "100px";
    firstOne.style.marginTop = "-140px";
    firstOne.style.marginLeft = "-85px";
    secondOne.style.transform = "translateX(-90px)";
    secondOne.style.whiteSpace = "nowrap";
  } else if (computerChoice === "paper") {
    firstOne.style.marginTop = "-190px";
    firstOne.style.marginLeft = "-145px";
    computerContribution.style.marginTop = "-300px";
    computerContribution.style.marginLeft = "170px";
    secondOne.style.transform = "translateX(-170px)";
    secondOne.style.whiteSpace = "nowrap";
  }
  // adding scissors values
  if (computerChoiceNum === 1) {
    const drawText = document.createElement("h1");
    const rockButton = document.createElement("button");
    rockButton.innerText = "PLAY AGAIN";
    rockButton.className = "rockbtn";
    drawText.textContent = arrayMethod[1];
    countValue.innerText = countValue.innerText;
    drawText.className = "drawtext";

    computerContribution.append(drawText, rockButton);
    rules.style.marginTop = "280px";

    const rockbtn = document.querySelector(".rockbtn");

    rockbtn.addEventListener("click", () => {
      location.reload();
    });
  } else if (computerChoiceNum === 2) {
    const drawText = document.createElement("h1");
    const rockButton = document.createElement("button");
    rockButton.innerText = "PLAY AGAIN";
    rockButton.style.marginLeft = "-65px";
    rockButton.className = "rockbtn";
    drawText.textContent = arrayMethod[0];
    drawText.className = "drawtext";
    // drawText.style.marginTop = "170px";
    drawText.style.marginLeft = "-62px";
    computerContribution.append(drawText, rockButton);
    rules.style.marginTop = "280px";

    countValue.innerText = parseInt(countValue.innerText) + 1;
    localStorage.setItem("countValue", countValue.innerText);

    const rockbtn = document.querySelector(".rockbtn");

    rockbtn.addEventListener("click", () => {
      location.reload();
    });
  } else if (computerChoiceNum === 3) {
    const drawText = document.createElement("h1");

    const rockButton = document.createElement("button");

    rockButton.innerText = "PLAY AGAIN";

    rockButton.className = "rockbtn";

    drawText.style.marginLeft = "118px";

    rockButton.style.marginLeft = "118px";

    drawText.textContent = arrayMethod[2];

    drawText.className = "drawtext";

    computerContribution.append(drawText, rockButton);

    rules.style.marginTop = "200px";

    const rockbtn = document.querySelector(".rockbtn");

    rockbtn.addEventListener("click", () => {
      location.reload();
    });
  }
});

// adding event listeners for paper

paper.addEventListener("click", () => {
  const computerChoiceNum = Math.floor(Math.random() * 3) + 1;
  const img = document.createElement("img");

  // adding winning or losing option

  if (computerChoiceNum === 1) {
    const drawText = document.createElement("h1");
    const rockButton = document.createElement("button");
    rockButton.innerText = "PLAY AGAIN";
    rockButton.className = "rockbtn";

    countValue.innerText = countValue.innerText;
    drawText.className = "drawtext";

    computerContribution.append(drawText, rockButton);
    rules.style.marginTop = "280px";
    drawText.textContent = arrayMethod[0];

    drawText.style.marginTop = "30px";
    drawText.style.marginLeft = "28px";
    const rockbtn = document.querySelector(".rockbtn");

    countValue.innerText = parseInt(countValue.innerText) + 1;
    localStorage.setItem("countValue", countValue.innerText);

    rockButton.style.marginLeft = "5px";

    rockbtn.addEventListener("click", () => {
      location.reload();
    });
  } else if (computerChoiceNum === 2) {
    const drawText = document.createElement("h1");
    const rockButton = document.createElement("button");
    rockButton.innerText = "PLAY AGAIN";
    rockButton.style.marginLeft = "-65px";
    rockButton.className = "rockbtn";

    drawText.className = "drawtext";
    drawText.textContent = arrayMethod[2];

    drawText.style.marginTop = "30px";
    drawText.style.marginLeft = "-60px";

    computerContribution.append(drawText, rockButton);
    rules.style.marginTop = "300px";

    const rockbtn = document.querySelector(".rockbtn");

    rockbtn.addEventListener("click", () => {
      location.reload();
    });
  } else if (computerChoiceNum === 3) {
    const drawText = document.createElement("h1");

    const rockButton = document.createElement("button");

    rockButton.innerText = "PLAY AGAIN";

    rockButton.className = "rockbtn";

    // const countIncrement = countValue.innerText++;

    rockButton.style.marginLeft = "98px";
    // localStorage.setItem(countValue, countValue);

    drawText.textContent = arrayMethod[1];

    drawText.className = "drawtext";

    drawText.style.marginLeft = "90px";
    computerContribution.append(drawText, rockButton);

    rules.style.marginTop = "200px";

    const rockbtn = document.querySelector(".rockbtn");

    rockbtn.addEventListener("click", () => {
      location.reload();
    });
  }

  if (computerChoiceNum === 1) {
    computerChoice = "rock";
  } else if (computerChoiceNum === 2) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissors";
  }

  scissors.style.display = "none";

  rock.style.display = "none";

  imagesTriangle.style.display = "none";

  firstOne.textContent = "You picked";

  firstOne.style.marginTop = "-400px";

  firstOne.style.marginLeft = "20px";

  secondOne.textContent = "The house picked";

  secondOne.style.marginLeft = "150px";

  secondOne.style.marginTop = "-25px";

  paper.style.marginTop = "250px";
  paper.style.marginBottom = "-25px";
  paper.style.marginLeft = "10px";

  firstOne.textContent = "You picked";

  firstOne.style.marginTop = "-400px";

  firstOne.style.marginLeft = "20px";

  secondOne.textContent = "The house picked";

  secondOne.style.marginLeft = "150px";

  secondOne.style.marginTop = "-25px";
  console.log(computerChoiceNum, computerChoice);

  computerImage.classList.add(`${computerChoice}`);

  computerImage.src = `${computerChoice}.svg`;

  computerContribution.style.marginTop = "170px";

  if (computerChoice === "rock") {
    computerContribution.style.marginTop = "-160px";
    computerContribution.style.marginLeft = "100px";
    firstOne.style.marginTop = "-120px";
    firstOne.style.marginLeft = "-85px";
    secondOne.style.transform = "translateX(-80px)";
    // secondOne.style.marginBottom = "-25px";
    secondOne.style.whiteSpace = "nowrap";
  } else if (computerChoice === "paper") {
    computerContribution.style.marginTop = "-100px";
    computerContribution.style.marginLeft = "160px";
    firstOne.style.marginTop = "-190px";
    firstOne.style.marginLeft = "-130px";
    secondOne.style.marginLeft = "-15px";
  } else if (computerChoice === "scissors") {
    computerContribution.style.marginTop = "130px";
    computerContribution.style.marginLeft = "20px";
    firstOne.style.marginTop = "-390px";
    firstOne.style.marginLeft = "-10px";
    secondOne.style.marginLeft = "145px";
  }
});
