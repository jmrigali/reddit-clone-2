(function () {
  'use strict'
  angular.module('app')
  .component('something', {
    controller: Controller,
    templateUrl: './main.html'
  });

  Controller.$inject= ['$http'];
  function Controller ($http) {
    const vm = this;

    vm.$onInit = function () {
      vm.posts = [];
      $http.get('/api/posts')
      .then((response) => {
        vm.posts= response.data
      })
      vm.tab = false;
    };
    vm.createPost = function (){
      vm.tab = false;
      $http.post('/api/posts', vm.post)
      .then((response)=>{
        $http.get('/api/posts')
        .then((response) => {
          vm.posts=response.data;
        });
      });

      vm.posts.push(vm.post);
      delete vm.post;
    };
    vm.setTab = function (){

      if (vm.tab === false) {
        vm.tab = true
      } else {
        vm.tab = false
      }
    }
    vm.voteCountUp = function (obj){
      obj.vote_count ++;
    }
    vm.voteCountDown = function (obj){
      obj.vote_count --;
    }
    vm.showComment = function (obj) {
        if(obj.show === true){
        obj.show = false;
      } else {
        obj.show = true;
      }
    }
    vm.createMessage = function (obj, comment) {
      let object= {};
      object.content= comment;
      $http.post('api/posts/'+ obj.id + '/comments', object )
      .then((response) => {
        obj.comments.push(response.data);
      })
      delete obj.comment;
    }
  }
}());
