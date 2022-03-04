import React from 'react'
import Header from './Header'
import RoutesComp from './Routes'

function HW5() {
    return (
        <div>
            {/*в gh-pages лучше работает HashRouter*/}
            {/*<HashRouter>*/}

            <Header/>

            <RoutesComp/>

            {/*</HashRouter>*/}
        </div>
    )
}

export default HW5
