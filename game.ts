// const prompt = require('prompt');
// import prompt from "prompt";

// const prt = prompt.default();
import inquirer from "inquirer";
import { type } from "os";

// Your code using the prompt package goes here


class NumberGuessingGame {
    private numberOfRounds: number;
    private currentRound: number;
    private score: number;
  
    constructor(numberOfRounds: number) {
      this.numberOfRounds = numberOfRounds;
      this.currentRound = 1;
      this.score = 0;
    }
  
    async startGame() {
      console.log('Welcome to the Number Guessing Game!');
      console.log(`You have ${this.numberOfRounds} rounds to play.\n`);
  
      while (this.currentRound <= this.numberOfRounds) {
        const targetNumber = Math.floor(Math.random() * 10) + 1; // Random number between 1 and 10
        console.log(`Round ${this.currentRound}`);
        const userGuess = await this.getUserGuess();
  
        if (userGuess == targetNumber) {
          console.log('Congratulations! You guessed the correct number.');
          this.score++;
        } else {
          console.log(`Sorry, the correct number was ${targetNumber}.`);
        }
  
        this.currentRound++;
      }
  
      console.log(`Game Over! Your score is: ${this.score}/${this.numberOfRounds}`);
    }
  
    private async getUserGuess() {
      const userGuess = await inquirer.prompt([
        {
            type: "number",
            name: "userGuess",
            message: "Enter your number b/w 1 - 10: ",
        }
      ])
      
      return userGuess;
    }
  }
  
  const numberOfRounds = 3; // Change this to adjust the number of rounds
  const game = new NumberGuessingGame(numberOfRounds);
  game.startGame();
  