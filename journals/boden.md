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
Today I created the contact page.  I started by using a free map API to grab coordinates depending on an input address and used that to populate a map in react.  I also setup the functionality for sending an email to the winery.  There was an issue where the map api was taking too long and react was loading without it but i found a way to update the map state once the api call came in.  The rest of the time was spent using CSS, CSS grid, and styling the page.  


