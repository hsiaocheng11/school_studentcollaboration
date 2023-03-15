let btn = document.getElementById("btn");
var forms = document.querySelectorAll('form');
let inputs = document.querySelectorAll('input');
let i = 1;
let btnext = document.getElementById('btnext');
//inputs.forEach(function (inputs){
window.addEventListener("load", function() {

  setTimeout(function() {
    document.querySelector("html").style.opacity = 1;
  }, 500)
})
btnext.addEventListener("click", function() {
  document.querySelector("html").style.opacity = 0;
  setTimeout(function() {
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
    document.querySelector("html").style.opacity = 1;
  }, 500);
})
//});
// money=財務 god=部長 sec=秘書
btn.addEventListener("click", function() {
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
// money=財務 god=部長 sec=秘書
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
  let textforrain = "";
  let smallTalk = "";
  let img = document.getElementById('img')
  let img2 = document.getElementById('img2')
  if (maxKey == "money") {
    textforresult = "財務組長";
    textforrain = "你是個有耐心、腳踏實地的人。精通財務處理的你總是能把錢管理的有條不紊。在學生會裡，你適合擔任的角色是會務部財務組長。";
    let smallTalk = "儘管財務的工作不僅僅只是收錢，但相信你們都能在所有工作中找到樂趣！";
    img.src = "./img/money.PNG";
  } else if (maxKey == "god") {
    textforresult = "會務部長";
    textforrain = "你是個細心的人。適合從事文書工作的你總是能在文字間找到自我的歸屬。在學生會裡，你適合擔任的角色是正副會務部長。";
    let smallTalk = "穩如泰山的你，會務部就是你的星群，即使不如其他部組活躍如明月，也能做一顆引導方向的北極星。";
    img.src = "./img/god.PNG";
    img2.src= "./img/god2.PNG";
    img2.style.display = "block"
  } else {
    textforresult = "秘書組長";
    textforrain = "你是個統整能力好的人。擅長文字工作的你總是能夠系統性的整理人事資料、處理各式表格。在學生會裡，你適合擔任的角色是會務部秘書組長。";
    let smallTalk = "這個世界需要的是一位真正會跑腿、會整理資料的秘書人，當然首先腦袋不能抽筋。";
    img.src = "./img/sec.png";
  }
  img.style.display = "block"
    let small_talk = document.getElementById('small talk')
  small_talk.innerText = `${smallTalk}`
  small_talk.style.display = "block"
  console.log(`最大值為 ${maxVal}，對應的鍵值為 ${maxKey}`); // 输出最大值和对应的键值
  document.getElementById("result").innerHTML = `最適合為 ${textforresult}`;
  document.getElementById("rain-lai").innerHTML = `${textforrain}`;
  document.getElementById("end").style.display = "block";
})