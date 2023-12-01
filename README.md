# JurassicParkRangerControlPanel

This application was made through Express.js and serves two html routes. The webpage is made to look like a user interface that a Jurassic Park Ranger would use at a new Jurassic Park built in San Diego after the failure of the first Jurassic Park. All of the html and css files are in the public folder which is inside of the express-JurassicParkRangerControlPanel folder. 

This app has the following features from the project features list:

1.Create a node.js web server using a modern framework such as Express.js or Fastify.  Serve at least one route that your app uses (must serve more than just the index.html file).

This app is running on a node server using Express.js. It Serves the index.html file and the welcome.html file.

2.Calculate and display data based on an external factor (ex: get the current date, and display how many days remaining until some event)

It calculates and displays data based on an external factor (the current date).
This is done in hatchcountdown.js to display the days left until the velociraptor eggs hatch.

3.Retrieve data from a third-party API and use it to display something within your app.

Retrieves data from a third party API and uses that data to display something in the app. This is done in api.js to display severe weather alerts in the San diego area. If there is nothing showing it is because there are no severe weather alerts currently.



To run this app:

1.Install nodejs, and npm. Update them to the most current versions.

2.Install express and update it to the most current version.

3.In visual studio code navigate to the folder where you cloned the repo.

4.In your terminal in visual studio code type cd express-JurassicParkRangerControlPanel

5.Copy and paste the API key given into the empty string in api.js on line 1 and hit save.

6.In your terminal type npm run devstart

7.In your browser go to localhost:3000



Possible troubleshooting:

If you are missing a dependency like Cookie Parser etc. you may need to type npm install dependencies in your terminal
