## September 7, 2022

* Setting up Context to house Payment Info

Today I set up Context so that all of the info passed in by the user while preparing for Checkout can be saved from form to form. I verified that the state remained, and began working on displaying that information in my Review.js. 

Today I learned about useContext, and how much easier it is than Redux Persist!

## September 2, 2022

* Finishing Core Redux Functionality

Today I worked on building out the rest of the reducers in Redux. I completed functionality for deleting a specific item from the shopping cart, clearing the cart when an order goes through, and updating the quantity of a wine that already exists in the shopping cart from its detail page (i.e. If one wine is already in the cart with a quantity of 5 and the user goes to the detail page again and adds one more bottle to the shopping cart it updates the cart quantity to 6)

Today I learned that I feel much more comfortable with Redux Persist than I ever thought possible. I was able to handle more complex issues in a fraction of the time and I would feel confident implementing it in future work.


## September 1, 2022

* Expanding Reducer Functionality

Today I added a Reducer case that allows for a customer to update the quantity of the wine in their cart in real time. The new value automatically gets updated in the appropriate cartItem state and the UI displays new total prices based on the new quantities.

Today I learned more about useEffect and how to ensure the code you have inside of it won't execute on first render


## August 31, 2022

* Setting up Redux Persist

Today I got Redux Persist up and running to address the problem of items in our Shopping Cart being deleted on refresh. Implementation solved this problem but a new one arose because of how Redux Persist heavily relies on caching. The new problem was that once a GET call had been made to a URL through our SalesAPI, it cached the data from that URL and never bothered to make the GET call again to see if the data from our microservice had been changed. I fixed this problem by blacklisting the salesAPI reducer from Redux Persist, forcing Redux to make a call to our microservice each time the page is rendered. 

Today I learned how complex Redux is and why it's generally only used for medium to large sized applications.


## August 30, 2022

* Setting up Redux for our Wines Details Page

Today Jennifer and I continued on getting Redux set up to manage the state of our Shopping Cart. We have the logic setup to be able to handle adding, deleting, and editing the quantity of an item in the Shopping Cart, but have not yet been able to correctly configure the reducers and pass through the payload. We successfully managed to get the quantity input working so that the user is not able to input anything but a number, a quantity less than 1, or a quantity greater the quantity in stock.

Today I learned the importance of creating constraints on your user so they are not able to pass through bad data.


## August 29, 2022
Today I worked on:

* Setting up Redux for our Wines Details Page

Today I spent all day getting Redux set up for our Wine Details page and replacing the existing way to fetch data. Updates were made to our docker-compose.yaml file to be able to have a baseUrl while creating our Api for Redux. By the end of day data is being displayed for our specific wine attached to our specific winery as given in the URL. Next up is states.

Today I learned how to pass in multiple query parameters in Redux.


## August 25, 2022
Today I worked on:

* Bridging the gaps between our microservices

I started my day by beginning building the wine detail page on React. We explored how we would be able to grab the ever-changing winery_id and winevo_id from the URL which we solved with UseParams. We reached a standstill in React when it became apparent that we still had to implement CORS across our platform. While beginning to work on that we ran into several issues and realized that we needed to get every team member to the same working code. We then spent the next several hours merging, battling abnormal issues with VS Code glitching and mixing up Incoming and Current Changes.

Today I learned about UseParams() on React and how it's used to parse queries found in your URL.


## August 23, 2022

Today, I worked on:

* Initializing our microservice and getting our poller for WineVO's running

Today Jennifer and I pair programmed and got our microservice in good shape. We dealt with a lot of circular import issues due to lack of thoughtful naming of our projects and apps. That took some time to get sorted out but it should be all behind us now and it won't be a mistake we make moving forward. We also got our poller successfully working and verified WineVO's were being created through validation in our admin.

Today I learned that string concatenations are possible when defining a value in a dictionary. I used it to create a href in our poller through brute force. Not ideal, but the lack of href comes from the other microservice so we had to make it work temporarily on our end to be able to proceed. It should be worked out soon.


## August 20, 2022

Today, I worked on:

* Updating the files: api.md, data-model.md, & integrations.md

Yesterday our group dove deep into the design portion of the application. We took the time to explore all options for implementation, and choose the best routes based on what our goals were for our MVP, and where we wanted to take our project in the future. We were able to get rid of the fluff in some of our models, and come up with the most efficient version of our project.

Today I learned about domain names and how we could hide information from the user that would be helpful for us with redirects in the backend.
