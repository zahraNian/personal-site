import './App.css'
import menue from './icons8-menu-48.png'
import Resume from './resume.js'
import Home from './home.js'
import styled from 'styled-components'
import Contact from './contact.js'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {Link} from 'react-router-dom'
import {useState} from 'react'
const Column=styled.div({
  display:'flex',
  flexDirection:'column',
  justifyContent:'center',
  alignItems:'flex-end'
})
const Menue=styled.div({
  width:'100%',
  display:'flex',
  flexDirection:'crow',
  justifyContent:'flex-end',
  alignItems:'center',
  backgroundColor:'#8C939C',
  marginBottom:'20px',
  position:'fixed',
  top:'0px',
  rigth:'0px',
  left:'0px',
  zIndex:'2',
  '&>button':{
  width:'30px',
  height:'30px',
  marginTop:'3px',
  marginBottom:'3px',
  backgroundImage:`url(${menue})`,
  backgroundSize:'100% 100%',
  marginRight:'20px',
  borderRadius:'7px'
  }
})
const Absolue=styled.div({
    position:'fixed',
    rigth:'100px',
    top:'30px',
    width:'250px',
    height:'250px',
    backgroundColor:'#f0f0f0',
    boxShadow:'0px 0px 15px 3px gray',
    border:'5px outset #8CAEBA',
    borderRadius:'13px',
    zIndex:'2',
    borderTopRightRadius:'0px',
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    lineHeight:'3',
})
export default function App(){
  const [Show,setShow]=useState()
  function Visibility(){
    return(setShow(!Show))
  }
  return(
    <Router>
      <Column>
        <Menue>
          <button onClick={Visibility} />
        </Menue>
        <Absolue style={{visibility:Show? 'visible' :'hidden'}}>
          <Link onClick={() =>setShow(false)} to='/'>Home </Link>
          <Link onClick={() =>setShow(false)} to='/resume'>Resume</Link>
          <Link onClick={() =>setShow(false)} to='/contact'>Contact</Link>
        </Absolue>
      </Column>
      <Switch>
        <Route path='/'component={Home} exact/>
        <Route path='/resume' component={Resume}/>
        <Route path='/contact' component={Contact}/>
      </Switch>  
    </Router>
  )
}
