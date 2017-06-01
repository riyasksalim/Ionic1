app.controller('MainCtrl', function ($scope, ionicMaterialInk, ImageSearch, $ionicSlideBoxDelegate) {
    //ionic.material.ink.displayEffect();
    ionicMaterialInk.displayEffect();

    // Toggle Code Wrapper
    var code = document.getElementsByClassName('code-wrapper');
    for (var i = 0; i < code.length; i++) {
        code[i].addEventListener('click', function() {
            this.classList.toggle('active');
        });
    }
    debugger;
    $scope.images = ["https://www.w3schools.com/css/img_fjords.jpg", "https://www.w3schools.com/css/img_fjords.jpg","https://www.w3schools.com/css/img_fjords.jpg"];



    $scope.doSearch = function () {
        if (!$scope.search) return;
        console.log("search for ", $scope.search);
        ImageSearch.getImages($scope.search).then(function (results) {
            $scope.images = results.data.d.results;
            setTimeout(function () {
                $ionicSlideBoxDelegate.slide(0);
                $ionicSlideBoxDelegate.update();
                $scope.$apply();
            });
        });
    };
});

app.service("ImageSearch", function ($http) {

    return {
        getImages: function (term) {
            var appid = "fgQ7ve/sV/eB3NN/+fDK9ohhRWj1z1us4eIbidcsTBM";
            $http.defaults.headers.common['Authorization'] = 'Basic ' + btoa(appid + ':' + appid);
            return $http.get("https://api.datamarket.azure.com/Bing/Search/v1/Image?$format=json&Query='" + escape(term) + "'&$top=10");
        }
    };

})