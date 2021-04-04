document.querySelector(".playMusic").addEventListener("click", function () {
  document.querySelector(".audioElement").play();
});

function randomGenerator(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const soundArr = [
  "周三",
  "岑寧兒追光者 電視劇夏至未至插曲",
  "我的北方姑娘",
  "隔壁老樊 - 這一生關於你的風景我多想能多陪你一場把前半生的風景對你講動態歌詞Lyrics",
  "雷雨心 - 記念在心中刻下你們的笑臉讓現在成為永遠動態歌詞Lyrics",
  "静悄悄",
];
// console.log(
//   Array.from({ length: 10000 }, () => randomGenerator(0, soundArr.length - 1)).reduce(
//     (acc, ele, i, arr) => {
//       return (acc += ele / arr.length);
//     },
//     0
//   )
// );

document.querySelector(".audioElement").addEventListener("ended", function () {
  document.querySelector(".audioElement").src = `audio/${
    soundArr[randomGenerator(0, soundArr.length - 1)]
  }.mp3`;
  document.querySelector(".audioElement").play();
});
