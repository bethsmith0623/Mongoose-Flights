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

- [X] AAU, I want to view a list of all flights (index view) that displays each flight's airline, flight no., and departure date/time.

- [X] AAU, I want to create flights by entering the information on a page (new view) that has a form and submitting it.

Bonuses

- [X] AAU, I want to be able to access each view via a navigation bar at the top of the page with links to:

ALL FLIGHTS, and
ADD FLIGHT

Part 2

- [X] Create a destinationSchema that will provide the structure for destination subdocuments with the following properties:

- [X] Add the following two additional properties to the Flight Model:

- [X] Modify the form for inputting a flight to add a <select name="airport"> element so assign a value to the new flight document's airport property. Ensure that there are <option> elements for the four allowable airport codes ('AUS', 'DAL', etc.).

- [X] AAU, when viewing the list of flights, I want to click on a "detail" link displayed next to each flight to view all of the properties for that flight (show view)

- [] AAU, when viewing the details page (show view) for a flight, I want to be able to add a destination for that flight, including its arrival date/time & one of the established airport codes

- [] AAU, when viewing the details page (show view) for a flight, I want to see a list of that flight's destinations (airport & arrival)

Part 3

- [] Create a ticketSchema that will be compiled into a Ticket Model with the following properties:

- [] Modify the show view for a flight to render, as you see fit (table, grid, etc.), a list of tickets that have been created for that flight.

- [] Also on the flight's show view, display a New Ticket link (perhaps styled to look like a button) that when clicked, shows the ticket's new view used to create a ticket for the flight. When the form is submitted, create the ticket on the server and redirect back to the flight's show view.
