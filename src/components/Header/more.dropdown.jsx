import { Link } from 'react-router-dom'



const More = () => {
    return (
        <ul className="header__dropdown-menu2">
            <li className="header__nav-item">
                <a href="{{route('user.collections')}}">Collections</a>
            </li>
            <li><Link to="/">About</Link></li>
            <li><Link to="/">Contacts</Link></li>
            <li><Link to="/">Help</Link></li>
        </ul>
    )
}

export default More