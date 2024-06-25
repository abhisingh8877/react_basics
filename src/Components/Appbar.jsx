import { useNavigate } from "react-router-dom";
function Appbar()
{const navigate=useNavigate();
    return(
        <div>
    <button onClick={()=>{
      navigate('/')
    }}>Landing Page</button>
    <button onClick={()=>{
      navigate('/dashboard')
    }}>Dahsboard page</button>
  </div>
    )
}
export default Appbar