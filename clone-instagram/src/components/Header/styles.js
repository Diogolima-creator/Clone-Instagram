import styled from "styled-components";

export const Container = styled.div`
    position:fixed;
    display:flex;
    justify-content: space-between;
    border-bottom:1px solid rgba(var(--bb2,239,239,239),1);
    height:59px;
    background-color:white;
    z-index:999;
    width:100%;

    .Search-div{
        position:relative;
        margin-top:14px;
    }

    .Search{
        position:absolute;
        display:flex;
        align-items:center;
        justify-content:center;
        padding-left:20px;
        
    }

    .SearchIcon{
        height:19px;
        color:gray;
        padding-top:9px;
        margin-left:100px;
    }

    .logo{
         position:relative;
         top:0px;
         width:100px;
         height:55px;
         margin-top:8px;
         visibility:visible;
         cursor:pointer;
         margin-left:490px;
     }

    .logo1{
        position:relative;
        width:38px;
        height:38px;
        visibility:hidden;
        cursor:pointer;
        left:0;
        margin-bottom:13px;
    }
    
    input{
        background-color: rgba(var(--bb2,239,239,239),1);
        display:block;
        width:75%;
        padding-left:35px;
        height:30px;
        outline:none;
        border: 0px solid gray;
        padding-top:2px;
        padding-bottom:2px;
        border-radius:9px;
        border:1px solid rgba(var(--bb2,239,239,239),1);
        font-size:14px;
        margin-left:110px;
        input:focus{
            background-color:black;
        }
    }

    .right{
        display:flex;
        align-items: center;
        justify-content:end;
        margin-top:0px;
        margin-right:480px;
        
        .Icon{
            width:28px;
            height:28px;
            cursor:pointer;
            margin-left:20px;
        }

        .MenuIcon{
            width:28px;
            height:28px;
            visibility:hidden;
            margin-left:20px;
        }

        img{
            width:30px;
            height:30px;
            margin-left:20px;
            border-radius:15px;
        }
    }


`

export const UploadPage = styled.div`
    position:absolute;
    top:0px;
    left:0px;
    display:none;
    width:1980px;
    height:1020px;
    background: rgba(0,0,0,.8);
    z-index:12;
    

    #upload{
        display:none;
    }

    .imgUploading{
        display:flex;
        width:22%;
        height:22%;
        align-items:center;
        justify-content:center;
        border:0px solid black;
        margin:250px 330px;
    }

    .pUploading{
        display:Flex;
        font-size:22px;
        color:black;
        position:inherit;
        align-items:center;
        justify-content:center;
        animation: blinkCursor 100ms infinite 
        normal, typing 2s steps(40) 1s normal both;
        overflow:hidden;

        @keyframes typing{
            from{
                width:32em;
            }to{
                width:40em;
            }
        }

        @keyframes blinkCursor{
            from{
                border-color:rgba(255,255,255,0.75);
            } to {
                border-color:transparent;
            }
        }

    }

    

    .XIcon{
        width:34px;
        height:34px;
        cursor:pointer;
        z-index:20;
        color:white;
        margin-left:1870px;
        margin-top:20px;
        
    }

    .labels{
        display:flex;
        label{
            margin-right:15px;
        }

        #submit{
            display:none;
        }
    }
    .Icon{
        width:34px;
        height:34px;
        cursor:pointer;
        z-index:20;
        color:black;
        position:absolute;
        border:2px solid black;
        border-radius:45px;
        padding:5px;
    }

    p{
        margin-top:100px;
        position:absolute;
    }

    .UploadPage{
        display:flex;
        background-color:white;
        border-radius:15px;
        width:850px;
        height:800px;
        margin-top:30px;
        margin-left:550px;
        flex-direction:column;
        
        .imgUp{
            height:703px;
            width:850px;
        }
        
        @keyframes modal{
            from {
                opacity: 0;
                transform: translate3d(-60px,0,0);
            } to {
                opacity: 1;
                transform: tranlate3d(0,0,0);
            }
        }
    
        animation: modal .4s;
    }

    .sep{
        display:flex;
        flex-direction:row;
        height: 750px;
    }

    .Caption{
        display:none;
        width: 299px;
        height: 745px;
        background-color:white;
        border:1px solid rgb(169, 169, 169, 0.6);
        
        flex-direction:column;
        border-left:0px;
        border-bottom:0px;
        textarea{
            width:90%;
            border:none;
            outline:none;
            font-size: 16px;
            line-height: 24px;
            margin: 0px 16px;
            padding: 0;
            max-height: 168px;
            min-height: 168px;
            resize: none;
        }

        @keyframes modal{
            from {
                opacity: 0;
                transform: translate3d(-30px,0,0);
            } to {
                opacity: 1;
                transform: tranlate3d(0,0,0);
            }
        }

        animation: modal .4s;
    }

    .header-Caption{

        display:flex;
        flex-direction:row;

        img{
            width:32px;
            height:32px;
            border-radius:45px;
            margin:0px;
            padding:20px;
        }

    
        p{
            margin:0px;
            padding:25px 60px;
            font-weight:bold;
            font-size:14px;
        }
    }


    .Upload{
        margin-top:0px;
        display:flex;
        justify-content:center;
        flex-direction:column;
        align-items:center;
        height:100%;
        width:850px;
    }

    .Header{
        display:flex;
        align-items:center;
        justify-content:center;
        background-color:white;
        font-size: 8px;
        font-weight: normal;
        padding: 10px 0px;
        flex-direction:column;
        border-radius:15px;

       
    }
    
    
    label{
        display:Flex;
        align-items:center;
        justify-content:center;
        background-color:rgba(var(--d69,0,149,246),1);;
        border-radius:4px;
        padding:3px 10px;
        font-size:16px;
        color:white;
        margin-top:20px;
        cursor:pointer;
        border:none;
    }

    label:hover{
        opacity:.9;
    }
    input:hover{
        background-color:gray;
    }


    h1{
        padding:0px;
        margin:0px;
    }

    
`;