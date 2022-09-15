## August 22, 2022
Our main issue for today was resolving our Docker containers. After one of our teammates pushed his creation of models to our main branch, our containers would start and stop very quickly. We had Daniel come in to assist us with our file names as well as error messages. We ended up fixing everything and all of our teammates were able to begin their work. What ultimately fixed the container issue was renaming files, commenting out several import statements, and creating a grahphical human interface volume before building our containers. We also had a group discussion about the shopping cart component for our project and whether it would exist in our database before or after the user places an order.

## August 23, 2022
Today, I did a great amount of work on our navigation menu for the front-end portion of our project. I began by creating a components folder and creating a navigation index file as well as a file for navigation elements. I created styled components for all the elements of our navigation bar and implemented it. I then created a responsive menu icon with a drop down for our navigation links. It will appear when the screen reaches the width specified in the styled menu components. I then added on click handlers for the links and will continue to do so tomorrow.

## August 24, 2022
Today, the group and I faced an issue with our merge conflicts when we pull from our main branch. Collaborating with Andrew, we identified the problem coming from our node modules and package lock files. Kayli updated our main branch from the web and we were all able to pull normally without facing unresolved merges. Kayli and I discussed how to manipulate state for our details page and decided to do independent research on the matter, then reconvene to begin working on it. Boden and I collaborated and made our front end portion uniform and begin to route our pages correctly.

## August 25, 2022

## August 29, 2022

## August 30, 2022

## August 31, 2022
Today, I did major work on our card component for the wine details page.

## September 1, 2022

## September 2, 2022

## September 6, 2022
Today, I began working on a unit test for my branch. I decided to do a Wine Value Object unit test and ran into issues getting it to run successfully in the Docker CLI. I identified four other tests that I will give to my group that they can do later on once I learn how to run a successful back end test on my branch. I created it with the Django test client and tested it in the tests.py file for our sales service.

## September 6, 2022
I successfully completed my unit test after passing in correct arguments with the help of an instructor. I went back to my group and helped them with their own unit tests and everyone successfully completed their own. Some work needed to be done on our models for the return value of self identification. I changed it to winery_id and also accounted for a None Type error in the encoders.

## September 7, 2022

## September 8, 2022

## September 9, 2022

## September 12, 2022
Today, I was working on creating a request form for our application. This form request would be a very simple form that mimics my previous log in and sign up CSS to basically request more information from us, the creators of the application. I also did some minor CSS changes to our forms because the centering was off.

## September 13, 2022
Today, the group and I did some CSS changes throughout our application. We decided to insert the request form on the bottom of the main page, or dashboard page with the wineries. We also resolved some more merge conflicts. I also did some deployment exploration with Richard as we were having issues with some lines in our docker compose.

## September 14, 2022
Today, our entire group worked on resolving many merge conflicts and some changes that were different between the branches. Some of our members hadn't pushed to our main branch in a while so we had to push and pull and resolve everything together. We are most likely going to freeze every branch and work on one main branch for deployment.