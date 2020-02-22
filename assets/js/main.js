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

setRandomHeaderBackground()
alternateFeedEntriesOrder()