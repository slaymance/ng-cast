angular.module('video-player')
.component('app', {
  controller: function(youTube) {
    this.videos = exampleVideoData;
    this.selectVideo = index => this.currentVideo = this.videos[index]; 
    this.searchResults = data => {
      this.videos = data;
      this.selectVideo(0);
    };
    youTube.search('', this.searchResults);
    this.currentVideo = this.videos[0];
  },  
  templateUrl: 'src/templates/app.html'
});
