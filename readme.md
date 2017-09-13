#Avocado Recipe Board ##Become a member of the avocado group and ddd your personal avocado recipes

installation and setup

To run the code,

visit the project 2 github repository.
Hit 'clone or download'.
Using your terminal, run the Yarn command to install the dependencies needed.
Run Gulp to compile the Source Code.
Note- You will need to have 'gulp -cli' installed globally.

The app

An avocado recipe upload blog for avocado lovers. Once the user inputs an avocado recipe the app will save this onto the avocado recipe index page. The app will categorise the recipe into a 'Recipe Type'. There is also a search bar in the corner which will search all the recipes on the site even if you miss some letters out using RegEx code.

To use the app, you must register as an avocado member, you will then be able to see all of the recipes and be able to leave comments, mark your favourites and rate recipes. You can then create a new recipe once you are a registered avocado member. When you are adding a recipe you can type in the ingredients and the method and every time you hit enter it will create a bullet point for your recipe.

Technologies Used

Software used-

HTML 5
SCSS
Javascript ES6
Jquery 3.10
Gulp
NODE.js
Yarn
Git & Git Hub

Challenges faced

One of the challenges faced while producing this project was making the method and the ingredients list turn into bullet points when the user was filling in the 'new recipe form'.

As the Spotify API is designed only to make calls for specific information about Songs, Artists and related Artists, I had to build out a set of API calls with logic to aquire the information I wanted. Put simply, the Back End tracks controller must-

Make a call to request an access token
Request a search return from a query string given by the input
Request the audio feautures of the track which is returned by the query
Request the returned Artist's related artist list, then select one at random
Request the new Artist's top 5 tracks
Request the audio features of those tracks
Compare each of the returned track's audio feature's 'Danceability' rating
Return the song with the rating which most closely matches the original's
Finally, request the track's information using it's Id to get it's Artist and Track names
Improvements

I am proud of the functionality of the site, I do however feel that the styling has a long way to go. I would also like to work on some functionality to see if I could get the videos to 'auto-play' in sequence once they have been saved to the video playlist.

A major drawback of the functionality is also due to the Front End build. If a user adds the song to the setlist to save for later, the page is refreshed, loosing any suggestions or videos which are lined up, amounting to a poor user experience. To solve this problem, I may have to rebuild the Front End as an Angular App, which allows for the DB and view to be updated without refreshing the page. Though this would involve alot of work, I think the benefit's of the improved UX would be worth while.
