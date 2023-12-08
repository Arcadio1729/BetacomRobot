function clickOnElement(element)
{
	var clck= document.querySelector("#p-panel-5-content > div > div > ds-table > div > p-table > div > div > table > tbody > tr > td:nth-child(1) > div.ds-column-value.ng-star-inserted > a");
	
	if(clck!=null){
		clck.click();
		return "OK";
	}else{
		return "Error";
	}
}