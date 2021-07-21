//Business Logic

Describe: Pizza()

Test: "It should create an object for a pizza with user-determined size, crust, sauce, and toppings"
Code: let myPizza = new Pizza("Extra Large", "Regular Crust", "Marinara Sauce", "Mozzarella Cheese");
Expect (myPizza.toEqual(Pizza {size: "Extra Large", crust:"Regular Crust", sauce: "Marinara Sauce", toppings: "Mozzarella Cheese"});

Describe Pizza.prototype.orderTotal()

Test: "It should set an initial price based on the size of the pizza"
Code: let myPizza = new Pizza('small');
Expect (myPizza.orderTotal().toEqual(Pizza {size: 'small', total: 8});

Test: "It should add to the total price based on which crust is selected"
Code: let myPizza = new Pizza('small', 'thinCrust');
Expect (myPizza.orderTotal().toEqual(Pizza {size: 'small', crust: 'thinCrust', total: 9});

# Pizzas in Space

#### An independent project made to practice Object-Oriented JavaScript.

#### By Jacob Strong

## Technologies Used

* HTML
* CSS
* JavaScript
* jQuery
* Markdown

## Description

This is my first independent project as part of the intermediate JavaScript course at Epicodus. Objectives for this project are to show proficiency in creating objects and constructors and using them on a webpage! The application itself is a pizza parlor simulator where users can build their perfect pizza from the ground up. The user will go through and select the size of the pizza, the crust, sauce and toppings! Once the user is happy with their selection they will be able to see everyone's favorite part of ordering a pizza: the price!

For this project I decided to go with a space theme. I figured that if I were on a voyage through the stars I'd get pretty homesick. What better to remind you of home than a delicious pizza!

## Installation and Setup

* Make sure you have the latest versions of the related software installed on your machine.
* Clone this repository to your desktop by executing $ git clone https://github.com/JacobTStrong/pizza-parlor in the command line.
* Locate the directory on your computer and open it in your text editor to view the code.
* Double-click on the "index.html" file within the project directory to open the web page in your browser.
* Once the webpage has loaded, the user will be greeted with the options for building their pizza.
* Once satisfied, click the button labelled "Set Pizzas to Done!"

## Known Bugs

* No bugs at this stage in development

## License

[MIT](https://en.wikipedia.org/wiki/MIT_License)

Copyright (c) 2021 Jacob Strong

## Contact Information

Jacob Strong <a href="mailto:rjts2896@gmail.com">rjts2896@gmail.com</a>