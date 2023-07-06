let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え(デバッグ用): ' + kotae);

let kaisu = 0;
let stop = 0;

let a = document.querySelector('#print');
a.addEventListener('click', hantei);


function hantei() {
    kaisu = kaisu + 1;
    let i = document.querySelector('input[name="number"]');
    let yoso = i.value;
    let kaisu1 = document.querySelector('span#kaisu');
    let yoso1 = document.querySelector('span#answer');
    kaisu1.textContent = kaisu;
    yoso1.textContent = yoso;
    console.log(kaisu + "回目の予想: " + yoso);
    let result = document.querySelector('p#result');

    if(stop===1 || kaisu>3){
        console.log("答えは " + kotae + " でした。すでにゲームは終わっています");
        result.textContent = '答えは ' + kotae + ' でした。すでにゲームは終わっています';
    }else if(kotae==yoso) {
        console.log("正解です。おめでとう！");
        result.textContent = '正解です。おめでとう！';
        stop = stop + 1;
    }else if(kotae>yoso) {
        console.log("まちがい、答えはもっと大きいですよ");
        result.textContent = 'まちがい、答えはもっと大きいですよ';
    }else if(kotae<yoso) {
        console.log("まちがい、答えはもっと小さいですよ");
        result.textContent = 'まちがい、答えはもっと小さいですよ';
    }
}