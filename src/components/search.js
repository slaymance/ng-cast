angular.module('video-player')
.component('search', {
  controller: function() {
    this.result = () => console.log('result');
  },
  bindings: {

  },
  templateUrl: 'src/templates/search.html'
});
