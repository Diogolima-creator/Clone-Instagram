import * as C from './styles'
import { Post } from '../Post'
import { useEffect, useState } from 'react'
import { ref,onValue } from "firebase/database";
import { db } from '../../libs/firebase';


export const Posts = () => {

    const[postsdb,setPosts] = useState([])

    const allPosts = () => {
  
        const posts = ref(db, 'posts/')
        onValue(posts, (snapshot) => {
          const data = snapshot.val();
            setPosts(data.reverse())
        });
      }

    useEffect(()=>{
        allPosts()
        
    },[])

    return(
        <C.Container>

        {postsdb !== undefined && postsdb.map((post) => (
                <Post key={post.id} id={post.id}
                username={post.username}
                userImg={post.profile_picture}
                img={post.post_picture}
                caption={post.caption}>  
                </Post>
            ))}
            
        </C.Container>
    );
}

