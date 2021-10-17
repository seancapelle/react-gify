const Gif = ({ gif }) => {

    return (
        <div>
            <div>
                <strong>{gif.title}</strong>
            </div>
            <div>
                <img src={gif.images.fixed_height_small.url} />
            </div>
        </div>
    )
} 

export default Gif