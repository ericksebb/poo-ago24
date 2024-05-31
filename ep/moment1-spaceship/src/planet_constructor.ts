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

export enum Resource {
	Wood = "wood",
	Metal = "metal",
	Gallium= "gallium",
	Polymer = "polymer",
	Gold = "gold",
	Water = "water",
	Oxygen = "oxygen",
}