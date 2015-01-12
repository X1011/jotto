<img alt='screenshot of game start' src='screenshot start.png' title="game start" width=360>
<img alt='screenshot of game end'   src='screenshot end.png'   title="game end"   width=360>

This game was inspired by the pencil-and-paper game [Jotto](https://en.wikipedia.org/wiki/Jotto) that my friend showed me when he implemented it on his game site. I put a twist on it by making it collaborative with an arbitrary number of players. Everyone tries to guess the same secret word. Anyone can guess a word at any time, and everyone will see the resulting clue, which tells you the number of letters the guess has in common with the secret word.

I tried to make it as clean and easy to jump in as possible. There is no need to create a game, pick a game to enter, or select a username. Upon opening the page, you are automatically put in the game and can immediately start guessing.

When playing, I suggest you still use some scratchpad to keep track of letters you've eliminated or confirmed through logical deduction. Most digital implementations of Jotto include a letter tracker in-game; I just haven't had time to implement it here yet.

I had been using Yeoman in a previous project, but I found that it wasn't really keeping up with the latest tools like Gulp or best practices like modular directory structures, so I abandoned it. I went with Gulp by itself for a little bit, but then I realized that all I need for development is unit testing and automatic browser refreshing, so I just used Karma & BrowserSync's standalone executables. This inspires me to see how far I can go without preprocessors, whose complexity always causes problems. I'll try to use polyfills instead to fill in the gaps, at least for development.

[entered](http://challengepost.com/software/jotto-wjgf) into the [PubNub Multi-Player Game App Challenge](http://pubnubgame.challengepost.com)

Copyright Daniel Smith. All rights reserved.
