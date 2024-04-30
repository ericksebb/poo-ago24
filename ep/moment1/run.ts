import { Planet, Resource } from "./src/planet_constructor";
import { Event } from "./src/event_interface";
import { Spaceship } from "./src/spaceship_interface";
import * as fn from "./tmp/fn"

// Let's create our environment
const ship: Spaceship = { codeName: "CBRPNK-2077", hp: 3000, speed: Infinity, cargo: 100};
const planet1 = new Planet("Europa", 30000, "Grineer", Resource.Polymer, false, true);
const event1: Event = { name: "Landing in Europa", date: new Date(), isHit: false, isCargoLoaded: true};

fn.explore("left");
fn.collectResources<number>(planet1, 10);
fn.eventHandler(event1);
console.log(`Welcome abroad, captain. Your ship ${ship.codeName} currently has ${ship.hp} HP and ${ship.cargo} cargo capacity, We're good to go!.
You are currently in ${planet1.name} and the event ${event1.name} is happening right now.

`);
console.log(`Here is a brief on ${planet1.name}: It has a population of ${planet1.population} and is affiliated with the ${planet1.afiliation}
It's common resource is ${planet1.commonResource} and it is ${planet1.isHostile ? "hostile" : "friendly"} and as of today, ${planet1.name} is ${planet1.isColonized ? "colonized" : "not colonized"}.`);