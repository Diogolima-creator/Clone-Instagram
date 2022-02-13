import styled from "styled-components";

export const Container = styled.div`
    display:flex;
    padding: 60px 20px;
    
    img{
        width:54px;
        height:54px;
        border-radius:45px;
        border:2px solid grey;
        padding:1.5px;
    }
    
    .texts{
        display:block;
    }
    
    p{
        padding-left:15px;
        padding-right:70px;
        padding-top:0px;
        font-size:14px;
        height:5px;
    }

    .name{
        color:gray;
    }
    
    button{
        font-size:12px;
        background-color:transparent;
        border:none;
        color: rgba(var(--d69,0,149,246),1);
        cursor:pointer;
        font-weight: 600;
    }
`;