'use strict';

angular.module('polygonStadiumApp')
  .controller('TemplateController', ['$scope', templateController])
  .controller('GameController', ['$scope', '$http', gameController]);

function templateController($scope) {
  $(document).ready(function() {
    $.material.init();
    $('.dropdown-toggle').dropdown();
  });
  var vm = this;
}

function gameController($scope, $http) {
  $(document).ready(function() {
    $.material.init();
    $('.dropdown-toggle').dropdown();
  });
  var vm = this;
  $scope.data = {};
  vm.saveChosen = false;
  $http({
      url: 'http://localhost:3000/users/1/saves',
      method: 'GET'
    })
    .success(function(data/*, status, headers, config*/) {
      vm.saves = data;
    });
    vm.chooseSave = function(save, index) {
      if (save === 'new') {
        $scope.save = 'new';
        vm.saveId = index;
        vm.saves = [];
      } else {
        $scope.save = save;
        vm.saveId = vm.saves.length + 1;
        vm.saves = [];
      }
      vm.saveChosen = true;
    };
}
