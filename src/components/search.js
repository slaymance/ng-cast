angular.module('video-player')
.component('search', {
  controller: function(youTube) {
    this.query = 'defaults';
    this.search = () => youTube.search(this.query, this.result);
  },
  bindings: {
    result: '<'
  },
  templateUrl: 'src/templates/search.html'
});
