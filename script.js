const totalRounds = 10;
let score = 0;
let round = 1;
let answered = false;
let currentCategory = "colors";
let activeQuestions = [];
let currentQuestion = null;
let muted = false;
let audioContext = null;

const categories = {
  colors: { name: "Colors", icon: "🎨", color: "#ff7868", questions: [
    ["Red", "#ef5350"], ["Blue", "#4c9be8"], ["Yellow", "#ffd85a"], ["Green", "#59c98c"],
    ["Purple", "#a66bdc"], ["Orange", "#ff9b45"], ["Pink", "#f58bb0"], ["Teal", "#42b9b0"]
  ] },
  arabic: { name: "Arabic Alphabet", icon: "أب", color: "#54cba0", questions: [
    ["أ", "ألف"], ["ب", "باء"], ["ت", "تاء"], ["ث", "ثاء"], ["ج", "جيم"],
    ["ح", "حاء"], ["خ", "خاء"], ["د", "دال"], ["ر", "راء"], ["س", "سين"],
    ["ش", "شين"], ["ص", "صاد"], ["ط", "طاء"], ["ع", "عين"], ["ف", "فاء"], ["ك", "كاف"], ["م", "ميم"], ["ن", "نون"], ["ي", "ياء"]
  ] },
  english: { name: "English Alphabet", icon: "Aa", color: "#57b8e8", questions: [
    ..."ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map((letter) => [letter, letter.toLowerCase()])
  ] },
  words: { name: "Simple Words", icon: "📖", color: "#ffd85a", questions: [
    ["☀️", "Sun"], ["🌙", "Moon"], ["🏠", "House"], ["⚽", "Ball"], ["🚗", "Car"],
    ["🍎", "Apple"], ["🐱", "Cat"], ["🐶", "Dog"], ["🎈", "Balloon"], ["⭐", "Star"]
  ] },
  numbers: { name: "Numbers 1-10", icon: "123", color: "#a66bdc", questions: [
    ...Array.from({ length: 10 }, (_, index) => [index + 1, index + 1])
  ] },
  animals: { name: "Animals", icon: "🐾", color: "#ff9b45", questions: [
    ["🐱", "Cat"], ["🐶", "Dog"], ["🐘", "Elephant"], ["🦁", "Lion"], ["🐰", "Rabbit"],
    ["🐸", "Frog"], ["🐼", "Panda"], ["🦊", "Fox"], ["🐵", "Monkey"], ["🐢", "Turtle"]
  ] },
  fruits: { name: "Fruits", icon: "🍓", color: "#f58bb0", questions: [
    ["🍎", "Apple"], ["🍌", "Banana"], ["🍊", "Orange"], ["🍓", "Strawberry"], ["🍇", "Grapes"],
    ["🍉", "Watermelon"], ["🍍", "Pineapple"], ["🥝", "Kiwi"], ["🍑", "Peach"], ["🍒", "Cherries"]
  ] },
  shapes: { name: "Basic Shapes", icon: "◆", color: "#42b9b0", questions: [
    ["●", "Circle"], ["■", "Square"], ["▲", "Triangle"], ["◆", "Diamond"],
    ["★", "Star"], ["⬟", "Pentagon"], ["⬢", "Hexagon"], ["♥", "Heart"]
  ] }
};

const startScreen = document.getElementById("startScreen");
const categoryScreen = document.getElementById("categoryScreen");
const questionScreen = document.getElementById("questionScreen");
const endScreen = document.getElementById("endScreen");
const gameHeader = document.getElementById("gameHeader");
const categoryGrid = document.getElementById("categoryGrid");
const scoreElement = document.getElementById("score");
const roundElement = document.getElementById("round");
const categoryLabel = document.getElementById("categoryLabel");
const questionPrompt = document.getElementById("questionPrompt");
const questionVisual = document.getElementById("questionVisual");
const answerGrid = document.getElementById("answerGrid");
const feedbackElement = document.getElementById("feedback");
const nextButton = document.getElementById("nextButton");
const finalScoreElement = document.getElementById("finalScore");
const endMessage = document.getElementById("endMessage");
const soundButton = document.getElementById("soundButton");
const feedbackPop = document.getElementById("feedbackPop");
const feedbackSticker = document.getElementById("feedbackSticker");
const feedbackMessage = document.getElementById("feedbackMessage");
const confettiElement = document.getElementById("confetti");

function shuffled(items) {
  return [...items].sort(() => Math.random() - 0.5);
}

function showScreen(screen) {
  [startScreen, categoryScreen, questionScreen, endScreen].forEach((item) => { item.hidden = item !== screen; });
  gameHeader.hidden = screen === startScreen;
}

function buildCategories() {
  categoryGrid.replaceChildren();
  Object.entries(categories).forEach(([key, category]) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "category-card";
    button.style.setProperty("--category-color", category.color);
    button.innerHTML = `<span class="category-icon" aria-hidden="true">${category.icon}</span><strong>${category.name}</strong>`;
    button.addEventListener("click", () => startCategory(key));
    categoryGrid.appendChild(button);
  });
}

function goHome() {
  showScreen(categoryScreen);
  score = 0;
  scoreElement.textContent = score;
}

function startCategory(key) {
  currentCategory = key;
  score = 0;
  round = 1;
  scoreElement.textContent = score;
  const sourceQuestions = shuffled(categories[key].questions);
  activeQuestions = [];
  while (activeQuestions.length < totalRounds) {
    activeQuestions.push(...shuffled(sourceQuestions));
  }
  activeQuestions = activeQuestions.slice(0, totalRounds);
  showScreen(questionScreen);
  showRound();
}

function showRound() {
  answered = false;
  nextButton.hidden = true;
  feedbackElement.textContent = "";
  roundElement.textContent = round;
  currentQuestion = activeQuestions[round - 1];
  categoryLabel.textContent = categories[currentCategory].name;
  answerGrid.className = "answer-grid";

  let prompt;
  let visual;
  let choices;

  if (currentCategory === "colors") {
    prompt = `Find ${currentQuestion[0]}`;
    visual = `<span class="large-swatch" style="background:${currentQuestion[1]}"></span>`;
    choices = shuffled(categories.colors.questions.filter((item) => item[0] !== currentQuestion[0]).slice(0, 3).concat([currentQuestion])).map((item) => ({ label: item[0], value: item[0], style: `style="background:${item[1]}"` }));
  } else if (currentCategory === "arabic") {
    prompt = `Which letter is ${currentQuestion[1]}?`;
    visual = `<span class="letter-visual arabic">${currentQuestion[0]}</span>`;
    const distractors = shuffled(categories.arabic.questions.filter((item) => item[0] !== currentQuestion[0])).slice(0, 3);
    choices = shuffled([currentQuestion, ...distractors]).map((item) => ({ label: item[0], value: item[0] }));
  } else if (currentCategory === "english") {
    prompt = `Find the letter ${currentQuestion[0]}`;
    visual = `<span class="letter-visual">${currentQuestion[0]}</span>`;
    const distractors = shuffled(categories.english.questions.filter((item) => item[0] !== currentQuestion[0])).slice(0, 3);
    choices = shuffled([currentQuestion, ...distractors]).map((item) => ({ label: item[0], value: item[0] }));
  } else if (currentCategory === "numbers") {
    const number = currentQuestion[0];
    prompt = "How many stars?";
    visual = `<span class="count-visual">${"⭐".repeat(number)}</span>`;
    const numbers = shuffled([1, 2, 3, 4, 5, 6, 7, 8, 9, 10].filter((item) => item !== number)).slice(0, 3);
    choices = shuffled([number, ...numbers]).map((item) => ({ label: String(item), value: String(item) }));
  } else {
    prompt = currentCategory === "words" ? "What does the picture say?" : `What is this ${currentCategory === "fruits" ? "fruit" : currentCategory === "animals" ? "animal" : "shape"}?`;
    visual = `<span class="picture-visual">${currentQuestion[0]}</span>`;
    const pool = categories[currentCategory].questions.filter((item) => item[1] !== currentQuestion[1]);
    const distractors = shuffled(pool).slice(0, 3);
    choices = shuffled([currentQuestion, ...distractors]).map((item) => ({ label: item[1], value: item[1] }));
  }

  questionPrompt.textContent = prompt;
  questionVisual.innerHTML = visual;
  answerGrid.replaceChildren();
  choices.forEach((choice) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = currentCategory === "colors" ? "answer-button color-answer" : "answer-button";
    if (choice.style) button.setAttribute("style", choice.style);
    button.textContent = choice.label;
    button.dataset.answer = choice.value;
    button.setAttribute("aria-label", `Choose ${choice.label}`);
    button.addEventListener("click", () => checkAnswer(button, choice.value));
    answerGrid.appendChild(button);
  });
}

function getCorrectAnswer() {
  if (currentCategory === "colors") return currentQuestion[0];
  if (["arabic", "english"].includes(currentCategory)) return currentQuestion[0];
  if (currentCategory === "numbers") return String(currentQuestion[0]);
  return currentQuestion[1];
}

function playSound(isCorrect) {
  if (muted) return;
  const AudioContextClass = window.AudioContext || window.webkitAudioContext;
  if (!AudioContextClass) return;
  audioContext = audioContext || new AudioContextClass();
  const notes = isCorrect ? [523.25, 659.25, 783.99] : [392, 329.63];
  notes.forEach((frequency, index) => {
    const oscillator = audioContext.createOscillator();
    const gain = audioContext.createGain();
    const start = audioContext.currentTime + index * 0.09;
    oscillator.type = isCorrect ? "sine" : "triangle";
    oscillator.frequency.setValueAtTime(frequency, start);
    gain.gain.setValueAtTime(isCorrect ? 0.12 : 0.08, start);
    gain.gain.exponentialRampToValueAtTime(0.001, start + 0.16);
    oscillator.connect(gain);
    gain.connect(audioContext.destination);
    oscillator.start(start);
    oscillator.stop(start + 0.17);
  });
}

function makeConfetti() {
  confettiElement.replaceChildren();
  const palette = ["#ff7868", "#ffd85a", "#54cba0", "#57b8e8", "#a66bdc", "#f58bb0"];
  for (let index = 0; index < 32; index += 1) {
    const piece = document.createElement("span");
    piece.style.left = `${35 + Math.random() * 30}%`;
    piece.style.backgroundColor = palette[index % palette.length];
    piece.style.animationDelay = `${Math.random() * 180}ms`;
    piece.style.setProperty("--drift", `${-130 + Math.random() * 260}px`);
    piece.style.setProperty("--spin", `${360 + Math.random() * 540}deg`);
    confettiElement.appendChild(piece);
  }
  window.setTimeout(() => confettiElement.replaceChildren(), 1500);
}

function showAnswerFeedback(isCorrect) {
  feedbackPop.className = `feedback-pop ${isCorrect ? "correct-feedback" : "wrong-feedback"}`;
  feedbackSticker.textContent = isCorrect ? "🥳" : "🥺";
  feedbackMessage.textContent = isCorrect ? "Great job! 🎉" : "Oops! Try again 💕";
  feedbackElement.textContent = isCorrect ? "Great job! 🎉" : "Oops! Try again 💕";
  feedbackPop.hidden = false;
  void feedbackPop.offsetWidth;
  feedbackPop.classList.add("show");
  playSound(isCorrect);
  if (isCorrect) makeConfetti();
  window.setTimeout(() => { feedbackPop.classList.remove("show"); feedbackPop.hidden = true; }, 1250);
}

function checkAnswer(button, chosenAnswer) {
  if (answered) return;
  answered = true;
  const correctAnswer = getCorrectAnswer();
  const buttons = answerGrid.querySelectorAll(".answer-button");
  buttons.forEach((item) => { item.disabled = true; });

  if (chosenAnswer === correctAnswer) {
    score += 1;
    scoreElement.textContent = score;
    button.classList.add("correct");
    showAnswerFeedback(true);
  } else {
    button.classList.add("wrong");
    const correctButton = [...buttons].find((item) => item.dataset.answer === correctAnswer);
    if (correctButton) correctButton.classList.add("correct");
    showAnswerFeedback(false);
  }

  if (round === totalRounds) {
    window.setTimeout(showFinish, 900);
  } else {
    nextButton.hidden = false;
    nextButton.focus();
  }
}

function showFinish() {
  showScreen(endScreen);
  gameHeader.hidden = false;
  finalScoreElement.textContent = score;
  endMessage.textContent = score >= 8 ? "Amazing! You are a super star!" : score >= 5 ? "Great learning! Keep shining!" : "Good try! Every star starts small!";
  makeConfetti();
}

function openCategories() { showScreen(categoryScreen); }

nextButton.addEventListener("click", () => { round += 1; showRound(); });
document.getElementById("startButton").addEventListener("click", () => showScreen(categoryScreen));
document.getElementById("homeButton").addEventListener("click", goHome);
document.getElementById("backButton").addEventListener("click", goHome);
document.getElementById("playAgainButton").addEventListener("click", () => startCategory(currentCategory));
document.getElementById("endHomeButton").addEventListener("click", goHome);
soundButton.addEventListener("click", () => {
  muted = !muted;
  soundButton.textContent = muted ? "🔇" : "🔊";
  soundButton.setAttribute("aria-label", muted ? "Turn sounds on" : "Mute sounds");
  soundButton.title = muted ? "Turn sounds on" : "Mute sounds";
});

buildCategories();
showScreen(startScreen);

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./service-worker.js").catch(() => {
      // The game remains fully usable if service-worker registration is unavailable.
    });
  });
}
