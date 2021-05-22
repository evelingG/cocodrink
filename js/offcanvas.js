(function () {
  'use strict'

  // document.querySelector('#navbarSideCollapse').addEventListener('click', function () {
  //   document.querySelector('.offcanvas-collapse').classList.toggle('open')
  // })
var propMenu = {
	burguer: document.querySelector('#navbarSideCollapse'),
	slide: document.querySelector('.offcanvas-collapse'),
	elementosMenu: document.querySelectorAll('#navbarsExampleDefault .navbar-nav a'),
	menuActivo: false
}

var metMenu = {
	inicio: function (){
		propMenu.burguer.addEventListener('click', metMenu.toggleMenu);

		for (var i = 0; i < propMenu.elementosMenu.length; i++) {
			propMenu.elementosMenu[i].addEventListener('click', metMenu.ocultarMenu);
		}
	},

	toggleMenu: function (){
		if (propMenu.menuActivo == false) {
			propMenu.menuActivo = true;
			document.querySelector('.offcanvas-collapse').classList.toggle('open');
		}
		else{
			propMenu.menuActivo = false;
		}
	},

	ocultarMenu: function(){
		propMenu.menuActivo = false;
		propMenu.slide.className = 'navbar-collapse offcanvas-collapse';
	}
}

metMenu.inicio();
})()