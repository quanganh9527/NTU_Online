const url = 'http://59d2419a0ecfcb0011fd4c2b.mockapi.io/user/';
const PutPass = (id, password) => (
    fetch(url + id, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            password,
        })
    })
);
export default PutPass;