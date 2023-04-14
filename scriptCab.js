const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions');
const newUl = document.createElement("ul");

const fruit = ['Prime Rib', 'Fried Turkey', 'Dijon Salmon', 'Glazed Ham', 'Roasted Pig', 'Lobster Truffles', 'Honey Glazed Hens', 'Banana Pudding', 'Cheesecake', 'Pudding', 'Lemon Pie', 'Ice Cream Cones', 'Deviled Eggs', 'Potato Salad', 'Cornbread', 'Pasta Alfredo', 'Collard Greens','Buttered Rolls', 'Tofu Stir Fry', 'Mac n Cheese','Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {
	let results = [];
	if(str.length) {
		results = [...str].map((list) => {
			return "<li>" + list + "</li>";
		});
	}
	return results;
}

function searchHandler(e) {
	let chars = input.value;
	let dropResults = [];
	
	if(chars.length) {
		dropResults = fruit.filter(foodItem => {
			return foodItem.toLowerCase()
			.includes(chars.toLowerCase())
		});
		console.log(dropResults);
	}

	return showSuggestions(dropResults);
}

function showSuggestions(inputVal) {
	let drops = search(inputVal);
	if(drops !== []) {
		suggestions.appendChild(newUl).innerHTML = drops.join('');
	}
}

function useSuggestion(e) {
	let pick = newUl.childNodes;
	let pickArr = Array.from(pick);
	for(let i = 0; i < pickArr.length; i++) {
		if(pickArr[i] = e.target) {
			console.log('you clicked ' + pickArr[i].innerText);
			input.value = pickArr[i].innerText;
			newUl.remove();
		}
	}
}

input.addEventListener('keyup', searchHandler);
newUl.addEventListener('click', useSuggestion);