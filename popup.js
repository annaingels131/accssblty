document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('nightMode').addEventListener('click', onclick, false)
    function onclick () {
      chrome.tabs.query({currentWindow: true, active: true}, function (tabs) {
        // chrome.tabs.sendMessage(tabs[0].id, 'hi', setCount)
        chrome.tabs.executeScript({
            code: `const black = document.createElement('div')
            black.style.backgroundColor='black';
            black.style.height='100vh';
            black.style.position='fixed';
            black.style.top='0';
            black.style.bottom='0';
            black.style.left='0';
            black.style.right='0';            
            black.style.zIndex='100000';
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
            chrome.tabs.executeScript({
                code: 
                `
                const party = document.createElement('div')
                party.style.height='100vh';
                party.style.position='fixed';
                party.style.top='0';
                party.style.bottom='0';
                party.style.left='0';
                party.style.right='0';
                party.style.zIndex='100000';
                document.body.appendChild(party)  

                var colors  = [ 'red', 'green', 'blue', 'black', 'yellow', 'pink', 'orange', 'white' ];
                var current = 0;
            
                setInterval(function()
                {
            
                    party.style.backgroundColor = colors[current];
            
                    // Go to the next color
            
                    current = (current + 1) % colors.length;
            
                }, 10);

                              
                `
            });
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