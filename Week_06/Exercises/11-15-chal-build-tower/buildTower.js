function towerBuilder(nFloors) {
    var tower = [];
    for (var i = 0; i < nFloors; i++) {
    tower.push(" ".repeat(nFloors - i - 1)
    + "*".repeat((i * 2)+ 1)
    + " ".repeat(nFloors - i - 1))
    }
    return tower;
    }
    console.log(towerBuilder(5));