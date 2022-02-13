import * as C from './styles'
import {
    BookmarkIcon,
    ChatIcon,
    DotsHorizontalIcon,
    EmojiHappyIcon,
    HeartIcon,
    PaperAirplaneIcon,
} from "@heroicons/react/outline";

export const Post = ( { id,username,userImg,img,caption }) => {
    return(
        <C.Container>
            <C.Header>
                <div className='Head'>
                    <img src={userImg} alt=""></img>
                    <p>{username}</p>
                    <DotsHorizontalIcon className="Icon"/>
                </div>
            </C.Header>
            <img src={img} alt="" />
            <div className='border'>
                <C.Buttons>
                    <div>
                        <HeartIcon className='Icon'/>
                        <ChatIcon className='Icon'/>
                        <PaperAirplaneIcon className='Icon'/>
                    </div>
                    <div>
                        <BookmarkIcon className='Icon'/>
                    </div>
                </C.Buttons>
                <C.Caption>
                    <p>
                        <span>{username}</span>
                        {caption}
                    </p>
                </C.Caption>
            </div>
            <C.Input>
                <form>
                    <EmojiHappyIcon className="Icon"/>
                    <input type="text"
                        placeholder='Adicionar Comentario'
                    />
                    <button>Publicar</button>
                </form>
            </C.Input>
        </C.Container>
    );
}