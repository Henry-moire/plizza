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
    $(".largeCheckbox").click(function()
    {
      if($(this).prop("checked") == true)
      {
        var pizzaSize = "Large";
      }
    })
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
  });
});