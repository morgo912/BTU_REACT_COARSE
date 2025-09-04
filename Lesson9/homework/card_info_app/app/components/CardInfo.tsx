"use client"
import * as yup from "yup"
import { cardDataTypes, formTypes } from '../types/card'
import {useForm} from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { useState } from "react"
import Compleated from './Compleated'
//using react-hook-form(installed ) in order to work with forms!
//used yup for the schema(instaled )
//used resolver in order to connect schema and useform 
function CardInfo({setUserName,setCardNumber,setExpirationMonth, setExpirationYear,setCvc}:cardDataTypes) {
  
  const[compleated,setCompleated] = useState<boolean>(false)
    
  //creating schema for the inputs
  const schema = yup.object().shape({
    userName: yup.string()
              .required("Can’t be blank"),
    cardNumber:yup.string()
               .required("Can’t be blank")
               .matches(/^\d+$/, "Wrong format, numbers only")
               .test("len","Card Number must be 16 digits",(value) => value.length === 16),
    expirationMonth:yup.string()
                    .required("Can’t be blank")
                    .matches(/^\d+$/, "Wrong format, numbers only")     
                    .test("len","Month must be exactly 2 digits",(value) => value.length === 2),
    expirationYear:yup.string()
                    .required("Can't be blank")
                    .matches(/^\d+$/, "Wrong format, numbers only")
                    .test("len","Year must be exactly 2 digits",(value) => value.length === 2),
    cvc:yup.string()
            .required("Can't be blank") 
            .matches(/^\d+$/, "Wrong format, numbers only")
            .test("len","CVC must be exactly 3 digits",(value) => value.length === 3)
  })

  //useform and shcema connections through resolver
  const { register, handleSubmit,formState:{errors},reset } = useForm<formTypes>({
    resolver:yupResolver(schema)
  })

  const onConfirm = (data:formTypes) => {
    setUserName(data.userName);
    setCardNumber(data.cardNumber);
    setExpirationMonth(data.expirationMonth);
    setExpirationYear(data.expirationYear);
    setCvc(data.cvc);

    setCompleated(true)

    reset() // all the inputs will be cleared
  }

  if (compleated) return <Compleated setUserName={setUserName} setCardNumber={setCardNumber} setExpirationMonth={setExpirationMonth} setExpirationYear={setExpirationYear} setCvc={setCvc}  setCompleated={setCompleated}/>;
  return (
    <form  onSubmit={ handleSubmit(onConfirm)} className='w-[327px] h-[328px] mt-[124px] mb-[65px] mx-[24px] flex flex-col lg:mt-[0] lg:ml-[127px]'>
      {/* username div */}
      <div className='flex flex-col gap-[9px]'>
        <p className='text-[12px] text-[#21092F] uppercase font-[500] tracking-[2px]'>Cardholder Name</p>
        <input 
          {...register("userName")}
          className='w-full h-[45px] pl-[16px] py-[11px] pr-[137px] placeholder:text-[18px] placeholder:text-[#21092F] placeholder:opacity-[25%] rounded-[8px] border-1 border-[#DFDEE0]' type="text" placeholder='e.g. Jane Appleseed' />
        <p className="font-[500] text-[#FF5050] text-[12px]">{errors.userName?.message}</p>
      </div>

      {/* card number */}
      <div className='flex flex-col gap-[9px] mt-[20px]'>
        <p className='uppercase text-[12px] text-[#21092F] font-[500] tracking-[2px]'>Card Number</p>
        <input 
          {...register("cardNumber")}
          className='w-full h-[45px] pl-[16px] py-[11px] pr-[137px] placeholder:text-[18px] placeholder:text-[#21092F] placeholder:opacity-[25%] rounded-[8px] border-1 border-[#DFDEE0]' 
          type="text" 
          placeholder='e.g. 1234 5678 9123 0000'/>
        <p className="font-[500] text-[#FF5050] text-[12px]">{errors.cardNumber?.message}</p>
      </div>

      <div className='mt-[20px] flex gap-[11px]'>
        {/* Exp. Date (MM/YY) */}
        <div className='flex flex-col gap-[9px]'>
          <p className='text-[#21092F] text-[12px] uppercase font-[500] tracking-[2px]'>Exp. Date (MM/YY)</p>
          <div className='flex gap-[8px]'>
            <div className="flex flex-col gap-[8px]">
              <input 
                {...register("expirationMonth")}
                className='w-[72px] h-[45px] border-[1px] border-[#DFDEE0] rounded-[8px]  pl-[16px] py-[11px] pr-[24px] placeholder:text-[#21092F] placeholder:text-[18px] placeholder:opacity-[25%]' type="text" placeholder='MM' />
              <p className={`font-[500] text-[#FF5050] text-[12px]`}>{errors.expirationMonth?.message}</p>
            </div>
            
            <div className="flex flex-col gap-[8px]">
              <input 
                {...register("expirationYear")}
                className='w-[72px] h-[45px] border-[1px] border-[#DFDEE0] rounded-[8px]  pl-[16px] py-[11px] pr-[24px] placeholder:text-[#21092F] placeholder:text-[18px] placeholder:opacity-[25%]' type="text" placeholder='YY'/>
              <p className="font-[500] text-[#FF5050] text-[12px] w-full">{errors.expirationYear?.message}</p>
            </div>
          </div>
        </div>

        {/* CVC */}
        <div className='flex flex-col gap-[9px]'>
          <p className='text-[12px] text-[#21092F] uppercase tracking-[2px] font-[500] '>CVC</p>
          <input 
            {...register("cvc")}
            className=' w-[164px] h-[45px] placeholder:text-[#21092F] placeholder:text-[18px] placeholder:opacity-[25%] border-[1px] border-[#DFDEE0] rounded-[8px] pl-[16px] py-[11px] pr-[82px]' 
            type="text" 
            placeholder='e.g. 123' />
            <p className="font-[500] text-[#FF5050] text-[12px]">{errors.cvc?.message}</p>
        </div>
      </div>

     
      <button  className='cursor-pointer mt-[32px] mb-[45px] w-full bg-[#21092F] pl-[129px] pr-[130px] py-[15px] text-[#FFFFFF] rounded-[8px] text-[18px] font-[500]'>Confirm</button>
    </form >
  )

}

export default CardInfo
