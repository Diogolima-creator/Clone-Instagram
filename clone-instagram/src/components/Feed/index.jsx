import * as C from './styles'
import { Stories } from '../Stories'
import { Posts } from '../Posts'
import { MiniProfile } from '../MiniProfile'
import { Suggestions } from '../Suggestions'

export const Feed = () => {
    return(
        <C.Container>
            <section className= "story">
                <Stories />
                <Posts />
            </section>

            <section className="miniProfile">
                <MiniProfile/>
                <Suggestions/>
            </section>
        </C.Container>
    )
}