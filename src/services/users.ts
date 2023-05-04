const USERS_URI = "https://jsonplaceholder.typicode.com/users"

export async function fetchUsers() {
    const data = await fetch(USERS_URI);
    const users = await data.json();
    return users;
}


const mockData = [
    { id: 1, name: "John Doe", email: "johndoe@example.com" },
    { id: 2, name: "Jane Smith", email: "janesmith@example.com" },
];

type mockDataType = {
    id: number;
    name: string;
    email: string;
}

export async function createUser(userInfo: any): Promise<mockDataType> {
    const id = mockData.length + 1;
    const user = { id, ...userInfo };
    mockData.push(user);
    return Promise.resolve(user);
}