const url = 'http://59d2419a0ecfcb0011fd4c2b.mockapi.io/user/';
const PutGT = (id, gioitinh) => (
    fetch(url + id, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            gioitinh,
        })
    })
);
export default PutGT;