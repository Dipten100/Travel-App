import React, { useContext} from "react";
import Logo from "../assets/Logo/Logo-bg-remover.png";
import { AllContext } from "../Context/ContextProvider";
import { useNavigate } from "react-router-dom";
import Registration from "./Registration";

const Navbar = () => {

  const { User } = useContext(AllContext);

  const navigate=useNavigate()

  return (
    <div className="nav-settings">
      <div className="container">
        <div className="row justify-content-center">
          <div className="d-flex">
            <div className="nav-left">
              <div className="brand-logo">
                <div className="logo">
                  <img
                    src={Logo}
                    alt="Brand Logo"
                    className="img-fluid"
                  />
                </div>
              </div>
              <div className="brand-name">
                <p>
                  Travel <span>Advisor</span>
                </p>
              </div>
            </div>
            <div className="nav-middle">
              <div className="menu-list">
                <div className="menu" onClick={()=>navigate("/create")}>Create</div>
                <div className="menu" onClick={()=>navigate("/")}>Travel</div>
              </div>
            </div>
            <div className="nav-right">
              {User === null ? (
                <div className="button-section">
                  <Registration/>
                </div>
              ) : (
                <div>{User.email}</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
