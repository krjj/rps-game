# Rock Paper Scissors
Simple browser based Rock Paper Scissors game. Supports Player Vs Player, Player Vs Computer modes, Computer Vs Computer modes. 

Node.js CLI version of the game available in cli directory.

![screenshot](https://github.com/krjj/rps-game/blob/master/assets/frame_generic_light.png)

## Demo
Visit 👉 https://krjj.github.io/rps-game/

## Stack

+ HTML
+ Javascript
+ CSS

#### External libraries used 

+ [NES.css](https://github.com/nostalgic-css/NES.css)
+ [Press Start 2P font](https://fonts.google.com/specimen/Press+Start+2P?selection.family=Press+Start+2P)

 
## CLI Usage

### Running cli
``` 
git clone https://github.com/krjj/rps-game.git
cd cli
node index.js [mode] [choice]
```

### Available cli switches

```
[mode] = -computerVscomputer | -playerVsComputer
[choice] = rock | paper | scissor
```

### Example
```
node index.js -playerVsComputer paper
node index.js -computerVscomputer
```
