import React from "react";
import heroIcon from "../assets/images/hero.svg";
import { useFormik } from "formik";
import { registerSchema } from "../validation";
import { register } from "../api/authRequrest";
import { Link, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const Register = () => {
  const navigate = useNavigate()
  const initialValues = {
    fullName: "",
    email: "",
    dateOfBirth: "",
    password: "",
    phoneNumber: "",
    confirmPassword: "",
    security: "",
    address: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
  };
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: registerSchema,

      onSubmit: async (values, action) => {
        const { confirmPassword, ...formData } = values;
        try {
          const user = await register(formData);
          localStorage.setItem("user", JSON.stringify(user.data))
          toast.success("Registration Success");
          navigate('/profile')
          action.resetForm(); 
        } catch (error) {
          toast.error(error.response.data.message);
        }
       
      },
      onClick: (action) => {
        action.resetForm();
      },
    });

  return (
    <div className="register h-screen flex max-w-[1920px] px-4 py-5 gap-10">
      <Toaster/>
      <div className="reg-left bg-myBackground bg-cover h-full w-3/6 rounded-3xl relative">
        <img src={heroIcon} alt=""  className="absolute top-6 left-6"/>
      </div>
      <div className="reg-right w-full flex flex-col gap-2 h-full px-10">
        <div>
          <p className="text-lg text-titleGrey ">Welcome</p>
          <h1 className="text-3xl font-semibold">Sign Up</h1>
        </div>

        <div className=" grid grid-cols-2 gap-x-10 gap-y-1">
          <div className="flex flex-col">
            <label htmlFor="fullName" className="text-sm text-labelGrey">
              Full name
            </label>
            <input
              type="text"
              placeholder="Full Name"
              name="fullName"
              id="fullName"
              value={values.fullName}
              onChange={handleChange}
              onBlur={handleBlur}
              className="  border-lightGrey border-[1px] outline-none rounded-[5px] px-[15px] py-[7px] w-full text-xs mt-1"
            />
            {errors.fullName && touched.fullName ? (
              <span className="form-error text-red-600 text-xs">
                {errors.fullName}
              </span>
            ) : null}
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="text-sm text-labelGrey">
              Email
            </label>
            <input
              type="text"
              placeholder="Email"
              name="email"
              id="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className="  border-lightGrey border-[1px] outline-none rounded-[5px] px-[15px] py-[7px] w-full text-xs mt-1"
            />
            {errors.email && touched.email ? (
              <span className="form-error text-red-600 text-xs">
                {errors.email}
              </span>
            ) : null}
          </div>
          <div className="flex flex-col">
            <label htmlFor="dateOfBirth" className="text-sm text-labelGrey">
              Date of birth
            </label>
            <input
              type="text"
              placeholder="DD/MM/YY"
              name="dateOfBirth"
              id="dateOfBirth"
              value={values.dateOfBirth}
              onChange={handleChange}
              onBlur={handleBlur}
              className="  border-lightGrey border-[1px] outline-none rounded-[5px] px-[15px] py-[7px] w-full text-xs mt-1"
            />
            {errors.dateOfBirth && touched.dateOfBirth ? (
              <span className="form-error text-red-600 text-xs">
                {errors.dateOfBirth}
              </span>
            ) : null}
          </div>
          <div className="flex flex-col">
            <label htmlFor="password" className="text-sm text-labelGrey">
              Password
            </label>
            <input
              type="password"
              placeholder="*********"
              name="password"
              id="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              className="  border-lightGrey border-[1px] outline-none rounded-[5px] px-[15px] py-[7px] w-full text-xs mt-1"
            />
            {errors.password && touched.password ? (
              <span className="form-error text-red-600 text-xs">
                {errors.password}
              </span>
            ) : null}
          </div>
          <div className="flex flex-col">
            <label htmlFor="phoneNumber" className="text-sm text-labelGrey">
              Phone Number
            </label>
            <input
              type="text"
              placeholder="Phone number"
              name="phoneNumber"
              id="phoneNumber"
              value={values.phoneNumber}
              onChange={handleChange}
              onBlur={handleBlur}
              className="  border-lightGrey border-[1px] outline-none rounded-[5px] px-[15px] py-[7px] w-full text-xs mt-1"
            />
            {errors.phoneNumber && touched.phoneNumber ? (
              <span className="form-error text-red-600 text-xs">
                {errors.phoneNumber}
              </span>
            ) : null}
          </div>
          <div className="flex flex-col">
            <label htmlFor="confirmPassword" className="text-sm text-labelGrey">
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="*********"
              name="confirmPassword"
              id="confirmPassword"
              value={values.confirmPassword}
              onChange={handleChange}
              onBlur={handleBlur}
              className="  border-lightGrey border-[1px] outline-none rounded-[5px] px-[15px] py-[7px] w-full text-xs mt-1"
            />
            {errors.confirmPassword && touched.confirmPassword ? (
              <span className="form-error text-red-600 text-xs">
                {errors.confirmPassword}
              </span>
            ) : null}
          </div>
        <div className="mt-2">
          <p className="text-sm">Security Question</p>
          <label htmlFor="security" className="text-sm text-labelGrey">
            What is your School name ?
          </label>
          <input
            type="text"
            placeholder="Answer"
            name="security"
            id="security"
            value={values.security}
            onChange={handleChange}
            onBlur={handleBlur}
            className=" border-lightGrey border-[1px] outline-none rounded-[5px] px-[15px] py-[7px] w-full text-xs mt-1"
          />
          {errors.security && touched.security ? (
            <span className="form-error text-red-600 text-xs">
              {errors.security}
            </span>
          ) : null}
        </div>
        </div>
        <div>
          <label htmlFor="address" className="text-sm text-labelGrey">
            Address
          </label>
          <input
            type="text"
            placeholder="Address"
            name="address"
            id="address"
            value={values.address}
            onChange={handleChange}
            onBlur={handleBlur}
            className="  border-lightGrey border-[1px] outline-none rounded-[5px] px-[15px] py-[7px] w-full text-xs mt-1"
          />
          {errors.address && touched.address ? (
            <span className="form-error text-red-600 text-xs">
              {errors.address}
            </span>
          ) : null}
        </div>
        <div className="flex justify-between gap-[45px]">
          <div>
            <label htmlFor="city" className="text-sm text-labelGrey">
              City
            </label>
            <input
              type="text"
              className="border-lightGrey border-[1px] outline-none rounded-[5px] px-[15px] py-[7px] w-full text-xs mt-1"
              placeholder="City"
              name="city"
              id="city"
              value={values.city}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.city && touched.city ? (
              <span className="form-error text-red-600 text-xs">
                {errors.city}
              </span>
            ) : null}
          </div>
          <div>
            <label htmlFor="state" className="text-sm text-labelGrey">
              State
            </label>
            <input
              type="text"
              className="border-lightGrey border-[1px] outline-none rounded-[5px] px-[15px] py-[7px] w-full text-xs mt-1"
              placeholder="State"
              name="state"
              id="state"
              value={values.state}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.state && touched.state ? (
              <span className="form-error text-red-600 text-xs">
                {errors.state}
              </span>
            ) : null}
          </div>
          <div>
            <label htmlFor="zipcode" className="text-sm text-labelGrey">
              ZIP Code
            </label>
            <input
              type="text"
              className="border-lightGrey border-[1px] outline-none rounded-[5px] px-[15px] py-[7px] w-full text-xs mt-1"
              placeholder="Zip code"
              name="zipcode"
              id="zipcode"
              value={values.zipcode}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.zipcode && touched.zipcode ? (
              <span className="form-error text-red-600 text-xs">
                {errors.zipcode}
              </span>
            ) : null}
          </div>
          <div>
            <label htmlFor="country" className="text-sm text-labelGrey">
              City
            </label>
            <input
              type="text"
              className="border-lightGrey border-[1px] outline-none rounded-[5px] px-[15px] py-[7px] w-full text-xs mt-1"
              placeholder="Country"
              name="country"
              id="country"
              value={values.country}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.country && touched.country ? (
              <span className="form-error text-red-600 text-xs">
                {errors.country}
              </span>
            ) : null}
          </div>
        </div>
        <button
          className="bg-[#194DFF] rounded-[6px] text-white text-sm py-[7px] text-center self-start px-10 w-[30%] mt-3"
          onClick={handleSubmit}
          type="submit"
        >
          Sign Up
        </button>
        <p className="text-titleGrey">
          Already have an account? <Link to={'/login'}><span className="underline text-blue-600">Login</span></Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
