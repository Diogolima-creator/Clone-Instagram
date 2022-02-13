import styled from "styled-components";

export const Container= styled.div`
    background-color:white;
    margin-top:20px;
    width:628px;

    img{
        width:100%;
        object-fit: cover;
    }

    .border{
        border:1px solid rgba(128,128,128,0.5);   
        border-top:0px solid transparent;
        border-bottom:1px solid transparent;
        border-radius:2px;
    }
`;

export const Header = styled.div`
    display:flex;
    padding:5px;
    border:1px solid rgba(128,128,128,0.5);
    border-bottom:0px;
    border-radius:2px;
    padding: 5px 10px;
    background-color:White;
    
    .Head{  
        display:flex;
        align-items:center;
    }
    
    img{
        border:1px solid red;
        padding:1.5px;
        border-radius:45px;
        height:32px;
        width:32px;
        
    }

    p{
        display:flex;
        font-weight:bold;
        padding-right:430px;
        padding-left:5px;
        font-size:14px;
    }

    .Icon{
        height:18px;
        
    }
`;

export const Buttons = styled.div`
    display:flex;
    justify-content:space-between;
    padding:5px;
    margin-top:-5px;
    
    .Icon{
        width:24px;
        height:24px;
        padding-left:8px;
        cursor:pointer;
    }

    .Icon:hover{
        opacity: .5;
    }
`;

export const Caption = styled.div`
    flex:1;
    

    p{
        white-space:nowrap;
        overflow:hidden;
        text-overflow:ellipsis;
        padding-left:8px;
        font-size:14px;
    }

    p span{
        
        padding-left:8px;
        font-weight:bold;
        margin-right:5px;
       
    }
`;

export const Input = styled.div`
    border:1px solid rgba(128,128,128,0.5);
    border-top:1px solid rgba(128,128,128,0.1);
    border-radius:5px;
    margin-top:-1px;
    form{
        display:flex;
        justify-content:center;
        
    }
    .Icon{
        width:28px;
        height:28px;
        padding:10px;
        cursor:pointer;
    }
    input{
        border:none;
        flex:1;
        outline:none;
    }

    input:focus{
        background-color:transparent;
    }

    button{
        background-color:transparent;
        font-weight:semibold;
        color: rgba(var(--d69,0,149,246),1);
        border:none;
    }
`;