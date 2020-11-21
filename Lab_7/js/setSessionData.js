const main = document.getElementById("main");

function getBusRoute() {
  let busRoute = document.getElementById("busroute").value; // Your code here

  if ((typeof busRoute !== "undefined") & (busRoute !== "")) {
    let busRouteURL = "http://api.umd.io/v0/bus/routes" + busRoute; // Your code here

    fetch(busRouteURL)
      .then((response) => {
        return response.json();
      })
      .then((route) => {
        // YOUR CODE HERE
        console.log("Here");
        console.group(route);
        let title, latMax, latMin, lonMax, lonMin;
        let message = "";
        if (typeof route.title !== "undefined") {
          title = route.title;
          latMax = route.lat_max;
          latMin = route.lat_min;
          lonMax = route.lonMax;
          lonMin = route.lonMin;
          message = title + " <br>Lat max : " + latMax + "<br>Lat min : " + latMin + "<br>Lon max : " + lonMax + "<br>Lon min :" + lonMin;
         } else {
           message = "No bus information available";
         }
         console.log(title);
         main.innerHTML = "Bus Route Info: " + message; 
      })
      .catch((err) => {
        console.log(err);
        main.innerHTML = "Invalid bus route";
      });
  } else {
    main.innerHTML = "No value provided";
  }
}
