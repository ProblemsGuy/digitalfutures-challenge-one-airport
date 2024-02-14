import { assertEquals, assertFalse, assertTrue, it } from "./test-framework.js"
import Airport from "../src/airport.js";
import Airplane from "../src/airplane.js";
import Weather from "../src/weather.js";

//Function 1 - Test 1 - Input of 4 changes capacity to 4

it("Function 1 - Test 1 - Input of 4 changes capacity to 4", () => {
    //Arrange
    let airport = new Airport();
    let newCapacity = 4;

    //Act
    airport.changeCapacity(newCapacity);

    //Assert
    return assertEquals(airport.capacity,newCapacity);

});

//Function 1 - Test 2 - Input of 4 changes capacity to 4
it("Function 1 - Test 2 - Changing capacity multiple times in a row works", () => {
    //Arrange
    let airport = new Airport();
    let newCapacity = 6;
    let newCapacity2 = 200;

    //Act
    airport.changeCapacity(newCapacity);
    airport.changeCapacity(newCapacity2);

    //Assert
    return assertEquals(airport.capacity,newCapacity2);

});

//Function 2 - Test 1 - An airplane is landed when landPlane is called.
it("Function 2 - Test 1 - An airplane is landed when landPlane is called.", () => {
    //Arrange
    let airport = new Airport();
    let airplane = new Airplane();
    airport.changeCapacity(50);

    //Act
    airport.landPlane(airplane);

    //Assert
    assertEquals(airport.landedPlanes.length,1);
});

//Function 2 - Test 2 - An airplane landed with the landPlane function is the same plane.
it("Function 2 - Test 2 - An airplane landed with the landPlane function is the same plane.", () => {
    //Arrange
    let airport = new Airport();
    let airplane = new Airplane("Boeing");
    airport.changeCapacity(50);

    //Act
    airport.landPlane(airplane);

    //Assert
    assertEquals(airport.landedPlanes[0].getId, "Boeing");
});

//Function 3 - Test 1 - When capacity is full, isAirportClear returns false.
it("Function 3 - Test 1 - When capacity is full, isAirportClear returns false.", () => {
    //Arrange
    let airport = new Airport();
    airport.changeCapacity(1);
    let airplane = new Airplane("Boeing");
 
    //Act
    airport.landPlane(airplane);

    //Assert
    assertFalse(airport.isAirportClear());
});

//Function 3 - Test 2 - When capacity is full, planes can't be landed
it("Function 3 - Test 2 - When capacity is full, planes can't be landed", () => {
    //Arrange
    let airport = new Airport();
    airport.changeCapacity(1);
    let airplane1 = new Airplane("Boeing");
    let airplane2 = new Airplane("Airbus");
 
    //Act
    airport.landPlane(airplane1);
    airport.landPlane(airplane2);

    //Assert
    assertEquals(airport.landedPlanes.length,1);
});

//Function 4 - Test 1 - if a plane is in the airport, isPlaneInAirport() returns true.
it("Function 4 - Test 1 - if a plane is in the airport, isPlaneInAirport() returns true.", () => {
    //Arrange
    let airport = new Airport();
    airport.changeCapacity(3);
    let airplane = new Airplane("Boeing");

    //Act
    airport.landPlane(airplane);

    //Assert
    assertTrue(airport.isPlaneInAirport(airplane));
});

//Function 4 - Test 2 - if a plane is in the airport, isPlaneInAirport() returns true.
it("Function 4 - Test 2 - Planes already in the airport cannot land.", () => {
    //Arrange
    let airport = new Airport();
    airport.changeCapacity(10);
    let airplane = new Airplane("Boeing");

    //Act
    airport.landPlane(airplane);
    airport.landPlane(airplane);

    //Assert
    assertEquals(airport.landedPlanes.length,1);
});

//Function 5 - Test 1 - Taking off a plane removes a plane from landedPlanes.
it("Function 5 - Test 1 - Taking off a plane removes a plane from landedPlanes.", () => {
    //Arrange
    let airport = new Airport();
    airport.changeCapacity(10);
    let airplane = new Airplane("Boeing");

    //Act
    airport.landPlane(airplane);
    airport.takeOff(airplane);

    //Assert
    assertEquals(airport.landedPlanes.length,0);
})

//Function 6 - Test 1 - Planes cannot land when the Weather is stormy.
it("Function 6 - Test 1 - Planes cannot land when the Weather is stormy", () => {

     //Arrange
     let weather = new Weather();
     weather.stormy = true;
     let airport = new Airport(weather);
     airport.changeCapacity(10);
     let airplane = new Airplane("Boeing");
     
     //Act
     airport.landPlane(airplane);
 
     //Assert
     assertEquals(airport.landedPlanes.length,0);

});

//Function 7 - Test 1 - Planes cannot take off when the Weather is stormy.
it("Function 7 - Test 1 - Planes cannot take off when the Weather is stormy", () => {

      //Arrange
      let weather = new Weather();
      weather.stormy = true;
      let airport = new Airport(weather);
      airport.changeCapacity(10);
      let airplane = new Airplane("Boeing");
      airport.landedPlanes[0] = airplane;
      
      //Act
      airport.takeOff(airplane);
  
      //Assert
      assertEquals(airport.landedPlanes.length,1);

});