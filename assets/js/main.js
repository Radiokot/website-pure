var HEADER_BACKGROUNDS_COUNT = 6;

var setRandomHeaderBackground = function() {
	var fileNumber = 1 + Math.floor(Math.random() * 100) % HEADER_BACKGROUNDS_COUNT
	var header = document.getElementById('header')
	header.style.background = '#2d241d url("assets/img/header/' + fileNumber + '.jpg") 100% 100% no-repeat'
	header.style.backgroundPosition = 'center'
	header.style.backgroundSize = 'cover'
}

var alternateFeedEntriesOrder = function() {
	var feeds = document.getElementsByClassName('feed')
	for (feed of feeds) {
		var entries = feed.getElementsByClassName('feed-entry')
		for (var i = 0; i < entries.length; i++) {
			var entry = entries[i]
			entry.style.flexDirection = (i % 2 == 0) ? 'row' : 'row-reverse'
		}
	}
}

var redirectByHash = function() {
	var hash = window.location.hash
	switch (hash) {
		case '#feed':
			window.location.replace('p/feed')
			break
		case '#citatnik':
			window.location.replace('p/citatnik')
			break
		case '#likechecker':
			window.location.replace('p/likechecker')
			break
		case '#hammill':
			window.location.replace('p/hammill')
			break
	}
}

redirectByHash()
setRandomHeaderBackground()
alternateFeedEntriesOrder()