let btn = document.getElementById("btn");
var forms = document.querySelectorAll('form');
let inputs = document.querySelectorAll('input');
let btnext = document.getElementById('btnext');
let i = 1;
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
    if (i == 2) {
        document.getElementById("h1").innerHTML = "進入下一部份吧";
        document.getElementById("btn").style.display = "block";
        btnext.style.display="none";
    }
    i += 1;
})
//});

btn.addEventListener("click", function () {
    document.getElementById("btn").style.display = "none";
    var forms = document.querySelectorAll('form');
    var output = { conference: 0, activity: 0, news: 0, students: 0 };

    for (var i = 0; i < forms.length; i++) {
        var form = forms[i];
        var formId = form.getAttribute('id');
        var result = form.querySelector('input[name="answer"]:checked');
        if (result.value == "aplusn") {
            output.activity += 1
            output.news += 1
        } else if (result.value == "oplusc") {
            output.students += 1
            output.conference += 1
        } else if (result.value == "cplusn") {
            output.conference += 1
            output.news += 1
        } else {
            output.activity += 1
            output.students += 1
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

    console.log(`最大值為 ${maxVal}，對應的鍵值為 ${maxKey}`); // 输出最大值和对应的键值

    document.getElementById("next").innerHTML = `<a href="${maxKey}department.html">進入下部分</a>`;
    document.getElementById("next").style.display = "block";
})