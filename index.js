console.log("Hello");

function createSound(key)
{
  switch (key) {
    case "w":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;
    case "a":
      var audio = new Audio("sounds/kick.mp3");
      audio.play();
      break;
    case "s":
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;
    case "d":
      var audio = new Audio("sounds/tom1.mp3");
      audio.play();
      break;
    case "j":
      var audio = new Audio("sounds/tom2.mp3");
      audio.play();
      break;
    case "k":
      var audio = new Audio("sounds/tom3.mp3");
      audio.play();
      break;
    case "l":
      var audio = new Audio("sounds/tom4.mp3");
      audio.play();
      break;
  }
}
function buttonAnimation(button)
{
    document.querySelector("."+button).classList.add("pressed");
    setTimeout(function(){
      document.querySelector("."+button).classList.remove("pressed");
    },100);
}
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    // //  alert("button clicked!!");
    //   this.style.color = "white";
    createSound(this.innerHTML);
    buttonAnimation(this.innerHTML);
  });
}
document.addEventListener("keypress",function(event){
    // alert("key is pressed!");
    // console.log(event);
  createSound(event.key);
  buttonAnimation(event.key);
  console.log(event.key);
});
