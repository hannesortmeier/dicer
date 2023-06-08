# dicer
## Simple Dice Simulation with Vue.js
dicer is a web application that simulates dice rolls using Vue.js. It offers three modes for dice simulation: six-sided dice, 20-sided dice, and Heckmeck dice. Heckmeck dice are essentially six-sided dice, but the number six is replaced with a worm symbol that has a value of 5 points. The web app conveniently calculates the sum of the selected dice values, eliminating the need for manual calculations. Additionally, selected dice will retain their values on the next roll. You can add an unlimited number of dice to the dice board, limited only by your browser's capacity. The arrow buttons allow you to navigate through your throw history. Feel free to create SVGs for other types of dice such as d4, d8, d12, and more.


You can check out dicer at dicer.pro.

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

## Why?
When the COVID-19 lockdown hit Germany in March 2020, my friends and I had to resort to online board game nights. We particularly enjoyed playing a game called 'Heckmeck am Bratwurmeck' (loosely translated as 'Fuss at the Fried-Worm Corner'), where calculating the stochastic expectations of future dice rolls increased your chances of winning. As mathematicians and computer scientists, we wanted a way to simulate dice rolls conveniently. After searching the web, I couldn't find any dice websites or apps that met our requirements. That's when I decided to build the dicer app specifically for 'Heckmeck.' And thus, dicer.pro was born.
