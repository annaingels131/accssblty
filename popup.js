document.addEventListener('DOMContentLoaded', function() {
    var nightMode = document.getElementById('nightMode');
    nightMode.addEventListener('click', function() {
        chrome.tabs.getSelected(null, function(tab) {
            alert('night')
        })
    })
})

document.addEventListener('DOMContentLoaded', function() {
    var nightMode = document.getElementById('seniorMode');
    nightMode.addEventListener('click', function() {
        chrome.tabs.getSelected(null, function(tab) {
            alert('senior')
        })
    })
})

document.addEventListener('DOMContentLoaded', function() {
    var nightMode = document.getElementById('moveitMode');
    nightMode.addEventListener('click', function() {
        chrome.tabs.getSelected(null, function(tab) {
            alert('move')
        })
    })
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
    var nightMode = document.getElementById('miguelMode');
    nightMode.addEventListener('click', function() {
        chrome.tabs.getSelected(null, function(tab) {
            alert('Miguel')
        })
    })
})