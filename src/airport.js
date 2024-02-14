export default class Airport {
    constructor(weather){
        //The capacity of the airport as expressed as an int, as yet undefined.
        this.capacity = undefined;
        //The planes currently stationed at the airport, assumed empty at the start.
        this.landedPlanes = [];
        //The Weather object which describes the stormy weather around the airport.
        this.weather = weather;
    }

    //Function to change the capacity of an airport as required
    changeCapacity(newCapacity){
        this.capacity = newCapacity;
    }

    //Function to land a plane in the airport's landed planes.
    landPlane(airplane){
        let isStormy = this.weather === undefined ? true : !this.weather.stormy;
        if(this.isAirportClear() && !this.isPlaneInAirport(airplane) && isStormy){
            this.landedPlanes.push(airplane);
        }
    }

    //Function to let a plane leave the airport's landed planes.
    takeOff(airplane){
        let isStormy = this.weather === undefined ? true : !this.weather.stormy;
        if (this.isPlaneInAirport(airplane) && isStormy){
            this.landedPlanes = this.landedPlanes.filter((ap) => ap.getId != airplane.getId);
        }
    }

    //Checks if there is room for another plane to land.
    isAirportClear(){
        return this.capacity > this.landedPlanes.length;
    }

    //Checks if a specific plane is in the airport.
    isPlaneInAirport(airplane) {
        let checkList = this.landedPlanes.filter((ap) => ap.getId === airplane.getId);
        return checkList.length > 0;
    }

    

}