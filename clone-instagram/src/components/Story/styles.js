import styled from "styled-components";

export const Container = styled.div`
    z-index:1;
    
    img{
        margin-top:9px;
        height:56px;
        width:56px;
        border:1px solid red;
        border-radius:45px;
        cursor:pointer;
        padding:1.5px;
        transition: all ease .2s;
        margin-bottom:0px;
    }

    img:hover{
        transform: scale(1.10);
    }

    p{
        font-size:12px;
        white-space:nowrap;
        overflow:hidden;
        text-overflow:ellipsis;
        width:70px;
        margin-bottom:5px;
    }

    
   
`;