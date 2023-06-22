let tg = window.Telegram.WebApp;
tg.expand();

function click_button(){
	let city = document.getElementById("city").value;
	let address = document.getElementById("address").value;
	let mileage = document.getElementById("mileage").value;
	let fuel_card = document.getElementById("fuel_card").value;
	let stepney = document.getElementById("stepney").checked;
	let medical = document.getElementById("medical").checked;
	let extinguisher = document.getElementById("extinguisher").checked;
	let emergency_sign = document.getElementById("emergency_sign").checked;
	let vest = document.getElementById("vest").checked;
	let wrench = document.getElementById("wrench").checked;
	let jack = document.getElementById("jack").checked;
	let damage = document.getElementById("damage").value;

	if (city.length > 0 && address.length > 0 && mileage.length > 0 && fuel_card.length > 0) {
		let data = {
			city: city,
			address: address,
			mileage: mileage,
			fuel_card: fuel_card,
			stepney: stepney,
			medical: medical,
			extinguisher: extinguisher,
			emergency_sign: emergency_sign,
			vest: vest,
			wrench: wrench,
			jack: jack,
			damage: damage
		};
		tg.sendData(JSON.stringify(data));
		tg.close();
	}
};
