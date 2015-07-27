/**
 * Created by David on 17/07/2015.
 */
app.factory('imgurService', ['$http', '$q', 'mySettings','imgurConfig', function ($http, $q, mySettings,imgurConfig) {

  var httpGet = function (path) {
    var deferred = $q.defer();

    $http({method: 'GET', url: mySettings.apiUri + path}).

      success(function (data, status, headers, config) {
        deferred.resolve(data);
      }).
      error(function (data, status, headers, config) {

        deferred.reject(data);

      });

    return deferred.promise;
  };

  var httpPost = function (path, data) {
    var deferred = $q.defer();

    $http({
      method: 'POST',
      url: mySettings.apiUri + path,
      data: JSON.stringify(data),
      // headers: {'Content-Type': 'application/json'},
      withCredentials: true
    }).

      success(function (data, status, headers, config) {
        deferred.resolve(data);
      }).
      error(function (data, status, headers, config) {

        deferred.reject(data);

      });

    return deferred.promise;
  };

  var httpPostFile = function (path, file) {
    var deferred = $q.defer();

    var fd = new FormData();
    fd.append('image', file);


    $http({
      method: 'POST',
      url: mySettings.apiUri + path,
      data: fd,
      transformRequest: angular.identity,
      // headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'},
      headers: {'Content-Type': undefined, 'Authorization' :
        imgurConfig.client_id ,
        'Accept': 'application/json'
      }
    }).

      success(function (data, status, headers, config) {
        deferred.resolve(data);
      }).
      error(function (data, status, headers, config) {

        deferred.reject(data);

      });

    return deferred.promise;
  };

  var httpPut = function (path, data) {
    var deferred = $q.defer();

    $http({
      method: 'PUT',
      url: mySettings.apiUri + path,
      data: JSON.stringify(data),
      // headers: {'Content-Type': 'application/json'},
      withCredentials: true
    }).

      success(function (data, status, headers, config) {
        deferred.resolve(data);
      }).
      error(function (data, status, headers, config) {

        deferred.reject(data);

      });

    return deferred.promise;
  };

  var httpDelete = function (path) {
    var deferred = $q.defer();

    $http({
      method: 'Delete',
      url: mySettings.apiUri + path,
      withCredentials: true
    }).

      success(function (data, status, headers, config) {
        deferred.resolve(data);
      }).
      error(function (data, status, headers, config) {

        deferred.reject(data);

      });

    return deferred.promise;
  };

  return {

    getImage: function (id) {
      return httpGet('/image/'+id);
    },
    uploadImage: function(file){
      return httpPostFile('/image',file)
    }

  }
}]);
