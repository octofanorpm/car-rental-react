import Navbar from "../../../Components/Navbar"
import Header from "../../../Components/Header"
import Main from "../../../Components/Main"
import Whyus from "../../../Components/Whyus"
import ContainerCard from "../../../Components/ContainerCard"
import Testimonials from "../../Testimonials"
import AdvancedCarousel from "../../Carousel"
import Rentloc from "../../Rentloc"
import Faq from "../../Faq"
import Footer from "../../Footer"


const Home = () => {
  
  return <div>
    <Navbar/>
    <Header/>
    <Main/>
    <Whyus/>
    <ContainerCard/>
    <Testimonials/>
    <AdvancedCarousel/>
    <Rentloc/>
    <Faq/>
    <Footer/>
    


    {/* <Card description="Binar Bagus Banget" reviewer="rijarmdh" />
    <Card description="Binar Bagus Banget" reviewer="rijarmdh" />
    <Card description="Binar Bagus Banget" reviewer="rijarmdh" />
    <Card description="Binar Bagus Banget" reviewer="rijarmdh" /> */}
    </div>
    
}

export default Home;