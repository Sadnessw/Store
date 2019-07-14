const catalog = document.getElementsByClassName('catalog')[0];
const select = document.getElementsByName('sort-byAlph')[0];
const btnBack = document.getElementsByClassName('btn-back')[0];

async function getMan(params) {
	return await (await fetch(
		`https://speisekarte.telenorma.info/api/shops/Damfastore%20Magdeburg/manufacturers${params}`
	)).json();
}

(async function () {
	const json = await getMan('');
	const withIcon = json.filter(el => el.icon);
	withIcon.forEach(element => {
		const newLi = document.createElement('li');
		newLi.className = 'item-catalog';
		newLi.id = element._id;
		newLi.innerHTML = `<a href="#"><img src="${
			element.icon
			}" alt="logo.png" width="200" height="200"></a>`;
		catalog.appendChild(newLi);
	});
})();

select.onchange = async function (e) {
	catalog.innerHTML = '';
	const json = await getMan(`?sort=${e.target.value}`);
	const withIcon = json.filter(el => el.icon);
	withIcon.forEach(element => {
		const newLi = document.createElement('li');
		newLi.className = 'item-catalog';
		newLi.id = element._id;
		newLi.innerHTML = `<a href="#"><img src="${
			element.icon
			}" alt="logo.png" width="200" height="200"></a>`;
		catalog.appendChild(newLi);
	});
};

catalog.onclick = function (e) {
	if (e.target != catalog) {
		catalog.style.display = 'none';
		btnBack.style.display = 'inline-block';
	}
}

btnBack.onclick = function () {
	catalog.style.display = 'flex';
	btnBack.style.display = 'none';
}

// [...catalog.children].forEach(el => {
// 	console.log(el);
// });
