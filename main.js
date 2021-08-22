$(document).ready(function () {});
let initialData = new Array();

function loadItems() {
  fetch("data/data.json")
    .then((response) => response.json())
    .then(function setData(json) {
      (initialData = json.artists), displayArtists();
    });
}

function displayArtists() {
  let htmlString = "";
  const container = document.createElement("div");
  container.setAttribute("class", "name-list");
  /// let searchString = "";

  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  alphabet = alphabet.toUpperCase();

  for (let j = 0; j < alphabet.length; j++) {
    htmlString += `<div class='list'><span class='alpabet'>${alphabet[j]}</span></div>`;
    for (let i = 0; i < initialData.length; i++) {
      if (alphabet[j] === initialData[i].word) {
        htmlString += createHTMLstring(initialData[i]);
      }
    }
  }

  console.log(container);
  document.querySelector(".name-list").innerHTML = htmlString;
}

function createHTMLstring(initialData) {
  return `
  <div class="artist">
    <div class="thumbnail">
    <img src="${initialData.image}" class='artist-image'>
    <span class="artist-name">${initialData.name} ${initialData.korName}</span>
    </div>
    <details><summary>상세</summary>
    <div class='detail'>
        <li class='mythink'>${initialData.comment}</li>
        <li class='album'>
            음반🔻<br>
            ${initialData.albums.join(`<br>`)} 
        </li>
    </div>
    </details>
</div>`;
}

loadItems();

//displayArtists();
