const storage = function () {

    const appKey = "kid_HkZeeCtXB";
    const appSecret = "4085914d40b34ac59dbda0595ce663c5";

    const saveData = function(key, value) {
        localStorage.setItem(appKey + key, JSON.stringify(value));
    };

    const getData = function(key){
        return JSON.parse(localStorage.getItem(appKey + key));
    };

    const deleteData = function(key){
        localStorage.removeItem(appKey + key);
    };

    const saveUser = function(data){
        localStorage.setItem(appKey + 'userInfo', JSON.stringify({
            id: data._id,
            username: data.username,
            password: data.password
        }));
        localStorage.setItem(appKey + 'authToken', JSON.stringify(data._kmd.authtoken));
    };

    const deleteUser = function(){
        localStorage.removeItem(appKey + 'userInfo');
        localStorage.removeItem(appKey + 'authToken');
    };

    return {
        appKey,
        appSecret,
        saveData,
        getData,
        deleteData,
        saveUser,
        deleteUser
    }
}();