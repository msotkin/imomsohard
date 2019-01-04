var videoIds = {
  videos: [
    {
      id: "985313588345329"
    },
    {
      id: "2290850157814950"
    },
    {
      id: "1988856747874392"
    },
    {
      id: "1093011997542410"
    },
    {
      id: "254113945294149"
    },
    {
      id: "317679725718356"
    }
  ],
  bonus: [
    {
      id: "2453277944812911",
      title: "#IMOMSOHARD Live at Facebook",
      thumbnail:
        "https://scontent.xx.fbcdn.net/v/t15.0-10/s480x480/18443067_2453295644811141_4060062997572222976_n.jpg?oh=06ab3cb62f7cc5d414f7c55fe6c9daab&oe=599EAA4F",
      box: false
    },
    {
      id: "2450030385137667",
      title: "One Year Old!",
      thumbnail:
        "https://scontent.xx.fbcdn.net/v/t15.0-10/s480x480/18339949_2450054571801915_3999782689191231488_n.jpg?oh=cc8945c493709e759473e34f74fa47d7&oe=59B7000A",
      box: false
    },
    {
      id: "2440457856094920",
      title: "I Jan So Hard",
      thumbnail:
        "https://scontent.xx.fbcdn.net/v/t15.0-10/s480x480/17834588_2440465156094190_7274583192399511552_n.jpg?oh=76d76d2abad670b8ffc428fd8dd837eb&oe=59E3F3A5",
      box: false
    },
    {
      id: "2435901386550567",
      title: "I Robin So Hard",
      thumbnail:
        "https://scontent.xx.fbcdn.net/v/t15.0-10/s480x480/17883328_2435908096549896_1480987341651705856_n.jpg?oh=051d928b118a81c3fcac147b0977ccf0&oe=5990F80B",
      box: false
    },
    {
      id: "2431221960351843",
      title: "I Natalie So Hard",
      thumbnail:
        "https://scontent.xx.fbcdn.net/v/t15.0-10/s480x480/17779699_2431226313684741_2051565680976723968_n.jpg?oh=e1d99cb2fe3349ac9dbff8c15a23f3b1&oe=59937C1B",
      box: false
    },
    {
      id: "2428370387303667",
      title: "I National Tour So Hard",
      thumbnail:
        "https://scontent.xx.fbcdn.net/v/t15.0-10/s480x480/17583739_2428372193970153_783946585103925248_n.jpg?oh=714054eba764f81bec9d73c0ab3c1a38&oe=595F5A9A",
      box: false
    }
  ],
  media: [
    {
      url: "http://media3.floodradio.com/columbus/2016/12/MOM-SO-HARD.mp4",
      title: "News Channel Nebraska (Feb 2017)",
      thumbnail: "assets/nebraskavid.png",
      box: false
    },
    {
      id: "10153983845021771",
      title: "The Doctors (Nov. 2016)",
      thumbnail:
        "https://scontent.xx.fbcdn.net/v/t15.0-10/s480x480/15260435_10153982579366771_7034849456650452992_n.jpg?oh=2e5e818f86ed80acdbeeb4cb07768fdd&oe=596E8ACD",
      box: false
    }
  ],
  amazon: [
    {
      url:
        "https://s3-us-west-1.amazonaws.com/imomsohard.com/assets/amazon_compressed.mp4",
      title: "We Amazon Fashion Wardrobe So Hard",
      thumbnail: "https://i.vimeocdn.com/video/716697100.webp?mw=960&mh=540",
      box: false
    }
  ]
};

document.addEventListener("DOMContentLoaded", function() {
  for (var key in videoIds) {
    var v = document.getElementsByClassName(`${key}-wrapper`);
    var iframe;
    for (var n = 0; n < videoIds[key].length; n++) {
      // div = document.createElement("div");
      // p = document.createElement("p");
      // p.innerHTML = videoIds[key][n].title;
      // div.className = "img-wrapper";
      // div.setAttribute("data-id", videoIds[key][n].id);
      // div.setAttribute("data-box", videoIds[key][n].box);
      // if (videoIds[key][n].url)
      //   div.setAttribute("data-url", videoIds[key][n].url);
      // div.appendChild(
      //   thumb(
      //     videoIds[key][n].thumbnail,
      //     videoIds[key][n].box,
      //     videoIds[key][n].title
      //   )
      // );
      // div.appendChild(p);
      // div.onclick = Iframe;
      // v[0].appendChild(Iframe);
      iframe = !videoIds[key][n].id
        ? document.createElement("video")
        : document.createElement("iframe");
      var embed =
        "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fimomsohard%2Fvideos%2FID%2F&show_text=0&width=560";
      !videoIds[key][n].id
        ? iframe.setAttribute("src", videoIds[key][n].url)
        : iframe.setAttribute("src", embed.replace("ID", videoIds[key][n].id));
      iframe.setAttribute("width", "480");
      videoIds[key][n].box
        ? iframe.setAttribute("height", "480")
        : iframe.setAttribute("height", "270");
      iframe.setAttribute("style", "border:none;overflow:hidden");
      iframe.setAttribute("scrolling", "no");
      iframe.setAttribute("frameborder", "0");
      iframe.setAttribute("autoplay", false);
      iframe.setAttribute("controls", "true");
      iframe.setAttribute("allowTransparency", "true");
      iframe.setAttribute("allowfullscreen", "true");
      v[0].appendChild(iframe);
    }
  }
});

function thumb(url, box, title) {
  var img = document.createElement("img");
  img.setAttribute("src", url);
  img.setAttribute("alt", "IMOMSOHARD - " + title);
  if (box) {
    img.className = "box";
  }
  return img;
}

function Iframe() {
  var iframe = document.createElement("iframe");
  var embed =
    "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fimomsohard%2Fvideos%2FID%2F&show_text=0&width=560";
  this.dataset.id === "undefined"
    ? iframe.setAttribute("src", this.dataset.url)
    : iframe.setAttribute("src", embed.replace("ID", this.dataset.id));
  iframe.setAttribute("width", "480");
  this.dataset.box === "true"
    ? iframe.setAttribute("height", "480")
    : iframe.setAttribute("height", "270");
  iframe.setAttribute("style", "border:none;overflow:hidden");
  iframe.setAttribute("scrolling", "no");
  iframe.setAttribute("frameborder", "0");
  iframe.setAttribute("autoplay", "true");
  iframe.setAttribute("allowTransparency", "true");
  iframe.setAttribute("allowfullscreen", "true");
  this.parentNode.replaceChild(iframe, this);
}
