import { Link } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";
import axios from "axios"
import toast from "react-hot-toast";
const Signup = () => {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };
  
    try {
      const res = await axios.post("http://localhost:3000/user/signup", userInfo);
  
      console.log(res);
  
      if (res.data) {
        // alert("Successful signup");
        toast.success('Successful signup!');
      }
      localStorage.setItem("Users",JSON.stringify(res.data.createdUser))
    } catch (err) {
      if(err.response){
        console.log(err)
        // alert("error:"+err.response.data.message)
        toast.error("username already exists");
      }
    }
  }
  
  
  return (
    <>
      <div>
        <div
          id="my_modal_3"
          className="flex items-center justify-center p-20 "
        >
          <div className="  modal-box ">
            <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
              {/* if there is a button in form, it will close the modal */}
              <Link
                to="/"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </Link>
              <h3 className="font-bold text-lg">Signup</h3>
              <div className="mt-4 space-y-2 p-8">
                <div>
                  <span>Name:</span>
                  <br />
                  <input
                    type="text"
                    placeholder="Enter your fullName"
                    className="w-80 border outline-none px-3 py-1"
                    {...register("fullname", { required: true })}
                  />
                  <br />
                  {errors.fullname && (
                    <span className="text-sm text-red-500">
                      This field is required
                    </span>
                  )}
                </div>
                <br />
                <div>
                  <span>Email:</span>
                  <br />
                  <input
                    type="email"
                    placeholder="Enter your Email"
                    className="w-80 border outline-none px-3 py-1"
                    {...register("email", { required: true })}
                  />
                  <br />
                  {errors.email && (
                    <span className="text-sm text-red-500">
                      This field is required
                    </span>
                  )}
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
                  />
                  <br />
                  {errors.password && (
                    <span className="text-sm text-red-500">
                      This field is required
                    </span>
                  )}
                </div>
              </div>

              <div className="flex justify-around mt-6">
                <button
                  className="bg-pink-500 text-white px-3 py-1 rounded-md
        hover:bg-pink-700 duration-300"
                >
                  Signup
                </button>
                <p>
                  have account?{" "}
                  <a
                    className="underline text-blue-500 cursor-pointer font-bold"
                    onClick={() =>
                      document.getElementById("my_modal_3").showModal()
                    }
                  >
                    Login
                  </a>
                  <Login />
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
