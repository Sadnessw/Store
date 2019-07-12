const images = document.querySelectorAll('li a img');
const catalog = document.getElementsByClassName('catalog')[0];

fetch('https://speisekarte.telenorma.info/api/shops/Damfastore%20Magdeburg/manufacturers?sort=1')
  .then(res => res.json())
  .then(json => setIcon(json))
  .catch(rej => console.log(`o_O ${rej}`));


function setIcon(obj) {
  const withIcon = obj.filter(el => el.icon != null);
  for (let i = 0; i < withIcon.length; i++) {
    const newLi = document.createElement('li');
    newLi.className = "item-catalog";
    newLi.id = withIcon[i]._id;
    newLi.innerHTML = `<a href="#"><img src="${withIcon[i].icon}" alt="logo.png" width="200" height="200"></a>`;
    catalog.appendChild(newLi);
  }
}