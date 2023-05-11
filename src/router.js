import React from "react";

import { Routes, Route,} from "react-router-dom";
import { Home } from "./pages/Home";




export default function Router() {
  return (

    // <Routers>
    //   <Route path="/" exact element={Home} />
    // </Routers>

    <Routes>
      <Route path="/" element={<Home/>} />

    </Routes>

  );
}
