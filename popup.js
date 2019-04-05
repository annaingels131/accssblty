document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('nightMode').addEventListener('click', onclick, false)
    function onclick () {
      chrome.tabs.query({currentWindow: true, active: true}, function (tabs) {
        // chrome.tabs.sendMessage(tabs[0].id, 'hi', setCount)
        chrome.tabs.executeScript({
            code: `const black = document.createElement('div')
            black.style.backgroundColor='black';
            black.style.height='100vh';
            black.style.position='absolute';
            black.style.top='0';
            black.style.bottom='0';
            black.style.left='0';
            black.style.right='0';
            black.textContent = 'hey';
            document.body.appendChild(black)`
          });
      })
    }
})

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('seniorMode').addEventListener('click', onclick, false)
    function onclick () {
      chrome.tabs.query({currentWindow: true, active: true}, function (tabs) {
        // chrome.tabs.sendMessage(tabs[0].id, 'hi', setCount)
        chrome.tabs.executeScript({
            code: `document.body.style.zoom='30'`
          });
      })
    }
})


document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('moveitMode').addEventListener('click', onclick, false)
    function onclick () {
      chrome.tabs.query({currentWindow: true, active: true}, function (tabs) {
        // chrome.tabs.sendMessage(tabs[0].id, 'hi', setCount)
        chrome.tabs.executeScript({
           code: 
           `var r = true;
           
           while (r) {
               r = confirm("MOVE!");
           }`
          });
      })
    }
})

document.addEventListener('DOMContentLoaded', function() {
    var nightMode = document.getElementById('partyMode');
    nightMode.addEventListener('click', function() {
        chrome.tabs.getSelected(null, function(tab) {
            alert('party')
        })
    })
})

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('miguelMode').addEventListener('click', onclick, false)
    function onclick () {
      chrome.tabs.query({currentWindow: true, active: true}, function (tabs) {
        // chrome.tabs.sendMessage(tabs[0].id, 'hi', setCount)
        chrome.tabs.executeScript({
           code:
           `var images = document.getElementsByTagName('img');
            for (var i = 0, l = images.length; i < l; i++) {
                images[i].src = 'https://scontent-lax3-2.cdninstagram.com/vp/4349670b093e930b423a51c14cb5f477/5D47905C/t51.2885-19/s320x320/14553139_348682372156995_3472138324720746496_a.jpg?_nc_ht=scontent-lax3-2.cdninstagram.com';
            }`
          });
      })
    }
})