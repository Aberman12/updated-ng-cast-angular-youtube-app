angular.module('video-player')

.component('videoPlayer', {
  bindings:{
    selectedVideo: '<'
  },
  controller: function($window){

  },
  templateUrl: 'src/templates/videoPlayer.html'
});
