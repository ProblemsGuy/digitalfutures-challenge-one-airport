export default class Weather {
    #stormy;

    constructor(){
        this.#stormy = false;
    }

    get stormy(){
        return this.#stormy;
    }

    set stormy(input){
        this.#stormy = input;
    }

}