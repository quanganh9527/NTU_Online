const url = 'http://59d2419a0ecfcb0011fd4c2b.mockapi.io/user/';
const RemoveUser = (id) => (
        fetch(url+id, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
            })
        })
);
export default RemoveUser;