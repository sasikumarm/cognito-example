'use strict';

angular.module('cognito')
    .controller('userRegistrationController',
    [
        '$rootScope',
        '$scope',
        '$state',
        'userRegistrationService',

        function ($rootScope,
                  $scope,
                  $state,
                  userRegistrationService) {
        	 $scope.data = {};
        	 $scope.onRegister = function() {
                  $rootScope.$broadcast('loading:show');
        		 userRegistrationService.onRegister($scope.data,function(success,result){
        			 if(success){
                          $rootScope.$broadcast('loading:hide');
        				 $state.go('confirmRegistration',{
                             'username': $scope.data.name
                         }); 
        			 }else{
                          $rootScope.$broadcast('loading:hide');
        				 console.log(result);
        			 }
        		 });        	     
        	  };
        }
    ]);