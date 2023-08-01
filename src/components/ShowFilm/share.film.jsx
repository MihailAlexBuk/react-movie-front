

const Share = () => {
    return(
        <div className="col-12">
            <div className="details__wrap justify-content-end">
                <div className="details__share">
                    <span className="details__share-title">Share with friends:</span>

                    <ul className="details__share-list">
                        <li className="facebook"><a href="#"><i className="icon ion-logo-facebook"></i></a></li>
                        <li className="instagram"><a href="#"><i className="icon ion-logo-instagram"></i></a></li>
                        <li className="twitter"><a href="#"><i className="icon ion-logo-twitter"></i></a></li>
                        <li className="vk"><a href="#"><i className="icon ion-logo-vk"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Share