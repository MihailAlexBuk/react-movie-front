import Carousel from '../carousel/carousel.home'

const SectionHome = () => {

    const items = [
        {
            id:1,
            src: "https://avatars.mds.yandex.net/i?id=ce262a7fbd397b2a6b5438558d57e2adaa54fe1d-8972142-images-thumbs&n=13",
            title: "I Dream in Another Language",
            genre: "Action, Triler",
            rating: 8.4
        },
        {
            id:2,
            src: "https://avatars.mds.yandex.net/i?id=9bb26464c4e2417f5ff415110b67700334496bba-8497449-images-thumbs&n=13",
            title: "Another Language I Dream in ",
            genre: "Action, Triler",
            rating: 1.4
        },
        {
            id:3,
            src: "https://avatars.mds.yandex.net/i?id=e6eeac81d205af414603f13cdcc33689699197d2-4447866-images-thumbs&n=13",
            title: "Dream in Another I Language",
            genre: "Action, Triler",
            rating: 4.4
        },
        {
            id:4,
            src: "https://avatars.mds.yandex.net/i?id=a5a197326f12ff86913ef334aa440317043dcef4-9180497-images-thumbs&n=13",
            title: "Language I Dream in Another ",
            genre: "Action, Triler",
            rating: 5.5
        },
        {
            id:5,
            src: "https://avatars.mds.yandex.net/i?id=368cd8bae766789fa803dd8d883279b39455d7d4-9569150-images-thumbs&n=13",
            title: "Language I Dream in Another ",
            genre: "Action, Triler",
            rating: 5.5
        },
        {
            id:6,
            src: "https://avatars.mds.yandex.net/i?id=37477f8e41edb2e5595a7ba7459d3fc33fa716ff-9721849-images-thumbs&n=13",
            title: "Language I Dream in Another ",
            genre: "Action, Triler",
            rating: 5.5
        },
    ]
    return(
        <section className="home">
            <div className="container">
                <h1 className="home__title"><b>NEW ITEMS</b></h1>
                <Carousel items={items} />
            </div>
            
        </section>
    )
}

export default SectionHome