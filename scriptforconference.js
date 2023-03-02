let btn = document.getElementById("btn");
var forms = document.querySelectorAll('form');
let inputs = document.querySelectorAll('input');
let i = 1;
let btnext = document.getElementById('btnext');
//inputs.forEach(function (inputs){
btnext.addEventListener("click", function () {
    if (i <= (forms.length)) {
        let p = document.getElementById(i.toString());
        let it = document.getElementById("f" + i.toString());

        p.style.display = "none";
        it.style.display = "none";
    }
    if (i < (forms.length)) {
        let pnext = document.getElementById((i + 1).toString());
        let itnext = document.getElementById("f" + (i + 1).toString());
        pnext.style.display = "block";
        itnext.style.display = "block";

    }
    if (i == 4) {
        document.getElementById("h1").innerHTML = "看看自己的結果吧!";
        document.getElementById("btn").style.display = "block";
        btnext.style.display = "none";
    }
    i += 1;
})
//});
// money=財務 god=部長 sec=秘書
btn.addEventListener("click", function () {
    document.getElementById("btn").style.display = "none";
    var forms = document.querySelectorAll('form');
    var output = { money: 0, god: 0, sec: 0 };

    for (var i = 0; i < forms.length; i++) {
        var form = forms[i];
        var formId = form.getAttribute('id');
        var result = form.querySelector('input[name="answer"]:checked');
        if (result.value == "money") {
            output.money += 1
        } else if (result.value == "god") {
            output.god += 1;
        } else {
            output.sec += 1
        }

    }

    console.log(output);
    let maxVal = -Infinity; // 先假設最大值為負無限大
    let maxKey = ''; // 初始化最大值的鍵為空字串

    for (const key in output) {
        if (output[key] > maxVal) { // 如果当前值大于当前最大值
            maxVal = output[key]; // 将最大值更新为当前值
            maxKey = key; // 将最大值的键更新为当前键
        }
    }
    let textforresult = "";
    if (maxKey == "money") {
        textforresult = "財務組";
    } else if (maxKey == "god") {
        textforresult = "會務部部長";
    } else {
        textforresult = "秘書組";
    }
    console.log(`最大值為 ${maxVal}，對應的鍵值為 ${maxKey}`); // 输出最大值和对应的键值
    document.getElementById("result").innerHTML = `最適合為 ${textforresult}`;
    document.getElementById("next").innerHTML = `<a href="${maxKey}department.html">進入下部分</a>`;
    document.getElementById("next").style.display = "block";
})