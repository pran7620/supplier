import * as Yup from "yup";

// Define schema for validating user input
export const DemoSchema = Yup.object({
  companyName: Yup.string()
    .required("Company Name is required"),
    

  // address: Yup.string().required("Address is required"),
  // company_city: Yup.string()
  //   .required("Company City is required")
  //   .matches(/^[A-Za-z]+$/, "The city should contain only alphabets"),
  // telephone_number: Yup.string()
  //   .matches(
  //     /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
  //     "Telephone number is not valid"
  //   )
  //   .required("Telephone Number is required"),
  // email_company: Yup.string()
  //   .required("Email address is required")
  //   .email("Invalid email format"),
  // website_address: Yup.string()
  //   .url("Invalid website address format")
  //   .required("Website address is required"),
  // representative_name:Yup.string().required(" Representative Name is required"),
  // designation_name_representative:Yup.string().required("designation is required"),
  // email_representative: Yup.string()
  //   .required("email of Representative required")
  //   .email("invalid email formate"),
  // direct_number: Yup.string()
  //   .matches(
  //     /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
  //   )
  //   .required(),

  // mobile_number: Yup.string()
  //   .required("Mobile Number Required")
  //   .matches(
  //     /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
  //   ),
  // established_year: Yup.date().required("established year is required"),
  // details_of_service: Yup.string().required("required"),
  // year1: Yup.date().required("required"),
  // year2: Yup.date().required("required"),
  // year3: Yup.date().required("required"),
  // inr1: Yup.string().matches(
  //   /^[1-9]\d*(((,\d{3}){1})?(\.\d{0,2})?)$/,
  //   "invalid input"
  // ),
  // inr2: Yup.string().matches(
  //   /^[1-9]\d*(((,\d{3}){1})?(\.\d{0,2})?)$/,
  //   "invalid input"
  // ),

  // category:Yup.string().required("category required"),
  // subcategory:Yup.string().required("subcategory required"),
  // pan_no:Yup.string().required("This is required").matches(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/,"invalid formate"),
  // gst_no:Yup.string().required("This is required").matches(/^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/, "Invalid format"),
  // is_msme:Yup.string().required("This is required")



});
