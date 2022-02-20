const makerequerst = async(url, method, data) => {
    const res = await $.ajax({
        url: url,
        method: method,
        data: data
    })
    return res;
}
const getData = () => {
    makerequerst('https://jsonplaceholder.typicode.com/posts', 'POST', {
            title: 'foo',
            body: 'bar',
            userId: 1,
        })
        .then((res) => console.log(res))
}
getData();