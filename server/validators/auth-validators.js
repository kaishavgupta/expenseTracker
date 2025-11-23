import z, { email } from "zod"

export const signupSchema=z.object({
    username:z
    .string({required_error:"username is required"})
    .trim()
    .min(3,{message:"username must be atleast 3 chars"})
    .max(255,{message:"username may can not be more than 255 characters"}),  
    email:z
    .string({required_error:"Email is required"})
    .trim()
    .email({message:"Invalid Email address"})
    .min(3,{message:"Email must be atleast 3 chars"})
    .max(255,{message:"Email may can not be more than 255 characters"}),  
    phoneNumber:z
    .string({required_error:"Phone number is required"})
    .trim()
    .min(10,{message:"Phone Number must be 10 chars"})
    .max(10,{message:"Phone Number may can not be more than 10 digits"}),  
    password:z
    .string({required_error:"password is required"})
    .trim()
    .min(6,{message:"password must be 6 chars"})
    .max(1024,{message:"Password may can not be more than 255 characters"})  
})

export const loginSchema=z.object({
    email:z
    .string({required_error:"Email is required"})
    .trim()
    .email({message:"Invalid Email address"})
    .min(3,{message:"Email must be atleast 3 chars"})
    .max(255,{message:"Email may can not be more than 255 characters"}),
    
    password:z
    .string({required_error:"password is required"})
    .trim()
    .min(6,{message:"password must be 6 chars"})
    .max(1024,{message:"Password may can not be more than 255 characters"})
})

export const contactSchema=z.object({
    name:z
    .string({required_error:"Name is required"})
    .trim()
    .min(3,{message:"Name must be of atleast 3 chars"}),

    
    email:z
    .string({required_error:"Email is required"})
    .trim()
    .email({message:"Invalid Email address"})
    .min(3,{message:"Email must be atleast 3 chars"})
    .max(255,{message:"Email may can not be more than 255 characters"}),  


    phoneNumber:z
    .string({required_error:"Phone number is required"})
    .trim()
    .min(10,{message:"Phone Number must be 10 chars"})
    .max(10,{message:"Phone Number may can not be more than 255 characters"}), 

    message:z
    .string({required_error:"Message is required"})
    .trim()
    .min(50,{message:"Message must be of atleast 10 chars"})
    .max(5000,{message:"Message must be of maximum 5000 chars"})
})