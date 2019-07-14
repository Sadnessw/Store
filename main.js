const catalog = document.getElementsByClassName('catalog')[0];
const subcatalog = document.getElementsByClassName('subcatalog')[0];
const select = document.getElementsByName('sort-byAlph')[0];
const btnBack = document.getElementsByClassName('btn-back')[0];

async function getManufact(params) {
	return await (await fetch(
		`https://speisekarte.telenorma.info/api/shops/Damfastore%20Magdeburg/manufacturers${params}`
	)).json();
}

async function getProduct(manufactureNumber) {
	return await (await fetch(`https://speisekarte.telenorma.info/api/shops/Damfastore%20Magdeburg/goods?manufacturer=${manufactureNumber}&itemsPerPage=100`)).json();
}

(async function () {
	const json = await getManufact('');
	const withIcon = json.filter(el => el.icon);
	withIcon.forEach(element => {
		const newLi = document.createElement('li');
		newLi.className = 'item-catalog';
		newLi.innerHTML = `<a href="#"><img id=${element._id} src="${
			element.icon
			}" alt="logo.png" width="200" height="200"></a>`;
		catalog.appendChild(newLi);
	});
})();

select.onchange = async function (e) {
	catalog.innerHTML = '';
	const json = await getManufact(`?sort=${e.target.value}`);
	const withIcon = json.filter(el => el.icon);
	withIcon.forEach(element => {
		const newLi = document.createElement('li');
		newLi.className = 'item-catalog';
		newLi.innerHTML = `<a href="#"><img id=${element._id} src="${
			element.icon
			}" alt="logo.png" width="200" height="200"></a>`;
		catalog.appendChild(newLi);
	});
};

catalog.onclick = function (e) {
	if (e.target != catalog) {
		catalog.style.display = 'none';
		btnBack.style.display = 'inline-block';
		(async function () {
			const product = await getProduct(e.target.id);
			product.result.forEach(element => {
				const newLi = document.createElement('li');
				newLi.className = 'item-subcatalog';
				newLi.innerHTML = `<a href="#"><img id=${element._id} src="${
					element.imageLink
					}" alt="logo.png" width="200" height="200"></a>`;
				subcatalog.appendChild(newLi);
			});
		})();
	}
}

btnBack.onclick = function () {
	catalog.style.display = 'flex';
	subcatalog.innerHTML = '';
	btnBack.style.display = 'none';
}
