import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios  from "axios";
import toast from "react-hot-toast";
const Login = () => {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const onSubmit = async (data) =>{
    const userInfo = {
      
      email: data.email,
      password: data.password,
    };
  
    try {
      const res = await axios.post("http://localhost:3000/user/login", userInfo);
  
      console.log(res);
  
      if (res.data) {
        // alert("Successful signin");
        toast.success('Successful signin!');
        document.getElementById("my_modal_3").close()
        window.location.reload();
      }
      localStorage.setItem("Users",  JSON.stringify(res.data.user))
    } catch (err) {
      if(err.response){
        console.log(err)
        // alert("error:"+err.response.data.message)
        toast.error("invalid username or password");
      }
    }
  }

  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
            <h3 className="font-bold text-lg">Login</h3>
          <div className="mt-4 space-y-2">
            <div>
              <span>Email:</span>
              <br />
              <input
                type="email"
                placeholder="Enter your Email"
                className="w-80 border outline-none px-3 py-1 required"
                {...register("email", { required: true })}
              /> <br />
               {errors.email && <span className="text-sm text-red-500">This field is required</span>}
            </div>
            <br />
           
            <div>
              <span>Password:</span>
              <br />
              <input
                type="password"
                placeholder="Enter your Password"
                className="w-80 border outline-none px-3 py-1"
                {...register("password", { required: true })}
              /> <br />
              {errors.password && <span className="text-sm text-red-500">This field is required</span>}
            </div>
          </div>

          <div className="flex justify-around mt-6">
            <button
                 className="bg-pink-500 text-white px-3 py-1 rounded-md
               hover:bg-pink-700 duration-300"
               >
              Login
            </button>
            <p>
              Not registered{" "}
              <Link
                to="/signup"
                className="underline text-blue-500 cursor-pointer"
              >
                Signup
              </Link>
            </p>
          </div>
          </form>
       
        </div>
      </dialog>
    </div>
  );
};

export default Login;
