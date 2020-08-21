/* We have a school to build here! In this project you will get used to thinking about classes in JavaScript and building them from a brand new data set. */

/* Pokemon
 - First we need a Pokemon class. This will be our base-class
 - Pokemon receives name, height, weight, level as props
 - Every Pokemon should also be initialized with a health attribute set to 50
 - Pokemon receives sleep as a method.
  - This method will return the pokemon's health to 100
 - Pokemon receives levelUp as a method.
  - This method should increase the pokemon's level by 1 */

 /* FireType
 - Now that we have a Pokemon as our base class, we'll build our FireType class.
 - FireType uses the same attributes that have been set up by Pokemon
 - FireType has the following unique props:
  - type property set to 'fire'
  - nickname property
  - weaknesses property initialized to an array with the values 'water', 'ground', 'rock'
 - FireType has the following methods:
  - fireAttack which should return the string `${name} just blew a giant fireball.' */

class Pokemon {
	constructor(attributes) {
		this.name = attributes.name;
		this.height = attributes.height;
		this.weight = attributes.weight;
		this.level = attributes.level;
		this.health = 50;
	}
	sleep() {
		this.health = 100;
		return `${this.name} went to sleep.`
	}
	levelUp () {
		this.level += 1;
		return `${this.name} leveled up to ${this.level}.`
	}
}

class FireType extends Pokemon {
	constructor(attributes) {
		super(attributes);
		this.type = 'Fire';
		this.nickname = attributes.nickname;
		this.weaknesses = ['Water', 'Ground', 'Rock']
	}
	fireAttack() {
		return `${this.nickname} the ${this.name} just blew a giant fireball.`
	}
}

/* Uncomment below to test your code */
const charmander = new FireType({
	name: 'Charmander',
	height: '23in',
	weight: '18lbs',
	level: 7,
	nickname: 'Moeru',
});

console.log(charmander.fireAttack());
console.log(charmander.health); // 50
console.log(charmander.level); // 7
console.log(charmander.sleep());
console.log(charmander.health); // 100
console.log(charmander.weaknesses); // ['water', 'ground', 'rock']