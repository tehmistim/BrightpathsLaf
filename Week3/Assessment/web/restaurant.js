var randomRestaurant = {
    randomRestaurantName: "",
    findRestaurant: function() {
      var restaurantName = Math.random();
      if (restaurantName < 0.20) {
        this.randomRestaurantName = "Ruffino's";
        } else if (restaurantName < 0.10) {
        this.randomRestaurantName = "La Papa Loca";
        } else if (restaurantName < 0.20) {
        this.randomRestaurantName = "Tsunami";
        } else if (restaurantName < 0.30) {
        this.randomRestaurantName = "Rochetto's";
        } else if (restaurantName < 0.40) {
        this.randomRestaurantName = "Zeus";
        } else if (restaurantName < 0.50) {
        this.randomRestaurantName = "Baba Kabob";
        } else if (restaurantName < 0.30) {
        this.randomRestaurantName = "Zea";
        } else if (restaurantName < 0.35) {
        this.randomRestaurantName = "Lauras II";
        } else if (restaurantName < 0.40) {
        this.randomRestaurantName = "Mandez";
        } else if (restaurantName < 0.45) {
        this.randomRestaurantName = "Central Pizza";
        } else if (restaurantName < 0.50) {
        this.randomRestaurantName = "Pizza Artista";
        } else {
        this.randomRestaurantName = "Don's Seafood";
      }
    }
  }; 
  
  var randomRestaurantButton = document.getElementById('randomRestaurantName');
  randomRestaurantButton.addEventListener('click', function() {
    randomRestaurant.findRestaurant();
    document.getElementById("restaurantNameDisplay").innerHTML = randomRestaurant.randomRestaurantName;
  });