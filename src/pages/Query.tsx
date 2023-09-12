import { useQuery } from "@tanstack/react-query";
import { fetchUsers } from "../services/users";
import CreateUserForm from "../components/Query/CreateQuery";

interface User {
    id: number;
    name: string;
    email: string;
}

function Users() {
    const { isLoading, data, isError, isFetching, isStale } = useQuery<User[]>(
        ["users", 1],
        fetchUsers,
        {
            staleTime: 100000,
            cacheTime: 5000,
            onSuccess: () => console.log("fetch success"),
            onError: () => console.log("fetch fail"),
            // refetchInterval: 3000,
        }
    );

    if (isLoading) {
        return (
            <div className="flex justify-center">
                <span>Loading...</span>
            </div>
        );
    }

    return (
        <div className="flex justify-center">
            <div>
                {data?.map((user: User) => (
                    <div key={user.id} className="border-2 border-black mb-2 p-2">
                        <h4>{user.name}</h4>
                        <p>{user.email}</p>
                    </div>
                ))}
            </div>
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
