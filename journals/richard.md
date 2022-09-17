

## August 19, 2022

Today we spent the majority of our time working on the DDD, building our design model in excalidraw. 

## August 22, 2022

Today we wen't over the models as a group and then I made the mistake of merging to the main branch without making sure my docker containers were up and running. So we sorted that out, troubleshooted with daniel and fixed the main branch. We also had some ghi issues and we had to delete package-lock and node modules, then rebuild. 

## August 23, 2022

Today I was finally able to sort out my merge and got my react up and running. Boden created a list view for the winery that looks pretty awesome. Boden, Shadan and I have been pair programming sorting out the user authentication while Jennifer and Kayli are working on our other microservice, sales. Shadan also put together a nice react UI.

note: we were having problems with migrations in our winery container. Andrew showed us how we could add the make migrations command to the dockerfile.dev as a CMD before the migrate command. We rebuilt the container and it fixed the problem. Andrew told us then to remove the make migrations command to make out lives easier. 

Configuration drift: when your dockerfile/project code doesn't represent whats actually running.

## August 24, 2022

Today we sorted through our git issues and we ended up adding node_modules and package-lock.json to our ghi/gitignore file to avoid further issues with merge conflicts. Jennifer and I worked on creating a wine detail view in the sales microservice. 

## August 25, 2022

Today I set up pipelines in git by creating 2 files in the parent directory:
- .gitlab-ci.yml
- .flake8
In the gitlab-ci file I set it up for the database, created a list test job and a front-end build job. I validated and set up shared git-runners for our group. I commented out all of the code in the ci file so that the pipeline doesn't run everytime we push, to avoid rolling through our free minutes. :-)

I also talked to the group about doing more work together as a group and we discussed pushing to git more often when we make smaller changes. Everybody is doing an awesome job but the way we have been working often puts us at a stand still while waiting for commits. Also, while i've done some pair programming I am worried about not having commits since Daniel specifically mentioned it. Working more together will also give me a chance to learn more in areas that I am not feeling very confident. 

## August 29, 2022

Today Kayli & Jennifer and I worked on wine detail with redux! We had some trouble building the baseUrl dynamically and we realized that we had the winery_id and winvo_id variables incorrect in winedetails.js. I also started on deployment with heroku. 

## August 30, 2022

Today I worked on deployment with heroku. 

## September 8, 2022

Today I finally got our site to deploy to heroku. You can't see the page yet, but the link is working! From the best that I can tell, I was able to manipulate the CI jobs, push to my branch and gitlab was reading it, but even though I had changed the protection settings on my branch in gitlab and set it to deploy when pushed to my branch the deployment was still unsuccessful. I even tried editing the pipeline directly on the main branch in gitlab and it didn't seem to do the trick. I changed the COMMIT_BRANCH in the CI file back to default branch, merged with main and was able to see the changes that I made. Seeing all of those green check marks were incredibly satisfying. 

## September 10, 2022

I ended up changing the paths in react from '/' to everything-is-vine. I added the path the every path in app.js and in nav.js which got our page to show up in deployment. 

## September 12, 2022

Today we figured out how to use regex to change the public url for our deployment page so that we didn't have to change all of the paths in react. 


## September 14, 2022

Today we spent all day resolving merge conflicts.

## September 16th, 2022

Today we spent all day sorting out database issues we were having with our postgres database. We finally sorted it out and at this point we are all deployed but we seem to still have an unresolved issue with our poller. 

