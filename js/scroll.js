$(document).ready(function () {

	var propScroll = {
		posicion: window.pageYOffset,
		scroll: document.getElementsByClassName('scroll'),
		inicio: document.getElementsByClassName('inicio'),
		destino: null,
		seccion: null,
		intervalo: null
	}

	var metScroll = {
		inicio: function (){
			for (var i = 0; i < propScroll.scroll.length; i++) {
				propScroll.scroll[i].addEventListener('click', metScroll.moverse);
			}

			for (var i = 0; i < propScroll.inicio.length; i++) {
				propScroll.inicio[i].addEventListener('click', metScroll.volverArriba);
			}
		},

		moverse: function (e){
			e.preventDefault();
			clearInterval(propScroll.intervalo);

			propScroll.destino = this.getAttribute('href');
			propScroll.seccion = document.querySelector(propScroll.destino).offsetTop - 62;

			propScroll.posicion = window.pageYOffset;
			propScroll.intervalo = setInterval(function () {
				
				if ( propScroll.posicion < propScroll.seccion) {
					propScroll.posicion += 30;

					if ( propScroll.posicion >= propScroll.seccion ) {
						clearInterval(propScroll.intervalo);
					}
				}

				else{
					propScroll.posicion -= 30;
					if ( propScroll.posicion <= propScroll.seccion ) {
						clearInterval(propScroll.intervalo);
					}
				}

				window.scrollTo(0, propScroll.posicion);

			}, 15);	
		},

		volverArriba: function (e) {
			e.preventDefault();
			clearInterval(propScroll.intervalo);

			propScroll.posicion = window.pageYOffset;
			propScroll.intervalo = setInterval(function () {
				
				if ( propScroll.posicion > 0) {
					propScroll.posicion -= 30;

					if ( propScroll.posicion <= 0 ) {
						clearInterval(propScroll.intervalo);
					}
				}

				else{
					return;
				}

				window.scrollTo(0, propScroll.posicion);

			}, 15);
		}

	}

	metScroll.inicio();

})