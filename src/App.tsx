import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./features/home/Home";
import NotFound from "./features/home/NotFound";
import Login from "./features/user/Login";
import MeterReadings from "./features/meterReadings/MeterReadings";
import NewMeterReading from "./features/meterReadings/NewMeterReading";
import Navbar from "./components/NavBar";
import { AuthProvider } from "./components/AuthContext"; 
import PrivateRoute from "./components/PrivateRoute"; 

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route path="login" element={<Login />} />
          <Route element={<PrivateRoute />}>
            <Route index element={<Home />} />
            <Route path="meter-readings" element={<MeterReadings />} />
            <Route path="new-meter-reading" element={<NewMeterReading />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;