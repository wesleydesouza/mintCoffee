import styled from "styled-components";

export const HeaderContainer = styled.header`
    width: 100%;
    display:flex;
    justify-content: space-around;
    background-color: #ECECEE;
    list-style: none;
    nav{
        width: 30%;
        display:flex;
        align-items: center;
        height: 100%;
    }
    li{
        display: inline;
    }

    li a{
        border-top: 3px solid #ECECEE;
        color: rgb(32, 1, 0);
        padding: 30px;
        display: inline-block;
        text-decoration: none;
        font-weight: 500;
    }

    li a:hover{
        color: rgba(54, 4, 2, 0.872);
        border-top: 3px solid rgba(32, 1, 0, 0.872);
        transition: 1s
    }

`