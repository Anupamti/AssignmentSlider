import React from 'react'
import { FriendsMain } from './FriendsStyles'

function FriendsComp({ data }) {

    return (
        <FriendsMain>
            {data.name}
        </FriendsMain>


    )
}

export default FriendsComp
