import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home";
import LoginPage from "./pages/Login";
import SingleProductPage from './pages/SingleProductPage';

const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/products/:productId" element={<SingleProductPage/>} />
                <Route path="/login" element={<LoginPage />} />
            </Routes>
        </>
    );
};

export default App;
