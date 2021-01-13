import {
    onMouseClick,
    fixHeader,
    hideMouseIcon
} from "./js/scroll.js";
import "./css/style.scss";
import anime from 'animejs/lib/anime.es.js';

onMouseClick();
fixHeader();
hideMouseIcon();

anime({
    targets: '.features-item-title',
    value: [0, 1000],
    round: 1,
    easing: 'easeInOutExpo'

});

console.log("it works")