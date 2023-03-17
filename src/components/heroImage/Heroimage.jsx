import './heroimage.css';

const Heroimage = () => {
  return (
   <div className="heroimage">
    <img  src="/images/heroimg.jpg" alt="" />
    <div className="right_hero_section">
        <h1>DESSERT | BAR | KITCHEN</h1>
        <p>The bar is a global food experience and our dessert<br />
        bar is legendary</p>
        <button>Contact Us</button>
    </div>
   </div>
  )
}

export default Heroimage;