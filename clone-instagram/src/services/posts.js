import { storage } from '../libs/firebase.js';
import { ref, getDownloadURL, uploadBytes} from 'firebase/storage';
import { v4 as createID } from 'uuid';


export const insert = async (file,username) => {
    if(['image/jpeg','image/jpg','image/png'].includes(file.type)){

        let randomName = createID();
        let newFile = ref(storage, `imgPosts/${username+randomName}`);
        let upload = await uploadBytes(newFile, file);
        let photourl = await getDownloadURL(upload.ref);

        return{name: upload.ref.name,url: photourl};
    }else{
        return new Error('Tipo de arquivo nao permitido');
    }
}
