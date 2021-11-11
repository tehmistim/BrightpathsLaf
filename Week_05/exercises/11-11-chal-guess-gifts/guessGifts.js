var wishlist = [
    {name: "Mini Puzzle", size: "small", clatters: "yes", weight: "light"},
    {name: "Toy Car", size: "medium", clatters: "a bit", weight: "medium"},
    {name: "Card Game", size: "small", clatters: "no", weight: "light"}
];

var presents = [
    {size: "medium", clatters: "a bit", weight: "medium"},
    {size: "small", clatters: "yes", weight: "light"}
];

function guessGifts(wishlist, presents) {
    return wishlist.filter(function(wish) {
      return presents.some(function(present) {
        return Object.keys(present).every(function(key) {
          return wish[key] === present[key];
        });
      });
    }).map(function(wish) {
      return wish.name;
    });
};
  
guessGifts(wishlist, presents);