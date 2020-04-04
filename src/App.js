/* eslint-disable no-unused-vars */
import React from 'react';
import { Route,Switch } from 'react-router-dom';
import UpperStyle from './components/divStyles/divstyles';
import Footer from './components/footer/footer';
import HeaderTop from './components/headerTop/headerTop';
import LocationPage from './pages/location/locationpage';
import LoginPage from './pages/login/loginpage';
import HomePage from './pages/homepage/homepage';
import NavbarSection from './components/headerNav/headerNav';
import FooterUpper from './components/footerUpper/footerUpper';
import BackToTopBtn from './components/backtotopbtn/backToTop';
import MealPage from './pages/mealPage/mealpage';
import PrivacyPolicy from './pages/privacypolicy/privacypolicypage';
import AboutUs from './pages/aboutus/aboutus';
import Contact from './pages/contact/contactpage';
import JoinUs from './pages/joinus/joinUs';
import TermsAndConditions from './pages/termsAndCondition/conditions';
import MitaoBhook from './pages/mitaoBhook/mitaoBhookPage';
import SecretReceipe from './pages/secretRecipe/receipe';
import ChecktOutPage from './pages/checkout/checkOut';


class Kfc extends React.Component {
  
  constructor(props){
    super(props);

    this.state = {
      loc: window.location.pathname.toString()      
    };
    
  };
      
  render(){
    
    const {loc} = this.state;
    
    return (
        <React.Fragment>
          { this.state.loc === '/page/checkout' ?
            <Switch>
              <Route path="/page/checkout" component={ChecktOutPage} />
            </Switch>
          :
          <div className="App">
            <UpperStyle /><br />
            <HeaderTop />
            <NavbarSection />
              <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/meals" component={MealPage} />
                <Route path="/page/location" component={LocationPage} />
                <Route exact path="/page/login" component={LoginPage} />
                <Route path="/page/privacy-policy" component={PrivacyPolicy} />
                <Route path="/page/about-us" component={AboutUs} />
                <Route path="/page/contact" component={Contact} />
                <Route path="/page/join-us" component={JoinUs} />
                <Route path="/page/terms-and-conditions" component={TermsAndConditions} />
                <Route path="/page/mitao-bhook" component={MitaoBhook} />
                <Route path="/page/nutritional-information" component={SecretReceipe} />
              </Switch>
            <BackToTopBtn />
            <FooterUpper />
            <Footer />
            <UpperStyle />
          </div>
          }
        </React.Fragment>
    );
  }
}

export default Kfc;
