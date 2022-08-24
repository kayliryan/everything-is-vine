<!-- In the journals, every day that you work on the project, you must make an entry in your journal after you've finished that day. At a minimum, you will need to include the following information:

The date of the entry
A list of features/issues that you worked on and who you worked with, if applicable
A reflection on any design conversations that you had
At least one ah-ha! moment that you had during your coding, however small
Keep your journal in reverse chronological order. Always put new entries at the top. -->

## Tuesday, August 23, 2022
Today, I worked on:

* Initializing our microservice and working on our poller for our WineVO
for our sales microservice 

Kaley and I discussed our microservice, how each part would be implemented, and started pair-programming.  We were able to get a better understanding of our Order model and ShoppingItem model with there being a foreign key from our order_id on ShoppingItem to our id on Order.  We discussed with each other, the SEIRs, and Daniel about Order being created once payment is confirmed and ShoppingItem(s) would be handled in React through state.  Understanding this for our database made it easier to visualize how our front-end and back-end will be set up.

We spent a bit of time fixing circular import issues due to the names of our projects and apps.  This mistake will be something to keep in mind for the future.  We were also able to construct our poller in our docker-compose.yaml file and get it to connect to the database to poll for our WineVo.  We had to adjust the model in inventory app of the winery microservice to include a get_api_url function.  An issue we had involved retrieving our href from our data.  We were able to retrieve it using string concatenation.  While this allows us to work with the WineVO temporarily to proceed, we will look into the models and poller as to why our href is not polling correctly.

## Monday, August 22, 2022
Today, I worked on:

* Developing and understanding our models in our microservices in our Domain Driven Design and deciding our goals for our MVP 

The team discussed our models and how each microservice would work.  We explored what our options were for implementation and what would be our goals for the MVP, with how we wanted to expand our project afterwards in mind.  We had a
hard time conceptualizing how our Order model and ShoppingItem model would 
work in our sales microservice.  We also realiazed we needed to do some research for our User authentication and authorization for our project and how to implement that.

Also, we had an issue with our code setup.  We realized how time consuming it can be to fix when someone pushes code to the main branch that isn't fully functional and working.  This realization and experience was a good reminder that constant and up to date communication is key when working with other people and in teams.  It was a good learning experience and reminder that no one should be pushing code to the main branch that isn't working.  