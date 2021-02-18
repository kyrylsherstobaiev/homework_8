let obj = {
	x: 10,
	y: 20,
	inner: {
		x: 20,
		z: 30
	},
	foo2: {
		k: 23,
		p: 13
	}
}

console.log(obj);

function convert(nameObj) {
	let newObj = {};
	for (let item in nameObj) {
		if (typeof nameObj[item] === 'object') {
			for (let i in nameObj[item]) {
				newObj[i] = nameObj[item][i];
			}
		} else {
			newObj[item] = nameObj[item];
		}
	}
	console.log(newObj);
	return nameObj;
}

convert(obj);

