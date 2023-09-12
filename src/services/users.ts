<<<<<<< HEAD
const USERS_URI = "https://jsonplaceholder.typicode.com/users";

// export fetchUsers;
interface User {
    id: number;
    name: string;
    email: string;
}

export { fetchUsers };

// expor async function fetchUsers() {
//     const data = await fetch(USERS_URI);
//     const users = await data.json();
//     return users;
// }

function fetchUsers(): Promise<User[]> {
    console.log("fetchUsers");

    return new Promise((resolve) => {
        setTimeout(async () => {
            resolve(mockData);
        }, 3000);
    });
}

const mockData = [
    { id: 1, name: "John Doe", email: "johndoe@example.com" },
    { id: 2, name: "Jane Smith", email: "janesmith@example.com" },
];

type mockDataType = {
    id: number;
    name: string;
    email: string;
};

export async function createUser(userInfo: any): Promise<mockDataType> {
    const id = mockData.length + 1;
    const user = { id, ...userInfo };
    mockData.push(user);
    return Promise.resolve(user);
}
=======
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
>>>>>>> 9c14819cb952572b556ea4991e3ceca731d43ce9
