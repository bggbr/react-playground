import { useQuery } from "react-query";
import { fetchUsers } from "../services/users";

export default function User() {
    const { data, isLoading, error } = useQuery("users", async () => {
        const res = await fetchUsers();
        return res;
    });

    if (error) throw error;

    if (isLoading) return <div>loading...</div>;

    return (
        <div>
            {data.map((user: any) => (
                <div key={user.id}>
                    <div>{user.name}</div>
                </div>
            ))}
        </div>
    );
}
