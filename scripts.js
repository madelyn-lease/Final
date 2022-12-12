  // JavaScript for TP6

//function to load a file from the URL "fromFile" into the object identified by "whereTo"
function loadFileInto(fromFile, whereTo) {

	// creating a new XMLHttpRequest object
	ajax = new XMLHttpRequest();

	// defines the GET/POST method, source, and async value of the AJAX object
	ajax.open("GET", fromFile, true);

	// provides code to do something in response to the AJAX request
	ajax.onreadystatechange = function() {
			if ((this.readyState == 4) && (this.status == 200)) {
				document.querySelector(whereTo).innerHTML = this.responseText;
				
			} else if ((this.readyState == 4) && (this.status != 200)) {
				console.log("Error: " + this.responseText);
			}
		
	} // end ajax.onreadystatechange function

	// initiate request and wait for response
	ajax.send();

}



// new Recipe object
function Recipe(recipeName, contributorName, imageURL, ingredientsURL, equipmentURL, directionsURL){
  
  this.recipeName = recipeName;
  this.contributor = contributorName;
  this.imageURL = imageURL;
  this.ingredients = ingredientsURL;
  this.equipment = equipmentURL;
  this.directions = directionsURL;
  
  this.displayRecipe = function() {
    
    document.querySelector("#titleBanner h1").innerHTML = this.recipeName;
    document.querySelector("#contributor").innerHTML = this.contributor;
    document.querySelector("#titleBanner").style.backgroundImage = "url(" + this.imageURL +")";
    loadFileInto(this.ingredients, "#ingredients ul");
    loadFileInto(this.equipment, "#equipment ul");
    loadFileInto(this.directions, "#directions ol");
    
  }
  
}


MonkeyBreadKabobs = new Recipe(
  "Monkey Bread Kabobs", 
  "Madelyn Lease", 
  "https://cdn.pixabay.com/photo/2013/09/16/16/03/banana-182852_960_720.jpg", 
  "ingredients.html", 
  "equipment.html", 
  "directions.html"
);


FluffyFrenchToast = new Recipe(
  "Fluffy French Toast",
  "Analysse Palomares",
  "https://images.unsplash.com/photo-1639108094328-2b94a49b1c2e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
  "fluffyfrenchtoast-ingredients.html",
  "fluffyfrenchtoast-equipment.html",
  "fluffyfrenchtoast-directions.html"
);


TresLechesCake = new Recipe(
  "Tres Leches Cake",
  "Eleno Rivera",
  "https://images.unsplash.com/photo-1602663491496-73f07481dbea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
  "treslechescake-ingredients.html",
  "treslechescake-equipment.html",
  "treslechescake-directions.html"
);


window.onload = function() {

  document.querySelector("#firstRecipe").onclick = function () {
    MonkeyBreadKabobs.displayRecipe();
  }
  
  document.querySelector("#secondRecipe").onclick = function () {
    FluffyFrenchToast.displayRecipe();
  }
  
  document.querySelector("#thirdRecipe").onclick = function () {
    TresLechesCake.displayRecipe();
  }
  
  
  
  
  
  
} //end window.onload