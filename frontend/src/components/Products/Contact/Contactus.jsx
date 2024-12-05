import React from 'react'
import Navbar from '../../Navbar'
import Footer from '../../Footer'
import Contact_us from '../../Contact_us'
function Contactus() {
  return (
<>
<div>
<Navbar/>
    <div className ="min-h-screen"><Contact_us/>
      </div>
    <Footer/>
</div>
</>
  )
}

export default Contactus