# Domain Models and Test Plan

### Core Features - Specification

The Business Analyst team working with the client has identified the following features that should be implemented:

- A representation of the airport is needed in the software that defines the maximum capacity of the number of planes that can be at the airport at any one time
  - This capacity should have the ability to be overridden as appropriate
- Air Traffic Controllers need to be able to:
  - Instruct a plane to land at an airport if the airport is not full and the plane is not already at the airport
  - Instruct a plane to take off from an airport as long as it is currently at the airport

### User Stories

1. As a airport manager, I want to change the maximum capacity at an airport, so that a different number of planes can land there.
2. As an ATC, I want to instruct a plane to land, so that a plane knows where it is clear.
3. As an ATC, I want to not instruct a plane to land at a full airport, so that we avoid collisions.
4. As an ATC, I want to not instruct a plane to land at an airport it's already at, to avoid redundancy.
5. As an ATC, I want to instruct a plane to take off, so that planes can leave the airport.
6. As an ATC, I want to not instruct a plane to take off if it's not already in the airport, to avoid redundancy.

> ATC: Air Traffic Controller

### Domain Model

| Object   | Properties                                        | Messages | Output |
| :------- | :---------                                        | :------- | :----- |
| Airport  | capacity @Number<br>landedPlane @Array[@Airplane] | changeCapacity(@Number)<br>landPlane(@Airplane)<br>isAirportClear()<br>isPlaneInAirport(@Airplane)<br>takeOff(@Airplane) | @Void<br>@Void<br>@Boolean<br>@Boolean<br>@Void  |
| Airplane | id @String                                        | getId()  | @String |

[Trello board being used for creation of User Stories](images/trelloboard-1.png) [Example of how tests and domain models are connected to Trello](images/trelloboard-2.png)

## Additional Features:

### User Stories

The following was created with the assistance of the online generative AI tool Chat-GPT.

1. As an air traffic controller, I want to ensure that planes cannot land when the weather conditions are stormy, so that we can make sure we land safely.
2. As a flight operations manager, I want to ensure that planes cannot take off when the weather conditions are stormy, so that we can make sure we take off safely.

[Chat-GPT's suggestions after being fed in the original prompts](images/ChatGPT-1.png)

### Domain Model

The following was created with the assistance of the online generative AI tool Chat-GPT.

| Object   | Properties | Messages | Output |
| :------- | :--------- | :------- | :----- |
| Weather  | stormy @Boolean  | @isStormy | @Boolean |
| Airport  | weather @Weather | @landPlane(@Airplane)<br>@takeOff(@Airplane) | @Void |

[Chat-GPT's suggestions generated from it's own user stories](images/chatgpt-2.png)