(function(){
	'use strict';

	angular.module('workspace', [ 'ngRoute','workspace-main','templates' ])
	  .config(function ($routeProvider) {
	    $routeProvider
	      .otherwise({
	        redirectTo: '/'
	      });
	  });
	  
})();