import * as Yup from "yup";

function getMaxDate() {
  return new Date();
}

export const registerSchema = Yup.object({
  fullName: Yup.string()
    .min(2, "must be at least 2 characters long")
    .max(50, "Cannot exceed 50 characters")
    .matches(/^[a-zA-Z ]*$/, "Alphabets only")
    .required("Please enter your First name"),
  email: Yup.string().email().required("Please enter your Email"),
  dateOfBirth: Yup.string()
    .required("Enter your DOB")
    .matches(
      /^(0[1-9]|1\d|2\d|3[01])\/(0[1-9]|1[0-2])\/\d{2}$/,
      "Date must be in the format dd/mm/yy"
    )
    .test("max-date", "Date must be today or earlier", function (value) {
      if (!value) return true;
      const currentDate = new Date();
      const [day, month, year] = value.split("/").map(Number);
      const selectedDate = new Date(2000 + year, month - 1, day);
      return selectedDate <= currentDate;
    }),

  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters long")
    .matches(
      /^(?=.*[A-Z])(?=.*\d).*$/,
      "Password must contain at least one uppercase letter and one digit"
    ),
  confirmPassword: Yup.string()
    .required("Required")
    .oneOf([Yup.ref("password"), null], "Password Must match"),
  phoneNumber: Yup.string()
    .required("Phone number is required")
    .matches(/^[6-9]\d{9}$/, "Invalid mobile number"),
  security: Yup.string()
    .max(100, "Answer cannot exceed 100 charecters")
    .required("Required"),
  address: Yup.string()
    .max(100, "address cannot exceed 100 charecters")
    .required("Required"),
  city: Yup.string()
    .max(50, "Cannot exceed 50 characters")
    .matches(/^[a-zA-Z ]*$/, "Alphabets only")
    .required("Please enter Your City"),
  state: Yup.string().required("Required"),
  zipcode: Yup.number()
    .typeError("Invalid Zip code")
    .integer("Invalid Zip code")
    .required("Zip code is required")
    .min(100000, "Invalid Zip code")
    .max(999999, "Invalid Zip code"),
  country: Yup.string().required("Enter your country"),
});

export const loginSchema = Yup.object({
  email: Yup.string().email().required("Please enter your Email"),
  password: Yup.string()
    .min(8, "Password must be atleast 8 charcters long")
    .required("Please enter your Password"),
});
