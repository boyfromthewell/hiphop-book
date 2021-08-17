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
  const container = $(".name-list");

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
    container.html(htmlString);
  }

function createHTMLstring(initialData) {
  return `
  <div class="artist">
    <div class="thumbnail">
    <img src="${initialData.image}" class='artist-image'>
    <span class="artist-name">${initialData.name}</span>
    </div>
    <ul class='detail'>
        <li class='mythink'>${initialData.comment}</li>
        <li class='album'>
            음반🔻<br>
            2015.07.01 FRESH AS F<br>
            2015.11.19 7 Gold Chains<br>
            2016.06.18 Tony MIXTAPE<br>
            2017.02.23 Better<br>
            2017.06.24 Hennessy<br>
            2017.12.06 Downtown Baby EP<br>
            2018.04.30 Drink Slow Henny<br>
            2018.06.18 싸가지 (So Rude)<br>
            2018.09.02 데려가<br>
            2018.11.19 BLOO IN WONDERLAND EP<br>
            2019.09.25 It's not Love I'm just Drunk EP<br>
            2020.07.23 Hey, go smile<br>
            2020.09.10 내 탓<br>
            2021.02.04 DRAMA<br>
            2021.03.25 Bloo Story<br>
            2021.06.17 BLOO IN WONDERLAND 2</li>
    </ul>
</div>`;
}

loadItems();
displayArtists();
