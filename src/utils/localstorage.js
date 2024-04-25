const getItem = (key) => {
    let data = JSON.parse(localStorage.getItem(key));
    return data;
}

const setItem = (data) => {
    let temp = JSON.stringify(data.value);
    localStorage.setItem(data.key, temp);
    return true;
}

const LocalStorage = {getItem, setItem}
export default LocalStorage;

