# JurassicParkRangerControlPanel

This application was made through Express.js and serves two html routes. 

This app has the following features from the project features list:

1.Create a node.js web server using a modern framework such as Express.js or Fastify.  Serve at least one route that your app uses (must serve more than just the index.html file).

This app is running on a node server using Express.js.

2.Calculate and display data based on an external factor (ex: get the current date, and display how many days remaining until some event)

It calculates and displays data based on an external factor (the current date).
This is done in hatchcountdown.js to display the days left until the velociraptor eggs hatch.

3.Retrieve data from a third-party API and use it to display something within your app.

Retrieves data from a third party API and uses that data to display something in the app. This is done in api.js to display severe weather alerts in the San diego area. If there is nothing showing it is because there are no severe weather alerts currently.



To run this app:

1.Install nodejs, and npm. Update them to the most current versions.

2.Install express and update it to the most current version.

3.In your terminal navigate to the folder where you cloned the repo.

4.In your terminal type npm run devstart

5.In your browser go to localhost:3000

6.Copy and paste the API key given into the empty string in api.js.
