import { useDispatch } from "react-redux";
import { logout } from "../store/slices/authSlice";
import { removeToken } from "../utils/auth"
import { useRouter } from "next/navigation";
import setNotification from "../utils/nitification";
export  function LogOut() {

  const dispatch = useDispatch();
    function handleLogout() {
       removeToken();
       dispatch(logout());
       removeToken();
       setNotification('info','Logged out successfully') 
    }
    return  <button
    onClick={handleLogout}
    className="px-4 py-2  text-[#ffc125] font-semibold rounded-lg border border-[#f99e07]  focus:ring-2 focus:ring-[#f99e07] transition-all"
  >
    Logout
  </button>
}
export  function Login() {

 const router = useRouter();
  function handleLogIn() {
  router.push('/pages/auth/login');  
  }
  return  <button
  onClick={handleLogIn}
  className="px-4 py-2  text-[#ffc125] font-semibold rounded-lg border border-[#f99e07]  focus:ring-2 focus:ring-[#f99e07] transition-all"
>
  Login
</button>
}