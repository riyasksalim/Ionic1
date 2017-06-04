//var app = angular.module('starter', ['ionic', 'ionic-material', 'starter.services']);

app.controller('ChoosingLocationController', function ($scope, $state, $stateParams, $timeout, ionicMaterialInk, ionicMaterialMotion) {
    $scope.gotolocation = function (location) {
        debugger;
        $state.go('SelectLocation', { status: location, param2: location });
        
    };

    ionicMaterialInk.displayEffect();
});
app.controller('SelectLocationController', function ($scope, NgMap, apiservice, UI, $ionicLoading, $state, $stateParams, $timeout, ionicMaterialInk, ionicMaterialMotion) {
    var status = $stateParams.status;
    debugger
    $scope.Title = "Current Location";
    $scope.ShowPOIs = false;
    $scope.location = [];
    $scope.$on('mapInitialized', function (event, map) {
        $scope.objMapa = map;
    });

    //my own photos
    //https://api.flickr.com/services/rest/?method=flickr.photos.getWithGeoData&api_key=50303a9d9ba03987f2abf04fbeea54a0&format=rest&auth_token=72157681601806254-d444d62e6a361f81&api_sig=9932d6b8dbafa6e43c567f303e8057d9

    $scope.scopePhotos = [];
    debugger;
    //get photos of the place of lat long
    var promise = apiservice.getFlickerImages();
    promise.then(function (rsp) {
        debugger;
        var rsp = rsp.data;
        var s, photo, t_url, p_url;
        for (var i = 0; i < rsp.photos.photo.length; i++) {
            photo = rsp.photos.photo[i];
            t_url = "http://farm" + photo.farm + ".static.flickr.com/" +
                photo.server + "/" + photo.id + "_" + photo.secret + "_" + "t.jpg";
            p_url = "http://www.flickr.com/photos/" + photo.owner + "/" + photo.id;
            s += '<a href="' + p_url + '">' + '<img alt="' + photo.title +
                '"src="' + t_url + '"/>' + '</a>';
            console.log(t_url);
            $scope.scopePhotos.push(t_url);
        }

    }, function (errorPayload) {
        debugger;
        alert(errorPayload);
    });




   
    if (status == "Current") {
          getLocation();
        debugger;
        $scope.location.Name = "Kochi";
        $scope.location.latitude = 9.9312;
        $scope.location.longitude = 76.2673;
        
      
        UI.toast("Your Current location is " + $scope.location.Name, "long", "top");
    }
    else {

    }

    $scope.ShowPOI = function () {
        $ionicLoading.show({
            template: '<p>Searchng POI of the Location ' + $scope.location.Name + '</p><ion-spinner></ion-spinner>'
        });
        $scope.ShowPOIs = true;
        //$scope.Destinations = [
        //    { Name: "label", latitude: 9.931421300000002, longitude: 9.931421300000002 },
        //    { Name: "notes", latitude: 10.0237, longitude: 76.3116 }];
        $scope.Destinations = [];
        var promise = apiservice.getGooglePOi($scope.location);
        promise.then(function (payload) {
            debugger;
            var data = payload.data.results;
            $scope.GooglePOI = data
            for (var i = 0; i < data.length; i++) {
                var place = data[i];
                var obj = {
                    Name: place.name,
                    latitude: place.geometry.location.lat,
                    longitude: place.geometry.location.lng
                }
                console.log(JSON.stringify(obj));
                debugger;
                $scope.Destinations.push(obj);
            }
            $ionicLoading.hide();
            $scope.Title = "POI of the location";

        }, function (errorPayload) {       

        });
       

    }
    $scope.showInfoWindow = function (event, destination) {
        var infowindow = new google.maps.InfoWindow();
        var center = new google.maps.LatLng(destination.latitude, destination.longitude);

        infowindow.setContent(
            '<h3>' + destination.Name + '</h3>');

        infowindow.setPosition(center);
        infowindow.open($scope.objMapa);
    };
    function getLocation() {
        debugger;
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        } else {
            alert("Geolocation is not supported by this browser.");
        }
    }
    function showPosition(position) {
       var a = "Latitude: " + position.coords.latitude +
            "<br>Longitude: " + position.coords.longitude;
       alert(JSON.stringify(position.coords));
    }
    $scope.showPOIList = function () {
        //  $state.go('app.lists');
        $state.go('lists', { status: JSON.stringify($scope.GooglePOI), param2: null });
    };

})