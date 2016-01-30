angular.module('zibzoo.cart', [])
  .controller('CartController', ['$scope', '$modal', 'User', function ($scope, $modal, User) {
    $scope.cart = User.data.orders;
    $scope.total = getTotal(); 

    $scope.removeItem = function (index) {
      $scope.cart.splice(index, 1);
    };

    $scope.checkout = function () {
      $modalInstance = $modal.open({
        templateUrl: 'app/user/cart/_checkout.html',
        controller: 'CartController'
      });
    };

    $scope.charge = function () {
      var orders = {
        _id: User.data._id,
        email: User.data.email,
        orders: _.groupBy(User.data.orders, 'vendor.id')
      };

      User.charge(orders)
        .then(function (result) {
          User.data.orders.length = 0;
          $scope.cancel();
          console.log('result: ', result);
        })
        .catch(function (error) {
          console.log('error: ', error);
        });
    };

    function getTotal () {
      return _.reduce(User.data.orders, function (total, order) {
        return total + order.item.price;
      }, 0);   
    };

    $scope.cancel = function () {
      $modalInstance.dismiss('cancel');
    };
  }]);
