const searchInput = document.getElementById("searchInput");
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

searchInput.addEventListener("input", () => {
  const keyword = searchInput.value.toLowerCase();
  const filtered = characters.filter(c =>
    c.name.toLowerCase().includes(keyword)
  );
  displayCharacters(filtered);
});

window.onload = () => {
  displayCharacters(characters);
};