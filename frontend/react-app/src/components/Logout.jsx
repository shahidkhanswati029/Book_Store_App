import toast from "react-hot-toast";
import { useAuth } from "../../context/AuthContext";


const Logout = () => {
    const { authUser, setAuthUser } = useAuth();
    const handleLogout =()=>{
        try {
            setAuthUser({
                ...authUser,
                user:null
            })
            localStorage.removeItem("Users")
            toast.success("logout successfully")
            window.location.reload();
            
        } catch (error) {
            toast.error("Error",error.message)
        }

    }
  return (
    <div>
      <button className="px-3 py-2 bg-red-500 text-white rounded-md"
      onClick={handleLogout}>Logout
      </button>
    </div>
  )
}

export default Logout
