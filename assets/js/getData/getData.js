
const defaultRoute = 'http://127.0.0.1/api';

const getData = async (route) => {
    const dataRoute = defaultRoute + route;
    const response = await fetch(dataRoute);
    return response.json();
}

export default getData;