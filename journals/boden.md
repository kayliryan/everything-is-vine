Boden Bradley Journal

08/16/22:
Created GHI mockups today for UI and started on domain design

08/18/22:
Worked further on developing domain design with creation of excalidraw bounded context,models, microservices, and their relationships.  

08/19/22:
Created project with 2 django microservices, created docker integration and react app.  All services were up and running before commiting to main branch. 

08/22/22:
Discussed more domain driven design as a group and refined models and relationships.  Divided up microservice work into pairs. 

08/23/22:
Refined winery models, created list view and working react list page with bootstrap cards to display wines.  Started working on user model and auth integration across the services. 

08/24/22:
Created dashboard page to show all wineries listed in card format along with the needed api view function/url mapping.  Completed user authentication login page that works to grab token from django and log a user in.  Will be working on signup and logout functionality tomorrow.  

08/25/22:
Today I pulled and merged with main and dealt with merge conflicts.  Jennifer and I worked on fixing the view function that gives a list of wines related to a specific winery and we were able to figure it out.  I then continued to work on the user authentication process and was able to get the signup form to work correctly.  The login function continues to have issues and is issuing tokens regardless of username/password.  

08/29/22:
Today I worked further on authentication trying to get a user authenticated properly and tracked.  By the end of the day a token was being created properly using two cookie mode and we attempted to pass the cookie using an authentication header.  

08/30/22:
Today was a continuation authentication.  We figured out that the token was not being properly sent/fetched to the API endpoint and were able to resolve that issue.  I was able to successfully render a list of content only if someone was in a logged in state. 

08/31/22:
Today was a long day working on react front end.  I was able to successfully style the dashboard, winery pages, and add dynamic links and create a navbar.  I was able to make the nav bar only seen on the winery pages and not on the dashboard as planned.  I needed to keep state and write dynamic jsx to populate things correctly no matter which winery is displayed.  

09/01/22:
Today was productive.  I was able to add the login,logout,signup buttons to the nav.  I verified that they all worked correctly and then added the functionality to grab the jwt, set logged in state as true or false, and display/hide those nav buttons appropriately depending on logged in state. 

09/02/22:
Today I created the contact page.  I started by using a free map API to grab coordinates depending on an input address and used that to populate a map in react.  I also setup the functionality for sending an email to the winery.  There was an issue where the map api was taking too long and react was loading without it but I found a way to update the map state once the api call came in.  The rest of the time was spent using CSS, CSS grid, and styling the page.  

09/06/22-09/07/22:
These two days were spent on resolving the merge conflicts with main.  We had a lot of competing CSS that needed to be cleaned up and it took some time to figure out why all of the front end api calls stopped working.  It ended up being that some of the encoders were changed so that the values were put into a separate dictionary.  Adding a function to list the encoded response fixed this issue.  After many hours of working through these conflicts I was able to successfully merge.

09/08/22:
Today I worked on user functionality, specifically the ability to grab information about the current logged in user from the user model.  I was able to successfully get this to work and also tested the ability to show and hide content on the webpage depending on if a user is designated as an "employee" for a specific winery.  This will give "staff" the ability to edit winery information, and create/update/delete specific wines for each winery as soon as those forms are created. 

09/09/22:
Today I created API endpoints for staff permissions to be able to edit winery details, wine details, create new wines, and delete wines.  I was able to get the endpoints to function properly in insomnia and created buttons to allow staff to make edits if they have the correct user permissions.

09/12/22:
Today I build the react pages to display and process the forms of editing wineries/wines, and creating new wines.  For the edit functions I needed to make a fetch call to grab the current winery details and populate them for editing in the state.  All of these endpoints I restricted access to by requiring staff permissions to be able to see and submit the forms.  I also wrote my simple unit test today and tested it out and it passed. 

09/13/22:
Today I worked on cleaning the code.  I removed duplicate code and files I had created to test features.  I updated the unit test as well.  After that I updated the CSS on the dashboard page to fall more in line with our SaaS mission for the application.  At the end of the day I created an API endpoint to subtract the order quantity from a successfully submitted order from the shopping cart.  

09/14/22:
Today we worked as a team to merge all of the features together and were able to get through it all by the end of the day. We pair-programed to fine tune some of the features of the webpage and prepped it for deployment.  

09/15/22:
Today we worked all day on deployment trying to get the website to function properly.  I also was tasked to quickly create a winery creation page and update the sign up form to allow checking a box to have staff credentials for testing functionality on the site. 

09/16/22:
Working on deployment as a team today.  I worked for an hour refining the readme. 


