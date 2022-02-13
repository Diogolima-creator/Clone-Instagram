import * as C from './styles'

export const Story = ( { img,username} ) => {
    return(
        <C.Container>
            <img src={img} alt=""></img>
            <p>{username}</p>
        </C.Container>
    )
}