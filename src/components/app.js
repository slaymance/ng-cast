angular.module('video-player')
.component('app', {
  controller: function(youTube) {
    this.videos = exampleVideoData;
    this.currentVideo = exampleVideoData[0];
    this.selectVideo = index => this.currentVideo = this.videos[index]; 
    this.searchResults = data => this.videos = data;
    youTube.search('', this.searchResults);
  },  
  templateUrl: 'src/templates/app.html'
});
