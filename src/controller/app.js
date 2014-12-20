/* globals angular */
(function () {
    'use strict';
    // Controller name is handy for logging
    var controllerId = 'appCtrl';
    angular.module('app', []).controller(controllerId, appCtrl);
    function appCtrl($scope) {
        $scope.title = 'hi auto load';
    }
})();
//# sourceMappingURL=app.js.map