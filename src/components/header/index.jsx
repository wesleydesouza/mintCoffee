import { Link } from "react-router-dom";
import { HeaderContainer } from "./HeaderStyle"
const Header = () => {
    return(
        <HeaderContainer>
            <ul>
                <li>
                    <figure>
                        <Link to="/"><img alt="Logo Coffee"/></Link>
                    </figure>
                </li>
                <li>
                    <Link to="/"><p>Home</p></Link>
                    <Link to="/coffies"><p>Coffies</p></Link>
                    <Link to="/about"><p>About</p></Link>
                </li>
            </ul>
        </HeaderContainer>
    )
}

export default Header;