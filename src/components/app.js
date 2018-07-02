angular.module('video-player')

.component('app', {
  controller: function($window, $scope){
    this.query;
    this.videos = $window.exampleVideoData;
    this.selectedVideo = this.videos[0];
    this.changeSelectedVideo = (video) => {
      this.selectedVideo = video;
    }
    this.update = (videos) => {
      console.log('test')
      this.videos = videos;
      this.selectedVideo = this.videos[0];
    }
  },
  templateUrl: 'src/templates/app.html'
});
