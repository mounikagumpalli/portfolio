console.log(window.innerWidth)
      const navToggle = document.querySelector('.nav__toggle');
      const navClick = document.querySelector('.nav__list');
navToggle.addEventListener('click', () => {
  document.body.classList.toggle('nav-open');
});

navClick.addEventListener('click', () => {
  document.body.classList.toggle('nav-open');
});
window.addEventListener("scroll", function (event) {
    var scroll = this.scrollY;
    // console.log(scroll+'px')
    $('.nav').css('top',scroll+'px')
});

function read(){
  var change = document.getElementById("readToggle");
  var readMore = document.getElementById("readMore")
  var abtMe = document.getElementById("abt-me")
  if (change.innerHTML == "Read More") {
    change.innerHTML = "Read Less";
    readMore.style.display="inline";
    abtMe.style.height="auto";
  } 
  else {
    change.innerHTML = "Read More";
    readMore.style.display="none";
    abtMe.style.height="100vh";
  }
}

if(window.innerWidth > 800){
  for(var i=1;i<7;i++){
    document.getElementById('flip'+i).removeAttribute('style');
  }
}

function rotate(id){
  var flip = document.getElementById(id);
    if(flip.style.transform !='rotateY(0deg)'){
    flip.style.transform='rotateY(0deg)'}
    else{
    flip.style.transform='rotateY(180deg)'
    }
} 

var db = firebase.firestore();
  
function userData(){
  var name = document.getElementById('cname').value;
  var email = document.getElementById('cemail').value;
  var message = document.getElementById('cmessage').value;
  db.collection("mail").doc().set({
    to:'mounika.gumpalli@gmail.com',
    message: {
      subject:'Job email',
      html: 'Name: ' + name + '\nEmail: '+email + '\nMessage: ' + message
    }
  })
  .then(function(){
    console.log('Success')
  })
  .catch(function(error){
    console.log(error)
  })
}