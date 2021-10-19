import './App.css';
import AuthProvider from './context/AuthProvider';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Navbar from './Pages/Shared/Navbar/Navbar';
import HomeContainer from './Pages/Home/HomeContainer/HomeContainer';
import ServicesContainer from './Pages/Services/ServicesContainer/ServicesContainer';
import ServiceDetails from './Pages/Services/ServiceDetails/ServiceDetails';
import Login from './Pages/Login/Login';
import Signup from './Pages/Signup/Signup';
import About from './Pages/About/About';
import Appoinment from './Pages/Appoinment/Appoinment';
import Footer from './Pages/Shared/Footer/Footer';
import PrivateRoute from './Pages/Shared/PrivateRoute/PrivateRoute';
import NotFound from './Pages/NotFound/NotFound';

function App() {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <Navbar></Navbar>
          <Switch>
            <Route exact path='/'>
              <HomeContainer></HomeContainer>
            </Route>
            <Route exact path='/home'>
              <HomeContainer></HomeContainer>
            </Route>
            <Route exact path='/services'>
              <ServicesContainer></ServicesContainer>
            </Route>
            <PrivateRoute path='/service/:slug'>
              <ServiceDetails></ServiceDetails>
            </PrivateRoute>
            <Route exact path='/login'>
              <Login></Login>
            </Route>
            <Route exact path='/signup'>
              <Signup></Signup>
            </Route>
            <Route exact path='/about'>
              <About></About>
            </Route>
            <PrivateRoute path='/appoinment'>
              <Appoinment></Appoinment>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
