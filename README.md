# dicer

## Simple dice simulation done with vuejs. 

You can choose between three modes - six sided dice, 20 sided dice and Heckmeck-dice which are literally 6 sided dice but the six is replaced with a worm that has a value of 5 points. The webapp will sum up the selected values for you so you don't have to do that and selected dice will also not change their values on the next roll. You can add an unlimited amount of dices to the dice board (it is actually limited by the number of dice your browser can handle). With the arrow buttons you can go back and forth your throw history.
Feel free to create svgs for other type of dice (d4, d8, d12, ...).

You can check it out at [dicer.pro](http://dicer.pro).

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Why?

Once the corona virus lockdown hit Germany in March 2020 me and my friends had to resort to online board game nights. In particular we were fond of a game called 'Heckmeck am Bratwurmeck' (this loosely translates to 'fuss at the fried-worm-corner') where your chances of winning the game increase if you are good at calculating the stochastic expectations of future throws (yes, we were all mathematicians or computer scientists). Every turn you throw 8 dice and take the dice that "match" with your tactics out of the next throw. Not everyone has 8 dice lying around and after a good bit of searching the web I couldn't find any dice-website or app that met my requirements. Thus I had to build the dice app for 'Heckmeck' myself and born was dicer.pro.
