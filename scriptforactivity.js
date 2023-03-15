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
// adm=行政組 sc=音控組 sl=場部組 fe=場器組 act=活動部長
btn.addEventListener("click", function() {
  document.getElementById("btn").style.display = "none";
  var forms = document.querySelectorAll('form');
  var output = { adm: 0, sc: 0, sl: 0, fe: 0 };
  
  for (var i = 0; i < forms.length; i++) {
    var form = forms[i];
    var formId = form.getAttribute('id');
    var result = form.querySelector('input[name="answer"]:checked');
    if (result.value == "adm") {
      output.adm += 1
    } else if (result.value == "sc") {
      output.sc += 1;
    } else if (result.value == "sl") {
      output.sl += 1
    } else {
      output.fe += 1
    }

  }
// adm=行政組 sc=音控組 sl=場部組 fe=場器組 act=活動部長
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
  if (output.adm == 1 && output.fe == 1 && output.sc == 1 && output.sl == 1) {
    textforresult = "活動部部長";
    textforrain = "你是個扛壓性很高、對很多事情有著不同想像的人。在學生自治系統中，你適合擔任的角色是正副活動部長。";
    smallTalk = "身為全活動的總負責人需要扛起一切事務！希望你能在永遠有活動的高師大附中，一起「呵，長大了」";
    img.src = "./img/act.jpg";
  } else if (maxKey == "adm") {
    textforresult = "行政組長";
    textforrain = "你是個想法天馬行空的人。富有創造力的你常常在看劇時為角色腦補許多劇情。在學生自治系統中，你適合擔任的角色是活動部行政組長。";
    smallTalk = "上幹後，接踵而來的是教師節、萬聖節、校晚的活動，希望你能在活動部裡，學到如何適時的把自己當作一坨爛泥";
    img.src = "./img/adm.PNG";
  } else if (maxKey == "sc") {
    textforresult = "音控組長";
    textforrain = "你是個講究活動氣氛的人。你總是喜歡在幕後為事情付出，以自己對音效出色的感知昇華活動的氣氛。在學生自治系統中，你適合擔任的角色是活動部音控組長";
    smallTalk = "不管做什麼事都要記得在遇到瓶頸時向別人求助，然後在搬器材的時候也要小心不要受傷了";
    img.src = "./img/sc.PNG";
  } else if (maxKey == "sl") {
    textforresult = "場佈組長";
    img.src = "./img/sl.PNG";
    textforrain = "你是個喜歡美術創作的人。你總是喜歡動手做一些小物，在活動前也喜歡透過道具增加活動整體效果。在學生自治系統中，你適合擔任的角色是活動部場佈組長。";
    smallTalk = "東拼西湊撿紙箱，化腐朽為神奇的藝術家就是你！";
  } else {
    textforresult = "場器組長";
    textforrain = "你是個有責任感的人，總是喜歡默默承擔很多事，在看到周圍的人有難時也毫不吝嗇的出力幫忙。在學生自治系統中，你適合擔任的角色是活動部場器組長。";
    smallTalk = "你以為我們都很壯？哈哈，我們可不是力壯雞耶！";
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