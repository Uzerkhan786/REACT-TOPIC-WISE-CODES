import UseState from "./components/UseState"
import React from 'react';
import ReactDOM from "react-dom/client";
import UseEffect from "./components/useEffect";
import UseParams from "./components/UseParams";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'))
function rootFun() {
    return (<>
        <BrowserRouter>

            {/* <UseState/> */}
            {/* <UseEffect /> */}
            <Routes>
                <Route path="/:id" element={<UseParams />} />
            </Routes>
        </BrowserRouter>
    </>)
}
root.render(rootFun());