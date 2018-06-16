
const FetchArray = (url) =>(
    fetch(url).then(response => response.json())
);
export default FetchArray;