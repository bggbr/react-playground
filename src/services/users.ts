// const USERS_URI = "https://jsonplaceholder.typicode.com/users"
const USERS_URI = "http://localhost:1222/user"

export async function fetchUsers() {
    const data = await fetch("/api/user");
    const users = await data.json(); 
    return users;
}

export async function fetchUser(params: {queryKey: [string, {id: number}]}) {
    const { id } = params.queryKey[1];
    const data = await fetch(`${USERS_URI}/${id}`);
    const user = await data;
    return user;
}

const mockData = [
    { id: 1, name: "John Doe", email: "johndoe@example.com" },
    { id: 2, name: "Jane Smith", email: "janesmith@example.com" },
];

export type FetchUserParams = {
    queryKey: [string, { id: number }];
};
  
export type MockDataType = {
    id: number;
    name: string;
    email: string;
};

export async function createUser(userInfo: any): Promise<MockDataType> {
    const id = mockData.length + 1;
    const user = { id, ...userInfo };
    mockData.push(user);
    return Promise.resolve(user);
}