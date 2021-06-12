import React from 'react'
import { PageTwoMain, PageTwoContainer } from './PageTwoStyles'
import people from '../../Data/people.json'
import ListsTwo from '../ListsTwo/Lists'

function PageTwo() {


    return (
        <PageTwoMain>
            <PageTwoContainer>
                {
                    people
                        .filter(data =>
                            (parseFloat(data.balance.replace(/\$|,/g, '')) <= 2000)
                            &&
                            (data.isActive = "false")
                        )
                        .map(data => (
                            <ListsTwo props={data} />
                        ))

                }

            </PageTwoContainer>
        </PageTwoMain>
    )
}

export default PageTwo
