var HEADER_BACKGROUNDS_COUNT = 6;

var setRandomHeaderBackground = function() {
	var fileNumber = 1 + Math.floor(Math.random() * 100) % HEADER_BACKGROUNDS_COUNT
	var header = document.getElementById('header')
	header.style.background = '#2d241d url("assets/img/header/' + fileNumber + '.jpg") 100% 100% no-repeat'
	header.style.backgroundPosition = 'center'
	header.style.backgroundSize = 'cover'
}

setRandomHeaderBackground()