import {Routes, Route} from "react-router-dom";

import Default from "../layouts/Default";

import HomePage from "../pages/HomePage";

const Router = () => {


    return(
        <>
            <Routes>
                <Route path="/" element={<Default/>}>
                    <Route index element={<HomePage/>}/>

                </Route>
            </Routes>
        </>
    )
}

export default Router