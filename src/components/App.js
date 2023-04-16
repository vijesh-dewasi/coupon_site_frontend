import './App.css';
import Navigationbar from './navigationbar.jsx'
import Footer from './footer.jsx'
import Coupons from './coupons.jsx'

// function Place_holder(){    
//   return (
//     <div style={{
//       width: 100+'vw',
//       height:100+'vh'
//     }
//   }>
//   </div>   
//     )
// }
const coupons_list=[{
  coupon_id:1,
  brand:"flipkart",
  isverified:1,
  islimited:1,
  coupon_title:"20% off on purchasing at the max mrp",
  coupon_desc:"we make u fool",
  logo_url:"./images/demo.jpeg",
  coupon_code:"1425654",
  availability:"24 days",//this thing must be found using expiry_date or (issue date & remaining days)
  redirection_link:"www.amazon.com"
},
{
  coupon_id:2,
  brand:"",
  isverified:0,
  islimited:1,
  coupon_title:"20% off on purchasing at the max mrp",
  coupon_desc:"we make u fool",
  logo_url:"./images/avatar.png",
  coupon_code:"142563",
  availability:"24 days",//this thing must be found using expiry_date or (issue date & remaining days)
  redirection_link:"www.amazon.com"
},
{
  coupon_id:3,
  brand:"slipkart",
  isverified:0,
  islimited:1,
  coupon_title:"20% off on purchasing at the max mrp",
  coupon_desc:"we make u fool",
  logo_url:"./images/logo.png",
  coupon_code:"142563",
  availability:"24 days",//this thing must be found using expiry_date or (issue date & remaining days)
  redirection_link:"www.amazon.com"
},{
  coupon_id:4,
  brand:"clipkart",
  isverified:0,
  islimited:1,
  coupon_title:"20% off on purchasing at the max mrp",
  coupon_desc:"we make u fool",
  logo_url:"./images/demo.jpeg",
  coupon_code:"142563",
  availability:"24 days",//this thing must be found using expiry_date or (issue date & remaining days)
  redirection_link:"www.amazon.com"
}

];



function App() {
  return (
    <div className="app">
      <Navigationbar/>
      <Coupons coupons={coupons_list}/>
      <Footer/>
    </div>
  )
}

export default App;