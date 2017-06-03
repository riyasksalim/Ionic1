app.controller('PoiListController', function ($scope, $stateParams, ionicMaterialMotion, apiservice) {

  

    function MakeGooglePOIModel(Photos,count) {
        //var model = Model;
        var pics = [];
        if (Photos !== undefined) {
            for (var i = 0; i < Photos.length; i++) {
                var promise = apiservice.getGooglePhotoBYReference(Photos[i].photo_reference);
                promise.then(function (payload) {
                    debugger;
                    //pics.push(i);
                    //model["Photos"] = payload;
                }, function (errorPayload) {

                });
            }
        }
        debugger;
    }


    debugger;

    var reset = function() {
        var inClass = document.querySelectorAll('.in');
        for (var i = 0; i < inClass.length; i++) {
            inClass[i].classList.remove('in');
            inClass[i].removeAttribute('style');
        }
        var done = document.querySelectorAll('.done');
        for (var i = 0; i < done.length; i++) {
            done[i].classList.remove('done');
            done[i].removeAttribute('style');
        }
        var ionList = document.getElementsByTagName('ion-list');
        for (var i = 0; i < ionList.length; i++) {
            var toRemove = ionList[i].className;
            if (/animate-/.test(toRemove)) {
                ionList[i].className = ionList[i].className.replace(/(?:^|\s)animate-\S*(?:$|\s)/, '');
            }
        }
    };

    $scope.ripple = function() {
        reset();
        document.getElementsByTagName('ion-list')[0].className += ' animate-ripple';
        setTimeout(function() {
            ionicMaterialMotion.ripple();
        }, 500);
    };

    $scope.fadeSlideInRight = function() {
        reset();
        document.getElementsByTagName('ion-list')[0].className += ' animate-fade-slide-in-right';
        setTimeout(function() {
            ionicMaterialMotion.fadeSlideInRight();
        }, 500);
    };

    $scope.fadeSlideIn = function() {
        reset();
        document.getElementsByTagName('ion-list')[0].className += ' animate-fade-slide-in';
        setTimeout(function() {
            ionicMaterialMotion.fadeSlideIn();
        }, 500);
    };

    $scope.blinds = function() {
        reset();
        document.getElementsByTagName('ion-list')[0].className += ' animate-blinds';
        setTimeout(function() {
            ionicMaterialMotion.blinds(); // ionic.material.motion.blinds(); //ionicMaterialMotion
        }, 500);
    };

    $scope.blinds();


    $scope.GooglePOI = JSON.parse($stateParams.status);

    $scope.GooglePOIModelList = [];
    for (var i = 0; i < $scope.GooglePOI.length; i++) {
        var place = $scope.GooglePOI[i];
        var GooglePOIModel = {
            name: place.name,
            place_id: place.place_id,
            reference: place.reference,
            types: place.types, //its an array
            vicinity: place.vicinity,
            Photos: ""
        }
        $scope.GooglePOIModelList.push(GooglePOIModel);
        $scope.fadeSlideIn();
        var photos = place.photos;
        MakeGooglePOIModel(photos, i);
    }

});