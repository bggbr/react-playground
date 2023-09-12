<<<<<<< HEAD
import { useQuery } from "@tanstack/react-query";
import { fetchUsers } from "../services/users";
import CreateUserForm from "../components/Query/CreateQuery";
=======
import { useQuery } from 'react-query';
import { fetchUsers } from '../services/users';
import CreateUserForm from '../components/Query/CreateQuery';
import { useEffect } from 'react';
import { User } from '../types/user.type';
>>>>>>> 9c14819cb952572b556ea4991e3ceca731d43ce9

interface User {
    id: number;
    name: string;
    email: string;
}

function Users() {
<<<<<<< HEAD
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
=======
    const { isLoading, data } = useQuery('users', fetchUsers);
>>>>>>> 9c14819cb952572b556ea4991e3ceca731d43ce9

    if (isLoading) {
        return (
            <div className="flex justify-center">
                <span>Loading...</span>
            </div>
        );
    }

    return (
<<<<<<< HEAD
        <div className="flex justify-center">
            <div>
                {data?.map((user: User) => (
                    <div key={user.id} className="border-2 border-black mb-2 p-2">
                        <h4>{user.name}</h4>
                        <p>{user.email}</p>
                    </div>
                ))}
            </div>
=======
        <div className="text-center">
            {data.map((user: User) => (
                <div key={user.id} className="mb-4">
                    <h4>{user.name}</h4>
                    <p>{user.email}</p>
                </div>
            ))}
>>>>>>> 9c14819cb952572b556ea4991e3ceca731d43ce9
        </div>
    );
}

export default function Query() {
    async function test() {
        const data = await fetch('/api/');
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
