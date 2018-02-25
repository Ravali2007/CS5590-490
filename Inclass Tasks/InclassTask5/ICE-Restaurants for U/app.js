// 'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [])

    .controller('View1Ctrl', function ($scope, $http) {
        $scope.venueList = new Array();
        $scope.mostRecentReview;
        $scope.getVenues = function () {
            var placeEntered = document.getElementById("txt_placeName").value;
            var searchQuery = document.getElementById("txt_searchFilter").value;
            if (placeEntered != null && placeEntered != "" && searchQuery != null && searchQuery != "") {

                //This is the API that gives the list of venues based on the place and search query.
                var handler = $http.get("https://api.foursquare.com/v2/venues/search" +
                    "?client_id=WSJAOJ5ZCU00TIOVK2AAHRT0LTO45HOZYDZTQP1JQVLMTUBP" +
                    "&client_secret=WHDDUYGVJ0SOZWEBI1EP2W5VEWBNVLWDLH1UAVL22X5JS11D" +
                    "&v=20160215&limit=5" +
                    "&near=" + placeEntered +
                    "&query=" + searchQuery);

                handler.success(function (data) {
                    if (data != null && data.response != null && data.response.venues != undefined && data.response.venues != null) {
                        var myList = document.querySelector('ul');

                        for(var i = 0; i < 10; i++) {
                            var listItem = document.createElement('li');
                            listItem.innerHTML += '<p> ';
                            listItem.innerHTML = "Name of restaurant: "+ data.response.venues[i].name;
                            listItem.innerHTML += '<br>';
                            listItem.innerHTML += " State: "+ data.response.venues[i].location.state;
                            listItem.innerHTML += '<br>';
                            listItem.innerHTML += " Address of restaurant: "+ data.response.venues[i].location.address+ " "+data.response.venues[i].location.crossStreet;
                            listItem.innerHTML += '<br>';
                            listItem.innerHTML += '</p> ';
                            myList.appendChild(listItem);
                        }
                    }
                })
                handler.error(function (data) {
                    alert("There was some error processing your request. Please try after some time.");
                });
            }
        }
    });
