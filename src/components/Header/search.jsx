import React from 'react';




const SearchForm = () =>{
    return(
        <form action="#" className="header__search">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="header__search-content">
                            <input type="text" placeholder="Search for a movie, TV Series that you are looking for"></input>

                            <button type="button">search</button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default SearchForm