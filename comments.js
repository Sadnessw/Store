// fetch('https://speisekarte.telenorma.info/api/shops/Damfastore%20Magdeburg/manufacturers?sort=1')
//   .then(res => res.json())
//   .then(function setIcon(obj) {
//     const withIcon = obj.filter(el => el.icon != null);
//     for (let i = 0; i < withIcon.length; i++) {
//       const newLi = document.createElement('li');
//       newLi.className = "item-catalog";
//       newLi.id = withIcon[i]._id;
//       newLi.innerHTML = `<a href="#"><img src="${withIcon[i].icon}" alt="logo.png" width="200" height="200"></a>`;
//       catalog.appendChild(newLi);
//     }
//   }).catch(rej => console.log(`o_O ${rej}`));


// (async function test() {
//   const some = await fetch('https://speisekarte.telenorma.info/api/shops/Damfastore%20Magdeburg/goods?manufacturer=113&itemsPerPage=100');
//   await some.json();
//   console.log(some)

// })();

// select.oninput = async function () {
//     if (select.children[0].selected == 1) {
//       const manuF = await fetch('https://speisekarte.telenorma.info/api/shops/Damfastore%20Magdeburg/manufacturers?sort=1');
//       console.log(await manuF.json());

//     } else {
//       await fetch('https://speisekarte.telenorma.info/api/shops/Damfastore%20Magdeburg/manufacturers?sort=-1');
//     } 
// }
// select.onchange = async function (evt) {
//   console.log(evt.target.value)
//   if (select.children[0].selected == 1) {

//     console.log(await manuF.json());

//   } else {
//     await fetch('?sort=-1');
//   } 
// }


// select.onchange = async function (e) {
//   const manuF = await getMan(`?sort=${e.target.value}`);
//   const json = await manuF.json();
//   const withIcon = json.filter(el => el.icon != null);
//   for (let i = 0; i < withIcon.length; i++) {
//     const newLi = document.createElement('li');
//     newLi.className = "item-catalog";
//     newLi.id = withIcon[i]._id;
//     newLi.innerHTML = `<a href="#"><img src="${withIcon[i].icon}" alt="logo.png" width="200" height="200"></a>`;
//     catalog.appendChild(newLi);
//   }
// }