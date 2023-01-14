import { Link } from "react-router-dom";

export default function Basket() {
  return (
    <div>
      <Link className="btn_basket" to='/detail'>Emprunter</Link>          {/* link puis to et le chemin, et non pas a href   cf discord 11/01 9h02 */}      
      
    </div>
  )
}
