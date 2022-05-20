import React from "react"
import ReactDOM from "react-dom/client"
import font from "./font.svg"
// import memesData from "./memesData";

function Meme(){
    
    const [meme,setMeme]=React.useState({
        topText:"",
        bottomText:"",
        randomImage:"https://i.imgflip.com/30b1gx.jpg"
    })

    const[allMeme,setAllMeme]=React.useState([])

    // const[memeImage,setMemeImage]=React.useState("https://i.imgflip.com/30b1gx.jpg")

     React.useEffect(()=>{
        fetch("https://api.imgflip.com/get_memes")
        .then(res =>res.json())
        .then(data => setAllMeme(data.data.memes))
     },[])

     /*
     =>Using async functions 
      React.useEffect(()=>{
         async function getMemes(){
            const res = await  fetch("https://api.imgflip.com/get_memes")
            const data = await res.json()
            setAllMeme(data.data.memes)
         }
        getMemes()
     },[])*/

  function getMemeImage(){
      
      const randomNumber=Math.floor(Math.random() * allMeme.length)
      const url=allMeme[randomNumber].url
      setMeme(prevMeme=>{
          return {
              ...prevMeme,
              randomImage:url
          }
      })
  }

  function handleChange(event){
      const{name,target,value,checked}=event.target
      setMeme(prevMeme=>{
          return {
              ...prevMeme,
              [name]:value
          }
      })
  }

  console.log(meme.bottomText)
    return (
        <main>
            <div className="form">
                <input
                 type="text"
                 placeholder="Toptext"
                 className="form--input"
                 name="topText"
                 value={meme.topText}
                 onChange={handleChange}
                />
                <input
                 type="text"
                 placeholder="Bottomtext"
                 className="form--input"
                 name="bottomText"
                 value={meme.bottomText}
                 onChange={handleChange}
                />

                <button onClick={getMemeImage} className="form--button">
                Get a new meme image  🖼
                </button>
            <div className="meme">
                <img className="meme--image" src={meme.randomImage}/>
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
                </div>
            </div>
        </main>
    );
}

export default Meme;