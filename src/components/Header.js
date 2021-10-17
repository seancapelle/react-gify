import Button from './Button'

const Header = ({ addGif }) => {

    return (
        <div>
            <h1>React Gif</h1>
            <Button addGif={addGif}/>
        </div>
    )
}

export default Header