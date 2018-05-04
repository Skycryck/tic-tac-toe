document.addEventListener("DOMContentLoaded", init, false);

var player = 1;
var tab = [0,0,0,0,0,0,0,0,0];
var win = false;
var end = false;

function init() {
	let cel = document.querySelectorAll("td");
	for(var i = 0; i < cel.length; i++) {
		cel[i].addEventListener("click", click);
	}
	document.getElementById("newGame").addEventListener("click", newGame);
}

function click(e) {
	game(this);
}

function game(cell) {
	if(!cell.hasChildNodes() && !win) {
		let tour = "Player n°";
		let img = document.createElement("img");
		if(player === 1) {
			img.src = "./img/cross.png";
			tab[cell.getAttribute("nb")] = player;
			changePlayer();
			display(tour + player);
		}
		else {
			img.src = "./img/circle.png";
			tab[cell.getAttribute("nb")] = player;
			changePlayer();
			display(tour + player);
		}
		cell.appendChild(img);
	}
	win = isWinning();
	if(win && !end) {
		changePlayer();
		display("Player n°" + player + " has won !");
		end = true;
	}
	else if(isFull() && !end)
		display("Draw !")

}

function isWinning() {
    if     (tab[0] != 0 && tab [1] != 0 && tab[2] != 0 && tab[0] === tab [1] && tab[1] === tab[2])
		return true;
	else if(tab[3] != 0 && tab [4] != 0 && tab[5] != 0 && tab[3] === tab [4] && tab[4] === tab[5])
		return true;
	else if(tab[6] != 0 && tab [7] != 0 && tab[8] != 0 && tab[6] === tab [7] && tab[7] === tab[8])
		return true;
	else if(tab[0] != 0 && tab [3] != 0 && tab[6] != 0 && tab[0] === tab [3] && tab[3] === tab[6])
		return true;
	else if(tab[1] != 0 && tab [4] != 0 && tab[7] != 0 && tab[1] === tab [4] && tab[4] === tab[7])
		return true;
	else if(tab[2] != 0 && tab [5] != 0 && tab[8] != 0 && tab[2] === tab [5] && tab[5] === tab[8])
		return true;
	else if(tab[0] != 0 && tab [4] != 0 && tab[8] != 0 && tab[0] === tab [4] && tab[4] === tab[8])
		return true;
	else if(tab[6] != 0 && tab [4] != 0 && tab[2] != 0 && tab[6] === tab [4] && tab[4] === tab[2])
		return true;
	else
		return false;
}

function changePlayer() {
	if(player === 1)
		player = 2;
	else
		player = 1;
}

function display(txt) {
	document.getElementById("display").textContent = txt;
}

function isFull() {
    for(let i = 0; i < tab.length; i++) {
        if(tab[i] === 0)
            return false;
    }
    return true;
}

function newGame(e) {
	end = false;
	let cel = document.querySelectorAll("td");
	for (let i = 0; i < cel.length; i++) {
		empty(cel[i]);
	}
	for (let i = 0; i < tab.length; i++) {
		tab[i] = 0;
	}
	player = 1;
	display("Player n°" + player);
}

function empty(el) {
	while(el.firstChild){
    	el.removeChild(el.firstChild);
	}
}
