var videoIds = {
  videos: [
    { id: '2458307990976573', title: 'I Swimsuit Season So Hard', thumbnail: 'https://scontent.xx.fbcdn.net/v/t15.0-10/s480x480/18597627_2458343584306347_4732551036701507584_n.jpg?oh=763de4dbb91e7fa397c1817f25968c7d&oe=59E06686', box: false },
    { id: '2454272578046781', title: 'I Grandmom So Hard', thumbnail: 'https://scontent.xx.fbcdn.net/v/t15.0-10/s720x720/18466996_2454293481378024_1434747504699637760_n.jpg?oh=dfb78096153205c67640353be3a4bd7d&oe=59A43A91', box: false },
    { id: '2442461789227860', title: 'I Stress So Hard', thumbnail: 'https://scontent.xx.fbcdn.net/v/t15.0-10/s480x480/18072241_2442466869227352_618594948412866560_n.jpg?oh=a0ca5a7928310fa2c9b8b2871cf9ee0d&oe=59E23C50', box: false },
    { id: '2438857516254954', title: 'I Mom Friend So Hard', thumbnail: 'https://scontent.xx.fbcdn.net/v/t15.0-10/s480x480/17950956_2438861996254506_6818517722092011520_n.jpg?oh=8a238fbde9868d64d2420ee73aeb23f6&oe=599F0D8F', box: false },
    { id: '2424411881032851', title: 'I Grandparent So Hard: Part 1', thumbnail: 'https://scontent.xx.fbcdn.net/v/t15.0-10/s480x480/17460301_2424415651032474_2646441264475537408_n.jpg?oh=c732f88c5ae2c9ddd882e141bb7a844f&oe=596264F8', box: false },
    { id: '2420441881429851', title: 'I Nighttime Routine So Hard', thumbnail: 'https://scontent.xx.fbcdn.net/v/t15.0-10/s480x480/17335744_2420445184762854_2763789610772332544_n.jpg?oh=12ba3c2d64488612b5b98278eda3c0e0&oe=5962BA9D', box: false },
    { id: '2416150745192298', title: 'I Money So Hard', thumbnail: 'https://scontent.xx.fbcdn.net/v/t15.0-10/s480x480/17237877_2416161508524555_6392696002733670400_n.jpg?oh=8b73758f5313a8c8d49df9e7f78e07bb&oe=596C4B5E', box: false },
    { id: '2411142222359817', title: 'I Bedtime Story So Hard: True Crimes', thumbnail: 'https://scontent.xx.fbcdn.net/v/t15.0-10/s480x480/17037055_2411144665692906_4800544075553964032_n.jpg?oh=dff691eb004dbe2efb8c1a2a1b618333&oe=596205A9', box: false },
    { id: '2407305652743474', title: 'I Babysitter So Hard', thumbnail: 'https://scontent.xx.fbcdn.net/v/t15.0-10/s480x480/16934347_2407309889409717_3090350615830724608_n.jpg?oh=639e54eae88673147437113cf86a3524&oe=596759F1', box: false },
    { id: '2402991443174895', title: 'I Cold and Flu So Hard', thumbnail: 'https://scontent.xx.fbcdn.net/v/t15.0-10/s480x480/16776504_2402996136507759_2246713812197572608_n.jpg?oh=19125c5231cb499f7d863e3fe1957b55&oe=5964E81F', box: false },
    { id: '2399197483554291', title: 'I Girl Crush So Hard', thumbnail: 'https://scontent.xx.fbcdn.net/v/t15.0-10/s480x480/16605279_2399198733554166_8879569924968677376_n.jpg?oh=1f9ead163361294f391da8873bb00c78&oe=599C0E4F', box: false },
    { id: '2391092254364814', title: 'I Diesel So Hard', thumbnail: 'https://scontent.xx.fbcdn.net/v/t15.0-10/s480x480/16148281_2391096684364371_2432453482549084160_n.jpg?oh=685721ebdd9e487bdfb081aa32fd661a&oe=597086B5', box: false },
    { id: '2386580691482637', title: 'I PPD So Hard', thumbnail: 'https://scontent.xx.fbcdn.net/v/t15.0-10/s480x480/16120944_2386584694815570_1720662962198282240_n.jpg?oh=723e7826f72ffcd9e258893ff02360a1&oe=596FC518', box: false },
    { id: '2382536821887024', title: 'I Job So Hard', thumbnail: 'https://scontent.xx.fbcdn.net/v/t15.0-10/s480x480/15971266_2382540235220016_8512886108525166592_n.jpg?oh=2d14128f2aa4495bfe23dfbd52e818f7&oe=5968C16D', box: false },
    { id: '2378389598968413', title: 'I Food So Hard', thumbnail: 'https://scontent.xx.fbcdn.net/v/t15.0-10/s480x480/15817493_2378394602301246_5461799426584477696_n.jpg?oh=eb1947ed37f63e5ef203314c0b396f8c&oe=5972E3DF', box: false },
    { id: '2367908223349884', title: 'I Backup Carpet So Hard', thumbnail: 'https://scontent.xx.fbcdn.net/v/t15.0-10/s480x480/15452732_2367915933349113_1176268199503593472_n.jpg?oh=f54492f7e0bda85e3d710662db14e835&oe=5969EB08', box: false },
    { id: '2365170076957032', title: 'I Robot So Hard', thumbnail: 'https://scontent.xx.fbcdn.net/v/t15.0-10/s480x480/15453052_2365175910289782_7301265165624803328_n.jpg?oh=620573b4e912f7ad492ad3b622495bb4&oe=596769A8', box: false },
    { id: '2355499604590746', title: 'I 12 Days So Hard', thumbnail: 'https://scontent.xx.fbcdn.net/v/t15.0-10/s480x480/15261841_2355509294589777_6553598950954237952_n.jpg?oh=94a0479ec948cd410beea0d0725b176d&oe=59A2D27F', box: false },
    { id: '2339155332891840', title: 'I Fitness So Hard', thumbnail: 'https://scontent.xx.fbcdn.net/v/t15.0-10/s480x480/14926312_2339157559558284_4625087153909530624_n.jpg?oh=7b385735499ed6779abd406351acfc50&oe=5972DAEC', box: false },
    { id: '2334026280071412', title: 'I Halloween So Hard', thumbnail: 'https://scontent.xx.fbcdn.net/v/t15.0-10/s480x480/14602295_2334028053404568_4636250611430457344_n.jpg?oh=758bcca98b851033097e2a3221464ba6&oe=595BB039', box: false },
    { id: '2328978657242841', title: 'I Friend So Hard', thumbnail: 'https://scontent.xx.fbcdn.net/v/t15.0-10/s480x480/14645847_2328981013909272_5470498028144033792_n.jpg?oh=744973cac060609e5002a70ec88d21ce&oe=59616FA0', box: false },
    { id: '2324606081013432', title: 'I Self Check So Hard', thumbnail: 'https://scontent.xx.fbcdn.net/v/t15.0-10/s480x480/14694178_2324611814346192_3957174667994726400_n.jpg?oh=6d75a19cdcb860bf0eb22f065a974c93&oe=596217B8', box: false },
    { id: '2305724129568294', title: 'I Back To School So Hard', thumbnail: 'https://scontent.xx.fbcdn.net/v/t15.0-10/s480x480/14146468_2305729579567749_1696808097_n.jpg?oh=c3a132dd864c7ec6c1dec14935726a87&oe=5930B0A9', box: false },
    { id: '2301487243325316', title: 'I Own My Truth So Hard', thumbnail: 'https://scontent.xx.fbcdn.net/v/t15.0-10/s480x480/14173882_2301494699991237_935275156_n.jpg?oh=e0a495d6ff075572bc2a5683435efc28&oe=595A3EEA', box: false },
    { id: '2297031647104209', title: 'I Lie So Hard', thumbnail: 'https://scontent.xx.fbcdn.net/v/t15.0-10/s480x480/14146353_2297036160437091_428610573_n.jpg?oh=767da4a0293426c0dbc110dbf049e4d8&oe=596F3EA7', box: false },
    { id: '2293406820800025', title: 'I Vacation So Hard', thumbnail: 'https://scontent.xx.fbcdn.net/v/t15.0-10/s480x480/14073656_2293409060799801_233046474_n.jpg?oh=1b6c5962838473373f65ff118be94574&oe=5931689C', box: false },
    { id: '2289545994519441', title: 'I Chose My Pants So Hard', thumbnail: 'https://scontent.xx.fbcdn.net/v/t15.0-10/s480x480/13936046_2289547874519253_841490237_n.jpg?oh=edba0cf465fbd59bb17f4457f1e87790&oe=59612D6F', box: false },
    { id: '2285093374964703', title: 'I Summer So Hard Part 2', thumbnail: 'https://scontent.xx.fbcdn.net/v/t15.0-10/s480x480/13896021_2285102598297114_1752221378_n.jpg?oh=0d4d3f44e1a54a410e66f51d31059aed&oe=5963E124', box: false },
    { id: '2282509015223139', title: 'I Summer So Hard', thumbnail: 'https://scontent.xx.fbcdn.net/v/t15.0-10/s480x480/13722632_2282563498551024_1689039218_n.jpg?oh=4d4e42672de46aeaa472f0b94c01823f&oe=59635A72', box: false },
    { id: '2278386258968748', title: 'I Spanx So Hard', thumbnail: 'https://scontent.xx.fbcdn.net/v/t15.0-10/s480x480/13723161_2278389595635081_2121442641_n.jpg?oh=43fba4ea716ba7297eb7baf1ad3ccfe3&oe=5965FAA7', box: false },
    { id: '2274972829310091', title: 'I Cycle So Hard', thumbnail: 'https://scontent.xx.fbcdn.net/v/t15.0-10/s480x480/13697345_2274975592643148_116166012_n.jpg?oh=93d54e00ecb8aa33adc7585250881017&oe=599FB544', box: false },
    { id: '2271659909641383', title: 'I Body Hair So Hard (Cheers Part 2)', thumbnail: 'https://scontent.xx.fbcdn.net/v/t15.0-10/s480x480/13537905_2271661006307940_225423023_n.jpg?oh=ce7a6e3b3e79074f1f01f5c9bb665e1e&oe=59650AB1', box: false },
    { id: '2269083873232320', title: 'I Beauty So Hard', thumbnail: 'https://scontent.xx.fbcdn.net/v/t15.0-10/s480x480/13538064_2269086343232073_1776981505_n.jpg?oh=3d45f562704573895aa00e40147ffa4c&oe=596E2DEA', box: false },
    { id: '2265953533545354', title: 'I Cheers So Hard', thumbnail: 'https://scontent.xx.fbcdn.net/v/t15.0-10/s480x480/13481586_2265960063544701_2123839948_n.jpg?oh=109369d064eb66fbe1f57d4c989f6d7c&oe=596DBE95', box: false },
    { id: '2265134833627224', title: 'I Boog So Hard', thumbnail: 'https://scontent.xx.fbcdn.net/v/t15.0-10/s480x480/13481541_2265136876960353_1842857573_n.jpg?oh=e473c7b6958925d14b62151e03c8dc51&oe=596432EC', box: false },
    { id: '2262950157179025', title: 'I Father\'s Day So Hard', thumbnail: 'https://scontent.xx.fbcdn.net/v/t15.0-10/s480x480/13432487_2262955180511856_1338357821_n.jpg?oh=b9cf083e3741e235e7d7a43f6760ab47&oe=596CACA5', box: false },
    { id: '2259839130823461', title: 'I Mom Bag So Hard', thumbnail: 'https://scontent.xx.fbcdn.net/v/t15.0-10/s480x480/13432618_2259844240822950_1425196513_n.jpg?oh=80a527e1baece39210c53a5b435067f0&oe=59309C91', box: false },
    { id: '2256837864456921', title: 'I Pinterest So Hard', thumbnail: 'https://scontent.xx.fbcdn.net/v/t15.0-10/s480x480/12419935_2256839241123450_1322952364_n.jpg?oh=a79918f8b02c27164c9eba8e1061c6fa&oe=5931B528', box: false },
    { id: '2254073441400030', title: 'I Right Boob So Hard', thumbnail: 'https://scontent.xx.fbcdn.net/v/t15.0-10/s480x480/12419951_2254076184733089_86808304_n.jpg?oh=0b4a0c6712c8daaf60620926d4212f7f&oe=5964BEF6', box: false },
    { id: '2252399161567458', title: 'I \'Roid So Hard', thumbnail: 'https://scontent.xx.fbcdn.net/v/t15.0-10/s480x480/12474462_2252400961567278_1820057831_n.jpg?oh=672547057f7cd22be4c0b351f11cbac4&oe=5972291F', box: false },
    { id: '2250487678425273', title: 'I Game of Thrones So Hard', thumbnail: 'https://scontent.xx.fbcdn.net/v/t15.0-10/s480x480/13179489_2250488881758486_1766141345_n.jpg?oh=7c9b0ad21a2467066182c981d5c9a9ed&oe=596BA252', box: false },
    { id: '2246953958778645', title: 'We (Don\'t) Sleep So Hard', thumbnail: 'https://scontent.xx.fbcdn.net/v/t15.0-10/s480x480/13179626_2246930132114361_113773412_n.jpg?oh=d25b894e81d3bd6feda6f1586b210f99&oe=597388A3', box: false },
    { id: '2244284382378936', title: 'I Mother\'s Day So Hard', thumbnail: 'https://scontent.xx.fbcdn.net/v/t15.0-10/s480x480/13179518_2244286312378743_1468800150_n.jpg?oh=e2dbf98abe24331db1ed9d29fb60f5f4&oe=596BF6CC', box: false },
    { id: '2243849925755715', title: '#imomsohard', thumbnail: 'https://scontent.xx.fbcdn.net/v/t15.0-10/s480x480/13176839_2243852315755476_1868821364_n.jpg?oh=70a05571285fee6cbc4f8aaf9d92635e&oe=599F53C3', box: false }
  ],
  bonus: [
    { id: '2453277944812911', title: '#IMOMSOHARD Live at Facebook', thumbnail: 'https://scontent.xx.fbcdn.net/v/t15.0-10/s480x480/18443067_2453295644811141_4060062997572222976_n.jpg?oh=06ab3cb62f7cc5d414f7c55fe6c9daab&oe=599EAA4F', box: false },
    { id: '2450030385137667', title: 'One Year Old!', thumbnail: 'https://scontent.xx.fbcdn.net/v/t15.0-10/s480x480/18339949_2450054571801915_3999782689191231488_n.jpg?oh=cc8945c493709e759473e34f74fa47d7&oe=59B7000A', box: false },
    { id: '2440457856094920', title: 'I Jan So Hard', thumbnail: 'https://scontent.xx.fbcdn.net/v/t15.0-10/s480x480/17834588_2440465156094190_7274583192399511552_n.jpg?oh=76d76d2abad670b8ffc428fd8dd837eb&oe=59E3F3A5', box: false },
    { id: '2435901386550567', title: 'I Robin So Hard', thumbnail: 'https://scontent.xx.fbcdn.net/v/t15.0-10/s480x480/17883328_2435908096549896_1480987341651705856_n.jpg?oh=051d928b118a81c3fcac147b0977ccf0&oe=5990F80B', box: false },
    { id: '2431221960351843', title: 'I Natalie So Hard', thumbnail: 'https://scontent.xx.fbcdn.net/v/t15.0-10/s480x480/17779699_2431226313684741_2051565680976723968_n.jpg?oh=e1d99cb2fe3349ac9dbff8c15a23f3b1&oe=59937C1B', box: false },
    { id: '2428370387303667', title: 'I National Tour So Hard', thumbnail: 'https://scontent.xx.fbcdn.net/v/t15.0-10/s480x480/17583739_2428372193970153_783946585103925248_n.jpg?oh=714054eba764f81bec9d73c0ab3c1a38&oe=595F5A9A', box: false },
    { id: '2421732394634133', title: 'Facebook LIVE: I St. Paddy\'s Day So Hard', thumbnail: 'https://scontent.xx.fbcdn.net/v/t15.0-10/s480x480/17391143_2421752027965503_4274985725159538688_n.jpg?oh=116d534dab07b26b4f081b567edd74e8&oe=59544F82', box: false },
    { id: '2362031160604257', title: 'Facebook LIVE: I Friday Night So Hard', thumbnail: 'https://scontent.xx.fbcdn.net/v/t15.0-10/15390107_2362053243935382_71279041021214720_n.jpg?oh=17645952095def4cd5f5f4e8991894b6&oe=595DBD1C', box: false },
    { id: '2363967550410618', title: 'I 12 Days So Hard (With Words)', thumbnail: 'https://scontent.xx.fbcdn.net/v/t15.0-10/s480x480/15453029_2363968830410490_6568566697232433152_n.jpg?oh=d5f6556d6019cb790875ce7b68007134&oe=5972614D', box: false },
    { id: '2376691582471548', title: 'Facebook LIVE: I NYE So Hard', thumbnail: 'https://scontent.xx.fbcdn.net/v/t15.0-10/15816208_2376705495803490_3307626933956640768_n.jpg?oh=ac5a34c636b71bae7ef69105305133cc&oe=59603D22', box: false },
    { id: '2402188006588572', title: 'Shortie: I Valentine\'s Day So Hard', thumbnail: 'https://scontent.xx.fbcdn.net/v/t15.0-10/s480x480/16753762_2402189199921786_4555121226124623872_n.jpg?oh=0437729c8c9018c856e047c9647acedc&oe=595B283B', box: false },
    { id: '2412254875581885', title: 'Shortie: I Creed So Hard', thumbnail: 'https://scontent.xx.fbcdn.net/v/t15.0-10/s480x480/17093686_2412255935581779_1249082399275352064_n.jpg?oh=445ca6ad1745cf11f86a1cb3ba4d183e&oe=599C8A41', box: false },
    { id: '2330017523805621', title: 'Facebook LIVE: I Learn at Facebook So Hard', thumbnail: 'https://scontent.xx.fbcdn.net/v/t15.0-10/p480x480/14645885_2330030597137647_5291264576115965952_n.jpg?oh=d5d3eb47d5e8f580c3d73dfbbd52e784&oe=596AF44D', box: true },
    { id: '2401516739989032', title: 'Husband Forgets Candy for Pinata So Hard', thumbnail: 'https://scontent.xx.fbcdn.net/v/t15.0-10/16753266_2401516903322349_1600635617165705216_n.jpg?oh=a1ad2f28fc6683201063af24db5ed57e&oe=59720F4D', box: true }
  ],
  media: [
    { url: 'http://media3.floodradio.com/columbus/2016/12/MOM-SO-HARD.mp4', title: 'News Channel Nebraska (Feb 2017)', thumbnail: 'assets/nebraskavid.png', box: false },
    { url: 'http://mediaassets.kmtv.com/video/video_studio/2016/09/30/I_Mom_So_Hard_9_30_16_561742_1200.mp4', title: 'The Morning Blend (Oct 2016)', thumbnail: 'http://mediaassets.kmtv.com/photo/2016/09/30/16x9/I_Mom_So_Hard_9_30_16_0_47162525_ver1.0_640_480.jpg', box: false },
    { id: '10153983845021771', title: 'The Doctors (Nov. 2016)', thumbnail: 'https://scontent.xx.fbcdn.net/v/t15.0-10/s480x480/15260435_10153982579366771_7034849456650452992_n.jpg?oh=2e5e818f86ed80acdbeeb4cb07768fdd&oe=596E8ACD', box: false },
    { id: '2365982476875792', title: 'Hooray For Half a Million Likes!', thumbnail: 'https://scontent.xx.fbcdn.net/v/t15.0-10/p480x480/15452764_2365982576875782_6848821937590763520_n.jpg?oh=d0fd10aa1c158abb5081171f097829f3&oe=59730E81', box: true }
  ]
}

document.addEventListener("DOMContentLoaded",
  function() {
    for (var key in videoIds) {
      var v = document.getElementsByClassName(`${key}-wrapper`)
      var div
      for (var n = 0; n < videoIds[key].length; n++) {
        div = document.createElement("div");
        p = document.createElement("p");
        p.innerHTML = videoIds[key][n].title;
        div.className = "img-wrapper"
        div.setAttribute("data-id", videoIds[key][n].id);
        div.setAttribute("data-box", videoIds[key][n].box);
        if (videoIds[key][n].url) div.setAttribute("data-url", videoIds[key][n].url);
        div.appendChild(thumb(videoIds[key][n].thumbnail, videoIds[key][n].box, videoIds[key][n].title));
        div.appendChild(p);
        div.onclick = Iframe;
        v[0].appendChild(div);
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
    var embed = "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fimomsohard%2Fvideos%2FID%2F&show_text=0&width=560";
    this.dataset.id === "undefined" ? iframe.setAttribute("src", this.dataset.url) : iframe.setAttribute("src", embed.replace("ID", this.dataset.id));
    iframe.setAttribute("width", "480")
    this.dataset.box === "true" ? iframe.setAttribute("height", "480") : iframe.setAttribute("height", "270")
    iframe.setAttribute("style", "border:none;overflow:hidden")
    iframe.setAttribute("scrolling", "no")
    iframe.setAttribute("frameborder", "0");
    iframe.setAttribute("autoplay", "true");
    iframe.setAttribute("allowTransparency", "true");
    iframe.setAttribute("allowfullscreen", "true");
    this.parentNode.replaceChild(iframe, this);
}