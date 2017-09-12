angular.module('video-player')
.service('youTube', function($http) {
  this.search = (string, callback) => {
    $http({
      method: 'GET',
      url: 'https://www.googleapis.com/youtube/v3/search',
      params: {
        key: YOUTUBE_API_KEY,
        maxResults: '5',
        part: 'snippet',
        q: string,
        type: 'video'
      }
    }).then(function successCallback(response) {
      callback(response.data.items);
    }, function errorCallback() {
      console.error('Error');
    });
  };
});
