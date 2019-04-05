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
                party.style.backgroundColor='red';
                party.style.height='100vh';
                party.style.position='absolute';
                party.style.top='0';
                party.style.bottom='0';
                party.style.left='0';
                party.style.right='0';
                party.textContent = 'hey';
                document.body.appendChild(party)                
                `
            });
        })
    })
})

document.addEventListener('DOMContentLoaded', function() {
    var nightMode = document.getElementById('miguelMode');
    nightMode.addEventListener('click', function() {
        chrome.tabs.getSelected(null, function(tab) {
            alert('Miguel')
        })
    })
})