
const PostInfo = (url, gioitinh, chuyenghanh, noisinh, ngaysinh, lop, hoten, MSSV) => (
    fetch(url, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            gioitinh,
            chuyenghanh,
            noisinh,
            ngaysinh,
            lop,
            hoten,
            MSSV,
        })
    })
);
export default PostInfo;