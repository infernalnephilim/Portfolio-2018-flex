var app = angular.module('myApp', []);
app.directive("w3TestDirective", function() {
    return {
       // restrict: 'E',
       // templateUrl: 'commentBox/addComment/addComment.html'
        template : "<h1>Directive</h1>"
    };
});