import * as C from './styles'
import {
    SearchIcon,
    PlusCircleIcon,
    UserGroupIcon,
    HeartIcon,
    PaperAirplaneIcon,
    MenuIcon,
    HomeIcon,
    XIcon,
    CameraIcon,
} from "@heroicons/react/outline";
import * as Posts from '../../services/posts'
import * as Postsdb from '../../services/postsdb'
import { useState, useEffect } from 'react';
import { ref,onValue } from "firebase/database";
import { db } from '../../libs/firebase';

const handleUploadPage = () => {
    if( document.getElementById('UploadPage').style.display === 'none'){
        document.getElementById('UploadPage').style.display = 'block'
    }else{
        document.getElementById('UploadPage').style.display = 'none'
    }
}



function ImgUploaded() {
    

    var img = document.querySelector('input[name=image]').files[0]
    var preview = document.getElementById('img')

    var reader = new FileReader();
    
    reader.onloadend = function(){
        preview.src = reader.result
    }
    reader.readAsDataURL(img)
    
    document.getElementById('Center').style.display = 'none';
    document.getElementById('CenterText').style.display = 'none';
    document.getElementById('submit').style.display = 'flex';
    document.getElementById('caption').style.display = 'flex'
    document.getElementById('UploadPageID').style.width = '1150px';
    document.getElementById('UploadPageID').style.marginLeft = '350px';
}

export const Header = () => {

    const[caption,setCaption] = useState();
    const[uploading,setUploading] = useState(false);
    const[postsdb,setPosts] = useState([])

    const urlPIC = "https://pbs.twimg.com/profile_images/1484641505390338050/98RYi3xU_400x400.jpg"
    const CaptionUpdate = (e) => {
        e.preventDefault();
        setCaption(e.currentTarget.value)
    }

    
    const allPosts = () => {
        const posts = ref(db, 'posts/')
        onValue(posts, (snapshot) => {
        const data = snapshot.val();
        setPosts(data)
        });
    }
   
    useEffect(()=>{
        allPosts()
        
    },[])

    const handleFormSubmit = async() => {
              
        const file = document.querySelector('input[name=image]').files[0]
            
         if(file && file.size >0){
                document.getElementById('UploadPageID').style.width = '850px';
                document.getElementById('caption').style.display = 'none'
                document.getElementById('UploadPageID').style.marginLeft = '550px';

                setUploading(true);
                let result = await Posts.insert(file,'diogo_lima1408');
                let res = await Postsdb.insert(postsdb.length,'diogo_lima1409',caption,urlPIC,result.url)
                setUploading(false);
                
         if(result instanceof Error){
                alert(`${result.name}-${result.message}`)
                alert(`${res.name}-${res.message}`)
         }
    }   
     
    }


    return(
        <C.Container>
            <div className='left'>
                <img className='logo' alt="logo" src="https://logosmarcas.net/wp-content/uploads/2020/04/Instagram-Logo.png"></img>
                <img className='logo1' alt="logo1" src="https://cdn-icons-png.flaticon.com/512/87/87390.png"></img>
            </div>
            <div className='Search-div'>
                <div className="Search">
                    <SearchIcon className='SearchIcon'></SearchIcon>
                </div>
                <input type="text" placeholder="Pesquisar"/>
            </div>
            
            <div className='right'>
                <MenuIcon className='MenuIcon'/>
                <HomeIcon className='Icon'/>
                <PaperAirplaneIcon className='Icon'/>
                <PlusCircleIcon onClick={handleUploadPage} className='Icon'/>
                <UserGroupIcon className='Icon'/>
                <HeartIcon className='Icon'/>
                <img
               alt="pic"
               src="https://pbs.twimg.com/profile_images/1484641505390338050/98RYi3xU_400x400.jpg">
               </img>
            </div>
            
            <C.UploadPage id="UploadPage">              
                <XIcon className='XIcon' onClick={handleUploadPage}/>
                
                <div className='UploadPage' id='UploadPageID'>
                        <div className='Header'>
                                <h1>Criar nova publicação</h1>
                        </div>
                    {!uploading &&
                        <div className='sep'>
                            <div className='Upload'>
                                <img className="imgUp" id="img" alt=""/>
                                <CameraIcon id="Center" className="Icon"/>
                                <p id="CenterText">Arraste as fotos e os vídeos aqui</p>
                                <div className='labels'>
                                    <label for='upload'> Selecionar do Computador </label>
                                    <input id="upload" type="file" name="image" onChange={ImgUploaded}></input>
                                    <label id="submit" onClick={handleFormSubmit}> Postar Foto</label>
                                </div>
                            </div>
                            <div className='Caption' id='caption'>
                                <div className='header-Caption'>
                                    <img src='https://pbs.twimg.com/profile_images/1484641505390338050/98RYi3xU_400x400.jpg' alt=''></img>
                                    <p>diogo_lima1408</p>
                                </div>
                                <div>
                                    <textarea onChange={CaptionUpdate} placeholder='Escreva uma legenda...'/>
                                </div>
                            </div>

                        </div>}
                    {uploading && 
                        <div>
                            <img className="imgUploading" src="https://c.tenor.com/wXTO9bFFJXMAAAAC/loading-slow-internet.gif" alt="" />
                            <p className="pUploading">Enviando...</p>

                        </div>
                    }
                </div>
                
            </C.UploadPage>
        </C.Container>
    )
}