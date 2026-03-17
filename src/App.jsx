import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Search from "./pages/Search";
import HowItWorks from "./pages/HowItWorks";
import AboutPawzely from "./pages/AboutPawzely";
import FAQ from "./pages/FAQ";
import ScrollToTop from "./components/ScrollToTop";
import Partnerships from "./pages/Partnerships";
import Terms from "./pages/Terms";
import Apps from "./pages/Apps";
import Contact from "./pages/Contact";
import DogAdoption from "./pages/DogAdoption";
import CatAdoption from "./pages/CatAdoption";
import OtherAdoption from "./pages/OtherAdoption";
import Organizations from "./pages/Organizations";
import Stories from "./pages/Stories";
import Events from "./pages/Events";
import Rescues from "./pages/Rescues";
import DogCare from "./pages/DogCare";
import DogBreeds from "./pages/DogBreeds";
import CatCare from "./pages/CatCare";
import CatBreeds from "./pages/CatBreeds";
import AllPetCare from "./pages/AllPetCare";
import PetCareVideos from "./pages/PetCareVideos";
import HelpingPets from "./pages/HelpingPets";
import AllPets from "./pages/AllPets";
import PetShop from "./pages/PetShop";
import Cart from "./pages/Cart";

export default function App() {
  return (
    <>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/search" element={<Search />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/about" element={<AboutPawzely />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/partnerships" element={<Partnerships />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/apps" element={<Apps />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/dog-adoption" element={<DogAdoption />} />
        <Route path="/cat-adoption" element={<CatAdoption />} />
        <Route path="/other-adoption" element={<OtherAdoption />} />
        <Route path="/organizations" element={<Organizations />} />
        <Route path="/stories" element={<Stories />} />
        <Route path="/events" element={<Events />} />
        <Route path="/rescues" element={<Rescues />} />
        <Route path="/dog-care" element={<DogCare />} />
        <Route path="/dog-breeds" element={<DogBreeds />} />
        <Route path="/cat-care" element={<CatCare />} />
        <Route path="/cat-breeds" element={<CatBreeds />} />
        <Route path="/all-pet-care" element={<AllPetCare />} />
        <Route path="/pet-care-videos" element={<PetCareVideos />} />
        <Route path="/helping-pets" element={<HelpingPets />} />
        <Route path="/pets" element={<AllPets />} />
        <Route path="/shop-products" element={<PetShop />} />
        <Route path="/cart" element={<Cart />} />
        
        
        
        
        
        
      </Routes>
    </>
  );
}