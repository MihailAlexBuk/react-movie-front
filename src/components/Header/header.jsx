import React, {useState} from 'react';
import './header.css'
import SearchForm from './search';
import More from './more.dropdown';
import Genre from './genre.dropdown'
import { Link } from 'react-router-dom'

const Header = () => {
    const [showSearchForm, setShowSearchForm] = useState(false)
    const [showMore, setShowMore] = useState(false)
    const [showGenre, setShowGenre] = useState(false)

    const clickSearch = (e) => setShowSearchForm(current => !current)
    const clickMore = (e) => setShowMore(current => !current)
    const clickGenre = (e) => setShowGenre(current => !current)

    return (
        <header className="header">
            <div className="header__wrap">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="header__content">
                                <a href="/" className="header__logo">
                                    <img src="{{asset('assets/img/logo.svg')}}" alt="Постер" />
                                </a>

                                <ul className="header__nav">
                                    <li className="header__nav-item">
                                        <Link className="header__nav-link" to="/">Home</Link>
                                    </li>
                                    <li className="header__nav-item">
                                        <button onClick={clickGenre} className="header__nav-link">Genres</button>
                                        {showGenre && <Genre/>}
                                    </li>
                                    <li className="header__nav-item">
                                        <Link to={"/catalog"} className="header__nav-link">Films</Link>
                                    </li>
                                    <li className="header__nav-item">
                                        <a href="{{route('user.cartoons')}}" className="header__nav-link">cartoons</a>
                                    </li>
                                    <li className="header__nav-item">
                                        <a href="{{route('user.tv-series')}}" className="header__nav-link">tv series</a>
                                    </li>
                                    <li className="dropdown header__nav-item">
                                        <button onClick={clickMore} className="header__nav-link header__nav-link--more"><i className="icon ion-ios-more"></i></button>
                                        {showMore && <More />}
                                    </li>
                                </ul>

                                <div className="header__auth">
								    <button onClick={clickSearch} className="header__search-btn" type="button">
                                        <i className="icon ion-ios-search"></i>
                                    </button>
                                    <Link to="/signin" className="header__sign-in">
                                        <i className="icon ion-ios-log-in"></i>
                                        <span>sign in</span>
                                    </Link>
							    </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {showSearchForm && <SearchForm />}
        </header>
    )
}




export default Header
