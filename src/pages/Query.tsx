import { QueryClient, QueryClientProvider, useQuery } from "react-query";

async function fetchUsers() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    return data;
}

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
            <Users />
        </div>
    );
}
