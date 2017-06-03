app.controller('IntroductionController', function ($scope, $state, ionicMaterialInk, ImageSearch, $ionicSlideBoxDelegate) {
   
    //ionic.material.ink.displayEffect();
  //  ionicMaterialInk.displayEffect();

    // Toggle Code Wrapper
    //var code = document.getElementsByClassName('code-wrapper');
    //for (var i = 0; i < code.length; i++) {
    //    code[i].addEventListener('click', function() {
    //        this.classList.toggle('active');
    //    });
    //}
  
    // $scope.images = ["https://www.w3schools.com/css/img_fjords.jpg", "https://www.w3schools.com/css/img_fjords.jpg","https://www.w3schools.com/css/img_fjords.jpg"];
    $scope.enableButton = false;

    $scope.options = {
        loop: false,
        effect: 'fade',
        speed: 500,
    }

  

    $scope.slideHasChanged = function ($index) {
        //alert('slideHasChanged $index=' + $index);
        if ($index === 2) {
            // first box
            $scope.enableButton = true;
        }
        else {
            $scope.enableButton = false;
        }
    };

    $scope.slides = [

        {
            title: 'Welcome to <b>PERSONALISED TRAVEL SEQUENCE</b>',
            description: 'The <b>PERSONALISED TRAVEL SEQUENCE</b> is a automatic travel recomentation personalised to user interest.',
            image: 'img/globe-earth-animation-6.gif',
        },
        {
            title: 'What is Data Mining?',
            description: '<b>Data Mining </b> is a practice of examining large preexcisting databases in order to generate new informations',
            image: 'img/globe-earth-animation-6.gif',
        },
        {
            title: 'What is Point of Interests?',
            description: 'The <b>POI</b>is a specific point location that some one may find useful or interesing',
            image: 'img/globe-earth-animation-6.gif',
        }
    ];

    $scope.go = function () {
      
        $state.go('app.motion');
    };


    //$scope.doSearch = function () {
    //    if (!$scope.search) return;
    //    console.log("search for ", $scope.search);
    //    ImageSearch.getImages($scope.search).then(function (results) {
    //        $scope.images = results.data.d.results;
    //        setTimeout(function () {
    //            $ionicSlideBoxDelegate.slide(0);
    //            $ionicSlideBoxDelegate.update();
    //            $scope.$apply();
    //        });
    //    });
    //};
});

