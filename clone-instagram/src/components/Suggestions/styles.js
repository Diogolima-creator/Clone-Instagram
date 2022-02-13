import styled from "styled-components";

export const Container = styled.div`
margin-top:-40px;
padding: 0px 20px;

    .See{
        display:flex;
        justify-content:space-between;

    }

    .See p {
        color:gray;
        font-weight:600;
        font-size:14px;
    }

    .See button{
        font-size:12px;
        background-color:transparent;
        border:none;
        color: black;
        opacity: .9;
        cursor:pointer;
        font-weight: 600;
    }
    img{
        width:32px;
        height:32px;
        border-radius:45px;
    }

    p{
        font-size:12px;
    }

    .profiles{
        display:flex;
        padding:10px;
        
    }

    .profiles-name{
        padding-left:10px;
        padding-right:70px;
        padding-top:0px;
        padding-bottom:0px;
        font-size:14px;
        height:5px;
        color:gray;
        
    }
    
    .profiles-name h1{
        font-size:12px;
        color:black;
        height:5px;
        margin-top:0px;
    }

      
    .btn-follow button{
        font-size:12px;
        background-color:transparent;
        border:none;
        color: rgba(var(--d69,0,149,246),1);
        opacity: .9;
        cursor:pointer;
        font-weight: 600;
        
    }

    .btn-follow{
        display:flex;
        justify-content:end;
    }

`;