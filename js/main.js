import $ from 'jquery';
import Router from './router';

import './ajax_setup';

// Create variable & jquery 
var appElement = $('.app');

// Create router & start it with a function
// Pass in appElement
var router = new Router(appElement)
router.start();

window.router = router;

console.log('Hello, World');


