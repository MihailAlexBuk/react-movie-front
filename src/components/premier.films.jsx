

const Premier = () => {
    return(
        <section className="section section--bg" data-bg="{{asset('assets/img/section/section.jpg')}}">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2 className="section__title">Expected premiere</h2>
                    </div>

                    <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
                        <div className="card">
                            <div className="card__cover">
                                <img src="{{asset('assets/img/covers/cover.jpg')}}" alt=""/>
                                <a href="#" className="card__play">
                                    <i className="icon ion-ios-play"></i>
                                </a>
                            </div>
                            <div className="card__content">
                                <h3 className="card__title"><a href="#">I Dream in Another Language</a></h3>
                                <span className="card__category">
                                    <a href="#">Action</a>
                                    <a href="#">Triler</a>
                                </span>
                                <span className="card__rate"><i className="icon ion-ios-star"></i>8.4</span>
                            </div>
                        </div>
                    </div>

                    <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
                        <div className="card">
                            <div className="card__cover">
                                <img src="{{asset('assets/img/covers/cover3.jpg')}}" alt=""/>
                                <a href="#" className="card__play">
                                    <i className="icon ion-ios-play"></i>
                                </a>
                            </div>
                            <div className="card__content">
                                <h3 className="card__title"><a href="#">Benched</a></h3>
                                <span className="card__category">
                                    <a href="#">Comedy</a>
                                </span>
                                <span className="card__rate"><i className="icon ion-ios-star"></i>7.1</span>
                            </div>
                        </div>
                    </div>

                    <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
                        <div className="card">
                            <div className="card__cover">
                                <img src="{{asset('assets/img/covers/cover2.jpg')}}" alt=""/>
                                <a href="#" className="card__play">
                                    <i className="icon ion-ios-play"></i>
                                </a>
                            </div>
                            <div className="card__content">
                                <h3 className="card__title"><a href="#">Whitney</a></h3>
                                <span className="card__category">
                                    <a href="#">Romance</a>
                                    <a href="#">Drama</a>
                                    <a href="#">Music</a>
                                </span>
                                <span className="card__rate"><i className="icon ion-ios-star"></i>6.3</span>
                            </div>
                        </div>
                    </div>

                    <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
                        <div className="card">
                            <div className="card__cover">
                                <img src="{{asset('assets/img/covers/cover6.jpg')}}" alt=""/>
                                <a href="#" className="card__play">
                                    <i className="icon ion-ios-play"></i>
                                </a>
                            </div>
                            <div className="card__content">
                                <h3 className="card__title"><a href="#">Blindspotting</a></h3>
                                <span className="card__category">
                                    <a href="#">Comedy</a>
                                    <a href="#">Drama</a>
                                </span>
                                <span className="card__rate"><i className="icon ion-ios-star"></i>7.9</span>
                            </div>
                        </div>
                    </div>

                    <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
                        <div className="card">
                            <div className="card__cover">
                                <img src="{{asset('assets/img/covers/cover4.jpg')}}" alt=""/>
                                <a href="#" className="card__play">
                                    <i className="icon ion-ios-play"></i>
                                </a>
                            </div>
                            <div className="card__content">
                                <h3 className="card__title"><a href="#">I Dream in Another Language</a></h3>
                                <span className="card__category">
                                    <a href="#">Action</a>
                                    <a href="#">Triler</a>
                                </span>
                                <span className="card__rate"><i className="icon ion-ios-star"></i>8.4</span>
                            </div>
                        </div>
                    </div>

                    <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
                        <div className="card">
                            <div className="card__cover">
                                <img src="{{asset('assets/img/covers/cover5.jpg')}}" alt=""/>
                                <a href="#" className="card__play">
                                    <i className="icon ion-ios-play"></i>
                                </a>
                            </div>
                            <div className="card__content">
                                <h3 className="card__title"><a href="#">Benched</a></h3>
                                <span className="card__category">
                                    <a href="#">Comedy</a>
                                </span>
                                <span className="card__rate"><i className="icon ion-ios-star"></i>7.1</span>
                            </div>
                        </div>
                    </div>

                    <div className="col-12">
                        <a href="#" className="section__btn">Show more</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Premier