angular.module('zibzoo.vendors.directive', [])
  .directive('blockgrid', function () {
    return {
      restrict: 'E',
      templateUrl: 'app/components/vendors/_vendors.html',
      require: ['^VendorListController', '^LandingController']
    };
  });
