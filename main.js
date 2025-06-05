const searchInput = document.getElementById("searchInput");
const attributeFilter = document.getElementById("attributeFilter");
const weaponFilter = document.getElementById("weaponFilter");
const sortOption = document.getElementById("sortOption");
const characterList = document.getElementById("characterList");

function displayCharacters(list) {
  characterList.innerHTML = "";
  list.forEach(char => {
    const card = document.createElement("div");
    card.className = "character-card";
    card.innerHTML = `
      <img src="${char.image}" alt="${char.name}">
      <h3>${char.name}</h3>
      <p>属性: ${char.attribute}</p>
      <p>武器: ${char.weapon}</p>
      <p>CV: ${char.cv}</p>
    `;
    characterList.appendChild(card);
  });
}

function updateList() {
  const keyword = searchInput.value.toLowerCase();
  const attr = attributeFilter.value;
  const weapon = weaponFilter.value;
  const sort = sortOption.value;

  let filtered = characters.filter(c => {
    const matchesName = c.name.toLowerCase().includes(keyword);
    const matchesAttr = !attr || c.attribute === attr;
    const matchesWeapon = !weapon || c.weapon === weapon;
    return matchesName && matchesAttr && matchesWeapon;
  });

  if (sort === "name") {
    filtered.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sort === "cv") {
    filtered.sort((a, b) => a.cv.localeCompare(b.cv));
  }

  displayCharacters(filtered);
}

searchInput.addEventListener("input", updateList);
attributeFilter.addEventListener("change", updateList);
weaponFilter.addEventListener("change", updateList);
sortOption.addEventListener("change", updateList);

window.onload = () => {
  updateList();
};
