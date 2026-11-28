const singers = [
  ["周杰伦", "80年代歌曲"],
  ["林俊杰", "热门歌曲"],
  ["王力宏", "热门歌曲"],
  ["萧敬腾", "热门歌曲"],
  ["张杰", "热门歌曲"],
  ["陶喆", "热门歌曲"],
  ["白小白", "热门歌曲"],
  ["EN", "热门歌曲"]
];

const singerList = document.getElementById("singer-list");

if (singerList) {
  singerList.innerHTML = singers.map(([name, type]) => `
    <div class="singer-item">
      <strong>${name}</strong>
      <span>${type}</span>
    </div>
  `).join("");
}
