import User from "../model/usemodel.js";
import bcryptjs from "bcryptjs";

//signup controller
export const signup = async(req, res) => {
    try {
        const { fullname, email, password } = req.body;
        // console.log(req.body);
        const user =await User.findOne({ Email:email})
        if (user) {
            return res.status(400).json({ message: "User already exists" })
        } 

        const hashPassword = await bcryptjs.hash(password, 12);

        const createdUser = new User({
            Fullname:fullname,
            Email:email,
            Password:hashPassword
        });
        // console.log(createdUser);
        await createdUser.save();
        res.status(201).json({message:"User Created Successfully",
                            user:{
                                _id:createdUser._id,
                                fullname:createdUser.Fullname,
                                email:createdUser.Email
                            }
        });

    } catch (error) {
        console.log("Error:" + error.message);
        res.status(500).json({message:"Internal Server Error! "
        });
    }
}


//login controller
export const login = async(req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({Email:email});                     //Email in db , email from body
        const isMatch = await bcryptjs.compare(password, user.Password);            //user.Password is our database password
        if(!isMatch || !user){
            return res.status(400).json({message:"Invalid Credentials"});
        }else{
            res.status(200).json({message:"User Logged in Successfully",user:{
                _id:user._id,
                fullname:user.Fullname,
                email:user.Email
            }});
        }
    } catch (error) {
        console.log("Error:" + error.message);
        res.status(500).json({message:"Internal Server Error! "
        });
    }
}