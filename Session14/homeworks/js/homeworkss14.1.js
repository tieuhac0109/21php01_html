var pics = new Array();
for (i = 0 ; i <= 12; i++) {
	pics[i] = new Image();
	pics[i].src = 'img/img' + i + '.png';
}
var map = new Array(1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12);
var user = new Array();
var temparray = new Array();
var clickarray = new Array(0 , 0);
var ticker, sec, min, ctr, id = 0, oktoclick, finished;

function init() {
	clearTimeout(id);
	for ( i = 0; i <= 15; i++) {
		user[i] = 0;
		ticker = 0; min = 0; sec = 0; ctr = 0; finished = 0;
		oktoclick = true;
		document.forms["f"].b.value = "Resetting game table...";
		scramble();
		id = setInterval('runclk()', 995);
	}
	for (i = 0; i <= 15; i++) {
	document.images[('img'+i)].src="image0.gif";
	document.images[('img'+i)].alt="";
	}
}

function runclk() {
	min = Math.floor(ticker/60);
	sec = (ticker - (min*60))+'';
	if (sec.length == 1) {
		sec = "0" + sec
	};
	ticker++;
	document.forms["f"].b.value= "    " + min + ":" + sec + "    ";
}

function scramble(){
	for (z = 0; z < 5; z++) {
		for (x = 0; x <= 23; x++) {
			temparray[0] = Math.floor(Math.random()*24);
			temparray[1] = map[temparray[0]];
			temparray[2] = map[x];
			map[x] = temparray[1];
			map[temparray[0]] = temparray[2];
		}
	}
}
