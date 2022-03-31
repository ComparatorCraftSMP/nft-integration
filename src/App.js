import React from 'react'
import Card from './Card';
import './main.js'


const IMAGES = [
  "https://cdn.discordapp.com/attachments/762750140250718220/927660115371360286/2022-01-03_14.29.55.png",
  "https://media.discordapp.net/attachments/762750140250718220/927660116231200808/2022-01-03_14.29.28.png?width=1693&height=910",
  "https://media.discordapp.net/attachments/762750140250718220/927660116893925416/2022-01-03_14.15.17.png?width=1693&height=910",
  "https://media.discordapp.net/attachments/762750140250718220/927660414681100310/2022-01-03_14.31.12.png?width=1693&height=910",
  "https://media.discordapp.net/attachments/857730336679002172/944726199203155978/unknown.png"
]
class App extends React.Component {


  render(){
    return ( 
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 g-2">
        {IMAGES.map(image => (
            <Card source={image} key={image} />
          ))}
      </div>
    );
  }
  
}

export default App;
