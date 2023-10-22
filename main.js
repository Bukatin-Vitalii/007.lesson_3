// Є текстове поле на сторінці. Під час фокусування на цьому полі збоку з'являється <div>. При пропажі фокусу - <div> так само пропадає

let input = document.querySelector('input');
let div = document.querySelector('.ghost');

div.style.display = 'none';

input.onfocus = function () {
	div.style.display = 'block';
}

input.onblur = function () {
	div.style.display = 'none';
}

