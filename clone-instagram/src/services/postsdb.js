import { ref, serverTimestamp, set } from "firebase/database";
import { db } from '../libs/firebase.js';



export const insert = async(userId, name, caption, imageUrl, postUrl) =>{
  set(ref(db, 'posts/' + userId), {
    username: name,
    caption: caption,
    profile_picture : imageUrl,
    post_picture: postUrl,
    timestamp: serverTimestamp()
  });
}


