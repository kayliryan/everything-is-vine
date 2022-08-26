## August 25, 2022
Today I worked on:

* Bridging the gaps between our microservices

I started my day by beginning building the wine detail page on React. We explored how we would be able to grab the everchanging winery_id and winevo_id from the URL which we solved with UseParams. We reached a standstill in React when it became apparent that we still had to implement CORS across our platform. While beginning to work on that we ran into several issues and realized that we needed to get every team member to the same working code. We then spent the next several hours merging, battling abnormal issues with VS Code glitching and mixing up Incoming and Current Changes.

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
