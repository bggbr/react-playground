import { useQuery } from "react-query";
import { fetchUser, fetchUsers } from "../services/users";
import CreateUserForm from "../components/Query/CreateQuery";
import { useEffect } from "react";

function Users() {
    const { isLoading, data } = useQuery("users", fetchUsers);

    if (isLoading) {
        return <span>Loading...</span>;
    }

    console.log(data);

    return (
        <div className="text-center">
            {data.map((user: any) => (
                <div key={user.id} className="mb-4">
                    <h4>{user.name}</h4>
                    <p>{user.email}</p>
                </div>
            ))}
        </div>
    );
}

export default function Query() {
    async function test() {
        const data = await fetch("/api/");
        const res = await data.json();
        console.log(res);
    }

    useEffect(() => {
        test();
    }, []);
    return (
        <div>
            <CreateUserForm />
            <Users />
        </div>
    );
}
