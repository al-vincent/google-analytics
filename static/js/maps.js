"use strict";

function main() {
	const PA_OFFICE = [51.495, -0.142];
	let londonMap = L.map('map-london').setView(PA_OFFICE, 14);

	L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
		attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
	}).addTo(londonMap);

	const marker = L.marker(PA_OFFICE).addTo(londonMap);
	marker.bindPopup("<b>PA's head office.</b><br>Nice place, lovely people, good coffee.").openPopup();

}

document.onload = main();