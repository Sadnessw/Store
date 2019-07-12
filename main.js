const images = document.querySelectorAll('li a img');


fetch('https://speisekarte.telenorma.info/api/shops/Damfastore%20Magdeburg/manufacturers?sort=1')
.then(res => res.json())
.then(json => setIcon(json))
.catch(rej => console.log(`o_O ${rej}`));


function setIcon(obj) {
  const withIcon = obj.filter(el => el.icon != null);
  const newLi = document.createElement('li');
  newLi.className = "item-catalog";
  newLi.innerHTML = '<a href="#"><img alt="logo.png" width="200" height="200"></a>';
  console.log(newLi)
  for(let i = 0; i < withIcon.length; i++) { 

    // images[i].setAttribute('src', withIcon[i].icon);
    // images[i].setAttribute('id', obj._id)
  }
  console.log(withIcon)
}