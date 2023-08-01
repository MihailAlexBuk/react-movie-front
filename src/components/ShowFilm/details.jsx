


const Details = () => {
    return (
        <div className="col-12">
            <div className="card card--details card--series">
                <div className="row">
                    <div className="col-12 col-sm-4 col-md-4 col-lg-3 col-xl-3">
                        <div className="card__cover">
                            <img style={{height:'350px'}} src="https://avatars.mds.yandex.net/i?id=9bb26464c4e2417f5ff415110b67700334496bba-8497449-images-thumbs&n=13" alt=""/>
                        </div>
                    </div>

                    <div className="col-12 col-sm-8 col-md-8 col-lg-9 col-xl-9">
                        <div className="card__content">
                            <div className="card__wrap">
                                <span className="card__rate"><i className="icon ion-ios-star"></i>8.4</span>

                                <ul className="card__list">
                                    <li>HD</li>
                                    <li>16+</li>
                                </ul>
                            </div>

                            <div className="d-flex justify-content-between">
                                <ul className="card__meta ">
                                    <li><span>Original name:</span> films</li>
                                    <li><span>Release year:</span> 2017</li>

                                    <li><span>Running time:</span> 120 min</li>
                                    <li><span>Actors:</span>
                                        <a href="#">ActionActionA</a>
                                        <a href="#">ActionActionA</a>
                                        <a href="#">ActionActionA</a>
                                        <a href="#">ActionActionA</a>
                                    </li>

                                </ul>
                                <ul className="card__meta ">
                                    <li><span>Country:</span> <a href="#">USA</a> </li>
                                    <li><span>Genre:</span>
                                        <a href="#">Action</a>
                                        <a href="#">Triler</a>
                                    </li>
                                    <li><span>Producer:</span>
                                        <a href="#">ActionActionA</a>
                                        <a href="#">ActionActionA</a>
                                        <a href="#">ActionActionA</a>
                                        <a href="#">ActionActionA</a>
                                        <a href="#">ActionActionA</a>
                                    </li>
                                </ul>
                            </div>

                            <div className="b-description_readmore_wrapper js-description_readmore_wrapper" style={{maxWidth: '682.5px'}}>
                                <div className="card__description card__description--details b-description_readmore_ellipsis" >
                                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident,
                                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident,
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Details