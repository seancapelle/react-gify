import Gif from './Gif'

const Gifs = ({ gifs }) => {

    return (
        <div>
            {gifs.map((gif, index) => (
                <Gif key={index} gif={gif}/>
            ))}
        </div>
    )
}

export default Gifs