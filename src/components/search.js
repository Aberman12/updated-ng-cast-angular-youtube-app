angular.module('video-player')

.component('search', {
  bindings: {
    onUpdate: '<'
  },
  controller: function($window){
    this.searchQuery = (youTube) => {
      // youTube.search('cats', this.update)
      // this.querystuff = document.getElementsByClassName('.form-control').val();
      console.log(this.onUpdate)
      // this.query = query;
    }
  },
  templateUrl: 'src/templates/search.html'
});
