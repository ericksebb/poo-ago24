import { Event, Planet } from "./exports";

export function explore(direction: "up" | "down" | "left" | "right"): void {}
  
export function collectResources<T>(planet: Planet, quantity: number): T[] {
 return [];
}
  
export function eventHandler(event: Event): void {}