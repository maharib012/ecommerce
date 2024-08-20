const TextInput = ({ label, type, id, placeholder, register, errors }) => {
    return (
        <div className="mb-2 relative">
            <label className="mb-1 block text-base font-semibold text-gray-effect" htmlFor={id}>{label}</label>
            <input
                type={type}
                placeholder={placeholder}
                id={id}
                {...register}
                className="w-full h-10 focus:outline-none focus:border-2 border rounded px-3 border-gray-effect z-50"
            />
            {errors && <span className="text-red-600 text-center text-sm absolute right-0 -bottom-5">{errors.message}</span>}
        </div>
    );
};

export default TextInput;