import User from "../modal/user.js";
import bcryptjs from "bcryptjs";

const signUp = async (req, res) => {
  try {
    const { fullname, email, password } = req.body;

    // Input validation
    if (!fullname || !email || !password) {
      return res.status(400).json({ message: "All fields are required", success: false });
    }

    // Check if the user already exists
    const user = await User.findOne({ email });
    if (user) {
      return res.status(409).json({ message: "User already exists", success: false });
    }

    // Hash the password
    const hashPassword = await bcryptjs.hash(password, 10);

    // Create a new user
    const createdUser = new User({
      fullname, // Ensure this matches your schema field name
      email,
      password: hashPassword,
    });

    await createdUser.save();

    // Send success response
    res.status(201).json({ message: "User created successfully",createdUser:{
      _id:createdUser._id,
      fullname:createdUser.fullname,
      email:createdUser.email
    } });
  } catch (error) {
    console.log("Error:", error.message);
    res.status(500).json({ message: "An error occurred", error: error.message });
  }
};

export default signUp;


export const login = async(req,res)=>{
      const {email,password}=req.body;
      const user=await User.findOne({email})
      const isMatch= await bcryptjs.compare(password,user.password)
      if(!user || !isMatch){
        return res.status(400).json({message:"invalid username or password"})
      }
      else{
        res.status(200).json({message:"login successful",user:{
            _id:user._id,
            fullname:user.fullname,
            email:user.email
        }})
      }
}