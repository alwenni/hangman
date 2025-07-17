const ouchSound = new Audio("/Users/ice/Downloads/ouch.mp3");


const easyWords = [
  "apple", "car", "book", "cat", "dog", "sun", "star", "red", "blue", "green", "run", "box", "fish", "hat", "bed", "pen", "ball", "bag", "tree", "chair",
  "cup", "desk", "rain", "milk", "door", "bird", "hand", "foot", "shoe", "smile", "jump", "snow", "moon", "sky", "nose", "face", "cake", "gold", "king", "queen",
  "fire", "grass", "cow", "sheep", "goat", "ant", "bee", "map", "bell", "wall", "home", "sand", "rock", "boat", "rice", "kite", "doll", "frog", "book", "fan",
  "sock", "star", "fox", "leaf", "corn", "ring", "cake", "lamp", "soap", "bear", "coin", "glass", "rug", "wind", "drum", "duck", "doll", "flag", "nest", "egg",
  "mug", "rope", "soap", "fork", "comb", "tent", "bus", "jam", "log", "nail", "bone", "key", "rug", "seed", "milk", "apple", "cake", "game", "plum", "pot", "net"
];


const mediumWords = [
  "banana", "sunset", "fireball", "mirror", "rocket", "jellyfish", "garden", "orange sky", "desert storm", "starfish",
  "silver coin", "thunder", "snowman", "battle", "rainbow", "cold river", "ice cream", "jungle", "school bag", "pencil",
  "rabbit", "playground", "hot air", "quick fox", "circus tent", "ladder", "picture", "dream land", "water fall", "camera",
  "pillow", "puzzle", "mountain", "forest", "crystal", "secret door", "night owl", "window", "picnic", "sand dune",
  "boat ride", "castle", "dancing bear", "toy shop", "hammer", "bucket", "rain drop", "polar bear", "cloudy sky", "fire truck",
  "lucky star", "magic box", "windy hill", "monkey", "bubble tea", "paper plane", "golden sun", "treasure map", "flower pot", "tunnel",
  "milkshake", "rainbow fish", "candy shop", "snowflake", "sleepy cat", "spider web", "moonlight", "star hunter", "ice cave",
  "moon walker", "dusty road", "wild river", "sleeping fox", "cooking pot", "electric fan", "smart dog", "rainy night",
  "grape juice", "tent house", "blue whale", "cookie jar", "apple pie", "train track", "frozen lake", "sand castle",
  "magic wand", "red balloon", "jungle book", "bedtime story", "balloon ride", "mirror room", "thunder cloud", "pencil case",
  "sugar cube", "backpack", "robot arm", "candy land"
];


const hardWords = [
  "awkward", "rhythm", "zephyr", "knapsack", "abscond", "eclipse", "hyphen", "liquify", "pharaoh", "gnarly",
  "crystal cave", "circuit", "bizarre", "mystic forest", "exodus", "jaguar", "voyage", "iceberg", "jackpot", "galaxy storm",
  "cyclone", "quibble", "drought", "fungus", "cobalt", "sphinx", "chisel", "friction", "cosmic flame", "wizard tower",
  "python", "wizardry", "jagged rock", "vulture", "ember", "oxygen", "equator", "canyon", "blizzard", "anchor point",
  "velvet night", "zigzag", "lynx", "quartz", "crochet", "fathom", "hollow cave", "lantern light", "asylum room", "talcum powder",
  "typhoon", "marvel", "zealot", "falcon", "wrench", "plasma field", "nebula", "anthem rise", "zombie walk", "walnut tree",
  "trudge", "kindle fire", "vanish", "legacy", "havoc", "dagger throw", "quiver", "paradox", "outlaw trail", "mimicry",
  "blubber", "spiral stairs", "beacon", "glitch wave", "gargle", "vacant look", "murmur", "puzzle piece", "grumpy cat",
  "kettle", "hostile zone", "riddle", "venom snake", "wreath", "kitten claw", "burden", "cobweb", "phantom zone", "silent knight",
  "haunted ship", "echo cave", "ghost town", "thorn bush", "cursed blade", "dizzy spell", "scorpion tail", "shadow path",
  "vengeful crow", "raven eye", "masked rider", "storm blade", "hidden scroll", "night terror", "shattered glass", "twisted tale"
];




const InsaneWords = [
  "syzygy", "xylophone", "quizzical", "juxtapose", "mnemonics", "eczema", "phlegm", "queue", "sphygmomanometer", "onomatopoeia",
  "antidisestablishmentarianism", "floccinaucinihilipilification", "pneumonoultramicroscopicsilicovolcanoconiosis", "dachshund", "bourgeois",
  "colonel", "concierge", "silhouette", "rendezvous", "tsunami",
  "quantum flux", "mental paradox", "fractured realm", "chaotic void", "ethereal flame",
  "phantom memory", "echoing void", "spectral knight", "nonplussed", "kaleidoscope",
  "bureaucracy", "subpoena", "gobbledygook", "kerfuffle", "zeitgeist",
  "xenogenesis", "polyphony", "circumlocution", "parallelogram", "anachronism",
  "chiaroscuro", "schadenfreude", "cryptocurrency", "hyperthyroidism", "transcendentalism",
  "biofluorescent jelly", "linguistic recursion", "existential dread", "recursive paradox", "inverted spectrum"
];





console.log("Hello from app.js");



const inputa = document.getElementById("letterInput");

inputa.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    const letter = inputa.value.toLowerCase().trim();
    if (/^[a-z]$/.test(letter)) {
      guess(letter);
    } else {
      alert("Please enter a valid single letter.");
    }
    inputa.value = "";
    inputa.focus();
  }
});




let temp, the_word;

let chosenWord = getRandomWord_easy().the_word;
let correctLetters = [];
let wrongLetters = [];
let maxErrors = 7;

function getRandomWord_hard() {
  return {
    the_word: hardWords[Math.floor(Math.random() * hardWords.length)],
  }

}



function getRandomWord_easy() {
  return {
    the_word: easyWords[Math.floor(Math.random() * easyWords.length)],
  }

}

function getRandomWord_medium() {
  return {
    the_word: mediumWords[Math.floor(Math.random() * mediumWords.length)],
  }

}
function getRandomWord_insane() {
  return {
    the_word: InsaneWords[Math.floor(Math.random() * InsaneWords.length)],
  }

}













function handleKeyboard(event) {
  const letter = event.key.toLowerCase();
  if (letter.length === 1 && letter.match(/[a-z]/i)) {
    guess(letter);
  }
}



function guess(letter) {
  console.log("Guessed letter:", letter);
  console.log("Wrong letters:", wrongLetters);
  if (correctLetters.includes(letter) || wrongLetters.includes(letter)) {
    return;
  }

  if (chosenWord.toLowerCase().includes(letter)) {
    correctLetters.push(letter);
    update_Correct_Letter(letter);
    checkWin();
  } else {
    ouchSound.currentTime = 0;
    ouchSound.play();
    setTimeout(() => {
      ouchSound.pause();
      ouchSound.currentTime = 0;
    }, 2000);

    wrongLetters.push(letter);
    updateWrongLetters(letter);
    update_Hang_Picture();
    update_damage_picture();
    updateWordDisplay();
    wrongLetters.push(letter);

    checkLose();
  }
}


function handleKeyPress(event) {
  const letter = event.key.toLowerCase();
  if (letter.length === 1 && letter.match(/[a-z]/i)) {
    guess(letter);
  }

}



function resetGame() {
  correctLetters = [];
  wrongLetters = [];
  chosenWord = getRandomWord_easy().the_word;
  update_Correct_Letter();
  updateWrongLetters();
  update_Hang_Picture();
  update_damage_picture();
  document.addEventListener("keydown", handleKeyPress);
  re


}

function update_Hang_Picture() {
  for (let i = 0; i <= 7; i++) {
    const img = document.getElementById(`img${i}`);
    if (img) img.style.display = "none";
  }


  const image = document.getElementById("hangmanImage");

  if (wrongLetters.length === 0) {
    document.getElementById("img0").style.display = "block";
  }

  else if (wrongLetters.length === 1) {
    document.getElementById("img1").style.display = "block";
  }
  else if (wrongLetters.length === 2) {
    document.getElementById("img2").style.display = "block";
  } else if (wrongLetters.length === 3) {
    document.getElementById("img3").style.display = "block";
  } else if (wrongLetters.length === 4) {
    document.getElementById("img4").style.display = "block";
  } else if (wrongLetters.length === 5) {
    document.getElementById("img5").style.display = "block";
  } else if (wrongLetters.length === 6) {
    document.getElementById("img6").style.display = "block";
  } else if (wrongLetters.length >= 7) {
    document.getElementById("img7").style.display = "block";
  }




}





function update_damage_picture() {
  for (let i = 0; i <= 7; i++) {
    const img = document.getElementById(`dam${i}`);
    if (img) img.style.display = "none";
  }

  if (wrongLetters.length === 0) {
    document.getElementById("dam0").style.display = "block";
  } else if (wrongLetters.length === 1) {
    document.getElementById("dam1").style.display = "block";
  } else if (wrongLetters.length === 2) {
    document.getElementById("dam2").style.display = "block";
  } else if (wrongLetters.length === 3) {
    document.getElementById("dam3").style.display = "block";
  } else if (wrongLetters.length === 4) {
    document.getElementById("dam4").style.display = "block";
  } else if (wrongLetters.length === 5) {
    document.getElementById("dam5").style.display = "block";
  } else if (wrongLetters.length === 6) {
    document.getElementById("dam6").style.display = "block";
  } else if (wrongLetters.length >= 7) {
    document.getElementById("dam7").style.display = "block";
  }

}



function update_Correct_Letter() {
  const display = document.getElementById("correctLetters");
  let html = "<h2>Correct Letter</h2><p>";

  for (let i = 0; i < chosenWord.length; i++) {
    const letter = chosenWord[i].toLowerCase();
    if (correctLetters.includes(letter)) {
      html += `${letter} `;
    } else {
      html += "_ ";
    }
  }

  html += "</p>";
  display.innerHTML = html;
}



function updateWrongLetters() {
  const display = document.getElementById("wrongLetters");
  display.innerHTML = `
    <h2>Wrong Letter</h2>
    <p>${wrongLetters.join(", ")}</p>
  `;
}





const input = document.getElementById("letterInput");
const button = document.getElementById("submitLetter");
const reset = document.getElementById("the_reset");

button.addEventListener("click", function () {
  const letter = input.value.toLowerCase().trim();
  if (/^[a-z]$/.test(letter)) {
    guess(letter);
  } else {
    alert("Please enter a valid single letter.");
  }

  input.value = "";
  input.focus();
});


document.addEventListener("DOMContentLoaded", function () {
  const resetBtn = document.getElementById("the_reset");
  if (resetBtn) {
    resetBtn.addEventListener("click", resetGame);
  }
});




console.log(44);
console.log(chosenWord);

function update_Correct_Letter() {
  const display = document.getElementById("correctLetters");
  let html = "<h2>Correct Letters</h2><p>";

  for (let i = 0; i < chosenWord.length; i++) {
    const letter = chosenWord[i].toLowerCase();
    if (correctLetters.includes(letter)) {
      html += `${letter} `;
    } else if (letter === " ") {
      html += "  ";
    } else {
      html += "_ ";
    }
  }

  html += "</p>";
  display.innerHTML = html;
}



function updateWrongLetters() {
  const display = document.getElementById("wrongLetters");
  display.innerHTML = `
    <h2>Wrong Letters</h2>
    <p>${wrongLetters.join(", ")}</p>
  `;
}




function resetGame() {
  correctLetters = [];
  wrongLetters = [];
  chosenWord = getRandomWord_easy().the_word.toLowerCase();
  console.log(chosenWord);

  document.getElementById("letterInput").value = "";

  update_Correct_Letter();
  updateWrongLetters();
  update_Hang_Picture();
  update_damage_picture();



  for (let i = 1; i <= 7; i++) {
    const img = document.getElementById(`img${i}`);
    if (img) img.style.display = "none";
  }

  for (let i = 1; i <= 7; i++) {
    const dam = document.getElementById(`dam${i}`);
    if (dam) dam.style.display = "none";
  }

  const img0 = document.getElementById("img0");
  const dam0 = document.getElementById("dam0");
  if (img0) img0.style.display = "block";
  if (dam0) dam0.style.display = "block";
}


const menuBtn = document.getElementById("the_menu");
if (menuBtn) {
  menuBtn.addEventListener("click", () => {
    console.log("Menu clicked");
    window.location.href = "index1.html";
  });
}



function checkWin() {
  let won = true;

  for (let i = 0; i < chosenWord.length; i++) {
    const letter = chosenWord[i].toLowerCase();
    if (letter !== " " && !correctLetters.includes(letter)) {
      won = false;
      break;
    }
  }

  if (won) {
    setTimeout(() => {
      alert("🎉 you win");
      resetGame();
    }, 100);
  }
}



function updateWordDisplay(word, guessedLetters) {
  let display = '';
  for (let letter of word) {
    if (guessedLetters.includes(letter.toLowerCase())) {
      display += letter + ' ';
    } else {
      display += '_ ';
    }
  }
  return display.trim();
}


document.addEventListener("DOMContentLoaded", function () {
  const resetBtn = document.getElementById("the_reset");
  if (resetBtn) {
    resetBtn.addEventListener("click", resetGame);
  }

  update_Correct_Letter();
});









