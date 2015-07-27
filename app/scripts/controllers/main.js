'use strict';

/**
 * @ngdoc function
 * @name imgviurApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the imgviurApp
 */
angular.module('imgviurApp')
  .controller('MainCtrl',['$scope','imgurService', function ($scope,imgurService) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];


    var file;

    //file changed handler
    $scope.fileNameChanged = function (element) {


      file = element.files[0];

      $scope.$apply();
    };

    $scope.uploadFile = function(){
      imgurService.uploadImage(file).then(function (result) {
        alert(result.data.id)

      }, function (error) {
        alert(error)

      });
    };

  }]);
