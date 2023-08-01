import { Link } from 'react-router-dom'

const Genre = () => {
    return(
        <ul className="header__dropdown-menu">
            {/* @foreach($genres as $genre)
                <a href="{{route('user.movie.genre', $genre->id)}}">{{$genre->title}}</a>
            @endforeach */}
            <li><Link to="/">About</Link></li>
        </ul>
            

    )
}

export default Genre