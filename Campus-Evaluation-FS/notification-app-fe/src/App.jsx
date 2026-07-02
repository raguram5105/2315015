import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Priority from "./pages/Priority";
import "./App.css";

function App() {

    return (
        <>
            <Navbar />

            <Routes>

                <Route
                    path="/"
                    element={<Home />}
                />

                <Route
                    path="/priority"
                    element={<Priority />}
                />

            </Routes>
        </>
    );

}

export default App;