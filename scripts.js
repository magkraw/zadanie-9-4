function drawTree (rows) {
  for (var i = 1; i <= rows; i++) {

    var stars = '*';
    for (var j = 2; j <= i; j++) {
      stars += '**';
    }

    var spaces = '';
    for (var j = rows; j > i; j--) {
      spaces += ' ';
    }

    var output = spaces + stars;
    console.log(output);
  }
};

drawTree(10);
