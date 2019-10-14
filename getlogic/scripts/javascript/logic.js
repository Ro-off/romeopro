//Home
var homejs = document.getElementById("homehtml");
homejs.onmouseover = function() {
  homejs.src = "https://img.icons8.com/ios/50/ffffff/home.png";
};
homejs.onmouseout = function() {
  homejs.src = "https://img.icons8.com/ios-filled/50/ffffff/home.png";
};
//

//Contactme
var contactjs = document.getElementById("contacthtml");
contactjs.onmouseover = function() {
  contactjs.src = "https://img.icons8.com/ios/50/ffffff/speech-bubble.png";
};
contactjs.onmouseout = function() {
  contactjs.src =
    "https://img.icons8.com/ios-filled/50/ffffff/speech-bubble.png";
};
//

//ThanksTo
var thanksjs = document.getElementById("thankshtml");
thanksjs.onmouseover = function() {
  thanksjs.src = "https://img.icons8.com/ios/50/ffffff/rating.png";
};
thanksjs.onmouseout = function() {
  thanksjs.src = "https://img.icons8.com/ios-filled/50/ffffff/rating.png";
};

//

//Instagram
var instagramjs = document.getElementById("instagramhtml");
instagramjs.onmouseover = function() {
  instagramjs.src = "https://img.icons8.com/ios/50/ffffff/instagram-new.png";
};
instagramjs.onmouseout = function() {
  instagramjs.src =
    "https://img.icons8.com/ios-filled/50/ffffff/instagram-new.png";
};
//

//Twitter
var twitterjs = document.getElementById("twitterhtml");
twitterjs.onmouseover = function() {
  twitterjs.src = "https://img.icons8.com/ios/50/ffffff/twitter.png";
};
twitterjs.onmouseout = function() {
  twitterjs.src = "https://img.icons8.com/ios-filled/50/ffffff/twitter.png";
};
//

//Fecebook
var facebookjs = document.getElementById("facebookhtml");
facebookjs.onmouseover = function() {
  facebookjs.src = "https://img.icons8.com/ios/50/ffffff/facebook.png";
};
facebookjs.onmouseout = function() {
  facebookjs.src = "https://img.icons8.com/ios-filled/50/ffffff/facebook.png";
};

//
//Instagram
var downtxtjs = document.getElementById("downtxt");
downtxtjs.onmouseover = function() {
  downtxtjs.style = "font-size:40px; font-family: 'Varela Round'; color:black;";
};
downtxtjs.onmouseout = function() {
  downtxtjs.style =
    "font-size:40px; font-family: 'Varela Round'; color:#696969;";
};
//

let appleclickj = document.getElementById("appleclick");
appleclickj.onclick = function() {
  let showlgj = document.getElementById("showlg");
  showlgj.style =
    "border-radius: 10px; top:440px; position:absolute; right:40px; top:1090px; left:10px; height:700px; background-color: #202020; box-shadow: 0 -10px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);";
};

let appleclosej = document.getElementById("closeapple");
appleclosej.onclick = function() {
  let showlgj = document.getElementById("showlg");
  showlgj.style = "";
};
