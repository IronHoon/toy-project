import styled, {css} from 'styled-components';
import {lighten, darken} from 'polished';
import { MdClear } from 'react-icons/md';
import { useState } from 'react';
import { useEffect } from 'react';

export const Button = styled.button`
  
  background : #1266F1;
  border : 1px solid transparent;
  border-radius : 5px;
  color: white;
  font-size:20px;
  padding:10px;
  &+&{
    margin-left:10px;
  }

  &:hover {
    background: #63e6be;
    opacity:1;
  }
  &:active {
    background: #20c997;
  }
  &:!active{
    background:black;
  }
  

  /* block */
  ${props => {
    if(props.block){
      return css`
        width:100%;
      `
    }else{
      return css`    
      `
    }
  }}

  /* size */
  ${props => {
    if(props.size==='lg'){
      return css `
        font-size:50px;
      `
    }else if (props.size ==='sm'){
      return css`
        font-size:10px;
      `
    }
  }}


  /* 색깔 및 outline설정 */
  ${(props) => {if(props.color==='Primary'&& !props.outline){
    return css`
    background : #1266F1;
    &:hover {
      background: ${lighten(0.1, '#1266F1')};
    }
    &:active {
      background: ${darken(0.1, '#1266F1')};
    }
    `}else if(props.color==='Primary'&& props.outline){
      return css`
        background: white;
        color : #1266F1;
        border: 1px solid #1266F1;
        &:hover {
          background: #1266F1;
          color:white;
        }
        &:active {
          background: ${darken(0.1, '#1266F1')};
        }
        
      `
    }
    
  }
  }

  ${(props) => {if(props.color==='Secondary'&& !props.outline){
    return css`
    background : #B23CFD;
    `}else if(props.color==='Secondary'&& props.outline){
      return css`
        background: white;
        color : #B23CFD;
        border: 1px solid #B23CFD;
      `
    }
  }
  }
  ${(props) => {if(props.color==='Success'&& !props.outline){
    return css`
    background : #00B74A;
    `}else if(props.color==='Success'&& props.outline){
      return css`
        background: white;
        color : #00B74A;
        border: 1px solid #00B74A;
      `
    }
  }
  }
  
  ${(props) => {if(props.color==='Danger'&& !props.outline){
    return css`
    background : #F93154;
    `}else if(props.color==='Danger'&& props.outline){
      return css`
        background: white;
        color : #F93154;
        border: 1px solid #F93154;
      `
    }
  }
  }
  

  ${(props) => {if(props.color==='Warning'&& !props.outline){
    return css`
    background : #FFA900;
    `}else if(props.color==='Warning'&& props.outline){
      return css`
        background: white;
        color : #FFA900;
        border: 1px solid #FFA900;
      `
    }
  }
  }
  

  ${(props) => {if(props.color==='Info'&& !props.outline){
    return css`
    background : #39C0ED;
    `}else if(props.color==='Info'&& props.outline){
      return css`
        background: white;
        color :  #39C0ED;
        border: 1px solid  #39C0ED;
      `
    }
  }
  }
  ${(props) => {if(props.color==='Light'&& !props.outline){
    return css`
    background : #FBFBFB;
    color :black;
    `}else if(props.color==='Light'&& props.outline){
      return css`
        background: white;
        color :  #FBFBFB;
        border: 1px solid  #FBFBFB;
      `
    }
  }
  }

  ${(props) => {if(props.color==='Dark'&& !props.outline){
    return css`
    background : #262626;
    `}else if(props.color==='Dark'&& props.outline){
      return css`
        background: white;
        color : #262626;
        border: 1px solid  #262626;
      `
    }
  }
  }

  /* active */
  ${
    props => {
      if(props.active===false){
        return css`
        background:gray;
        &:hover{
        background:gray;

        }
        &:active{
        background:gray;

        }
        `
      }
    }
  }
  /* close */
  ${
    props => {
      if(props.close===true){
        
        console.log('클로스')
        return (css`
        color:gray;
        background:white;
        // &::after{
        //   position:relative;
        //   left:1000px;
        //   content:'sdfdfssdfsdfdf';
        //   color:black;
          
        // }
        &:hover{
          background:white;
        }
        `)
      }
    }
  }
`

export const Buttons = styled.div`
  &+&{
    margin-top: 20px;
  }
`
export const Radios = styled.div`

`

export const Radio = styled.button`
background : #1266F1;
border : 1px solid transparent;
border-radius : 5px;
color: white;
font-size:20px;
padding:10px;

  background : #1266F1;
  ${
    (props) => {if(props.selected){
      return css`
      background:black;
      `
    }
      
   }}
  
  &:hover {
    background: ${lighten(0.1, '#1266F1')};
  }
  &:active {
    background: ${darken(0.1, '#1266F1')};
  }
  `
  
  export const Checked = styled.button`
  background : #1266F1;
  border : 1px solid transparent;
  border-radius : 5px;
  color: white;
  font-size:20px;
  padding:10px;
  
    background : #1266F1;
    ${
      (props) => {if(props.selected){
        return css`
        background:black;
        `
      }
        
     }}
    
    &:hover {
      background: ${lighten(0.1, '#1266F1')};
    }
    &:active {
      background: ${darken(0.1, '#1266F1')};
    }
  ` 



Button.defaultProps = {
  active: true
};
