import { Event } from "../src/event_interface";
import { Planet } from "../src/planet_constructor";
import readline from "readline";

export function explore(direction: "up" | "down" | "left" | "right"): void {
 // Code to explore in the specified direction
}

export function collectResources<T>(planet: Planet, quantity: number): T[] {
 return [];
}


export function eventHandler(event: Event): void {
 // Code to handle the event
}

function getUserInput(): Promise<string> {
 const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
 });

 return new Promise((resolve) => {
  rl.question("Enter the direction (up/down/left/right): ", (answer) => {
   rl.close();
   resolve(answer);
  });
 });
}

async function main(): Promise<void> {
 const direction = await getUserInput();
 explore(direction as "up" | "down" | "left" | "right");
}

main().catch((error) => {
 console.error(error);
});