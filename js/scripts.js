function Pizza(flavor, size, crust, toppings)
{
  this.flavor = flavor;
  this.size = size;
  this.crust = crust;
  this.toppings = toppings;
}

$(document).ready(function()
{
  $(".magheritaClickable").click(function()
  {
    $(".choices").toggle();
    $("#magheritaButton").show();
    $("#mushroomButton").hide();
    $("#pepperoniButton").hide();
    $("#vegeterianButton").hide();
  });
});

$(document).ready(function()
{
  $(".mushroomClickable").click(function()
  {
    $(".choices").toggle();
    $("#magheritaButton").hide();
    $("#mushroomButton").show();
    $("#pepperoniButton").hide();
    $("#vegeterianButton").hide();
  });
});

$(document).ready(function()
{
  $(".pepperoniClickable").click(function()
  {
    $(".choices").toggle();
    $("#magheritaButton").hide();
    $("#mushroomButton").hide();
    $("#pepperoniButton").show();
    $("#vegeterianButton").hide();
  });
});

$(document).ready(function()
{
  $(".vegeterianClickable").click(function()
  {
    $(".choices").toggle();
    $("#magheritaButton").hide();
    $("#mushroomButton").hide();
    $("#pepperoniButton").hide();
    $("#vegeterianButton").show();
  });
});

$(document).ready(function()
{
  $("#magheritaButton").click(function()
  {
    var pizzaSize = "";
    var pizzaCrust = "";
    var pizzaToppings = "";
    
    if($("#largeCheckbox").is(":checked"))
    {
      pizzaSize = "Large";
    } 
    else if($("#mediumCheckbox").is(":checked"))
    {
      pizzaSize = "Medium";
    }
    else if($("#smallCheckbox").is(":checked"))
    {
      pizzaSize = "Small";
    } 
    
    
    if($("#crispyCheckbox").is(":checked"))
    {
      pizzaCrust = "Crispy";
    } 
    else if($("#stuffedCheckbox").is(":checked"))
    {
      pizzaCrust = "Stuffed";
    }
    else if($("#glutenCheckbox").is(":checked"))
    {
      pizzaCrust = "Gluten-free";
    }

    if($("#chickenCheckbox").is(":checked"))
    {
      pizzaToppings = "Chicken";
    } 
    else if($("#mushroomCheckbox").is(":checked"))
    {
      pizzaToppings = "Mushroom";
    } 
    else if($("#pineappleCheckbox").is(":checked"))
    {
      pizzaToppings = "Pineapple";
    }
    else if($("#pepperoniCheckbox").is(":checked"))
    {
      pizzaToppings = "Pepperoni";
    }

    var newPizza = new Pizza("Magherita", pizzaSize, pizzaCrust, pizzaToppings);

    $("ul#order").append("<li><span class='pizzaOrder'>" + newPizza.flavor + ", " + 
    newPizza.size + ", " + newPizza.crust + ", " + newPizza.toppings + 
    "</span></li>");
  });
});