import { Link } from "react-router-dom";
import { HeaderContainer, LogoContainer} from "./HeaderStyle";
import Logo from "../../assets/img/logo.png"
const Header = () => {
    return(
        <HeaderContainer>
            <LogoContainer>
                <Link to="/"><img src={Logo} alt="Logo Coffee"/><span>MintCoffee</span></Link>
            </LogoContainer>

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