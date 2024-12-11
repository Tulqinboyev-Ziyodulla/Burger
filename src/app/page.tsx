import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProductCard from "./components/ProductCard";
import Food from "./components/Food";

export default function Home() {
  return (
    <div className="container">
      <Navbar />
      <Food/>
      <ProductCard/>
      <Footer/>
    </div>
  );
}
