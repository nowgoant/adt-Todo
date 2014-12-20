/* globals angular */

(function () {
    'use strict';

    // Controller name is handy for logging
    var controllerId = 'appCtrl';

    angular.module('app', []).controller(controllerId, appCtrl);

    function appCtrl($scope: Data) {
        $scope.title = 'hi auto load';
    }
})();