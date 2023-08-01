import SectionFilms from "./sections/section.films" 
import SectionCartoons from "./sections/section.cartoons" 
import SectionSerials from "./sections/section.serials" 
import SectionHome from "./sections/section.home" 
import "./index.css"




const Index = () => {
    return(
        <>
            <SectionHome/>
            <SectionFilms/>
            <SectionCartoons/>
            <SectionSerials/>
        </>
    )
}

export default Index