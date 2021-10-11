/* Students: Please use this week's project for Week 8: Assignment 8: Class Map. 
     You will need to replace the contents of this JavaScript file with your own work, 
     and create any other files, if any, required for the assignment.
     When you are done, be certain to submit the assignment in both Repl.it and Canvas to be graded. */
var point1 = {lat: 37.7539596, lng: -119.557863};
var point2 = {
  lat: 37.7462109, lng: -119.5780571
};
var point3 = {
  lat: 37.7489064, lng: -119.6170456
};

//2. create a Goole Map object
map = new google.maps.Map(document.getElementById('map'), {
  center: point1,
  zoom: 13,
  fullscreenControl: true,
  styles: [
    {
        "stylers": [
            {
                "hue": "#2c3e50"
            },
            {
                "saturation": 250
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
            {
                "lightness": 50
            },
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    }
]
});

//make a maker
var marker1 = new google.maps.Marker(
  {
    //1. the position of the maker point1
    position: point1,
    //2. which google map js var to place marker inside
    map: map,
    //3.title to show when user points at marker
    title: "The marker"
  }
);

var marker2 = new google.maps.Marker(
  {
    //1. the position of the maker point1
    position: point2,
    //2. which google map js var to place marker inside
    map: map,
    //3.title to show when user points at marker
    title: "The marker"
  }
);

var marker3 = new google.maps.Marker(
  {
    //1. the position of the maker point1
    position: point3,
    //2. which google map js var to place marker inside
    map: map,
    //3.title to show when user points at marker
    title: "The marker"
  }
);
//4. create the info window object usinf gmap api
var infobox = new google.maps.InfoWindow(
  {
    content: "<h3>Welcome</h3><p>Hopefully you found the right spot.</p>"
  }
);
var infobox2 = new google.maps.InfoWindow(
  {
    content: '<img src="bridalveil_tn.jpg" alt="falls">'
  }
);
//5. define a click event on our marker to open
marker1.addListener(
  //1 kind of event as a string
  'click',
  //2.a block of code contained in a function to run when the event happens
  function() {
    //tell the info window to open inside of our map
    infobox.open(
      //1.the map to open inside of
      map,
      //2 the point/marker to open the window at
      marker1
    );
  }
);
marker2.addListener(
  //1 kind of event as a string
  'click',
  //2.a block of code contained in a function to run when the event happens
  function() {
    //tell the info window to open inside of our map
    infobox2.open(
      //1.the map to open inside of
      map,
      //2 the point/marker to open the window at
      marker2
    );
  }
);

marker3.addListener(
  //1 kind of event as a string
  'click',
  //2.a block of code contained in a function to run when the event happens
  function() {
    //tell the info window to open inside of our map
    infobox.open(
      //1.the map to open inside of
      map,
      //2 the point/marker to open the window at
      marker3
    );
  }
);
/*Find current location
infoWindow = new google.maps.InfoWindow();

  const locationButton = document.createElement("button");

  locationButton.textContent = "Click for Current Location";
  locationButton.classList.add("custom-map-control-button");
  map.controls[google.maps.ControlPosition.TOP_CENTER].push(locationButton);
  locationButton.addEventListener("click", () => {
    // Try HTML5 geolocation.
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };

          infoWindow.setPosition(pos);
          infoWindow.setContent("Location found.");
          infoWindow.open(map);
          map.setCenter(pos);
        },
        () => {
          handleLocationError(true, infoWindow, map.getCenter());
        }
      );
    } else {
      // Browser doesn't support Geolocation
      handleLocationError(false, infoWindow, map.getCenter());
    }
  });


function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(
    browserHasGeolocation
      ? "Error: The Geolocation service failed."
      : "Error: Your browser doesn't support geolocation."
  );
  infoWindow.open(map);
};*/