import Filter from "./filters"
import Films from '../list.films'
import Premier from '../premier.films'
import "./catalog.css"



const Catalog = () => {
    return(
        <>
        <section className="section section--first section--bg" data-bg="{{asset('assets/img/section/section.jpg')}}">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="section__wrap">
                            <h2 className="section__title">Catalog "Films/tv/"</h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <Filter />

        <Films />

        <Premier />

        </>
    )
}


export default Catalog