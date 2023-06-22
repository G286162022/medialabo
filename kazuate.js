let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え(デバッグ用): ' + kotae);

let kaisu = 0;

hantei();
hantei();
hantei();
hantei();

function hantei() {
    kaisu = kaisu + 1;
    let yoso = 4;
    let stop = 0;
    console.log(kaisu + "回目の予想: " + yoso);

    if(stop===1 || kaisu>3){
        console.log("答えは " + kotae + " でした。すでにゲームは終わっています");
    }else if(kotae===yoso) {
        console.log("正解です。おめでとう！");
        stop = 1;
    }else if(kotae>yoso) {
        console.log("まちがい、答えはもっと大きいですよ");
    }else if(kotae<yoso) {
        console.log("まちがい、答えはもっと大きいですよ");
    }
}