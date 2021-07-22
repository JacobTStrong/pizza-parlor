// Business Logic

function Pizza(size, crust, sauce) {
  this.size = size;
  this.crust = crust;
  this.sauce = sauce;
  this.total = 0;
}

Pizza.prototype.orderTotal = function() {
  if (this.size === 'small') {
    this.total = 8;
  } else if (this.size === 'medium') {
    this.total = 11;
  } else if (this.size === 'large') {
    this.total = 14;
  } else {
    this.total = 19;
  }
  if (this.crust === 'stuffedCrust') {
    this.total += 3;
  } else if (this.crust === 'thinCrust') {
    this.total += 1;
  } else {
    this.total += 0;
  }
  if (this.sauce === 'marinara') {
    this.total += 0;
  } else {
    this.total +=2;
  }
  return this.total;
};

// User Interface Logic

$(document).ready(function() {
  $("#pizzaForm").submit(function(event) {
    event.preventDefault();
    $("#pizzaToppings").fadeToggle();
    $("#outroPartOne").fadeToggle();

    let finalSize = $("#sizeSelection").val();
    let finalCrust = $("#crustSelection").val();
    let finalSauce = $("#sauceSelection").val();

    let usersPizza = new Pizza(finalSize, finalCrust, finalSauce);
    
    $("#totalCost").text("$" + usersPizza.orderTotal());
  });
});

$(document).ready(function() {
  $(".button#startCooking").click(function() {
    $("#enterTheTraveler").fadeToggle();
		$("#header").fadeToggle();
  });

  $(".button#toOriginStory").click(function() {
    $("#originStory").fadeToggle();
		$("#enterTheTraveler").fadeToggle();
  });

  $(".button#buildPizza").click(function() {
    $("#endIntro").fadeToggle();
		$("#originStory").fadeToggle();
  });

  $(".button#startAssembling").click(function() {
    $("#pizzaSize").fadeToggle();
		$("#endIntro").fadeToggle();
  });

  $(".button#sizeSelected").click(function() {
    $("#pizzaCrust").fadeToggle();
		$("#pizzaSize").fadeToggle();
  });

  $(".button#crustSelected").click(function() {
    $("#pizzaSauce").fadeToggle();
		$("#pizzaCrust").fadeToggle();
  });

  $(".button#sauceSelected").click(function() {
    $("#pizzaToppings").fadeToggle();
		$("#pizzaSauce").fadeToggle();
  });

  $(".button#outroButtonOne").click(function() {
    $("#outroPartTwo").fadeToggle();
		$("#outroPartOne").fadeToggle();
  });

  $(".button#outroButtonTwo").click(function() {
    $("#outroPartThree").fadeToggle();
		$("#outroPartTwo").fadeToggle();
  });

  $(".button#outroButtonThree").click(function() {
    $("#outroPartFour").fadeToggle();
		$("#outroPartThree").fadeToggle();
  });

  $(".button#outroButtonFour").click(function() {
    $("#outroPartFive").fadeToggle();
		$("#outroPartFour").fadeToggle();
  });

  $(".button#refreshPage").click(function() {
    location.reload()
  });
});