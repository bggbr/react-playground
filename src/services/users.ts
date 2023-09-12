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
