import * as C from './styles'
import { useEffect, useState } from 'react'
import faker from '@faker-js/faker'

export const Suggestions = () => {

    const [suggestions, setSuggestions] = useState([])

    useEffect(()=>{
        const suggestions = [...Array(5)].map((_,i)=>({
            ...faker.helpers.contextualCard(),
            id: i
        }))

        setSuggestions(suggestions)
    },[]);

    return(
        <C.Container>
            <div className='See'>
                <p>Sugestões para você</p>
                <button>Ver Tudo</button>
            </div>

            {
                suggestions.map(profile => (
                    <div className="profiles" key={profile.id}>            
                            <img alt="" src={profile.avatar}></img>
                        <div className='profiles-name'>    
                                <h1>{profile.username}</h1>
                                <p>Sugestões para você</p>
                            
                        </div>
                        <div className='btn-follow'>
                            <button>Seguir</button>
                        </div>
                    </div> 
                ))
            }
        </C.Container>
    )
}