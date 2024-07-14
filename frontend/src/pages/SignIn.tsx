import Footer from "../components/Footer/footer"
import Navbar from "../components/Navbar/navbar"
import LogIn from "../components/SignIn/SignIn"

function SignIn(){
  return (
    <>
    <div className="h-screen w-screen">
      <div><Navbar /></div>
      <div><LogIn /></div>
     
     
      <Footer />
    </div>
    </>
  )
}

export default SignIn