import "./Nav.css";

const EmptNav = ({topic,back,account,cart}) => {
  return (
    <nav id="navbar">
      <div className="nav-container" >
        <a href="/">
          <img className="back-icons" src={back} alt="Back" />
        </a>
      </div>
      <div className="topic">{topic}
        

      </div>
      <div className="profile-container" style={{width:"45px"}}>
        <div></div>
        <div></div>
       
      </div>
    </nav>
  );


};

export default EmptNav;