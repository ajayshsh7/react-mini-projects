import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Counter from "../components/simple-counter/Counter";


export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/counter" element={<Counter />} />
    </Routes>
  );
}