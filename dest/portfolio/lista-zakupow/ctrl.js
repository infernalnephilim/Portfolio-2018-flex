app.controller('myCtrl', function ($scope) {
    $scope.appTitle = "Lista zakupów";
    $scope.productName = ["Mleko", "Jajka", "Chleb"]
    $scope.products = [
        {name: "Mleko", amount: 1},
        {name: "Jajka", amount: 6},
        {name: "Chleb", amount: 1}];
    $scope.addAm = 1;
    $scope.addProduct = function () {
        $scope.errorText = "";
        if (!$scope.addMe) {
            return;
        }
        if ($scope.productName.indexOf($scope.addMe) == -1) {
            $scope.productName.push($scope.addMe);
            var obj = {
                name: $scope.addMe,
                amount: $scope.addAm
            }
            $scope.products.push(obj);
        } else {
            $scope.errorText = "Ten produkt jest już na Twojej liście zakupów"
            $("#error-text").show("fade", {
                direction: 'up'
            }, "ease", 3000);
        }
    }
    $scope.removeItem = function (i) {
        $scope.products.splice(i, 1);
        $scope.productName.splice(i, 1);
        $scope.errorText = "";
        $("#error-text").hide("fade", {
            direction: 'up'
        }, "ease", 3000);
    }

    $scope.increaseAmount = function (i) {
        $scope.products[i].amount++;
    }
    $scope.decreaseAmount = function (i) {
        if ($scope.products[i].amount > 1) {
            $scope.products[i].amount--;
        }
    }
$scope.updateAmount = function (i) {
        if ($scope.products[i].amount !== this.value) {
            $scope.products[i].amount = this.value;
        }
    }


});
