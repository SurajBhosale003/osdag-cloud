import '../app.css'
import Osdag_logo from "../assets/logo-osdag.png"
import { useNavigate } from 'react-router-dom';
function Sidebar() {

    
    const navigate = useNavigate();
  return (
    <> 
    
    <div className="sidebar-container">   
        <div className="sidebar-item-logo">
            <img src={Osdag_logo} alt="Logo" height="50px" onClick={()=>navigate("/")}/>          
        </div>
        <div className="sidebar-item">
          <button onClick={()=>navigate("/connection")}>Connection</button>
        </div>
        <div className="sidebar-item">
          <button onClick={()=>navigate("/tenstionMember")}>Tenstion Member</button>
        </div>
        <div className="sidebar-item">
          <button onClick={()=>navigate("/notAvailable")}>Compression Member</button>
        </div>
        <div className="sidebar-item">
          <button onClick={()=>navigate("/notAvailable")}>Flexural Member</button>
        </div>
        <div className="sidebar-item">
          <button onClick={()=>navigate("/notAvailable")}>Beam-Column</button>
        </div>
        <div className="sidebar-item">
          <button onClick={()=>navigate("/notAvailable")}>Plate Girder</button>
        </div>
        <div className="sidebar-item">
          <button onClick={()=>navigate("/notAvailable")}>Truss</button>
        </div>
        <div className="sidebar-item">
          <button onClick={()=>navigate("/notAvailable")}>2D Frame</button>
        </div>
        <div className="sidebar-item">
          <button onClick={()=>navigate("/notAvailable")}>3D Frame</button>
        </div>
        <div className="sidebar-item">
          <button onClick={()=>navigate("/notAvailable")}>Group Design</button>
        </div>
      </div>

            <div className="sidebar-setting">
              <select>
                <option value={"1"}>Help</option>
                <option value={"2"}>Video Tutorials</option>
                <option value={"3"}>Design Examples</option>
                <option value={"4"}>Ask Us a Question</option>
                <option value={"5"}>Check for Update</option>          
              </select>
              {/* <h5>Help</h5> */}
            
            </div>

    </>
  )
}

export default Sidebar