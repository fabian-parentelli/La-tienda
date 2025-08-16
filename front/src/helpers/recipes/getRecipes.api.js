const url = import.meta.env.VITE_API_URL;

const getRecipesApi = async (obj) => {

    let urlData = `${url}/api/reciper?`;

    if (obj.page) urlData += `page=${obj.page}&`;
    if (obj.active !== undefined) urlData += `active=${obj.active}&`;

    if (urlData.endsWith('&')) urlData = urlData.slice(0, -1);

    const response = await fetch(urlData, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    });

    const content = await response.json();
    return content?.data || content;
};

export { getRecipesApi };