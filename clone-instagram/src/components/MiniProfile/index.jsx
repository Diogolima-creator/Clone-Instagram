import * as C from './styles'

export const MiniProfile = () => {
    return(
        <C.Container>
            <img src="https://pbs.twimg.com/profile_images/1484641505390338050/98RYi3xU_400x400.jpg" alt="">
            </img>

            <div className='texts'>
                <p>diogo_lima1408</p>
                <p className='name'>Diogo Lima</p>
            </div>

            <button>Mudar</button>
        </C.Container>
    )
}