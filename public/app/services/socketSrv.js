angular
.module('loginApp.services')
.factory('socketSrv', function (socketFactory) {
  return socketFactory({
    prefix: '',
    ioSocket: io.connect('http://localhost')
  });
})