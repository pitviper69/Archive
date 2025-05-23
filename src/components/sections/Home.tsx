import '../index.css';
import { Link } from "react-router";
import { Header } from "./Header.tsx";
import ShortLogo from "../../assets/12dot-logo-short-wfx.png";

const Home = () => {
    return (
        <>
            <Header />
            <div className="pt-40">
                <Link to="/12Dot">
                    <img className="relative block m-auto max-w-sm" src={ShortLogo} />
                </Link>
            </div>

        </>
    )
}

export default Home