import { Link } from 'react-router-dom'
import "./sing.css"


const SigninForm = () => {
    return(
        <div className="sign section--bg">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="sign__content">
                            <form action="#" className="sign__form">
                                <h3 className="section__title">Аuthentication</h3>

                                <div className="sign__group">
                                    <input type="text" className="sign__input" placeholder="Email"/>
                                </div>

                                <div className="sign__group">
                                    <input type="password" className="sign__input" placeholder="Password"/>
                                </div>

                                <div className="sign__group sign__group--checkbox">
                                    <input id="remember" name="remember" type="checkbox" checked="checked"/>
                                    <label for="remember">Remember Me</label>
                                </div>
                                
                                <button className="sign__btn" type="button">Sign in</button>

                                <span className="sign__text">Don't have an account? <Link to="/signup">Sign up!</Link></span>

                                <span className="sign__text"><a href="#">Forgot password?</a></span>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SigninForm