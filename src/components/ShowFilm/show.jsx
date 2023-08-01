import Details from "./details"
import Player from "./player"
import Share from './share.film'
import Comments from './Comments/comments'
import Alike from './alike.films'

const Show = () => {
    return(
        <>
        <section className="section details">
            <div className="details__bg" data-bg="img/home/home__bg.jpg')}}"></div>

            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1 className="details__title">I Dream in Another Language</h1>
                    </div>

                    <Details />
                    <Player />
                    <Share />
                    
                </div>
            </div>
        </section>

        <section className="content">
            <div className="content__head">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h2 className="content__title">Comments</h2>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <Comments />

                    <Alike />
                </div>
            </div>
        </section>
        </>
    )
}

export default Show