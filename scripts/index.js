"use strict";

let aside = document.querySelector("aside");
let aside_content = document.querySelector("#aside_content");
let sidebar_activation_button = document.querySelector("button#sidebar_menu");

function toggleAside() {
	aside.classList.toggle("hidden");
	aside.classList.toggle("visible");

	aside_content.classList.toggle("hidden");
	aside_content.classList.toggle("visible");
}

sidebar_activation_button.addEventListener('click', function() {
	toggleAside();
});


aside.addEventListener('touchstart', function() {
	if ((event.target.tagName == 'DIV') && (event.target.className == 'overlay')) toggleAside();
});