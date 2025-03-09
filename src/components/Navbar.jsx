export default function Navbar() {
  return (
    <div className="flex justify-around items-center max-[80rem]:gap-10 gap-12 ">
      <div  className="navbar__dynamic_items navbar__items__icon">Why Framer </div>
      <a href="" className="navbar__items ">Templates</a>
      <a href="" className="navbar__items ">Community</a>
      <div  className="navbar__dynamic_items navbar__items__icon">Resources</div>
      <a href="" className="navbar__items ">Awards</a>
      <a href="" className="navbar__items ">Feed</a>
      <a href="" className="navbar__items ">Business</a>
      <a href="" className="navbar__items ">Pricing</a>
    </div>
  );
}
