import React from "react";
import { NavLink } from "react-router-dom";

function Category() {
    return (
        <nav className="nav">
            <NavLink className="btn" activeClassName="active" to="/Bitcoin">
                Bitcoin
            </NavLink>
            <NavLink className="btn" activeClassName="active" to="/Tesla">
                Tesla
            </NavLink>

            <NavLink className="btn" activeClassName="active" to="/usa">
                U.S.A
            </NavLink>

            <NavLink className="btn" activeClassName="active" to="/Apple">
                Apple
            </NavLink>

            <NavLink className="btn" activeClassName="active" to="/Techcrunch">
                Techcrunch
            </NavLink>
        </nav>
    );
}

export default Category;
