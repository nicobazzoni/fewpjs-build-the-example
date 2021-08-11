

const heartStatus  = {
  "♡": "♥",
  "♥": "♡"
};

const blueHearts = {
  "pink" : "",
  "": "pink" 
};

const mediaHearts = document.querySelectorAll(".like-glyph")

function likeFunction(e) {
  const like = e.target
  mimicServerCall("mimic")
  
    .then(function(msg){
       like.innerText = heartStatus[like.innerText]
        like.style.color = blueHearts[like.style.color]
    })
    .catch(function(error) {
      const modal = document.getElementById("modal")
      modal.className = ""
      modal.innerText = error
      setTimeout(() =>  modal.className = "hidden", 3000)
    })
}

for (const glyph of mediaHearts) {
  glyph.addEventListener("click", likeFunction);
}

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
