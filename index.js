#! /usr/bin/env node
import inquirer from "inquirer";
let answer = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter your message to cound the word"
    }
]);
let words = answer.sentence.trim().split(" ");
console.log(words);
console.log(`Your sentence word is ${words.length}`);
