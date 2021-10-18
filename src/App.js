import { useState, useEffect } from 'react'
import Gifs from './components/Gifs'
import Header from './components/Header'

function App() {
  
  const apiKey = 'HqfHsb0czJawwGIJEWhKjfDiYEDAwKN4'

  const [gifs, setGifs] = useState([])

  useEffect(() => {
    const getGifsFromServer = async () => {
      const gifsFromApi = await getGifs()
      setGifs(gifsFromApi)
    }

    getGifsFromServer()
  }, [])

  // Get gifs
  const getGifs = async () => {

    const res = await fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}&limit=4`)
    const data = await res.json()
    console.log(data.data)
    
    return data.data
  }

  // Add gif
  const addGif = async (term) => {

    const res = await fetch(`https://api.giphy.com/v1/search?api_key=${apiKey}&q=${term.text}`)
    const data = await res.json()
console.log(data)
    // setGifs([...gifs, data.data])
  }

  // Delete gif

  return (
    <div className="App">
      <Header onAdd={addGif}/>
      {gifs.length > 0 && <Gifs gifs={gifs}/>}
    </div>
  )
}

export default App
