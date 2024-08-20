import { useState } from "react";
import websitelogoblack from "../../../assets/websitelogoblack.webp"
import Login from "./Login/Login";
import Register from "./Register/Register";

const UserAuth = () => {

    const [selectedBtn, setSelectedBtn] = useState("login")

    return (
        <div className="flex flex-col items-center">
            <img src={websitelogoblack} alt="logo" className="w-32 h-10 md:w-44 md:h-14" />
            <div className="w-full mt-12 px-4 flex justify-between items-center">
                <button
                    onClick={() => setSelectedBtn("register")}
                    className={`${selectedBtn === "register" && "bg-orange-theme text-white font-semibold"} px-4 py-2 rounded-md`}
                >
                    REGISTER
                </button>
                <button
                    onClick={() => setSelectedBtn("login")}
                    className={`${selectedBtn === "login" && "bg-orange-theme text-white font-semibold"} px-4 py-2 rounded-md`}
                >
                    LOGIN
                </button>
            </div>
            <div className="w-full mt-6">
                {
                    selectedBtn === "login" ? <Login /> : <Register />
                }
            </div>
        </div>
    );
};

export default UserAuth;