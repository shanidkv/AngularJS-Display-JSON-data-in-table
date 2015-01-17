
/* ------------------------------------------------------- 

* Filename:     AngularJS Display JSON Data in Table
* Website:      http://www.shanidkv.com
* Description:  Shanidkv AngularJS blog
* Author:       Shanid KV shanidkannur@gmail.com

---------------------------------------------------------*/

var app = angular.module('shanidkvApp',[]);

function githubController($scope,$http) {
  $http.get("https://api.github.com/users/mralexgray/repos")
  .success(function(response) {$scope.names = response;});
}
