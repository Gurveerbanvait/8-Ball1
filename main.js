// Magic 8 Ball

// Button Event Litsener
document.getElementById("btn").addEventListener("click", btnClicked);

let numYes = 0;
let numNo = 0;
let numNo2 = 0;
let numYes2 = 0;
let numIdk = 0;

function btnClicked() {
  // Generate a Random Number
  let question = document.getElementById("question-in").value;
  let randNum = Math.random();
  console.log(randNum);
  // First check if there is a question with a specific answer then give a random answer
  if (question === "Does a magic 8 ball actually work?") {
    document.getElementById(
      "Answer-out"
    ).innerHTML = `<p class="response">"How Dare you doubt me!"</p>`;
  } else if (question === "Is JavaScript awesome?") {
    document.getElementById(
      "Answer-out"
    ).innerHTML = `<p class="response">"Of Course"</p>`;
  } else if ((randNum >= 0.4, randNum < 0.6)) {
    numYes++;
    document.getElementById(
      "Answer-out"
    ).innerHTML = `<p class="response">"As I see it, yes"</p>`;
  } else if (randNum >= 0.8) {
    numYes2++;
    document.getElementById(
      "Answer-out"
    ).innerHTML = `<p class="response">"Without a Doubt."</p>`;
  } else if ((randNum >= 0.6, randNum < 0.8)) {
    numIdk++;
    document.getElementById(
      "Answer-out"
    ).innerHTML = `<p class="response">"Concentrate and ask again"</p>`;
  } else if ((randNum >= 0.2, randNum < 0.4)) {
    numNo2++;
    document.getElementById(
      "Answer-out"
    ).innerHTML = `<p class="response">"Don't count on it."</p>`;
  } else {
    numNo++;
    document.getElementById(
      "Answer-out"
    ).innerHTML = `<p class="response">"Outlook not so good."</p>`;
  }
}
