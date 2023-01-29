const cookie = document.querySelector('.cookie')
const cliqueCookie = new Audio('https://assets.mixkit.co/sfx/preview/mixkit-quick-win-video-game-notification-269.mp3')
const pontoClique = new Audio('https://assets.mixkit.co/sfx/preview/mixkit-fantasy-game-success-notification-270.mp3')
const maisumoff = document.querySelector('.maisumoff')

cookie.addEventListener('click', function(){
  cliqueCookie.play()
  increment()
  maisUM()
 

})

let count = 0;
function increment() {
  count++;
  document.querySelector('.contador-cookie').innerHTML = count

  if(count > 10) location.href = "https://github.com/andrekdev";
  if(count > 50 ){
    pontoClique.play();
    document.body.style.backgroundColor = 'lime';
  }
 
}

function timeOutToast(){
   maisumoff.classList.remove('maisum')

}

function maisUM(){
    maisumoff.classList.add('maisum')
    setTimeout(timeOutToast, 200)
}


