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
    if (i == 5) {
      document.getElementById("h1").innerHTML = "看看自己的結果吧!";
      document.getElementById("btn").style.display = "block";
      btnext.style.display = "none";
    }
    i += 1;
    document.querySelector("html").style.opacity = 1;
  }, 500);
})
//});
// sp=學全 re=學生代表 pr=會長 mp=議員
btn.addEventListener("click", function() {
  document.getElementById("btn").style.display = "none";
  var forms = document.querySelectorAll('form');
  var output = { sp: 0, re: 0, pr: 0, mp: 0 };

  for (var i = 0; i < forms.length; i++) {
    var form = forms[i];
    var formId = form.getAttribute('id');
    var result = form.querySelector('input[name="answer"]:checked');
    if (result.value == "sp") {
      output.sp += 1
    } else if (result.value == "re") {
      output.re += 1;
    } else if (result.value == "pr") {
      output.pr += 1
    } else {
      output.mp += 1
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
  let textforrain = "";
  let smallTalk = "";
  let img = document.getElementById('img')
  if (maxKey == "sp") {
    textforresult = "學權部長";
    textforrain = "你是個思維能夠跳脫框架的人。在面對不公時總是能夠透過行動改變現況，促成現有問題得以改善與解決。在學生會裡，你適合擔任的角色是正副學權部長。";
    smallTalk = "「學權是實踐，不是空想。」在腦海書寫藍圖時，別忘了腳步也要跟上喔！";
    img.src = "";
  } else if (maxKey == "re") {
    textforresult = "學生代表";
    textforrain = "你是個愛好參與公共事務的人。你喜歡聆聽大眾的想法，也喜歡透過直接管道與他人進行平等對話。在學生自治中，你適合擔任的角色是學生代表。";
    smallTalk = "你覺得冷氣不涼？你覺得學校的雜草太多？只要影響到學生的，都可以和我們反應！";
    img.src = "";
  } else if (maxKey == "pr") {
    textforresult = "會長";
    textforrain = "你是個有領導力、正向思維的人。在群體裡你總是挺身扛著所有壓力，做著領導群體的工作。在學生會裡中，你適合擔任的角色是學生會正副會長。";
    smallTalk = "你已經想好承擔這一切了嗎？你扛的永遠不會只有一個責任，而是103個人的責任喔！";
    img.src = "./img/pr.PNG";
  } else {
    textforresult = "議員";
    textforrain = "你是個有著批判性思維的人。在參加活動後總是能抓住背後欲傳達之意義，提出自己獨特的見解。在學生會裡，你適合擔任的角色是學生議員。";
    smallTalk = "你們的預算案交了沒？會長！你是不是又忘記交什麼東西了？都做到這個位置上了，可不可以好好做事";
    img.src = "";
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