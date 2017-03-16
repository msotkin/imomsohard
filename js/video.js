const videoIds = {
  webSeries: [
    { id: 2416150745192298, thumbnail: 'https://scontent.xx.fbcdn.net/v/t15.0-10/s480x480/17237877_2416161508524555_6392696002733670400_n.jpg?oh=8b73758f5313a8c8d49df9e7f78e07bb&oe=596C4B5E' },
    { id: 2411142222359817, thumbnail: 'https://scontent.xx.fbcdn.net/v/t15.0-10/s480x480/17037055_2411144665692906_4800544075553964032_n.jpg?oh=dff691eb004dbe2efb8c1a2a1b618333&oe=596205A9' },
    { id: 2407305652743474, thumbnail: 'https://scontent.xx.fbcdn.net/v/t15.0-10/s480x480/16934347_2407309889409717_3090350615830724608_n.jpg?oh=639e54eae88673147437113cf86a3524&oe=596759F1' },
    { id: 2402991443174895, thumbnail: 'https://scontent.xx.fbcdn.net/v/t15.0-10/s480x480/16776504_2402996136507759_2246713812197572608_n.jpg?oh=19125c5231cb499f7d863e3fe1957b55&oe=5964E81F' },
    { id: 2399197483554291, thumbnail: 'https://scontent.xx.fbcdn.net/v/t15.0-10/s480x480/16605279_2399198733554166_8879569924968677376_n.jpg?oh=c34d946bb4476d25a70acc4efaf9e1a0&oe=5925674F' },
    { id: 2391092254364814, thumbnail: 'https://scontent.xx.fbcdn.net/v/t15.0-10/s480x480/16148281_2391096684364371_2432453482549084160_n.jpg?oh=685721ebdd9e487bdfb081aa32fd661a&oe=597086B5' },
    { id: 2386580691482637, thumbnail: 'https://scontent.xx.fbcdn.net/v/t15.0-10/s480x480/16120944_2386584694815570_1720662962198282240_n.jpg?oh=723e7826f72ffcd9e258893ff02360a1&oe=596FC518' },
    { id: 2382536821887024, thumbnail: 'https://scontent.xx.fbcdn.net/v/t15.0-10/s480x480/15971266_2382540235220016_8512886108525166592_n.jpg?oh=2d14128f2aa4495bfe23dfbd52e818f7&oe=5968C16D' },
    { id: 2378389598968413, thumbnail: 'https://scontent.xx.fbcdn.net/v/t15.0-10/s480x480/15817493_2378394602301246_5461799426584477696_n.jpg?oh=eb1947ed37f63e5ef203314c0b396f8c&oe=5972E3DF' },
    { id: 2367908223349884, thumbnail: 'https://scontent.xx.fbcdn.net/v/t15.0-10/s480x480/15452732_2367915933349113_1176268199503593472_n.jpg?oh=f54492f7e0bda85e3d710662db14e835&oe=5969EB08' },
    { id: 2365170076957032, thumbnail: 'https://scontent.xx.fbcdn.net/v/t15.0-10/s480x480/15453052_2365175910289782_7301265165624803328_n.jpg?oh=620573b4e912f7ad492ad3b622495bb4&oe=596769A8' },
    { id: 2355499604590746, thumbnail: 'https://scontent.xx.fbcdn.net/v/t15.0-10/s480x480/15261841_2355509294589777_6553598950954237952_n.jpg?oh=aee05dbb2abc92e7c2e732d83249a357&oe=592C2B7F' },
    { id: 2339155332891840, thumbnail: 'https://scontent.xx.fbcdn.net/v/t15.0-10/s480x480/14926312_2339157559558284_4625087153909530624_n.jpg?oh=7b385735499ed6779abd406351acfc50&oe=5972DAEC' },
    { id: 2334026280071412, thumbnail: 'https://scontent.xx.fbcdn.net/v/t15.0-10/s480x480/14602295_2334028053404568_4636250611430457344_n.jpg?oh=758bcca98b851033097e2a3221464ba6&oe=595BB039' },
    { id: 2328978657242841, thumbnail: 'https://scontent.xx.fbcdn.net/v/t15.0-10/s480x480/14645847_2328981013909272_5470498028144033792_n.jpg?oh=744973cac060609e5002a70ec88d21ce&oe=59616FA0' },
    { id: 2324606081013432, thumbnail: 'https://scontent.xx.fbcdn.net/v/t15.0-10/s480x480/14694178_2324611814346192_3957174667994726400_n.jpg?oh=6d75a19cdcb860bf0eb22f065a974c93&oe=596217B8' },
    { id: 2305724129568294, thumbnail: 'https://scontent.xx.fbcdn.net/v/t15.0-10/s480x480/14146468_2305729579567749_1696808097_n.jpg?oh=c3a132dd864c7ec6c1dec14935726a87&oe=5930B0A9' },
    { id: 2301487243325316, thumbnail: 'https://scontent.xx.fbcdn.net/v/t15.0-10/s480x480/14173882_2301494699991237_935275156_n.jpg?oh=e0a495d6ff075572bc2a5683435efc28&oe=595A3EEA' },
    { id: 2297031647104209, thumbnail: 'https://scontent.xx.fbcdn.net/v/t15.0-10/s480x480/14146353_2297036160437091_428610573_n.jpg?oh=767da4a0293426c0dbc110dbf049e4d8&oe=596F3EA7' },
    { id: 2293406820800025, thumbnail: 'https://scontent.xx.fbcdn.net/v/t15.0-10/s480x480/14073656_2293409060799801_233046474_n.jpg?oh=1b6c5962838473373f65ff118be94574&oe=5931689C' },
    { id: 2289545994519441, thumbnail: 'https://scontent.xx.fbcdn.net/v/t15.0-10/s480x480/13936046_2289547874519253_841490237_n.jpg?oh=edba0cf465fbd59bb17f4457f1e87790&oe=59612D6F' },
    { id: 2285093374964703, thumbnail: 'https://scontent.xx.fbcdn.net/v/t15.0-10/s480x480/13896021_2285102598297114_1752221378_n.jpg?oh=0d4d3f44e1a54a410e66f51d31059aed&oe=5963E124' },
    { id: 2282509015223139, thumbnail: 'https://scontent.xx.fbcdn.net/v/t15.0-10/s480x480/13722632_2282563498551024_1689039218_n.jpg?oh=4d4e42672de46aeaa472f0b94c01823f&oe=59635A72' },
    { id: 2278386258968748, thumbnail: 'https://scontent.xx.fbcdn.net/v/t15.0-10/s480x480/13723161_2278389595635081_2121442641_n.jpg?oh=43fba4ea716ba7297eb7baf1ad3ccfe3&oe=5965FAA7' },
    { id: 2274972829310091, thumbnail: 'https://scontent.xx.fbcdn.net/v/t15.0-10/s480x480/13697345_2274975592643148_116166012_n.jpg?oh=6bcd3d4df5f89e4c18bf64ba2f558ac4&oe=59290E44' },
    { id: 2271659909641383, thumbnail: 'https://scontent.xx.fbcdn.net/v/t15.0-10/s480x480/13537905_2271661006307940_225423023_n.jpg?oh=ce7a6e3b3e79074f1f01f5c9bb665e1e&oe=59650AB1' },
    { id: 2269083873232320, thumbnail: 'https://scontent.xx.fbcdn.net/v/t15.0-10/s480x480/13538064_2269086343232073_1776981505_n.jpg?oh=3d45f562704573895aa00e40147ffa4c&oe=596E2DEA' },
    { id: 2265953533545354, thumbnail: 'https://scontent.xx.fbcdn.net/v/t15.0-10/s480x480/13481586_2265960063544701_2123839948_n.jpg?oh=109369d064eb66fbe1f57d4c989f6d7c&oe=596DBE95' },
    { id: 2265134833627224, thumbnail: 'https://scontent.xx.fbcdn.net/v/t15.0-10/s480x480/13481541_2265136876960353_1842857573_n.jpg?oh=e473c7b6958925d14b62151e03c8dc51&oe=596432EC' },
    { id: 2262950157179025, thumbnail: 'https://scontent.xx.fbcdn.net/v/t15.0-10/s480x480/13432487_2262955180511856_1338357821_n.jpg?oh=b9cf083e3741e235e7d7a43f6760ab47&oe=596CACA5' },
    { id: 2259839130823461, thumbnail: 'https://scontent.xx.fbcdn.net/v/t15.0-10/s480x480/13432618_2259844240822950_1425196513_n.jpg?oh=80a527e1baece39210c53a5b435067f0&oe=59309C91' },
    { id: 2256837864456921, thumbnail: 'https://scontent.xx.fbcdn.net/v/t15.0-10/s480x480/12419935_2256839241123450_1322952364_n.jpg?oh=a79918f8b02c27164c9eba8e1061c6fa&oe=5931B528' },
    { id: 2254073441400030, thumbnail: 'https://scontent.xx.fbcdn.net/v/t15.0-10/s480x480/12419951_2254076184733089_86808304_n.jpg?oh=0b4a0c6712c8daaf60620926d4212f7f&oe=5964BEF6' },
    { id: 2252399161567458, thumbnail: 'https://scontent.xx.fbcdn.net/v/t15.0-10/s480x480/12474462_2252400961567278_1820057831_n.jpg?oh=672547057f7cd22be4c0b351f11cbac4&oe=5972291F' },
    { id: 2250487678425273, thumbnail: 'https://scontent.xx.fbcdn.net/v/t15.0-10/s480x480/13179489_2250488881758486_1766141345_n.jpg?oh=7c9b0ad21a2467066182c981d5c9a9ed&oe=596BA252' },
    { id: 2244284382378936, thumbnail: 'https://scontent.xx.fbcdn.net/v/t15.0-10/s480x480/13179518_2244286312378743_1468800150_n.jpg?oh=e2dbf98abe24331db1ed9d29fb60f5f4&oe=596BF6CC' },
    { id: 2243849925755715, thumbnail: 'https://scontent.xx.fbcdn.net/v/t15.0-10/s480x480/13176839_2243852315755476_1868821364_n.jpg?oh=200a1db502383a06f09107caf383cea3&oe=5928ACC3' }
  ],
  bonus: [
    { id: 2362031160604257, thumbnail: 'https://scontent.xx.fbcdn.net/v/t15.0-10/15390107_2362053243935382_71279041021214720_n.jpg?oh=17645952095def4cd5f5f4e8991894b6&oe=595DBD1C' },
    { id: 2363967550410618, thumbnail: 'https://scontent.xx.fbcdn.net/v/t15.0-10/s480x480/15453029_2363968830410490_6568566697232433152_n.jpg?oh=d5f6556d6019cb790875ce7b68007134&oe=5972614D' },
    { id: 2376691582471548, thumbnail: 'https://scontent.xx.fbcdn.net/v/t15.0-10/15816208_2376705495803490_3307626933956640768_n.jpg?oh=ac5a34c636b71bae7ef69105305133cc&oe=59603D22' },
    { id: 2402188006588572, thumbnail: 'https://scontent.xx.fbcdn.net/v/t15.0-10/s480x480/16753762_2402189199921786_4555121226124623872_n.jpg?oh=0437729c8c9018c856e047c9647acedc&oe=595B283B' },
    { id: 2412254875581885, thumbnail: 'https://scontent.xx.fbcdn.net/v/t15.0-10/s480x480/17093686_2412255935581779_1249082399275352064_n.jpg?oh=646fc1838f04d38513d443af94d11abd&oe=5925E341' },
    { id: 2330017523805621, thumbnail: 'https://scontent.xx.fbcdn.net/v/t15.0-10/p480x480/14645885_2330030597137647_5291264576115965952_n.jpg?oh=d5d3eb47d5e8f580c3d73dfbbd52e784&oe=596AF44D' },
    { id: 2401516739989032, thumbnail: 'https://scontent.xx.fbcdn.net/v/t15.0-10/16753266_2401516903322349_1600635617165705216_n.jpg?oh=a1ad2f28fc6683201063af24db5ed57e&oe=59720F4D' }
  ],
  media: [
    { id: 10153983845021771, thumbnail: 'https://scontent.xx.fbcdn.net/v/t15.0-10/s480x480/15260435_10153982579366771_7034849456650452992_n.jpg?oh=2e5e818f86ed80acdbeeb4cb07768fdd&oe=596E8ACD' },
    { id: 2365982476875792, thumbnail: 'https://scontent.xx.fbcdn.net/v/t15.0-10/p480x480/15452764_2365982576875782_6848821937590763520_n.jpg?oh=d0fd10aa1c158abb5081171f097829f3&oe=59730E81'}
  ]
}

document.addEventListener("DOMContentLoaded",
  function() {
    for (let key in videoIds) {
      const v = document.getElementsByClassName(`${key}-wrapper`)
      let div
      for (let n = 0; n < videoIds[key].length; n++) {
        div = document.createElement("div");
        div.setAttribute("data-id", videoIds[key][n].id);
        div.innerHTML = thumb(videoIds[key][n].thumbnail);
        div.onclick = Iframe;
        v[0].appendChild(div);
      }
    }
});

function thumb(url) {
    var thumb = '<img src="URL">',
        play = '<div class="play"></div>';
    return thumb.replace("URL", url) + play;
}

function Iframe() {
    var iframe = document.createElement("iframe");
    var embed = "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fimomsohard%2Fvideos%2FID%2F&show_text=0&width=560";
    iframe.setAttribute("src", embed.replace("ID", this.dataset.id));
    iframe.setAttribute("width", "480")
    iframe.setAttribute("height", "270")
    iframe.setAttribute("style", "border:none;overflow:hidden")
    iframe.setAttribute("scrolling", "no")
    iframe.setAttribute("frameborder", "0");
    iframe.setAttribute("autoplay", "true");
    iframe.setAttribute("allowTransparency", "true");
    iframe.setAttribute("allowfullscreen", "true");
    this.parentNode.replaceChild(iframe, this);
}