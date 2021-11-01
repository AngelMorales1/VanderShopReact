import { useRef,useEffect } from 'react';
import {gsap} from "gsap";
import { Route, Switch } from 'react-router-dom';
import './styles/index.scss'
import { Navbar } from './components/organisms/navbar/navbar.component';
import { HomePage } from './pages/home/home.component';
import { Catalogo } from './pages/catalogo/catalogo.component';
import { Footer } from './components/organisms/footer/footer.component';
import { Login } from './pages/login/login.component';
import { Register } from './pages/register/register.component';

export const timeline = gsap.timeline()

function App() {
  const boxRef = useRef()

  useEffect(()=>{
    timeline.from(boxRef.current,{y:"-80",opacity:"0"},"0.1");
  },[])

  return (
    <div>
      <div ref={boxRef}>
        <Navbar ></Navbar>
      </div>
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route path="/catalogo/:categoria" component={Catalogo}/>
        <Route path="/login" component={Login}/>
        <Route path="/register" component={Register}/>
        <Route path="*"><h1>404 NOT FOUND</h1> </Route>
      </Switch>
      <Footer></Footer>
    </div>
  );  
}


export default App;
