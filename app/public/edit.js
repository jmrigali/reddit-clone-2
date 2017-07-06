(function (){
  'use strict'
  angular.module('app')
  .component('edit', {
    controller: Controller,
    templateUrl: './edit.html'
  });
  Controller.$inject=['$http', '$state', '$stateParams'];
  function Controller( $http, $state, $stateParams) {
    const vm = this;
    let id;

    vm.$onInit = function (){
      id=$stateParams.id;
      vm.tab=true;
      $http.get('/api/posts/'+id)
      .then((response) => {
        vm.posts= response.data
      })
    }
    vm.editPost=function(obj){
      $http.patch('/api/posts/'+id, vm.posts)
      .then((response)=>{
        $state.go('something');
      })
    }
  };
})()
