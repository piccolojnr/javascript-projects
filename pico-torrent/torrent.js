const TorrentSearchApi = require("torrent-search-api");

(async () => {
  const detail = await TorrentSearchApi.getTorrentDetails({
    title: "Gemini Man (2019) [WEBRip] [1080p] [YTS] [YIFY]",
    time: "Nov. 20th '19",
    seeds: 14594,
    peers: 7396,
    size: "1.8 GB",
    desc: "https://www.1337x.to/torrent/4129693/Gemini-Man-2019-WEBRip-1080p-YTS-YIFY/",
    provider: "1337x",
  });
  console.log(detail);
})();
