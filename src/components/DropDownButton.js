import styled from 'styled-components';



export const DropList = styled.div`
display: none;
position: absolute;
right:0;
left:0;
top:50px;
background-color: #f9f9f9;
min-width: 160px;
box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
z-index: 1;
    &:hover {
      color: #ff6b6b;
    }
 
`

export const DropContent = styled.div`
float: none;
color: black;
padding: 12px 16px;
text-decoration: none;
display: block;
text-align: left;
&:hover{
    background: red;
    color: white;
}
`

const DropDownButton = styled.button`
float:center;

position:relative;
background: #3498DB;
color: white;
padding: 16px;
font-size: 16px;
border: none;
cursor: pointer;
 &:hover{
     background: #2980B9;

 }
 &:focus{
     background: #2980B9;
    ${DropList}{
        display:initial;
    }
     
 }
`


export default DropDownButton;