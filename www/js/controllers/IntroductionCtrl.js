app.controller('IntroductionController', function ($scope, $state, ionicMaterialInk, ImageSearch, $ionicSlideBoxDelegate) {

  //   <!--https://www.youtube.com/watch?v=lvGAgul5QT4-->
  //  <script>
  //      function jsonFlickrApi(rsp) {
  //          debugger;
  //  window.rsp = rsp;
  //  var s = "";
  //  // http://farm{id}.static.flickr.com/{server - id}/{id}_{secret}_[mstb].jpg
  //  // http://www.flickr.com/photos/{user - id}/{photo - id}
  //      s = "total number is: " + rsp.photos.photo.length + "<br />";

  //  for (var i=0; i < rsp.photos.photo.length; i++) {
  //          photo = rsp.photos.photo[i];
  //      t_url = "http://farm" + photo.farm + ".static.flickr.com/" +
  //      photo.server + "/" + photo.id + "_" + photo.secret + "_" + "t.jpg";
  //    p_url = "http://www.flickr.com/photos/" + photo.owner + "/" + photo.id;
  //    s +=  '<a href="' + p_url + '">' + '<img alt="'+ photo.title +
  //      '"src="' + t_url + '"/>' + '</a>';
  //  }
  //  document.writeln(s);
  //}
  //  </script>
  //      <!--<script src= "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=7f0838f8465ef40769465d98568d3933&tags=santogopalanmemorialreadingroom&per_page=50&format=json" ></script > -->
  //          <script src="https://api.flickr.com/services/rest/?method=flickr.test.login&api_key=004a2a979699ede40ed45e56a70b7d11&format=json&nojsoncallback=1&auth_token=72157684553246376-4392ba8801fe9007&api_sig=4d9dcf8f702634bf3d2e0ab1c8cc7f63"></script>


    //https://api.flickr.com/services/rest/?method=flickr.test.login&api_key=004a2a979699ede40ed45e56a70b7d11&format=json&nojsoncallback=1&auth_token=72157684553246376-4392ba8801fe9007&api_sig=4d9dcf8f702634bf3d2e0ab1c8cc7f63


    debugger;
    var app = new Clarifai.App(
        'jqq0X4vzgde8StMZB1mX4Z3ct25f9cn43g1c-Mzz',
        'aCidm0RlbMCt2Y2p75deFgg1RFYlRz8XSCRgqICB'
    );

    // predict the contents of an image by passing in a url
    app.models.predict(Clarifai.GENERAL_MODEL, 'https://i.ytimg.com/vi/cNycdfFEgBc/maxresdefault.jpg').then(
        function (response) {
            debugger;
            console.log(response);

        },
        function (err) {
            debugger;
            console.error(err);
        }
    );




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
      
        $state.go('motion');
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

