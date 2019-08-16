# Flight Project

| Last Updated  | Author |


## Technologies Used

- JavaScript
- HTML
- CSS
- MongoDB
- Mongoose
- Express/EJS


## User Stories

Part 1

- AAU, I want to view a list of all flights (index view) that displays each flight's airline, flight no., and departure date/time.

- AAU, I want to create flights by entering the information on a page (new view) that has a form and submitting it.

Bonuses

- AAU, I want to be able to access each view via a navigation bar at the top of the page with links to:

ALL FLIGHTS, and
ADD FLIGHT

- AAU, I want to view the list of flights by departure date in ascending order.

- AAU, I want the flights in the list to be displayed using red text if the flight's departure date has passed.

- Style the index and new views.


Part 2

- Create a destinationSchema that will provide the structure for destination subdocuments with the following properties:

| Property	| Type	| Validations	| Default Value |
| airport	| String	| enum to include 'AUS', 'DAL', 'LAX' & 'SEA'	| n/a |
| arrival	| Date	| n/a	| n/a |

- Add the following two additional properties to the Flight Model:

| Property	| Type	| Validations	| Default Value |
| airport	| String	| enum to include 'AUS', 'DAL', 'LAX' & 'SEA'	'SEA' |
| destinations	| [destinationSchema]	| n/a	| n/a |

- Modify the form for inputting a flight to add a <select name="airport"> element so assign a value to the new flight document's airport property. Ensure that there are <option> elements for the four allowable airport codes ('AUS', 'DAL', etc.).

- AAU, when viewing the list of flights, I want to click on a "detail" link displayed next to each flight to view all of the properties for that flight (show view)

- AAU, when viewing the details page (show view) for a flight, I want to be able to add a destination for that flight, including its arrival date/time & one of the established airport codes

- AAU, when viewing the details page (show view) for a flight, I want to see a list of that flight's destinations (airport & arrival)

Bonuses

- Sort the list of destinations for a flight by the arrival date/time in ascending order.

- Style the views.

- When adding a destination for a flight, exclude the airports in the <select> that have already been used by other destinations and/or the flight's airport.


Part 3

