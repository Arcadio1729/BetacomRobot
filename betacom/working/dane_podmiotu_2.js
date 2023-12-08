
function(element){
    dane_KRZ=document.querySelector("#ui-panel-0-content > div > p-table > div > div.ui-table-wrapper.ng-star-inserted > table > tbody > td > div > div > div > div > p-table > div > div.ui-table-wrapper.ng-star-inserted > table > tbody");

    //daneJson = [];
    daneCsv = "Postepowanie,Sygnatura,Rejestracja,Zakonczenie,Status\n";
    if(dane_KRZ!=null){
        dane_KRZ_tr = dane_KRZ.getElementsByTagName("tr");
        for(i=0;i<dane_KRZ_tr.length;i++){
            dane_KRZ_tr_td = dane_KRZ_tr[i].getElementsByTagName("td");
            daneCsvSingle="";
                // var daneJsonSingle = {"Postepowanie":"","Sygnatura":"","Rejestracja":"","Zakonczenie":"","Status":""};
                // var daneCsvSingle = "";

                for(j=0;j<dane_KRZ_tr_td.length;j++){
                    if(j==dane_KRZ_tr_td.length-1){
                        daneCsvSingle += dane_KRZ_tr_td[j].innerText;
                    }else{
                        daneCsvSingle += dane_KRZ_tr_td[j].innerText+",";
                    }
                }


                // daneJsonSingle.Postepowanie = dane_KRZ_tr_td[0].innerText;
                // daneJsonSingle.Sygnatura = dane_KRZ_tr_td[1].innerText;
                // daneJsonSingle.Rejestracja = dane_KRZ_tr_td[2].innerText;
                // daneJsonSingle.Zakonczenie = dane_KRZ_tr_td[3].innerText;
                // daneJsonSingle.Status = dane_KRZ_tr_td[4].innerText;
                // daneJson.push(daneJsonSingle);

                daneCsv+=daneCsvSingle+"\n";
        }
    }
    else{
        // var daneJsonSingle = {"Postepowanie":"","Sygnatura":"","Rejestracja":"","Zakonczenie":"","Status":""};
        daneCsvSingle = "Brak postepowan,Brak postepowan,Brak postepowan,Brak postepowan,Brak postepowan";
        
        // daneJsonSingle.Postepowanie = "Brak postepowan";
        // daneJsonSingle.Sygnatura = "Brak postepowan";
        // daneJsonSingle.Rejestracja = "Brak postepowan";
        // daneJsonSingle.Zakonczenie = "Brak postepowan";
        // daneJsonSingle.Status = "Brak postepowan";

        // daneJson.push(daneJsonSingle);

        daneCsv+=daneCsvSingle+"\n";
    }

    //return JSON.stringify(daneJson);
    return daneCsv;
}
