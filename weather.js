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

console.log("緯度: " + data.coord.lon);
console.log("経度: " + data.coord.lat);
console.log("最低気温: " + data.main.temp_min);
console.log("最高気温: " + data.main.temp_max);
console.log("風向: " + data.wind.deg);
console.log("風速: " + data.wind.speed);
console.log("湿度: " + data.main.humidity);
console.log("都市名: " + data.name);

let div = document.querySelector('div#result');

let zentai = document.querySelector('ul#zentai1');

let midasi = document.querySelector('li#midasi1');
midasi.textContent = '世界の天気（検索結果1件）';
midasi.style.fontSize = '40px';
midasi.style.backgroundColor = 'rgb(0, 204, 255)';

let naiyou = document.querySelector('ul#naiyou1');
naiyou.style.display = 'grid';
naiyou.style.gridTemplateColumns = '1fr 1fr';
naiyou.style.gridAutoRows = '100px';
naiyou.style.gridGap = '5px';

let data1 = document.querySelector('li#data1');
let li1 = document.createElement('li');
li1.textContent = '緯度:  ' + data.coord.lon;
li1.style.fontSize = '20px';
li1.style.backgroundColor = 'aqua';
li1.style.margin = '5px';
li1.style.marginRight = '40%';
data1.insertAdjacentElement('beforeend', li1);

let li2 = document.createElement('li');
li2.textContent = "経度: " + data.coord.lat;
li2.style.fontSize = '20px';
li2.style.backgroundColor = 'aqua';
li2.style.margin = '5px';
li2.style.marginRight = '40%';
data1.insertAdjacentElement('beforeend', li2);

let li3 = document.createElement('li');
li3.textContent = "最低気温: " + data.main.temp_min;
li3.style.fontSize = '20px';
li3.style.backgroundColor = 'aqua';
li3.style.margin = '5px';
li3.style.marginRight = '40%';
data1.insertAdjacentElement('beforeend', li3);

let li4 = document.createElement('li');
li4.textContent = "最高気温: " + data.main.temp_max;
li4.style.fontSize = '20px';
li4.style.backgroundColor = 'aqua';
li4.style.margin = '5px';
li4.style.marginRight = '40%';
data1.insertAdjacentElement('beforeend', li4);

let li5 = document.createElement('li');
li5.textContent = "風向: " + data.wind.deg;
li5.style.fontSize = '20px';
li5.style.backgroundColor = 'aqua';
li5.style.margin = '5px';
li5.style.marginRight = '40%';
data1.insertAdjacentElement('beforeend', li5);

let li6 = document.createElement('li');
li6.textContent = "風速: " + data.wind.speed;
li6.style.fontSize = '20px';
li6.style.backgroundColor = 'aqua';
li6.style.margin = '5px';
li6.style.marginRight = '40%';
data1.insertAdjacentElement('beforeend', li6);

let li7 = document.createElement('li');
li7.textContent = "湿度: " + data.main.humidity;
li7.style.fontSize = '20px';
li7.style.backgroundColor = 'aqua';
li7.style.margin = '5px';
li7.style.marginRight = '40%';
data1.insertAdjacentElement('beforeend', li7);

let li8 = document.createElement('li');
li8.textContent = "都市名: " + data.name;
li8.style.fontSize = '20px';
li8.style.backgroundColor = 'aqua';
li8.style.margin = '5px';
li8.style.marginRight = '40%';
data1.insertAdjacentElement('beforeend', li8);