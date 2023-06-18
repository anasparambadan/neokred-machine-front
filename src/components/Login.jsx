import React from "react";
import hero from "../assets/images/hero.svg";
import { useFormik } from "formik";
import { loginSchema } from "../validation";
import { login } from "../api/authRequrest";

const Login = () => {
  const initialValues = {
    email: "",
    password: "",
  };

  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    handleReset,
  } = useFormik({
    initialValues: initialValues,
    validationSchema: loginSchema,

    onSubmit: async (values, action) => {
      const user = await login(values);
      localStorage.setItem("user", JSON.stringify(user.data));
      action.resetForm();
    },

    onClick: (values, action) => {
      action.resetForm();
    },
  });

  return (
    <div className="">
      <div className="flex md:flex-row  h-screen  ">
        <div className=" md:w-2/5 hidden md:block xl:w-3/5 lg:w-2/4 m-5 bg-white">
          <div className="bg-myBackground bg-cove rounded-3xl bg-center h-[93vh] ">
            <div className="py-8 px-6">
              <img src={hero} alt="hero" />
            </div>
          </div>
        </div>
        <div className=" md:w-3/5 lg:w-2/4 xl:w-2/4  w-screen m-auto md:m-28 py-10 md:pr-20 bg-white">
          <form onSubmit={handleSubmit}>
            <p className="text-lg text-titleGrey ">Welcome</p>
            <h1 className="text-3xl font-semibold">Login</h1>
            <div className="pt-8">
              <div className="flex flex-col">
                <label htmlFor="email" className="text-sm text-labelGrey">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="allthebest@neokred.com"
                  name="email"
                  id="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="  border-lightGrey border-[1px] outline-none rounded-[5px] px-[15px] py-[10px] w-full text-xs mt-1"
                />
                {errors.email && touched.email ? (
                  <span className="form-error text-red-600 text-xs">
                    {errors.email}
                  </span>
                ) : null}
              </div>
              <div className="mt-4">
                <label htmlFor="password" className="text-sm text-labelGrey">
                  Password <span className="text-red-500">*</span>
                </label>
                <input
                  type="password"
                  placeholder="*********"
                  name="password"
                  id="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="  border-lightGrey border-[1px] outline-none rounded-[5px] px-[15px] py-[10px] w-full text-xs mt-1"
                />
                {errors.password && touched.password ? (
                  <span className="form-error text-red-600 text-xs">
                    {errors.password}
                  </span>
                ) : null}

                <div className="flex justify-end pt-2 ">
                  <div className=" cursor-pointer text-blue-500">
                    Forgot password?
                  </div>
                </div>
                <div className="  mt-5  flex">
                  <button
                    className=" bg-[#194DFF] rounded-[6px] text-white text-sm py-[7px] text-center self-start px-10 w-[60%] mt-1"
                    type="submit"
                  >
                    Login
                  </button>
                  <div className=""></div>
                </div>
                <div className="mt-5">
                  <div className=" text-zinc-400">
                    Don't have an accouunt ?{" "}
                    <span className="text-blue-600 underline"> Sign up</span>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
