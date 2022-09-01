<!-- In the journals, every day that you work on the project, you must make an entry in your journal after you've finished that day. At a minimum, you will need to include the following information:

The date of the entry
A list of features/issues that you worked on and who you worked with, if applicable
A reflection on any design conversations that you had
At least one ah-ha! moment that you had during your coding, however small
Keep your journal in reverse chronological order. Always put new entries at the top. -->

## JOURNAL ENTRIES


## Wednesday, August 31, 2022
Today, I continued working on:

* the React front-end for our Wines Details using Redux/Redux toolkit to help manage 
state and researching Redux persist & possible localeStorage to persist local data

Kayli and I continued working on getting Redux/Redux toolkit to manage our state for our 
Shopping Cart.  We are still working through understanding how to apply their use to our 
front-end.  Kayli set up Redux Persist in order to save the store in persistent storage
so that our shopping cart state would stay the same even when the page is refreshed.  We
ran into an issue, however, of the state for the shopping item being cached from previous
data even when we deleted the volumes and rebuilt our docker images and containers. Daniel 
helped us in understanding persisting data and gave us a suggestion about and using local
storage.  While Kayli continued to work on our issue with Redux Persist, I did some more
research on Redux Persist and MDN web docs on localStorage for the possibility of pivoting 
plans.  Even after Kayli blacklisted the Sales reducer, the data was still persisting.  
Andrew helped us to solve our issue of the blacklist and clear what was in our local storage.  
We checked to see that it was not persisting cached url data for our wine details. Success!

Tonight I set up a bare bones Shopping Cart Test page, so that we might be able to test
some of our code for our shopping cart tomorrow.  


## Tuesday, August 30, 2022
Today, I continued working on:

* the React front-end for our Wines Details using Redux toolkit to help manage state

Kayli and I pair-programmed and continued working on getting Redux working to manage 
state for our Shopping Cart.  We were able to configure the state for our quantity input 
so that the user can input an amount, where the minimum could not be less than one and 
the maximum could not be greater than the quantity in stock for that wine.  A bug with 
our code that we will have to circle back to is that, how we have our code set up, the 
user is unable to use the delete key on their keyboard to change the input and must change 
it by highlighting with their cursor first.  We are still trying to understand Redux
better, given that the examples in Learn are different from the documentation examples 
in Redux.  Tonight, I will be reading more about Redux and watching some videos about it
to help me understand how it works better.   


## Monday, August 29, 2022
Today, I worked on:

* learning about Redux and working on the React front-end for our Wines Details, 
as well as setting up a url/views for our Order model

The group started to work on our Wine Details page.  However, while trying to program 
with Kayli, we realized that we needed to learn more about Redux.  Most of the day was 
spent on reading up on Redux on LEARN and watching the videos provided.  While waiting 
for Kayli to finish watching the videos, I worked on creating url paths and views for 
our Order list and details.  This will be necessary for later when we test that our 
Shopping Items are created when an order is confirmed/placed. When we reconvened with 
Kayli, she had already set up the store and be able to retrieve the data for a specific 
wine from a specific winery.  In the process, I learned how to use the useParams() in 
order to pass multiple query paramaters using Redux.  For the next part, we will be using 
and managing states to build a "shopping cart" to store our shopping items in.  


## Thursday, August 25, 2022
Today, I worked on:

* Trying to help Boden with React for the winery microservice and then getting the 
team up-to-date with pulls/pushes and merge conflicts.

The original plan was for me to start on the React front-end for our sales microservice 
(the detail view of the wines). However, I ended up attempting to help Boden with 
resolving an issue for our front-end React for the list of wines from a winery because 
I thought I had done something similar in a previous project.  Since a lot of our 
individual codes had not been pushed to main, I spent a lot of time getting my code to 
be the same as Boden's.  While checking the views for the wines in Insomnia, I realized 
the code was not filtering for all of the wines in a specific winery (worked for one 
wine, but not for multiple wines).  This was a simple fix to the views code.  In that 
time, Boden was able to resolve his issue.  

Our team spent a lot of the late afternoon pulling from main and resolving merge conflicts.  
Our goal was to be on the same page with our code for Monday next week.  VSCode was having 
issues/glitches with incoming and current changes, so we had to be thorough going through 
merge conflicts together.  While we have been communicating frequently, I have found that 
it has been difficult to coordinate tasks, especially when certain code relies on another 
and having our main branch updated. 


## Wednesday, August 24, 2022
Today, I worked on:

* Creating url routes in sales microservice and GET view of specific wine detail

Today the team tried to resolve our issue involving the package-lock.json and
node modules so it wouldn't be an issue with future pulls/push.  We added them 
to our ghi directory's gitignore file. After fixing the issue, Richard and I attempted 
to pair program the view for wine details.  One of the issues we stumbled upon was 
getting our code for the view to work in our Insomnia.

After discussing with Boden and Kayli to clarify how we want our url routes to 
work, I had an issue with writing code for the wine details url/view for 2 different
pks.  Our url path requires a pk for the specific winery (in our MVP, that would be 1)
as well as a pk for the specific wine.  I was able to get our API endpoint to work by
using a filter method for the winery_id on our WineVO object, followed by a get method 
for the wine id, and setting our url path to reflect that.  While this works with 
having one winery in the database currently, it may be an issue with multiple wineries.


## Tuesday, August 23, 2022
Today, I worked on:

* Initializing our microservice and working on our poller for our WineVO
for our sales microservice 

Kaley and I discussed our microservice, how each part would be implemented, and started
pair-programming.  We were able to get a better understanding of our Order model and 
ShoppingItem model with there being a foreign key from our order_id on ShoppingItem to
our id on Order.  We discussed with each other, the SEIRs, and Daniel about Order being
created once payment is confirmed and ShoppingItem(s) would be handled in React through
state.  Understanding this for our database made it easier to visualize how our 
front-end and back-end will be set up.

We spent a bit of time fixing circular import issues due to the names of our projects 
and apps.  This mistake will be something to keep in mind for the future.  We were also
able to construct our poller in our docker-compose.yaml file and get it to connect to
the database to poll for our WineVo.  We had to adjust the model in inventory app of 
the winery microservice to include a get_api_url function.  An issue we had involved 
retrieving our href from our data.  We were able to retrieve it using string 
concatenation.  While this allows us to work with the WineVO temporarily to proceed, 
we will look into the models and poller as to why our href is not polling correctly.



## Monday, August 22, 2022
Today, I worked on:

* Developing and understanding our models in our microservices in our Domain Driven 
Design and deciding our goals for our MVP 

The team discussed our models and how each microservice would work.  We explored what 
our options were for implementation and what would be our goals for the MVP, with how 
we wanted to expand our project afterwards in mind.  We had a hard time conceptualizing 
how our Order model and ShoppingItem model would work in our sales microservice.  We 
also realiazed we needed to do some research for our User authentication and authorization 
for our project and how to implement that.

Also, we had an issue with our code setup.  We realized how time consuming it can be to 
fix when someone pushes code to the main branch that isn't fully functional and working.  
This realization and experience was a good reminder that constant and up to date 
communication is key when working with other people and in teams.  It was a good learning 
experience and reminder that no one should be pushing code to the main branch that isn't 
working.  