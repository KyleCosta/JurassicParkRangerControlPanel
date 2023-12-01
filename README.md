# JurassicParkRangerControlPanel

This application was made through Express.js and serves two html routes. The webpage is made to look like a user interface that a Jurassic Park Ranger would use at a new Jurassic Park built in San Diego after the failure of the first Jurassic Park. All of the html and css files are in the public folder which is inside of the express-JurassicParkRangerControlPanel folder. 

This app has the following features from the project features list:

1.Create a node.js web server using a modern framework such as Express.js or Fastify.  Serve at least one route that your app uses (must serve more than just the index.html file).

This app is running on a node server using Express.js. It Serves the index.html file and the welcome.html file.

2.Calculate and display data based on an external factor (ex: get the current date, and display how many days remaining until some event)

It calculates and displays data based on an external factor (the current date).
This is done in hatchcountdown.js to display the days left until the velociraptor eggs hatch.

3.Retrieve data from a third-party API and use it to display something within your app.

This is done in api.js to display severe weather alerts in the San diego area. Normally the weather alerts will show inside the severe weather alerts container under the text "Severe Weather Alerts", but if there are no severe weather alerts at the moment then the API returns an empty array and the Severe Weather Alerts container will be blank except for "Severe Weather Alerts". The ranger using this interface would then assume that there are no severe weather alerts. To show that this feature does work, if there are no severe weather alerts you can see the results returned after right clicking the page then going to inspect > console > object > alerts.



To run this app:

1.Install nodejs. Update to the most current version.

2.In visual studio code navigate to the folder where you cloned the repo.

3.In your terminal in visual studio code type cd express-JurassicParkRangerControlPanel

4.Install npm. Update to the most current version.

5.Install express.Update to the most current version.

6.Copy and paste the API key given into the empty string in api.js on line 1 and hit save.

7.In your terminal type npm run devstart

8.In your browser go to localhost:3000

9. Click the buttons on the left to turn the power on (you may need to double click) HURRY BEFORE THE DINOSAURS GET OUT!!



Possible troubleshooting:

If you are missing a dependency like Cookie Parser etc. you may need to type npm install dependencies in your terminal
