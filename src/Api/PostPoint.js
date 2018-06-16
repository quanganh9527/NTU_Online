const url ='http://59d2419a0ecfcb0011fd4c2b.mockapi.io/ListPoint/';
const PostPoint = ( arr) => (
    fetch(url, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            listpoint:arr
        })
    })
);
export default PostPoint;