angular.module('zibzoo.socketFactory', [])
  .factory('Socket', ['$rootScope', function ($rootScope) {
    var socket = io.connect();
    var socketLogic = {
      on: function (eventName, callback) {
        socket.on(eventName, function () {
          var args = arguments;
          $rootScope.$apply(function () {
            callback.apply(socket, args);
          });
        });
      },

      emit: function (eventName, data, callback) {
        socket.emit(eventName, data, function () {
          var args = arguments;
          $rootScope.$apply(function () {
            if (callback) {
              callback.apply(socket, args);
            }
          });
        });

      },

      removeAllListeners: function (event) {
        socket.removeAllListeners(event);
      }

    };

    return socketLogic;

  }]);
