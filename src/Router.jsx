import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Index from './components/Index/index'
import Header from './components/Header/header.jsx';
import Footer from './components/Footer/footer.jsx';
import SigninForm from './components/Auth/signin.form'
import SignupForm from './components/Auth/signup.form'
import Error404 from './components/Errors/404'
import Catalog from './components/CatalogFilms/catalog'
import Show from './components/ShowFilm/show'

const Router = () => {
	return <BrowserRouter>
		<Header />
		<Routes>
			<Route path="/" element={<Index />}/>
			<Route path="/signin" element={<SigninForm />}/>
			<Route path="/signup" element={<SignupForm />}/>
			<Route path="/catalog" element={<Catalog />}/>
			<Route path="/movie/:id" element={<Show />}/>
			<Route path="/car/:id" element={<div>film detail</div>} />
			<Route path="/*" element={<Error404 />} />
		</Routes>
		<Footer />
	</BrowserRouter>
}

export default Router