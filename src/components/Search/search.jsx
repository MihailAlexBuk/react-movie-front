import Films from '../list.films'
import Premier from '../premier.films'



const Search = () => {
    return(
        <>
        <section class="section section--first section--bg" data-bg="{{asset('assets/img/section/section.jpg')}}">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="section__wrap">
                            <h2 class="section__title">Search "name"</h2>

                        </div>
                    </div>
                </div>
            </div>
        </section>

        <Films />

        <Premier />
    </>
    )
}

export default Search