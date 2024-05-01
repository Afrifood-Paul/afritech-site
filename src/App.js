import { About } from "./components/About/About";
import { Client } from "./components/Clients/Client";
import Footer from "./components/Footer/Footer";
import { Navbar } from "./components/Navbar/Navbar";
import { Portfolio } from "./components/Portfolio/Portfolio";
import { BodyOne } from "./components/SecOne/BodyOne";

export default function App() {
  return (
   <div>
    <Navbar />
    <BodyOne />
    <About />
    <Portfolio />
    <Client />
    <Footer />
   </div>
  )
}