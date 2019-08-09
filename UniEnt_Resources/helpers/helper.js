const helper = function () {

    const handler = function (response) {

        console.log(response.status);
        debugger;

        if (response.status >= 400) {
            throw new Error(`Something went wrong. Error: ${response.statusText}`);
        }

        if (response.status !== 204) {
            response = response.json();
        }

        return response;
    };

    const passwordCheck = function (params) {
        return params.password === params.rePassword;
    };

    return {
        handler,
        passwordCheck
    }
}();