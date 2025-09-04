"use client"
import React from 'react'
import {useForm} from "react-hook-form"
import { formTypes } from '../types/form';
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

function Form() {
  
  //Yup schema defining validation rules for each form field
  const schema = yup.object().shape({
    fullName:yup.string() //full name must be string type
                .required("full name is required"), // full name is required
    email:yup.string() //email must be string type
            .required("email is required"),//email must be entered
    password: yup.string()
              .required("password is required")
              .min(3,"password must be at least 3 character plz")
              .max(10,"password must be under 10 characters"),
    confPassword: yup.string()
                  .required("confirmation is required")
                  
            
  })


   //handleSubmit() takes my onSubmit function, 
  //runs form validation + collects all input values, 
  // and then calls onSubmit(data) ONLY if everything is valid.
  const { register, handleSubmit } = useForm<formTypes>({
    resolver:yupResolver(schema)
  });
 

  const onSubmit = (data : formTypes) => {
    console.log("hello world")
    console.log(data)
  }
  return (  
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-8 rounded-lg shadow-md w-full max-w-md space-y-4">
        <h2 className="text-2xl font-semibold text-center text-gray-800">Sign Up</h2>

        <input 
          type="text" 
          placeholder="Full Name" 
          {...register("fullName")}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <input 
          type="email" 
          placeholder="Email" 
          {...register("email")}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <input 
          type="password" 
          placeholder="Password" 
          {...register("password")}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <input 
          type="password" 
          placeholder="Confirm Password" 
          {...register('confPassword')}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <input 
          type="submit" 
          value="Sign Up"
          className="w-full bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600 cursor-pointer transition-colors"
        />
      </form>
    </div>
  )
}

export default Form;
function yupResolver(schema: yup.ObjectSchema<{ fullName: string; email: string; password: string; confPassword: string; }, yup.AnyObject, { fullName: undefined; email: undefined; password: undefined; confPassword: undefined; }, "">): import("react-hook-form").Resolver<formTypes, any, formTypes> | undefined {
  throw new Error('Function not implemented.');
}

