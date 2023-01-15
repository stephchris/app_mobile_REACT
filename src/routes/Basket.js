import { Link } from "react-router-dom";

export default function Basket() {


return (
    <>
    <h1>Panier</h1>

    <div>
      <Link className="btn_pay" to='/basket'>Monnaie d'échange</Link>                
      
    </div>
    </>
)
}
