window.addEventListener('load', function() {
	//stran nalozena
	
	//Izvedi prijavo
	
	var izvediPrijavo = function(event) {
		
		var uporabnik = document.querySelector("#uporabnisko_ime").value;
		document.querySelector("#uporabnik").innerHTML = uporabnik;
		document.querySelector(".pokrivalo").style.visibility = "hidden";
		
	}
	document.querySelector("#prijavniGumb").addEventListener("click", izvediPrijavo);
	
	//zaznajVnosČasa
	
	
	
	var nastaviTimer = function(event) {
		
		var imeOpomnika = document.querySelector("#naziv_opomnika").value;
		var casOpomnika = document.querySelector("#cas_opomnika").value;
		
		document.querySelector("#naziv_opomnika").value = "";
		document.querySelector("#cas_opomnika").value = "";
		document.querySelector("#opomniki").innerHTML += "<div class='opomnik'> <div class='naziv_opomnika'> "+ imeOpomnika + "</div>  <div class='cas_opomnika'> Opomnik čez <span>" + casOpomnika + "</span> sekund.</div> </div>";
	}
	
	document.querySelector("#dodajGumb").addEventListener("click", nastaviTimer);
		
	//Posodobi opomnike
	var posodobiOpomnike = function() {
		var opomniki = document.querySelectorAll(".opomnik");
		
		for (i = 0; i < opomniki.length; i++) {
			var opomnik = opomniki[i];
			var casovnik = opomnik.querySelector("span");
			var cas = parseInt(casovnik.innerHTML);
	
			//TODO: 
			// - če je čas enak 0, izpiši opozorilo "Opomnik!\n\nZadolžitev NAZIV_OPOMNIK je potekla!"
			// - sicer zmanjšaj čas za 1 in nastavi novo vrednost v časovniku
		}
	}
	setInterval(posodobiOpomnike, 1000);
	
});