import { useForm } from "react-hook-form";
import TextInput from "../../../shared/Input/TextInput/TextInput";

const Register = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
        watch
    } = useForm()

    const password = watch("password");

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <TextInput
                    label="First Name"
                    type="text"
                    id="firstname"
                    placeholder="Enter first name"
                    register={{
                        ...register("firstname", {
                            required: "First name is required"
                        })
                    }}
                    errors={errors.firstname}
                />
                <TextInput
                    label="Last Name"
                    type="text"
                    id="lastname"
                    placeholder="Enter last name"
                    register={{
                        ...register("lastname", {
                            required: "Last name is required"
                        })
                    }}
                    errors={errors.lastname}
                />
                <TextInput
                    label="Phone Number"
                    type="number"
                    id="phonenumber"
                    placeholder="Enter phone number"
                    register={{
                        ...register("phonenumber", {
                            required: "Phone name is required",
                            minLength: {
                                value: 11,
                                message: "Minimum length of number is 11"
                            },
                            maxLength: {
                                value: 11,
                                message: "Maximum length of number is 11"
                            }
                        })
                    }}
                    errors={errors.phonenumber}
                />
                <TextInput
                    label="Email"
                    type="email"
                    id="email"
                    placeholder="Email address"
                    register={{
                        ...register("email", {
                            required: "Email address is required",
                            pattern: {
                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                message: "Must be a valid email"
                            }
                        })
                    }}
                    errors={errors.email}
                />
                <TextInput
                    label="Password"
                    type="password"
                    id="password"
                    placeholder="Password"
                    register={{
                        ...register("password",
                            {
                                required: "Password is required",
                                minLength: {
                                    value: 6,
                                    message: "Minimum length of password is 6"
                                }
                            })
                    }}
                    errors={errors.password}
                />
                <TextInput
                    label="Confirm Password"
                    type="password"
                    id="confirmpassword"
                    placeholder="Password"
                    register={{
                        ...register("confirmpassword",
                            {
                                required: "Confirm password is required",
                                validate: (value) =>
                                    value === password || "Password does not match"
                            }
                        )
                    }}
                    errors={errors.confirmpassword}
                />
                <button className="w-full bg-orange-theme text-white rounded font-bold py-3 mt-5">
                    REGISTER
                </button>
            </form>
        </div>
    );
};

export default Register;