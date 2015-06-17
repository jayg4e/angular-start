var myApp = angular.module('myApp', []);

// myApp.controller('MyController',
// 	function($scope) {
// 		$scope.author = {
// 			name: 'aleeex K',
// 			title: 'tutor',
// 			company : 'buildicus.com'
// 		}
// 	}
// );

// myApp.controller('MyController', 
// 	function MyController($scope) {
// 		$scope.artists = [
// 		{
// 			'name':  'mike bellingham',
// 			'shortname': 'mikey',
// 			'bio': 'mike sings for muse'
// 		},
// 		{
// 			'name':  'chester pengington',
// 			'shortname': 'chest',
// 			'bio': 'chester sings for linkin park'	
// 		},
// 		{
// 			'name':  'selena gomez',
// 			'shortname': 'selly',
// 			'bio': 'selena sings for selena'
// 		},
// 		{
// 			'name':  'darren olson',
// 			'shortname': 'd-ol',
// 			'bio': 'darren sings for alabama shakes'
// 		}
// 		]
// });

var myApp = angular.module('myApp', []);

myApp.controller('MyController', ['$scope', '$http', function($scope, $http) {
	$http.get('js/data.json').success(function(data) {
		$scope.artists = data;
	});
}])