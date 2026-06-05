const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export const serverMutation = async(path, data) => {

    const res = await fetch(`${baseUrl}${path}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    //handle 401, 403, 500 errors globally


    const responseData = await res.json();
    return responseData;
}

export const serverFetch = async(path) => {
    const res = await fetch(`${baseUrl}${path}`);
    const data = await res.json();
    return data;
}