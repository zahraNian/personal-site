import './App.css'
import menue from './icons8-menu-48.png'
import Resume from './resume.js'
import Home from './home.js'
import styled from 'styled-components'
import Contact from './contact.js'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {Link, NavLink} from 'react-router-dom'
import {useState,useEffect, Component } from 'react'
import React from 'react';
import {Animate} from 'react-simple-animate'
const Column=styled.div({
  display:'flex',
  flexDirection:'column',
  justifyContent:'center',
  alignItems:'flex-end'
})
const Menue=styled.div({
  width:'100%',
  height:'33px',
  display:'flex',
  flexDirection:'crow',
  justifyContent:'flex-end',
  alignItems:'center',
  backgroundColor:'#9Ca3aC',
  marginBottom:'20px',
  position:'fixed',
  top:'0px',
  rigth:'0px',
  left:'0px',
  zIndex:'2',
  boxShadow:'0px 0px 5px 1px gray',
})
const Button=styled.button`
  width:30px;
  height:30px;
  margin-top:3px;
  margin-bottom:3px;
  background-image:url(${menue});
  background-size:100% 100%;
  margin-right:5px;
  border-radius:7px;
  position:fixed;
  top:0px;
  right:0px;
  @media (min-width : 420px){
    visibility:hidden;
  }
  :hover{
    transform:scale(1.1);
  }
  }`
  const Navbar=styled.div`
  @media (max-width : 420px){
    visibility:hidden;
  };
  margin-right:20px;
  display:flex;
  flex-flow:row-wrap;
  justify-content:space-between;
  align-items:center;
  width:250px;
  .a{
    color:white;
    font-weight:bold;
    text-decoration:none;
    :hover{
      transform:scale(1.1);
    }
  }
  `
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
    '&>a':{
      textDecoration:'none',
      '&:hover':{
        transform:'scale(1.1)'
      },
    }
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
          <Button title='menue' onClick={Visibility} />

          <Navbar>
            <NavLink className='a' to='/contact' activeStyle={{textDecoration:'underLine'}} >Contact</NavLink>
            <NavLink className='a' to='/resume' activeStyle={{textDecoration:'underLine'}}>Resume</NavLink>
            <NavLink className='a' to='/home' activeStyle={{textDecoration:'underLine'}}>Home</NavLink>
          </Navbar>
        </Menue>
          <Absolue style={{visibility:Show? 'visible' :'hidden'}}>
            <NavLink onClick={() =>setShow(false)} to='/home' activeStyle={{textDecoration:'underLine', fontWeight:'bold'}}>Home </NavLink>
            <NavLink onClick={() =>setShow(false)} to='/resume' activeStyle={{textDecoration:'underLine', fontWeight:'bold'}}>Resume</NavLink>
            <NavLink onClick={() =>setShow(false)} to='/contact' activeStyle={{textDecoration:'underLine', fontWeight:'bold'}}>Contact</NavLink>
          </Absolue>

       
      </Column>
      <Switch>
        <Route path='/resume' component={Resume}/>
        <Route path='/contact' component={Contact}/>
        <Route path='/home' component={Home}/>
        <Route path='/' component={()=>{window.location.href='/home'}}/>
      </Switch>  
    </Router>
  )
}
