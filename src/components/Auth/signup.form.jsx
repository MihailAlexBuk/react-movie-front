import { Link } from 'react-router-dom'
import "./sing.css"



const SignupForm = () => {
    return(
        <div class="sign section--bg" data-bg="img/section/section.jpg">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="sign__content">
                            <form action="#" class="sign__form">
                                <h3 className="section__title">Registration</h3>

                                <div class="sign__group">
                                    <input type="text" class="sign__input" placeholder="Name"/>
                                </div>

                                <div class="sign__group">
                                    <input type="text" class="sign__input" placeholder="Email"/>
                                </div>

                                <div class="sign__group">
                                    <input type="password" class="sign__input" placeholder="Password"/>
                                </div>

                                <div class="sign__group sign__group--checkbox">
                                    <input id="remember" name="remember" type="checkbox" checked="checked"/>
                                    <label for="remember">I agree to the <a href="#">Privacy Policy</a></label>
                                </div>
                                
                                <button class="sign__btn" type="button">Sign up</button>

                                <span class="sign__text">Already have an account? <Link to="/signin">Sign in!</Link></span>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignupForm