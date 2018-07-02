angular.module('video-player')

.component('videoListEntry', {
  bindings : {
    video: '<',
    changeSelectedVideo: '<'
  },
  controller: function($window){

  },
templateUrl: 'src/templates/videoListEntry.html'
});
