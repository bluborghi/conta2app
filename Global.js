

const getData = async (url = '', headers = {}) => {
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            ...headers,
            'Content-Type': 'application/json' 
        },
    })
    return await response.json(); 
}

module.exports = {
    getData
}