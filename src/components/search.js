angular.module('video-player')
.component('search', {
  controller: function(youTube) {
    this.service = {};
    this.query = '';
    this.submitSearch = () => {
      youTube.search(this.query, this.result);
      this.clearQuery();
    };
    this.liveSearch = () => {
      youTube.search(this.query, this.result);
    };
    this.clearQuery = () => this.query = '';
    this.delayedSearch = _.throttle(this.liveSearch, 500);
  },
  bindings: {
    result: '<'
  },
  templateUrl: 'src/templates/search.html'
});
