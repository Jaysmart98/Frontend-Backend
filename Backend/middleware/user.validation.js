const yup = require("yup")

const validationSchema =  yup.object({
    username:yup.String().min(3, "Username can not be less than three characters").matches().required("Username  is required"),
    password:yup.string().trim().min(3, "password cannot be less than three characters").required("password is required"),
    email:yup.string().trim().email()("Must be a valid email address").required("email is required"),
})

module.export = validationSchema