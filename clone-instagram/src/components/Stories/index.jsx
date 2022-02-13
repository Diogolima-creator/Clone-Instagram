import { useEffect, useState } from 'react'
import * as C from './styles'
import { faker } from '@faker-js/faker'
import { Story } from '../Story'

export const Stories = () => {

    const[suggestions, setSuggestions] = useState([]);

    useEffect(() => {
        const suggestions = [...Array(20)].map((_, i) => ({
            ...faker.helpers.contextualCard(),
            id: i
        }));

        setSuggestions(suggestions)
    },[])
    
    return(
        <C.Container>
            {suggestions.map(profile => (
                <Story 
                key={profile.id}
                img={profile.avatar}
                username={profile.username}
                 />
            ))}
        </C.Container>
    )
}