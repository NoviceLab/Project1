import Footer from "../components/Footer/footer";
import Navbar from "../components/Navbar/navbar";
import PartnerWithUs from "../components/Partner/PartnerWithUs";

const Partner = () => {
  return (
    <>
      <div className="h-screen w-screen">
        <div>
          <Navbar />
        </div>
        <PartnerWithUs />
      <div>
        <Footer />
      </div>
      </div>
    </>
  );
};

export default Partner;
