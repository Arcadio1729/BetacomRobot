function clickOnElement(element)
{
	const date = new Date();

	let day = date.getDate();
	let month = date.getMonth() + 1;
	let year = date.getFullYear();
	
	// This arrangement can be altered based on how we want the date's format to appear.
	let currentDate = `${year}-${month}-${day}`;

	dane_podmiotu_table = document.querySelector("#p-panel-16-content > div > div > div");
	dane_podmiotu = dane_podmiotu_table.getElementsByClassName("p-col-7 p-md-9");
	
	var daneJson = {"Nazwa":"","Rejestr":"","KRS":"","NIP":"","REGON":"","Forma":""};
	var daneList = ["Nazwa","Rejestr","KRS","NIP","REGON","Forma","DataWpisu","Postepowanie","Sygnatura","DataRejestracji","DataZakonczenia","Status"]
	
	daneJson["Nazwa"] = dane_podmiotu [0].innerText;
	daneJson["Rejestr"] = dane_podmiotu [1].innerText;
	daneJson["KRS"] = dane_podmiotu [2].innerText;
	daneJson["NIP"] = dane_podmiotu [3].innerText;
	daneJson["REGON"] = dane_podmiotu [4].innerText;
	daneJson["Forma"] = dane_podmiotu [5].innerText;
	

	var uipathArray = "";

	uipathArray+=daneJson["KRS"]+","+daneJson["Nazwa"]+","+daneJson["NIP"]+","+daneJson["REGON"]+","+daneJson["Forma"]+","+currentDate+","

	// for(i=0;i<dane_podmiotu.length;i++){
	// 	uipathArray+=dane_podmiotu[i].innerText+",";
	// }

	// uipathArray+=currentDate+",";

	return uipathArray;
}