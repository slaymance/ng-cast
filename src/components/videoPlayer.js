angular.module('video-player')

.component('videoPlayer', {
  controller: function() {
    this.$onInit = function() {
      console.log(this.video);
    };
  },
  bindings: {
    video: '<'
  },
  templateUrl: './src/templates/videoPlayer.html'
});
