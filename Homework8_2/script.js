let Obj1 = {
	x: 10,
	y: 10
};

let Obj2 = {
	z: 30,
}
let Obj3 = {
	x: 10,
	z: 10,
};

let Obj4 = {
	x: 20,
	y: 30,
	z: 20,
}

console.log(Obj1, Obj2, Obj3, Obj4);
console.log(`--------------------------------`);

function assignObejcts(name1, name2) {

	let newObj = {};
	for (let i in name1) {
		newObj[i] = name1[i];
		for (let j in name2) {
			if (i == j) {
				delete name2[j]; /*** name2[j] = name1[i]; можно переприсвоить один ключ другому*/
			} else {
				newObj[j] = name2[j];
			}
		}
	}

	//let newObj = {};
	//for (let i in name1) {
	//	newObj[i] = name1[i];
	//	for (let j in name2) {
	//		if (i == j) {
	//			name2[j] = name1[i];
	//		}
	//		newObj[j] = name2[j];
	//	}
	//}
	console.log(newObj);
	return newObj;
}

assignObejcts(Obj1, Obj2);
assignObejcts(Obj3, Obj4);