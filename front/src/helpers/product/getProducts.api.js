const url = import.meta.env.VITE_API_URL;

const getProductsApi = async (product) => {
    
    const response = await fetch(`${url}/api/product`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
        }
    });

    const content = await response.json();
    return content?.data || content;
};

export { getProductsApi };