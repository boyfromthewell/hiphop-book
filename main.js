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
  //let searchString = document.getElementById("search-box").value;
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
        <li class='mythink'>comment : ${initialData.comment}</li>
        <li class='album'>
            음반🔻<br>
            ${initialData.albums.join(`<br>`)} 
        </li>
    </div>
    </details>
</div>`;
}

function filter() {
  let value, name, item;

  value = document.getElementById("search-box").value.toUpperCase();
  item = document.getElementsByClassName("artist");
  list = document.querySelectorAll(".artist");

  menuList = document.querySelectorAll(".list");

  for (let i = 0; i < item.length; i++) {
    name = item[i].getElementsByClassName("artist-name");

    if (name[0].innerHTML.toUpperCase().indexOf(value) > -1) {
      item[i].style.display = "block";
      list[i].scrollIntoView({ behavior: "smooth", block:"end", inline:"nearest"});
    } else {
      item[i].style.display = "none";
    }
  }
}

loadItems();

//displayArtists();
