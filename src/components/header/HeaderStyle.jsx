import styled from "styled-components";
import font from "../../assets/fonts/MrsSaintDelafield-Regular.ttf"
export const HeaderContainer = styled.header`
    width: 100%;
    display:flex;
    justify-content: space-around;
    background-color: #ECECEE;
    list-style: none;

    ul{
        display:flex;
    }
    li{
        list-style: none;
    }
    li a{
        border-top: 3px solid rgba(236, 236, 238, 0);
        color: rgb(32, 1, 0);
        padding: 35px;
        display: inline-block;
        text-decoration: none;
        font-weight: 500;
    }

    li a:hover{
        color: rgba(54, 4, 2, 0.872);
        border-top: 3px solid rgba(32, 1, 0, 0.872);
        transition: 0.5s;
        
    }
`
export const LogoContainer = styled.figure`
    @font-face {
        font-family: "Mrs Saint Delafield";
        src: url(${font}) format('truetype');

    }

   width:120px;
   background-color: #3F1414;
   border-radius:5px;

   img{
    width: 40px;
   }

   a{
    display:flex;
   flex-direction:column;
   align-items:center;
    text-decoration: none;
    font-weight: 500;
   }

   a span{

    color: #E9E1B6;
    font-size: 30px;
    font-family: "Mrs Saint Delafield", cursive;
   }
`