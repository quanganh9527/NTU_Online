const url = 'http://59d2419a0ecfcb0011fd4c2b.mockapi.io/user';
const PostUser = (password, username, permission, gioitinh, chuyenghanh, noisinh, ngaysinh, lop, hoten) => (
        fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                password,
                username,
                permission,
                gioitinh,
                chuyenghanh,
                noisinh,
                ngaysinh,
                lop,
                hoten,
            })
        })
);
export default PostUser;