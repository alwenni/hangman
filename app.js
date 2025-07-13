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




