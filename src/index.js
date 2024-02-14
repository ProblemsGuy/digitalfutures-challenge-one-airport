import Airplane from "./airplane.js"
import Airport from "./airport.js"

let p = (string) => {console.log(string)};

let airport = new Airport();
airport.changeCapacity(5);
let airplane = new Airplane("Boeing");
let airplane2 = new Airplane("Airbus");

p("=============")
p("A new Airport is created.");
p(airport);
p("=============")
p("The Airport has a capacity property.");
p("This capacity can be changed by method changeCapacity.")
p(airport.changeCapacity);
airport.changeCapacity(10);
p("Running this method with the parameter 10 changes the capacity property to 10.")
p(airport);
p("=============")
p("A new Airplane is created.");
p(airplane);
p("=============")
p("This Airplane can land in the Airport with the method landPlane.")
p(airport.landPlane);
airport.landPlane(airplane);
p("Running this method with the parameter of the previous Airplane, puts the Airplane into landedPlanes.");
p(airport);
p("=============")
p("This Airplane that lands in the landedPlanes property is the same as our first plane.")
p("Original Airplane:");
p(airplane);
p("Airplane in landedPlanes[0]:");
p(airport.landedPlanes[0]);
p("=============")
p("If the capacity and number of Airplanes landed are equal, then the Airport is considered full.");
airport.changeCapacity(1);
p("This Airport is considered full:");
p(airport);
p("If we try to land a this new Airplane now, it won't be landed.");
p(airplane2);
airport.landPlane(airplane2);
p("Contents of landedPlanes property:")
p(airport.landedPlanes[0]);
p("=============")
airport.changeCapacity(10);
p("If an Airplane tries to land in the Airport that is already in the Airport, it will not land again.");
airport.landPlane(airplane);
p(airport);
p(airport.landedPlanes);
p(airport.landedPlanes[0]);
p("Despite running landPlane again, since the Airplane 'Boeing' has already landed, it does not land again.");
p("=============")
p("An Airplane can be instructed to take off with the method takeOff.");
p(airport.takeOff);
airport.takeOff(airplane);
p("After being run, the Airplane is taken out of landedPlanes")
p(airport);
p("=============")
p("If an airplane is not in the landedPlanes property, and is instructed to takeOff, nothing happens.")
airport.takeOff(airplane);
p(airport);
p("=============")