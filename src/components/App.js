import './App.css';
import Coupon from './coupon.jsx'
import Navigationbar from './navigationbar.jsx'
import Footer from './footer.jsx'

function Place_holder(){    
  return (
    <div style={{
      width: 100+'vw',
      height:100+'vh'
    }
  }>
  </div>
      
    )
}

function App() {
  return (
    <div className="app">
      <Navigationbar/>
      <div className="coupons flex_row">
      <Coupon/>
      <Coupon/>
      <Coupon/>
      </div>
      <Footer/>
    </div>
  )
}

export default App;