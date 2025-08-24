 // scores start from 0
    let userScore = 0;
    let compScore = 0;

    // main play function
    function play(userChoice) {
      const choices = ["rock", "paper", "scissors"];
      const computerChoice = choices[Math.floor(Math.random() * 3)];

      // show icons for choices
      document.getElementById("userChoice").innerHTML =
        `You chose: <i class="fa-solid ${getIcon(userChoice)}"></i>`;
      document.getElementById("computerChoice").innerHTML =
        `Computer chose: <i class="fa-solid ${getIcon(computerChoice)}"></i>`;

      let result = "";
      let resultClass = "";

      // check win / lose / draw
      if (userChoice === computerChoice) {
        result = "It's a Draw!";
        resultClass = "draw";
      } else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
      ) {
        result = `You Won! ${userChoice} beats ${computerChoice}`;
        resultClass = "win";
        userScore++;
      } else {
        result = `You Lost! ${computerChoice} beats ${userChoice}`;
        resultClass = "lose";
        compScore++;
      }

      // update ui
      document.getElementById("result").innerText = result;
      document.getElementById("result").className = resultClass;
      document.getElementById("userScore").innerText = userScore;
      document.getElementById("compScore").innerText = compScore;
    }

    // return correct Font Awesome class name
    function getIcon(choice) {
      if (choice === "rock") return "fa-hand-back-fist";
      if (choice === "paper") return "fa-hand";
      if (choice === "scissors") return "fa-hand-scissors";
    }

    // reset scores
    function resetGame() {
      userScore = 0;
      compScore = 0;
      document.getElementById("userScore").innerText = userScore;
      document.getElementById("compScore").innerText = compScore;
      document.getElementById("userChoice").innerText = "";
      document.getElementById("computerChoice").innerText = "";
      document.getElementById("result").innerText = "";
      document.getElementById("result").className = "";
    }