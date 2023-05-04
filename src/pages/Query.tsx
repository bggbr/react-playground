import { useQuery } from "react-query";
import { fetchUsers } from "../services/users";
import CreateUserForm from "../components/Query/CreateQuery";

function Users() {
    const { isLoading, data } = useQuery("users", fetchUsers);

    if (isLoading) {
        return <span>Loading...</span>;
    }

    return (
        <div>
            {data.map((user: any) => (
                <div key={user.id}>
                    <h4>{user.name}</h4>
                    <p>{user.email}</p>
                </div>
            ))}
        </div>
    );
}

export default function Query() {
    return (
        <div>
            <CreateUserForm />
            <Users />
        </div>
    );
}
