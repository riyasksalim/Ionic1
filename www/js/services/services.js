var app = angular.module('starter.services', []);


app.service("ImageSearch", function ($http) {

    return {
        getImages: function (term) {
            var appid = "fgQ7ve/sV/eB3NN/+fDK9ohhRWj1z1us4eIbidcsTBM";
            $http.defaults.headers.common['Authorization'] = 'Basic ' + btoa(appid + ':' + appid);
            return $http.get("https://api.datamarket.azure.com/Bing/Search/v1/Image?$format=json&Query='" + escape(term) + "'&$top=10");
        }
    };

})




app.service('UI', function ($http, $window, $q, $ionicLoading, $timeout) {

    this.toast = function (msg, duration, position) {
        if (!duration)
            duration = 'short';
        if (!position)
            position = 'top';

        // PhoneGap? Use native:
        if ($window.plugins) {
            if ($window.plugins.toast)
                $window.plugins.toast.show(msg, duration, position,
                    function (a) { }, function (err) { })
            return;
        }

        // … fallback / customized $ionicLoading:
        $ionicLoading.show({
            template: msg,
            noBackdrop: true,
            duration: (duration == 'short' ? 700 : 1500)
        });

    }
})



app.factory('apiservice', function ($http) {

    function getGooglePOi(location) {
        return $http.get('https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=' + location.latitude + ',' + location.longitude + '+&radius=500&type=point_of_interest&key=AIzaSyD2gBAIjDft_TIBq_X5-wUa8KMrKfHHtxk');
    };
    function getGooglePhotoBYReference(reference) {
        return $http.get('https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=' + reference + '&sensor=false&key=AIzaSyD2gBAIjDft_TIBq_X5-wUa8KMrKfHHtxk');
    };

    function getFlickerImages(){
        return $http.get('https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=50303a9d9ba03987f2abf04fbeea54a0&text=parks&lat=9.9312&lon=76.2673&radius=10&format=json&nojsoncallback=1&api_sig=a34ed9f909945886b8c8db89ececf90c');
    };

    
    return {
        getGooglePOi: getGooglePOi,
        getGooglePhotoBYReference: getGooglePhotoBYReference,
        getFlickerImages: getFlickerImages
    }
        
});

