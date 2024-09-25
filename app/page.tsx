import Image from "next/image";
import HeaderPage from "./components/Header";
import MiddleComp from "./components/MiddleComp";
import ItemsComp from "./components/ItemsComp";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import { getProducts } from "@/actions/actions";

const Home = () => { 
  return (
    <div>
      <HeaderPage />
      <MiddleComp />
      <ItemsComp />
      <ContactUs />
      <Footer />
    </div>
  );
}



export default Home;