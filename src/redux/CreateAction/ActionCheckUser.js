export function fetchUser(user, pass, id, gioitinh, permission, chuyenghanh, noisinh, ngaysinh, lop, hoten) {
    return {
        type: 'changeUser',
        user,
        pass,
        id,
        gioitinh,
        permission,
        chuyenghanh,
        noisinh,
        ngaysinh,
        lop,
        hoten,
    };
}