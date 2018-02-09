$(document).ready(function(){
    var primaryBtn = $('#click1');
    var secondaryBtns = $('.secondary');
    primaryBtn.click(function () {
        //primaryBtn.classList.add('hide');
        deleteItem(primaryBtn, 600, showSecondaryBtns);
    });

    function deleteItem(item, delay, callback) {
        item.animate({opacity:0},{duration: 500, queue: false
        }).promise().done(
            function(){
                item.remove();
                callback(delay);}
        );


    }

    function showSecondaryBtns(delay) {
        secondaryBtns.animate({opacity:1});
    }



});

var text;
function getValue(){
text = document.getElementById("counT").value;
}


'use strict';
var app = angular.module('app', ['pascalprecht.translate']);
  app.config(function ($translateProvider) {
    $translateProvider.fallbackLanguage('en');
    $translateProvider.registerAvailableLanguageKeys(['en', 'ru'],{
      'en_*':'en',
      'ru_*':'ru'
    })
    $translateProvider.translations('en', {
      QUESTION:"Where are you going?",
      BUTTON_LANG_EN:"english",
      BUTTON_LANG_RU:"russian"
    });
    $translateProvider.translations('ru', {
      QUESTION:"Куда вы собираетесь пойти?",
      BUTTON_LANG_EN:"Английский",
      BUTTON_LANG_RU:"Русский"
    });
    $translateProvider.useSanitizeValueStrategy('escape');
    $translateProvider.preferredLanguage('en');
    
  });
  app.controller('Ctrl',['$scope', '$translate', function ($scope, $translate) {
    $scope.changeLanguage = function(key){
      $translate.use(key);
    };
  }]);



