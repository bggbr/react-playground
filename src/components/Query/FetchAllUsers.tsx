import { useQuery } from "react-query";
import { fetchUsers } from "../../services/users";

function FetchAllUsers() {
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

export default FetchAllUsers;
