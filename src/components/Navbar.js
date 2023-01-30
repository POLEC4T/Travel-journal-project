import earthLogo from '../images/earth-logo.svg';

export default function Navbar() {
    return (
        <div className="navbar">

                <img src={earthLogo} alt="earth logo" />
                <p>my travel journal.</p>
        </div>
    );
}