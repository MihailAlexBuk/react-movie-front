


const Filters = () => {
    return(
        <div className="filter">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="filter__content">
                            <div className="filter__items">
                                <div className="filter__item" id="filter__genre">
                                    <span className="filter__item-label">Rating:</span>

                                    <div className="filter__item-btn dropdown-toggle" role="navigation" id="filter-genre" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <input type="button" value="Kinopoisk"/>
                                        <span></span>
                                    </div>

                                    <ul className="filter__item-menu dropdown-menu scrollbar-dropdown" aria-labelledby="filter-genre">
                                        <li>Kinopoisk</li>
                                        <li>IMDb</li>
                                        <li>Animation</li>
                                        <li>Biography</li>
                                        <li>Comedy</li>
                                        <li>Cooking</li>
                                    </ul>
                                </div>

                                <div className="filter__item" id="filter__quality">
                                    <a style={{color: 'white'}} href="#">By popularity</a>
                                </div>

                                <div className="filter__item" id="filter__quality">
                                    <a style={{color: "white"}} href="#">Latest</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Filters