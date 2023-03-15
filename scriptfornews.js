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
// pu=公關組 ph=攝影組 me=媒體組 mi=新聞部部長
btn.addEventListener("click", function() {
  document.getElementById("btn").style.display = "none";
  var forms = document.querySelectorAll('form');
  var output = { pu: 0, ph: 0, me: 0, mi: 0 };

  for (var i = 0; i < forms.length; i++) {
    var form = forms[i];
    var formId = form.getAttribute('id');
    var result = form.querySelector('input[name="answer"]:checked');
    if (result.value == "pu") {
      output.pu += 1
    } else if (result.value == "ph") {
      output.ph += 1;
    } else if (result.value == "me") {
      output.me += 1
    } else {
      output.mi += 1
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
  // pu=公關組 ph=攝影組 me=媒體組 mi=新聞部部長
  let textforresult = "";
  let textforrain = "";
  let smallTalk = "";
  let img = document.getElementById('img')
  let img2 = document.getElementById('img2')
  if (maxKey == "pu") {
    textforresult = "公關組長";
    textforrain = "你是個喜歡參與社交活動的人，在陌生場合裡總是可以迅速的和他人打好關係。在學生會裡，你適合擔任的角色是新聞部公關組長。";
    smallTalk = "班宣跟對外接洽很辛苦，給別人微笑的同時，也不要忘記偶爾對自己笑一個喔";
    img.src = "./img/pu.JPG";
  } else if (maxKey == "ph") {
    textforresult = "攝影組長";
    textforrain = "你是個觀察力十足的人。你喜歡記錄生活中美好的事情，看到風景時也總是想著要怎麼紀錄下這美好的瞬間。在學生會裡，你適合擔任的角色是新聞部攝影組長。";
    smallTalk = "你扛的不只是相機，更是大家的回憶，在幫大家拍照的同時小心不要扭到手哦！";
    img.src = "./img/ph.png";
  } else if (maxKey == "me") {
    textforresult = "媒體組長";
    textforrain = "你是個容易對生活週遭事物美感產生共鳴的人。看到海報或文宣，第一眼關注的總是總體呈現的排版、美編。在學生會裡，你適合擔任的角色是新聞部媒體組長。";
    smallTalk = "排版美編畫個圖，媒體組長是宣傳的重要角色，適合想成為幕後推手的你呦！";
    img.src = "./img/me.png";
  } else {
    textforresult = "新聞部部長";
    textforrain = "你是個擅長使用社群媒體的人，也喜歡在網路上分享自己生活的瑣事。在學生會裡中，你適合擔任的角色是學生會正副新聞部長。";
    smallTalk = "在這個資訊流通快速的時代，你將扮演一個爲大家傳遞第一手資訊的重要角色。準備好的話就一起出發吧！";
    img.src = "./img/mi.PNG";
    img2.src= "./img/mi2.png";
    img2.style.display = "block"
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