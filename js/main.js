import $ from 'jquery';

import Router from './router';
import './ajax_setup';

// Create variable & jquery 
let appElement = $('.app');

// Create Router & start it with a function
// Pass in appElement
let router = new Router(appElement);
router.start();



window.router = router;

console.log('Hello, World');


