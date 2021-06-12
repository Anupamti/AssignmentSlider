import React from 'react'
import FriendsComp from '../Friends/FriendsComp'
import { ListContainer, ListActive, ListPhone, ListEmail, ViewComponentTwo, ListMain, ListName, ListView, ViewComponentOne, ViewComponentThree } from './ListStyles'

function Lists({ props }) {

    return (
        <ListMain >
            <ListContainer>
                <ListView Active={!props.isActive}>
                    <ViewComponentOne>
                        <ListName>
                            {props.name}
                        </ListName>
                        <ListEmail>
                            {props.email}
                        </ListEmail>
                        <ListPhone>
                            {props.phone}
                        </ListPhone>
                        <ListActive>
                            {
                                (!props.isActive) ? <p> Active </p> : <p> NotActive </p>
                            }
                        </ListActive>
                    </ViewComponentOne>

                    <ViewComponentThree>
                        {
                            props.friends.map((p) => (
                                <FriendsComp data={p} />
                            ))
                        }
                    </ViewComponentThree>


                    <ViewComponentTwo>

                        <ListPhone>
                            {props.balance}
                        </ListPhone>

                    </ViewComponentTwo>



                </ListView>
            </ListContainer>
        </ListMain >
    )
}

export default Lists
