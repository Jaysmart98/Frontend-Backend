import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";
import Modal from "../Modal/Modal";
import { increment, decrement } from "../../store/countSlice";
import './Form.css'
import { useSelector, useDispatch } from "react-redux";

// Define rules with Yup
const schema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
    name: yup.string().required("Name is required"),
    phoneNumber: yup.string().matches(/^[0-9]+$/, "Phone number is not valid").min(10, "Phone number must be at least 10 digits").required("Phone number is required"),
});

const Form = ()=> {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    console.log("Valid form data:", data);
  };

  return (
    <div id="body">
    <form onSubmit={handleSubmit(onSubmit)}>
      <div id="container">
        <input {...register("email")} placeholder="Email" />
        <p style={{ color: "red" }}>{errors.email?.message}</p>
      </div>

      <div>
        <input {...register("password")} type="password" placeholder="Password" />
        <p style={{ color: "red" }}>{errors.password?.message}</p>
      </div>
      <div>
        <input {...register("confirmPassword")} type="password" placeholder="confirm password" />
        <p style={{ color: "red" }}>{errors.confirmPassword?.message}</p>
      </div>

      <div>
        <input {...register("name")} type="text" placeholder="Name" />
       <p style={{ color: "red" }}>{errors.name?.message}</p>
      </div>

      <button type="submit">Submit</button>
    </form>

      <button onClick={() => setOpen(!open)}>Toggle</button>
      {open && (<Modal isOpen={open} onClose={() => setOpen(false)}  title={"Welcome"} children={"Dashboard page"}  />)}

        {useSelector((state) => state.counter.value) }
        <button onClick={() => dispatch(increment())}>Increase</button>
        <button onClick={() => dispatch(decrement())}>Decrease</button>

    </div>
  );

}

export default Form;