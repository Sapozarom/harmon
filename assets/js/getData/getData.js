
const defaultRoute = 'http://testowe.sasartele.pl/api';

const getData = async (route) => {
    const dataRoute = defaultRoute + route;
    const response = await fetch(dataRoute);
    return response.json();
}

export default getData;