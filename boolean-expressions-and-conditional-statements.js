/*

Objective:
You will practice creating and combining boolean expressions
to drive logic and outcomes in you program.

Instructions:
If you are not familiar with the concept of a text-based adventure game,
let's set the scene...
Example: "You wake up in a dark forest. There are two paths ahead of you:
one leading to the mountains and one to a village.
Your choices will determine your fate!"

Define the Requirements: You must:
  - Write conditional statements to handle player choices.
  - Use boolean expressions to combine multiple conditions.
  - Include at least one use of logical operators (&&, ||, !).

Starter Code:
  - Run the following command in your terminal to install the readline-sync module:
    npm install readline-sync

Paste the following code into your editor:

*/

const readline = require('readline-sync');

// Initial items
let hasTorch = true;
let hasMap = false;
let hasCompass = false;
let hasSword = false;

// New: add more item choices
const pickBackpack = readline.question("You find a backpack with a map and a compass. Do you take it? (yes/no): ");
if (pickBackpack.toLowerCase() === "yes") {
  hasMap = true;
  hasCompass = true;
}

const pickSword = readline.question("You also see a rusty sword on the ground. Do you pick it up? (yes/no): ");
if (pickSword.toLowerCase() === "yes") {
  hasSword = true;
}

console.log("\nYou see two paths: one leads to the mountains, the other to the village.");
const choice = readline.question("Do you go to the 'mountains' or the 'village'? ").toLowerCase();


if (choice === "mountains" && hasTorch) {
  console.log("You safely navigate through the dark mountains.");
  
  if (hasCompass) {
    console.log("Thanks to your compass, you stay on course.");
  } else {
    console.log("Without a compass, you take longer and nearly lose your way.");
  }

  if (hasSword) {
    console.log("A wild beast attacks! You fight it off with your sword.");
  } else {
    console.log("A wild beast attacks! You run for your life with no weapon to defend yourself.");
  }

} else if (choice === "mountains" && !hasTorch) {
  console.log("It's too dark to proceed. You decide to turn back.");
  
} else if (choice === "village" || hasMap) {
  console.log("You find your way to the village.");

  if (hasSword && hasCompass) {
    console.log("Villagers welcome you as a prepared traveler. They invite you to help defend them.");
  } else if (hasCompass || hasMap) {
    console.log("You are respected for finding your way, but villagers warn you about dangers ahead.");
  } else {
    console.log("You barely made it. Villagers think you’re lucky to have arrived at all.");
  }

} else {
  console.log("You get lost and wander aimlessly.");
}
