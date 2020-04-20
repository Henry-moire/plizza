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
    
    if($(".largeCheckbox").prop(":checked"))
    {
      pizzaSize = "Large";
      console.log(pizzaSize);
    }
    $(".mediumCheckbox").click(function()
    {
      if($(this).prop("checked") == true)
      {
        var pizzaSize = "Medium";
      }
    })
    $(".smallCheckbox").click(function()
    {
      if($(this).prop("checked") == true)
      {
        var pizzaSize = "Small";
      }
    })
    
    $(".crispyCheckbox").click(function()
    {
      if($(this).prop("checked") == true)
      {
        var pizzaCrust = "Crispy";
      }
    })
    $(".stuffedCheckbox").click(function()
    {
      if($(this).prop("checked") == true)
      {
        var pizzaCrust = "Stuffed";
      }
    })
    $(".glutenCheckbox").click(function()
    {
      if($(this).prop("checked") == true)
      {
        var pizzaCrust = "Gluten-free";
      }
    })

    $(".chickenCheckbox").click(function()
    {
      if($(this).prop("checked") == true)
      {
        var pizzaTopping = "Chicken";
      }
    })
    $(".mushroomCheckbox").click(function()
    {
      if($(this).prop("checked") == true)
      {
        var pizzaTopping = "Mushroom";
      }
    })
    $(".pineappleCheckbox").click(function()
    {
      if($(this).prop("checked") == true)
      {
        var pizzaTopping = "Pineapple";
      }
    })
    $(".pepperoniCheckbox").click(function()
    {
      if($(this).prop("checked") == true)
      {
        var pizzaToppings = "Pepperoni";
      }
    })

    var newPizza = new Pizza("Magherita", pizzaSize, pizzaCrust, pizzaToppings);

    $("ul#order").append("<li><span class='pizzaOrder'>" + newPizza.flavor + ", " + 
    newPizza.size + ", " + newPizza.crust + ", " + newPizza.toppings + 
    "</span></li>");
  });
});