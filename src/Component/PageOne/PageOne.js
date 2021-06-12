import React, { useState } from 'react'
import InputRange from 'react-input-range'
import "react-input-range/lib/css/index.css"
import Lists from '../Lists/Lists'
import { PageOneContainer, PageTopSecitonLeft, PageOneMain, Filter, PageTopSection, PageTopSectionRight } from './PageOneStyles'
import { FiFilter } from "react-icons/fi";
import people from '../../Data/people.json'

function PageOne() {
    const [valueOne, setValue] = useState({ min: 1000, max: 4000 })

    const [ValueSearch, setValueSearch] = useState()
    const [mainvalue, setMainValue] = useState();
    // const [balance, setbalance] = useState()
    // const [newbalance, setnewbalance] = useState();

    const handelClick = () => {
        setMainValue(ValueSearch)

    }

    // useEffect(() => {
    //     mainvalue ?
    //         (
    //             people
    //                 .filter(data =>
    //                     (parseFloat(data.balance.replace(/\$|,/g, '')) >= mainvalue.min) && (parseFloat(data.balance.replace(/\$|,/g, '')) <= mainvalue.max)

    //                 )
    //                 .map(data => (
    //                     console.log(data)
    //                 ))

    //         )
    //         :
    //         (console.log("flase"))

    // }, [mainvalue])

    // useEffect(() => {

    //     console.log(balance)
    // }, [balance])

    return (
        <PageOneMain>
            <PageOneContainer>
                <PageTopSection>
                    <PageTopSectionRight>
                        <InputRange
                            draggableTrack
                            maxValue={4000}
                            minValue={1000}
                            onChange={value => (setValue(value))}
                            onChangeComplete={value => { setValueSearch(value) }}
                            value={valueOne}
                        />
                    </PageTopSectionRight>
                    <PageTopSecitonLeft>
                        <Filter onClick={handelClick}>
                            Filter
                            <FiFilter />
                        </Filter>
                    </PageTopSecitonLeft>
                </PageTopSection>
                {
                    mainvalue ?
                        people
                            .filter(data =>
                                (parseFloat(data.balance.replace(/\$|,/g, '')) >= mainvalue.min) && (parseFloat(data.balance.replace(/\$|,/g, '')) <= mainvalue.max)

                            )
                            .map(data => (
                                <Lists props={data} />
                            ))

                        :

                        people.map(data => (
                            <Lists props={data} />
                        ))

                }


            </PageOneContainer>


        </PageOneMain>
    )
}

export default PageOne
