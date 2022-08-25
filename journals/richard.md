

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

## August 24, 2022

Today I set up pipelines in git by creating 2 files in the parent directory:
- .gitlab-ci.yml
- .flake8
In the gitlab-ci file I set it up for the database, created a list test job and a front-end build job. I validated and set up shared git-runners for our group. I also talked to the group about doing more work together as a group and we discussed pushing to git more often when we make smaller changes. Everybody is doing an awesome job but the way we have been working makes often puts us at a stand still while waiting for commits. Also, while i've done some pair programming I am worried about not having commits since Daniel specifically mentioned it. Also working more together will give me a chance to learn more in  areas that I am not feeling very confident. 