import { VscChip } from "react-icons/vsc";
import { FaSearchPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
// import { useParams } from "react-router-dom";
import {useSelector} from "react-redux";

const Header=()=>{
    const product=useSelector((state)=>state.myproduct.cart);
    const proLength=product.length;
    const navigate=useNavigate();
    console.log(product);
    const gotoCartPage=()=>{
        navigate("mycart");
    }
    return(
        <>
        <div id="header">
            <span id="procounter">{proLength}</span>
            <a href="#" onClick={gotoCartPage}>
        <VscChip style={{marginRight:"20px"}} />
    </a>
        <FaSearchPlus />
        </div>
        </>
    )
}
 export default Header;