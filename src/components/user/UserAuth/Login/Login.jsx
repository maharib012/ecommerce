import { useForm } from "react-hook-form";
import TextInput from "../../../shared/Input/TextInput/TextInput";

const Login = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
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
                <button className="w-full bg-orange-theme text-white rounded font-bold py-3 mt-5">
                    Login
                </button>
            </form>
        </div>
    );
};

export default Login;