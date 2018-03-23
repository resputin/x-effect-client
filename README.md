# The X Effect

See the project for yourself [The X Effect](https://nielsendb.com)

## What is the X Effect?
The X Effect is a habit tracking movement inspired by a reddit post by someone who was looking for a way to make one habit stick. The main idea of the X Effect is that if you can do something for 49 consecutive days than you will be able to say that you've ingrained this habit for life. The way that the X Effect implements this idea is straightforward:
1. Take an index card and make 6 vertical lines and 6 horizontal lines to form a 7 x 7 grid
2. Write the name of the habit you want to solidify at the top of the card. For your first card make it something easy so that it's easy to accomplish, like 'Eat one healthier thing than normal'
3. When you accomplish this goal for the day make an X in the first available grid square
4. If you don't accomplish the goal for that day you can either leave the square blank or fill it in with an O
5. If you can successfully fill out your entire card with X's than congratulations! You have ingrained this habit for good.

This application takes a lot of the logistical work away and lets you focus on the thing that matters, completing your card. In addition, this application allows for some extra features that don't exist when you are doing this method physically. You can set up SMS reminders to remind you if you haven't completed a card for that day, and the application will automatically mark things off as incomplete at the end of each day. 

## Examples
![A gif of a card being added](https://github.com/resputin/x-effect-client/blob/master/src/images/Add%20Card%20Flow.gif)
![A gif of a notifcation being created](https://github.com/resputin/x-effect-client/blob/master/src/images/Notification%20Flow.gif)

## Tech Stack
* Back End
  * NodeJS
  * Express
  * MongoDB
  * Mongoose
  * Twilio
  * Passport
  * NYC
  * Mocha
  * Chai
* Front End
  * React
  * Redux
  * Redux Form
  * Jest
  * Enzyme
* Development/Deployment
  * Github
  * TravisCI
  * Digital Ocean
  * Nginx