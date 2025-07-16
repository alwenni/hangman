document.addEventListener("keydown", handleKeyPress);

span.classList.add("letter-box");
if (letter === " ") {
  span.classList.add("letter-space");
}


let chosenWord = "example";      
let correctLetters = [];    
let wrongLetters = [];   
let maxErrors = 7;     



const easyWords = ['apple', 'car', 'book', 'cat', 'dog', 'sun', 'star', 'red', 'blue', 'green', 'run', 'box', 'fish', 'hat', 'bed', 'pen', 'ball', 'bag', 'tree', 'chair',
'cup', 'desk', 'rain', 'milk', 'door', 'bird', 'hand', 'foot', 'shoe', 'smile', 'jump', 'snow', 'moon', 'sky', 'nose', 'face', 'cake', 'gold', 'king', 'queen',
'fire', 'grass', 'cow', 'sheep', 'goat', 'ant', 'bee', 'map', 'bell', 'wall', 'home', 'sand', 'rock', 'boat', 'rice', 'kite', 'doll', 'frog', 'book', 'fan',
'sock', 'star', 'fox', 'leaf', 'corn', 'ring', 'cake', 'lamp', 'soap', 'bear', 'coin', 'glass', 'rug', 'wind', 'drum', 'duck', 'doll', 'flag', 'nest', 'egg',
'mug', 'rope', 'soap', 'fork', 'comb', 'tent', 'bus', 'jam', 'log', 'nail', 'bone', 'key', 'rug', 'seed', 'milk', 'apple', 'cake', 'game', 'plum', 'pot', 'net'];


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




function getRandomWord_hard() {
    return{
       the_word: hardWords[Math.floor(Math.random() * hardWords.length)],
    }

}



function getRandomWord_easy() {
    return{
       the_word: easyWords[Math.floor(Math.random() * easyWords.length)],
    }

}

function getRandomWord_medium() {
    return{
       the_word: mediumWords[Math.floor(Math.random() * mediumWords.length)],
    }

}
function getRandomWord_insane() {
    return{
       the_word: InsaneWords[Math.floor(Math.random() * InsaneWords.length)],
    }

}



function guess(letter) {

  if (correctLetters.includes(letter) || wrongLetters.includes(letter)) {
    return; 
  }

  if (chosenWord.toLowerCase().includes(letter)) {
    correctLetters.push(letter);
    updateCorrectLetters(letter);
    updateWordDisplay();
    checkWin();          
  } else {
    
    wrongLetters.push(letter);
    updateWrongLetters(letter);
    update_Hang_Picture();
    update_damage_picture();
    updateWordDisplay();

    checkLose();
  }
}


function handleKeyboard(event){
const letter = event.key.toLowerCase();
  if (letter.length === 1 && letter.match(/[a-z]/i)) {
    guess(letter);
  }

}



function resetGame(){
correctLetters=[];
wrongLetters=[];
chosenWord=[];
document.addEventListener("keydown", handleKeyPress);

}

function update_Hang_Picture(){
for (let i = 0; i <= 7; i++) {
    const img = document.getElementById(`img${i}`);
    if (img) img.style.display = "none";
  }


  const image = document.getElementById("hangmanImage");

  if(wrongLetters.length===0){
    document.getElementById("img0").style.display="block";
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





function update_damage_picture(){
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



function update_Correct_Letter(){
const display=document.getElementById("correctLetters");
for (let i = 0; i < chosenWord.length; i++) {
    const letter = chosenWord[i].toLowerCase();
    if (correctLetters.includes(letter)) {
      html += `<span class="letter">${letter}</span>`;
    } else {
      html += `<span class="letter">_</span>`;
    }
  }

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

input.addEventListener("input", function () {
  const letter = input.value.toLowerCase();

  if (/^[a-z]$/.test(letter)) {
    guess(letter);         
  }

  input.value = "";       
});




 



