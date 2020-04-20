$(document).ready(function() {
  $(".magheritaClickable").click(function() {
    $(".choices").toggle();
    $("#magheritaButton").show();
    $("#mushroomButton").hide();
    $("#pepperoniButton").hide();
    $("#vegeterianButton").hide();
  });
});

$(document).ready(function() {
  $(".mushroomClickable").click(function() {
    $(".choices").toggle();
    $("#magheritaButton").hide();
    $("#mushroomButton").show();
    $("#pepperoniButton").hide();
    $("#vegeterianButton").hide();
  });
});

$(document).ready(function() {
  $(".pepperoniClickable").click(function() {
    $(".choices").toggle();
    $("#magheritaButton").hide();
    $("#mushroomButton").hide();
    $("#pepperoniButton").show();
    $("#vegeterianButton").hide();
  });
});

$(document).ready(function() {
  $(".vegeterianClickable").click(function() {
    $(".choices").toggle();
    $("#magheritaButton").hide();
    $("#mushroomButton").hide();
    $("#pepperoniButton").hide();
    $("#vegeterianButton").show();
  });
});