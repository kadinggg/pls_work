
document.getElementById('yesbutton').addEventListener('click', function() {
    document.getElementById('monitor').src ='./img/really2.gif'
    document.querySelector('h1').innerHTML ='REALLLYYYY??? '
    document.getElementById('yesbutton').addEventListener('click', function() {
        document.getElementById('monitor').src ='./img/yes.gif'
        document.querySelector('h1').innerHTML ='WAHHHHHHH!!!!'
        document.getElementById('yesbutton').addEventListener('click', function() {
            document.getElementById('monitor').src ='./img/wah.gif'
            document.querySelector('h1').innerHTML ='LOVE U TOO <3'
            document.getElementById('yesbutton').addEventListener('click', function() {
                document.getElementById('monitor').src ='./img/last.gif'
                document.querySelector('h1').innerHTML ='I REALLYYY DOOOO<br> ૮ ˶ᵔ ᵕ ᵔ˶ ა'
            })
        })
    })
})
document.getElementById('nobutton').addEventListener('click', function() {
    document.getElementById('monitor').src ='./img/gg12.png'
    document.querySelector('h1').innerHTML ='GURLLLLLLL'
    document.getElementById('nobutton').addEventListener('click', function() {
        document.getElementById('monitor').src ='./img/hmph-mad.gif'
        document.querySelector('h1').innerHTML ='PLSSSSSSSS'
        document.getElementById('nobutton').addEventListener('click', function() {
            document.getElementById('monitor').src ='./img/no.gif'
            document.querySelector('h1').innerHTML ='🙄🙄🙄🙄🙄'
            document.getElementById('nobutton').addEventListener('click', function() {
                document.getElementById('monitor').src ='./img/pout.gif'
                document.querySelector('h1').innerHTML ='😡😡😡😡😡<br>CLICK YES BBGURLL!!!'

            
            })
          
        
        })
    
    
    })
})

function nobutton() {
    var button = document.getElementById('nobutton');
    button.classList.add('no-button');

    setTimeout(function() {
      button.classList.remove('no-button');
    }, 500);
  }
var buttonElement = document.getElementById('nobutton');
    buttonElement.addEventListener('click', nobutton);

document.addEventListener('mouseover', () => {
    const i = Math.floor(Math.random() * (wrapperRect.width - noBtnRect.width)) + 1;
    const j = Math.floor(Math.random() * (wrapperRect.height - noBtnRect.height)) + 1;
    document.style.left = i + 'px';
    document.style.top = j + 'px';
});