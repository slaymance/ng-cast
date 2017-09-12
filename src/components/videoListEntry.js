angular.module('video-player')
.component('videoListEntry', {
  controller: function() {
    this.click = function() {

    };
  },
  bindings: {
    video: '<',
  },

  templateUrl: 'src/templates/videoListEntry.html'
});
