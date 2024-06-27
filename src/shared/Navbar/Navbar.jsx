
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const position = (
       <ul className="flex">
       <li><NavLink to="/" activeClassName="active">HOME</NavLink></li>
       <li><NavLink to="/contact" activeClassName="active">Contact Us</NavLink></li>
       <li><NavLink to="/dashboard" activeClassName="active">Dashboard</NavLink></li>
       <li><NavLink to="/menu" activeClassName="active">Our Menu</NavLink></li>
       <li><NavLink to="/shop" activeClassName="active">Our Shop</NavLink></li>
       <li><NavLink to="/signin" activeClassName="active">Sign In</NavLink></li>
       </ul>
    );

    return (
        <>
           <div className="navbar fixed z-10 bg-opacity-30 max-w-screen-xl bg-black text-white">
              <div className="navbar-start">
                <div className="dropdown">
                  <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h8m-8 6h16" />
                    </svg>
                  </div>
                  <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                    {position}
                  </ul>
                </div>
                <a className="btn btn-ghost text-xl">Bistro Boss</a>
              </div>
              <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 mx-auto">
                  {position}
                </ul>
              </div>
              
           </div> 
        </>
    );
};

export default Navbar;
