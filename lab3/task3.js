const object1 = {
	name: 'Boris',
	weight: 15
};

const object2 = {
	name: 'Boris',
	weight: 15
};

const object3 = {
	name: 'Rex',
	weight: 20,
};

function isEquivalent(obj1, obj2) {
	if (obj1 === obj2) {
		return true;
	}
	for (let property in obj1) {
		if (obj1[property] !== obj2[property]) {
			return false;
		}
	}
	return true;
}

console.log(isEquivalent(object1, object2)); // true
console.log(isEquivalent(object1, object3)); // false