const express=require("express");

const User=require("../models/userSchema")


exports.signup=async(req,res)=>{

    try{
        const{name,email,role,password}=req.body;

        console.log("name is",name);
        console.log("password is",password);

        const existingUser=await User.findOne({email});

        if(existingUser){
           
            return res.status(400).json({  success:false,message:"Please login you are already user"})
        }

        //secure password
        let hashedPassword;
        try{
            hashedPassword=await bcrypt.hash(password,10)
         
        }
        catch(error){
            return res.status(500).json({
                success:false,
                message:"error in hashing password",
            })

        }

        const user=await User.create({
            name,email,password,hashedPassword,role

        })

        return res.status(200).json({
            success:true,
            message:"User Create Successfully"

        })
        
    }
    catch(error){

        console.error("error")
        return res.status(500).json({
            success:false,
            message:"User Cannot be registered,please try again"
        })

    }


    
}

// const login=()=>{




// }