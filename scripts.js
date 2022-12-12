  // JavaScript for TP9

//function to load a file from the URL "fromFile" into the object identified by "whereTo"
function loadFileInto(recipeID, listName, whereTo) {

	// creating a new XMLHttpRequest object
	ajax = new XMLHttpRequest();
  
  // define the fromFile variable with the passed recipe name and list
  fromFile = "recipes.php?recipeID=" + recipeID + "&recipeList=" + listName;
  
  console.log("From URL: " + fromFile);

	// defines the GET/POST method, source, and async value of the AJAX object
	ajax.open("GET", fromFile, true);

	// provides code to do something in response to the AJAX request
	ajax.onreadystatechange = function() {
    
			if ((this.readyState == 4) && (this.status == 200)) {
        
				console.log("AJAX response: " + this.responseText);
        
        if (this.responseText != 0) { 
          responseArray = JSON.parse(this.responseText);
          
          responseHTML = "";
          for (x=0; x < responseArray.length; x++) {
            responseHTML += "<li>" + responseArray[x] + "</li>";
          }
          
          document.querySelector(whereTo).innerHTML = responseHTML;
          
        } else {
          console.log("Error: no recipe/list found");
        }
        
			} else if ((this.readyState == 4) && (this.status != 200)) {
        
        console.log("Error: " + this.responseText);
        
      }
		
	} // end ajax.onreadystatechange function

	// initiate request and wait for response
	ajax.send();

}



// new Recipe object
function Recipe(recipeName, contributorName, imgURL, recipeID) {
  
  this.recipeName = recipeName;
  this.contributor = contributorName;
  this.imgURL = imgURL;
  this.id = recipeID;
  
  this.displayRecipe = function() {
    
    layoutTitle = document.querySelectorAll("#titleBanner h1");
    layoutTitle[0].innerHTML = this.recipeName;

    layoutContributor = document.querySelectorAll("#titleBanner h4");
    layoutContributor[0].innerHTML = "Contributed by " + this.contributor;

    document.getElementById("titleBanner").style.backgroundImage = "url(" + this.imgURL + ")";
    
    loadFileInto(this.id, "ingredients", "#ingredients ul");
    loadFileInto(this.id, "equipment", "#equipment ul");
    loadFileInto(this.id, "directions", "#directions ol");
    
  }
  
  
}

Home = new Recipe(
  "Welcome to Sweets For Lease",
  "All Amazing Sweet Connoisseurs",
  "https://images.unsplash.com/photo-1484979045040-0ab3854b6acb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1148&q=80",
  "home",
);


MonkeyBreadKabobs = new Recipe(
  "Monkey Bread Kabobs",    
  "Madelyn Lease",
  "https://cdn.pixabay.com/photo/2013/09/16/16/03/banana-182852_960_720.jpg", 
  "monkeyBreadKabobs", 
);


FluffyFrenchToast = new Recipe(
  "Fluffy French Toast",
  "Analysse Palomares",
  "https://images.unsplash.com/photo-1639108094328-2b94a49b1c2e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80", 
  "fluffyFrenchToast",
);


TresLechesCake = new Recipe(
  "Tres Leches Cake", 
  "Eleno Rivera",
  "https://images.unsplash.com/photo-1602663491496-73f07481dbea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80", 
  "tresLechesCake",
);


BakedAppleCiderDoughnuts = new Recipe(
  "Baked Apple Cider Doughnuts", 
  "Madelyn Lease",
  "https://images.unsplash.com/photo-1543876604-b8ac0e7ded00?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80", 
  "bakedAppleCiderDoughnuts",
);


PfeffernusseCookies = new Recipe(
  "Pfeffernusse Cookies", 
  "Madelyn Lease",
  "https://images.unsplash.com/photo-1593629718348-0b98ae35ad3f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80", 
  "pfeffernusseCookies",
);


MoonCake = new Recipe(
  "Moon Cake", 
  "Madelyn Lease",
  "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F807321.jpg&q=60&c=sc&orient=true&poi=auto&h=512", 
  "moonCake",
);


TheOriginalFantasyFudge = new Recipe(
  "The Original Fantasy Fudge", 
  "Madelyn Lease",
  "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80", 
  "theOriginalFantasyFudge",
);


CranberryOrangeTeaRing = new Recipe(
  "Cranberry-Orange Tea Ring", 
  "Madelyn Lease",
  "https://images.unsplash.com/photo-1522336849566-02cbb8bffc4c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80", 
  "cranberryOrangeTeaRing",
);


BasicCrepes = new Recipe(
  "Basic Crepes", 
  "Madelyn Lease",
  "https://images.unsplash.com/photo-1630362137311-ca837e790e47?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80", 
  "basicCrepes",
);


AirFryerMiniCroissants = new Recipe(
  "Air Fryer Mini Croissants with Nutella and Jam", 
  "Madelyn Lease",
  "https://images.unsplash.com/photo-1623334044303-241021148842?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80", 
  "airFryerMiniCroissants",
);


SouthernFriedApples = new Recipe(
  "Southern Fried Apples", 
  "Madelyn Lease",
  "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fpublic-assets.meredithcorp.io%2Fa9dca954cbefc489ddc12a6eac297561%2F1669052036783image.jpg&q=60&c=sc&orient=true&poi=auto&h=512", 
  "southernFriedApples",
);


StrawberryMaltedMilkMeringues = new Recipe(
  "Strawberry Malted Milk Meringues", 
  "Madelyn Lease",
  "https://images.unsplash.com/photo-1560008361-2a6ca9bca6da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1108&q=80", 
  "strawberryMaltedMilkMeringues",
);


CranberryGlazeCheesecake = new Recipe(
  "Cheesecake with Cranberry Glaze and Sugared Cranberries", 
  "Madelyn Lease",
  "https://images.unsplash.com/photo-1585996399037-bf5746e1a485?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80", 
  "cranberryGlazeCheesecake",
);


CreamyCaramelFlan = new Recipe(
  "Creamy Caramel Flan", 
  "Madelyn Lease",
  "https://images.unsplash.com/photo-1653988354010-39637252a2db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80", 
  "creamyCaramelFlan",
);


BrownieCaramelCheesecake = new Recipe(
  "Brownie Caramel Cheesecake", 
  "Madelyn Lease",
  "https://images.unsplash.com/photo-1607920591413-4ec007e70023?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80", 
  "brownieCaramelCheesecake",
);

