import "./NavLogo.css";


function NavLogo(props) {
    return (
        <div className="logo">{props.children}</div>
    )
} 

export default NavLogo;