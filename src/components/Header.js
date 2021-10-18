import Input from './Input'

const Header = ({ onAdd }) => {

    return (
        <div>
            <h1>React Gif</h1>
            <Input onAdd={onAdd}/>
        </div>
    )
}

export default Header