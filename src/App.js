import React from 'react'
import Card from './Card';
import './main'


const IMAGES = [
  "https://cdn.discordapp.com/attachments/762750140250718220/927660115371360286/2022-01-03_14.29.55.png",
  "https://media.discordapp.net/attachments/762750140250718220/927660116231200808/2022-01-03_14.29.28.png?width=1693&height=910",
  "https://media.discordapp.net/attachments/762750140250718220/927660116893925416/2022-01-03_14.15.17.png?width=1693&height=910",
  "https://media.discordapp.net/attachments/762750140250718220/927660414681100310/2022-01-03_14.31.12.png?width=1693&height=910",
  "https://media.discordapp.net/attachments/857730336679002172/944726199203155978/unknown.png"
]
class App extends React.Component {

  componentDidMount(){
    const script = document.createElement("script");
    script.src = "./main.js";
    script.async = true;
    document.body.appendChild(script);
  }

  render(){
    return ( 
      <div className="col">
        {IMAGES.map(image => (
            <Card source={image} key={image} />
          ))}
      </div>
    );
  }
  
}

export default App;
