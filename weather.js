let data = {
  "coord": {
    "lon": 116.3972,
    "lat": 39.9075
  },
  "weather": [
    {
      "id": 803,
      "main": "Clouds",
      "description": "曇りがち",
      "icon": "04d"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 9.94,
    "feels_like": 8.65,
    "temp_min": 9.94,
    "temp_max": 9.94,
    "pressure": 1022,
    "humidity": 14,
    "sea_level": 1022,
    "grnd_level": 1016
  },
  "visibility": 10000,
  "wind": {
    "speed": 2.65,
    "deg": 197,
    "gust": 4.84
  },
  "clouds": {
    "all": 53
  },
  "dt": 1646542386,
  "sys": {
    "type": 1,
    "id": 9609,
    "country": "CN",
    "sunrise": 1646520066,
    "sunset": 1646561447
  },
  "timezone": 28800,
  "id": 1816670,
  "name": "北京市",
  "cod": 200
};

////////// 課題3-2 ここからプログラムを書こう
let midasi = document.querySelector('li#midasi1');
midasi.textContent = '◎世界の天気';
midasi.style.fontSize = '30px';
midasi.style.backgroundColor = 'rgb(0, 204, 255)';

let naiyou = document.querySelector('ul#naiyou1');
naiyou.style.display = 'inline-grid';
naiyou.style.width = '98%';
naiyou.style.gridTemplateColumns = '1fr 1fr';
naiyou.style.gridGap = '3px';
naiyou.style.borderStyle = 'ridge';
naiyou.style.borderColor = 'skyblue';
naiyou.style.borderWidth = '10px';


li1.style.fontSize = '20px';
li1.style.backgroundColor = 'aqua';
li1.style.margin = '5px';

li2.style.fontSize = '20px';
li2.style.backgroundColor = 'aqua';
li2.style.margin = '5px';

li3.style.fontSize = '20px';
li3.style.backgroundColor = 'aqua';
li3.style.margin = '5px';

li4.style.fontSize = '20px';
li4.style.backgroundColor = 'aqua';
li4.style.margin = '5px';

li5.style.fontSize = '20px';
li5.style.backgroundColor = 'aqua';
li5.style.margin = '5px';

li6.style.fontSize = '20px';
li6.style.backgroundColor = 'aqua';
li6.style.margin = '5px';

li7.style.fontSize = '20px';
li7.style.backgroundColor = 'aqua';
li7.style.margin = '5px';

li8.style.fontSize = '20px';
li8.style.backgroundColor = 'aqua';
li8.style.margin = '5px';

let a = document.querySelector('#print');
a.addEventListener('click', result);
let search = document.querySelector('select[id="country"]');


function result() {
  let url = 'https://www.nishita-lab.org/web-contents/jsons/openweather/' + search.value + '.json';

  axios.get(url).then(showResult).catch(showError).then(finish);
}

function showResult(resp) {
  let data = resp.data;

  if(typeof data === 'string') {
    data = JSON.parse(data);
  }
  console.log('選択された国名: ' + data.name);
  console.log(data);

  console.log("天気: " + data.weather[0].description);
  console.log("緯度: " + data.coord.lon);
  console.log("経度: " + data.coord.lat);
  console.log("最低気温: " + data.main.temp_min);
  console.log("最高気温: " + data.main.temp_max);
  console.log("風向: " + data.wind.deg);
  console.log("風速: " + data.wind.speed);
  console.log("湿度: " + data.main.humidity);
  console.log("都市名: " + data.name);

  let search = document.querySelector('select[id="country"]');
  midasi.textContent = '◎' + data.name + 'の天気: ' + data.weather[0].description;

  let li1 = document.querySelector('li#li1');
  li1.textContent = '緯度:  ' + data.coord.lon + '度';
  
  let li2 = document.querySelector('li#li2');
  li2.textContent = "経度: " + data.coord.lat + '度';
  
  let li3 = document.querySelector('li#li3');
  li3.textContent = "最低気温: " + data.main.temp_min + '℃';

  let li4 = document.querySelector('li#li4');
  li4.textContent = "最高気温: " + data.main.temp_max + '℃';

  let li5 = document.querySelector('li#li5');
  li5.textContent = "風向: " + data.wind.deg;

  let li6 = document.querySelector('li#li6');
  li6.textContent = "風速: " + data.wind.speed + 'm/s';

  let li7 = document.querySelector('li#li7');
  li7.textContent = "湿度: " + data.main.humidity + '%';

  let li8 = document.querySelector('li#li8');
  li8.textContent = "都市名: " + data.name;
}

function showError(err) {
  console.log(err);
}

function finish() {
  console.log('Ajax 通信が終わりました');
}