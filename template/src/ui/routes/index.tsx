import { Routes, Route} from "react-router-dom";
import React, {FC} from "react";
import {Home} from "../pages";



export const AppRoutes: FC = () => {
    return (
        <Routes>
            {/* Public */}
            <Route path="/" element={<Home />} />
        </Routes>
    )
}
