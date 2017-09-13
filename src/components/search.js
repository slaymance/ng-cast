angular.module('video-player')
.component('search', {
  controller: function(youTube) {
    this.query = '';
    this.search = () => {
      youTube.search(this.query, this.result);
      this.query = '';
    };
  },
  bindings: {
    result: '<'
  },
  templateUrl: 'src/templates/search.html'
});
