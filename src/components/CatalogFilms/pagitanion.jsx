


const Pagination = () => {
    return(
        <div className="col-12">
            <ul className="paginator">
                <li className="paginator__item paginator__item--prev">
                    <a href="#"><i className="icon ion-ios-arrow-back"></i></a>
                </li>
                <li className="paginator__item"><a href="#">1</a></li>
                <li className="paginator__item paginator__item--active"><a href="#">2</a></li>
                <li className="paginator__item"><a href="#">3</a></li>
                <li className="paginator__item"><a href="#">4</a></li>
                <li className="paginator__item paginator__item--next">
                    <a href="#"><i className="icon ion-ios-arrow-forward"></i></a>
                </li>
            </ul>
        </div>
    )
}

export default Pagination