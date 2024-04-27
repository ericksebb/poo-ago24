export interface Spaceship {
	codeName: string;
	speed: number;
	hp: number;
	cargo: number;
}

export interface Event {
	name: string;
	date: Date;
 isHit: boolean,
	isCargoLoaded: boolean
}

export enum Resource {
	Wood = "wood",
	Metal = "metal",
	Gallium= "gallium",
	Polymer = "polymer",
	Gold = "gold",
	Water = "water",
	Oxygen = "oxygen",
}

export class Planet {
	constructor(
		public name: string, 
		public population: number, 
		public afiliation: string, 
		public commonResource: Resource,
		public isHostile: boolean,
		public isColonized: boolean
	) {}
}
