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



BakedAppleCiderDoughnuts = new Recipe(
  "Baked Apple Cider Doughnuts",
  "AllRecipes",
  "https://images.unsplash.com/photo-1543876604-b8ac0e7ded00?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  "appleciderdoughnuts-ingredients.html",
  "appleciderdoughnuts-equipment.html",
  "appleciderdoughnuts-directions.html"
);


PfeffernusseCookies = new Recipe(
  "Pfeffernusse Cookies",
  "AllRecipes",
  "https://images.unsplash.com/photo-1593629718348-0b98ae35ad3f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  "pfeffernussecookies-ingredients.html",
  "pfeffernussecookies-equipment.html",
  "pfeffernussecookies-directions.html"
);


MoonCake = new Recipe(
  "Moon Cake",
  "AllRecipes",
  "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F807321.jpg&q=60&c=sc&orient=true&poi=auto&h=512",
  "mooncake-ingredients.html",
  "mooncake-equipment.html",
  "mooncake-directions.html"
);


TheOriginalFantasyFudge = new Recipe(
  "The Original Fantasy Fudge",
  "AllRecipes",
  "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80",
  "fantasyfudge-ingredients.html",
  "fantasyfudge-equipment.html",
  "fantasyfudge-directions.html"
);


CranberryOrangeTeaRing = new Recipe(
  "Cranberry-Orange Tea Ring",
  "AllRecipes",
  "https://images.unsplash.com/photo-1522336849566-02cbb8bffc4c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80",
  "cranberryorangetearing-ingredients.html",
  "cranberryorangetearing-equipment.html",
  "cranberryorangetearing-directions.html"
);


BasicCrepes = new Recipe(
  "Basic Crepes",
  "AllRecipes",
  "https://images.unsplash.com/photo-1630362137311-ca837e790e47?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80",
  "basiccrepes-ingredients.html",
  "basiccrepes-equipment.html",
  "basiccrepes-directions.html"
);


AirFryerMiniCroissantsWithNutellaAndJam = new Recipe(
  "Air Fryer Mini Croissants with Nutella and Jam",
  "AllRecipes",
  "https://images.unsplash.com/photo-1623334044303-241021148842?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  "minicroissants-ingredients.html",
  "minicroissants-equipment.html",
  "minicroissants-directions.html"
);


SouthernFriedApples = new Recipe(
  "Southern Fried Apples",
  "AllRecipes",
  "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fpublic-assets.meredithcorp.io%2Fa9dca954cbefc489ddc12a6eac297561%2F1669052036783image.jpg&q=60&c=sc&orient=true&poi=auto&h=512",
  "southernfriedapples-ingredients.html",
  "southernfriedapples-equipment.html",
  "southernfriedapples-directions.html"
);


StrawberryMaltedMilkMeringues = new Recipe(
  "Strawberry Malted Milk Meringues",
  "AllRecipes",
  "https://images.unsplash.com/photo-1560008361-2a6ca9bca6da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1108&q=80",
  "strawberrymaltedmilkmeringues-ingredients.html",
  "strawberrymaltedmilkmeringues-equipment.html",
  "strawberrymaltedmilkmeringues-directions.html"
);


CheesecakeWithCranberryGlazeAndSugaredCranberries = new Recipe(
  "Cheesecake with Cranberry Glaze and Sugared Cranberries",
  "AllRecipes",
  "https://images.unsplash.com/photo-1585996399037-bf5746e1a485?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80",
  "cranberrycheesecake-ingredients.html",
  "cranberrycheesecake-equipment.html",
  "cranberrycheesecake-directions.html"
);


CreamyCaramelFlan = new Recipe(
  "Creamy Caramel Flan",
  "AllRecipes",
  "https://images.unsplash.com/photo-1653988354010-39637252a2db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80",
  "creamycaramelflan-ingredients.html",
  "creamycaramelflan-equipment.html",
  "creamycaramelflan-directions.html"
);


BrownieCaramelCheesecake = new Recipe(
  "Brownie Caramel Cheesecake",
  "AllRecipes",
  "https://images.unsplash.com/photo-1607920591413-4ec007e70023?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  "browniecaramelcheesecake-ingredients.html",
  "browniecaramelcheesecake-equipment.html",
  "browniecaramelcheesecake-directions.html"
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
  
  document.querySelector("#fourthRecipe").onclick = function () {
    BakedAppleCiderDoughnuts.displayRecipe();
  }
  
  document.querySelector("#fifthRecipe").onclick = function () {
    PfeffernusseCookies.displayRecipe();
  }
  
  document.querySelector("#sixthRecipe").onclick = function () {
    MoonCake.displayRecipe();
  }
  
  document.querySelector("#seventhRecipe").onclick = function () {
    TheOriginalFantasyFudge.displayRecipe();
  }
  
   document.querySelector("#eighthRecipe").onclick = function () {
    CranberryOrangeTeaRing.displayRecipe();
  }
   
   document.querySelector("#ninthRecipe").onclick = function () {
    BasicCrepes.displayRecipe();
  }
  
   document.querySelector("#tenthRecipe").onclick = function () {
    AirFryerMiniCroissantsWithNutellaAndJam.displayRecipe();
  }
   
   document.querySelector("#eleventhRecipe").onclick = function () {
    SouthernFriedApples.displayRecipe();
  }
   
   document.querySelector("#twelfthRecipe").onclick = function () {
    StrawberryMaltedMilkMeringues.displayRecipe();
  }
   
   document.querySelector("#thirteenthRecipe").onclick = function () {
    CheesecakeWithCranberryGlazeAndSugaredCranberries.displayRecipe();
  }
   
   document.querySelector("#fourteenthRecipe").onclick = function () {
    CreamyCaramelFlan.displayRecipe();
  }
   
   document.querySelector("#fifteenthRecipe").onclick = function () {
    BrownieCaramelCheesecake.displayRecipe();
  }
   
} //end window.onload