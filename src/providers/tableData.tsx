export async function TableData() {
    const responseD = fetch('https://randomuser.me/api/?page=1&results=100').then((response) => response.json())
    return responseD
}
