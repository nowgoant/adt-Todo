var ant;
(function (ant) {
    'use strict';
    var MSPointerType = {
        start: 'MSPointerOver',
        move: 'MSPointerMove',
        end: 'MSPointerOut'
    }, pointerType = {
        start: 'pointerover',
        move: 'pointermove',
        end: 'pointerout'
    }, touchType = {
        start: 'touchstart',
        move: 'touchmove',
        end: 'touchend'
    }, mouseType = {
        start: 'mousedown',
        move: 'mousemove',
        end: 'mouseup',
    }, eventTouchstart, eventTouchmove, eventTouchend;
    if (window.navigator.msPointerEnabled) {
        //Internet Explorer 10 style
        eventTouchstart = window['PointerEvent'] ? "pointerdown" : "MSPointerDown";
        eventTouchmove = window['PointerEvent'] ? "pointermove" : "MSPointerMove";
        eventTouchend = window['PointerEvent'] ? "pointerup" : "MSPointerUp";
    }
    else {
        eventTouchstart = "touchstart";
        eventTouchmove = "touchmove";
        eventTouchend = "touchend";
    }
    var swipe = (function () {
        function swipe() {
        }
        return swipe;
    })();
    ant.swipe = swipe;
})(ant || (ant = {}));
(function () {
    var servies = angular.module('ant.servies', []);
    servies.factory('AntSwipe', [ant.swipe]);
});
//# sourceMappingURL=ant.swipe.js.map