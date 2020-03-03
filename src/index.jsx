import "./App.scss";
import {paroller} from 'paroller.js';

$(".tc-parallax-photo").paroller();

$('.postjumbotron').paroller({factor: 0.35 });



$(document).ready(function(){
  $('body .sg-question input[type="text"]').attr("placeholder", "Email Address");
})

lazyload();