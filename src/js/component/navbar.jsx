import React from "react";

export const Navbar = (props) => {
     return (
<div>
<nav className="navbar navbar-expand-lg bg-secondary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Lookie</a>
     {/* line undernearth is used to make the square with three lines that r=drop down into a menu*/}
    
    {/*ends here*/}
    <div className="collapse navbar-collapse" id="navbarNav">
        {/*line under here */}
      
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Service</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled">Contact</a>
        </li>
     </ul>
     
    </div>
  </div>
</nav>
</div>
     );






}


