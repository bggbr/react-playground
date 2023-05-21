import { User } from './../types/user.type';
// const USERS_URI = "https://jsonplaceholder.typicode.com/users"

const USERS_URI = 'http://localhost:1222/user';

export async function fetchUsers() {
    const data = await fetch('/api/user');
    const users = await data.json();
    return users;
}

export async function addUser(user: User) {
    const data = await fetch('/api/user', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
    });
    const fetchedUser = await data.json();
    return fetchedUser;
}

export async function fetchUser(params: { queryKey: [string, { id: number }] }) {
    const { id } = params.queryKey[1];
    const data = await fetch(`${USERS_URI}/${id}`);
    const user = await data;
    return user;
}

export type FetchUserParams = {
    queryKey: [string, { id: number }];
};
