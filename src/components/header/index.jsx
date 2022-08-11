import { Link } from "react-router-dom";
import { HeaderContainer } from "./HeaderStyle"
const Header = () => {
    return(
        <HeaderContainer>
            <figure>
                <Link to="/"><img alt="Logo Coffee"/></Link>
            </figure>

            <nav>                
                <ul>
                    <li>
                        <Link to="/"><p>Home</p></Link>
                    </li>
                    <li>
                        <Link to="/coffies"><p>Coffies</p></Link>
                    </li>
                    <li>
                        <Link to="/about"><p>About</p></Link>
                    </li>
                </ul>
            </nav>
        </HeaderContainer>
    )
}

export default Header;