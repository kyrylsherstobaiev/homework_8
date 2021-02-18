let Obj1 = {
	x: 10,
	y: 10
};

let Obj2 = {
	z: 20,
}
let Obj3 = {
	x: 30,
	z: 30,
};

let Obj4 = {
	x: 40,
	y: 40,
	z: 40,
}

let foo = 100;

console.log(Obj1, Obj2, Obj3, Obj4, foo);
console.log(`--------------------------------`);

function assignObejcts() {

	let newObj = {};
	let arg = { ...arguments };

	for (let item in arg) {
		if (typeof arg[item] === 'object') {
			for (let elem in arg[item]) {
				newObj[elem] = arg[item][elem];
			}
		} else {
			newObj[item] = arg[item];
		}
	}
	console.log(newObj);
	return newObj;
}

assignObejcts(Obj1, Obj2, Obj3, Obj4, foo);

