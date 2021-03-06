import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import "./tc2021.scss";

$(document).ready(function() {

  /*

  var options = {
    damping: 0.1,
    thumbMinSize: 20,
    renderByPixels: true,
    continuousScrolling: true
  };
  
  var scrollbar = Scrollbar.init(document.querySelector('body'), options);

  scrollbar.addListener((status) => {
    var yOffset = scrollbar.offset.y;
  });

  */

  for (var i = 0; i < 50; i++) {
    var height = $(".tc2020-header-image").height();
    var width = $(window).width();

    var randX = Math.floor(Math.random() * width) + 1;
    var randY = Math.floor(Math.random() * height) + 1;
    var randOpacity = Math.random();
    var randClass = Math.floor(Math.random() * 1) + 1;
    var className = randClass == 1 ? "tc2020-dot" : "tc2020-dot";
    $(".tc2020-header-image").append(
      "<div class='" +
        className +
        "' style='top:" +
        randY +
        "px; left:" +
        randX +
        "px; opacity: " +
        randOpacity +
        "'><div class='inner-triangle'></div></div>"
    );
  }

  $(".tc2020-dot").each(function(index) {
    StartInterval(index);
  });

  function StartInterval(index) {
    var randTime = Math.floor(Math.random() * 15000) + 1000;
    setInterval(function() {
      myTimer(index);
    }, randTime);
  }

  function myTimer(index) {
    var height = $(".tc2020-header-image").height();
    var width = $(window).width();

    var randX = Math.floor(Math.random() * width) + 1;
    var randY = Math.floor(Math.random() * height) + 1;
    var randOpacity = Math.random();
    var randFilter = Math.random();

    $(".tc2020-dot")
      .eq(index)
      .css("top", randY + "px");

    $(".tc2020-dot")
      .eq(index)
      .css("left", randX + "px");

    $(".tc2020-dot")
      .eq(index)
      .css("opacity", randOpacity);

    $(".tc2020-dot")
      .eq(index)
      .css("filter", "blur(" + randFilter + "px)");
  }
});
