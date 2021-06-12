import React, { useEffect, useState } from 'react'
import { ComponentPageOne, ComponentPageTwo, Components, NavbarContainer, NavBarMain, PageOneButton, PageTwoButton } from './NavBarStyles'


function NavBar() {

    const [click, setClick] = useState();
    const [pageone, setPageOne] = useState(false);
    const [pageTwo, setpageTwo] = useState(true);

    const handelClick = () => {
        setClick(!click)
    }
    useEffect(() => {
        setPageOne(!pageone)
        setpageTwo(!pageTwo)

    }, [click])
    return (
        <NavBarMain>
            <NavbarContainer>
                <Components>
                    <ComponentPageOne>
                        <PageOneButton active={pageone} to="/" onClick={handelClick}>
                            Page One
                        </PageOneButton>
                    </ComponentPageOne>

                    <ComponentPageTwo >
                        <PageTwoButton active={pageTwo} to="/PageTwo" onClick={handelClick}>
                            Page Two
                        </PageTwoButton>
                    </ComponentPageTwo>
                </Components>
            </NavbarContainer>
        </NavBarMain>
    )
}

export default NavBar
