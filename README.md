### Requirements

Use React.Js for the front end, and back end can be just static data set or anything of your choice.

1.  Import the initial data set into your own data storage as backend. The format can be anything such as objects, database, file system, etc.

2.  Create an interface to view, record and track the location of a product (its Longitude, Latitude, Elevation) at a specific Date/time. The interface should have basic functionalities like: add, delete, update entries in your data storage.

3.  Create a filterable table view of the information, listing all locations of a specific product or multiple products within a specific date range, within a specific product range.

### Instructions

1. Clone the repo locally
2. Change to the project's root directory
3. Install dependencies with `npm install`
4. Run the project with `npm start`
5. Once the project is running it is available at `http://localhost:3000`. Navigate there in a web browser to view.

### Additional Comments

This project was designed as though it was going to be the basis for a much larger
web application. As such it is using a combination of both local and global state
to manage the application's data. Currently only the global set of location data
is stored in redux. The only existing page uses it's own local state to manage
any properties that are exclusive to it. Other pages would behave in a similar
fashion once created. This would prevent polluting the global state with a large
amount of unnecessary data.

The main page is defined in `/src/components/mainPage.js`. It's currently the only
smart component in the project. All other components are dumb components that concern
themselves solely with data presentation and user interface. In addition, all business
logic is contained in the main page in order to keep it all in one place for
future maintainability. Any data needed by the dumb components is passed down through
props and modifications recived through callbacks.

The project was also designed on the assumption that it would be talking to a REST
API accessed through an http client. A mock http implementation has been included
to give the idea of what it would look like with an actual REST backend to use.
