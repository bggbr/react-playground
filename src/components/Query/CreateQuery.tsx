import { useMutation } from "react-query";
import { createUser } from "../../services/users";
import { useState } from "react";

function CreateUserForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
    });

    const { mutate, isLoading, isError, isSuccess } = useMutation(createUser, {
        onSuccess: (data) => {
            // 사용자 생성 성공 시 실행할 코드
            console.log("onSuccess");
            alert(
                `User ${data.name} with email ${data.email} has been created!`
            );
        },
        onError: () => {
            // 사용자 생성 실패 시 실행할 코드
            console.log("onError");
        },
    });

    const handleSubmit = (event: any) => {
        event.preventDefault();
        mutate(formData);
    };

    const handleChange = (event: any) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="mx-auto my-4 flex flex-col gap-y-2 w-[300px] items-center justify-center border-2 border-black"
        >
            <div className="flex">
                <label htmlFor="name">Name:</label>
                <input type="text" name="name" onChange={handleChange} />
            </div>
            <div className="flex">
                <label htmlFor="email">Email:</label>
                <input type="email" name="email" onChange={handleChange} />
            </div>
            <div className="flex">
                <label htmlFor="phone">Phone:</label>
                <input type="tel" name="phone" onChange={handleChange} />
            </div>
            <button type="submit" disabled={isLoading}>
                {isLoading ? "Creating..." : "Create User"}
            </button>
        </form>
    );
}

export default CreateUserForm;
