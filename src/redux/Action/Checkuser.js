const stateId = {
    user: '',
    pass: '',
    id: '',
    gioitinh: false,
    permission: '',
    chuyenghanh: '',
    noisinh: '',
    ngaysinh: '',
    lop: '',
    hoten: '',
}
const Checkuser = (state = stateId, action) => {
    if (action.type === 'changeUser')
        return {
            user: action.user, pass: action.pass, gioitinh: action.gioitinh, id: action.id,
            chuyenghanh: action.chuyenghanh, noisinh: action.noisinh, ngaysinh: action.ngaysinh,
            lop: action.lop, hoten: action.hoten
        };
    return state;
};
export default Checkuser;