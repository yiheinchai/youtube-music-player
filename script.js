let currentPlaylist;
const playLists = { chineseSong: 6, goodvibes: 7 };
const playListNames = Object.keys(playLists);

playListNames.forEach((ele, i) => {
  const playListCard = document.createElement("div");
  playListCard.classList.add("col-lg-3");
  playListCard.classList.add("col-md-4");
  playListCard.classList.add("col-sm-6");
  playListCard.classList.add("d-flex");
  playListCard.classList.add("justify-content-center");
  playListCard.classList.add("mb-3");
  playListCard.innerHTML = `<button type="button" style="width: 100%;" class="btn btn-outline-primary playListElement">${ele}</button>`;
  playListCard
    .querySelector(".playListElement")
    .addEventListener("click", initialisePlaylist.bind(null, ele));
  document.querySelector(".playListLibrary").insertAdjacentElement("beforeend", playListCard);
});

function initialisePlaylist(playListName) {
  document.querySelector(".audioElement").removeEventListener("ended", audioPlayer);
  document.querySelector(".playListName").innerHTML = `<h3>${playListName}</h3>`;
  document
    .querySelector(".audioElement")
    .addEventListener("ended", audioPlayer.bind(null, playListName));
}

function audioPlayer(playListName) {
  document.querySelector(".audioElement").src = `audio/${playListName} (${randomGenerator(
    1,
    playLists[playListName]
  )}).mp3`;
  document.querySelector(".audioElement").play();
}

function randomGenerator(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// console.log(
//   Array.from({ length: 10000 }, () => randomGenerator(0, chineseSong.length - 1)).reduce(
//     (acc, ele, i, arr) => {
//       return (acc += ele / arr.length);
//     },
//     0
//   )
// );

// document.querySelector(".audioElement").addEventListener("ended", function () {
//   document.querySelector(".audioElement").src = `audio/${
//     chineseSong[randomGenerator(0, chineseSong.length - 1)]
//   }.mp3`;
//   document.querySelector(".audioElement").play();
// });
