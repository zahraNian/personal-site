import './App.css'
import menue from './icons8-menu-50.png'
import Delete from "./icons8-multiply-50 (1).png"
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
  height:'36px',
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
  background-size:100% 100%;
  background-color:#9Ca3aC;
  margin-right:15px;
  position:fixed;
  top:0px;
  border:none;
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
    top:'37px',
    width:'100%',
    height:'250px',
    backgroundColor:'#fff',
    boxShadow:'0px 0px 15px 3px gray',
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
          <Button title='menue' onClick={Visibility} style={{backgroundImage:Show?`url(${Delete})`:`url(${menue})`}} />

          <Navbar>
            <NavLink className='a' to='/contact' activeStyle={{textDecoration:'underLine'}} >Contact</NavLink>
            <NavLink className='a' to='/resume' activeStyle={{textDecoration:'underLine'}}>Resume</NavLink>
            <NavLink className='a' to='/home' activeStyle={{textDecoration:'underLine'}}>Home</NavLink>
          </Navbar>
        </Menue>
          <Absolue style={{visibility:Show? 'visible' :'hidden',animation:Show?'Opening 0.2s linear': void(0)}}>
            <NavLink onClick={() =>setShow(false)} to='/home' style={{animation:Show?'Showing 0.2s linear':void(0)}} activeStyle={{textDecoration:'underLine', fontWeight:'bold'}}>Home </NavLink>
            <NavLink onClick={() =>setShow(false)} to='/resume' style={{animation:Show?'Showing 0.2s linear':void(0)}} activeStyle={{textDecoration:'underLine', fontWeight:'bold'}}>Resume</NavLink>
            <NavLink onClick={() =>setShow(false)} to='/contact' style={{animation:Show?'Showing 0.2s linear':void(0)}} activeStyle={{textDecoration:'underLine', fontWeight:'bold'}}>Contact</NavLink>
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
