function fetchDataWithCallback(callback) {
    setTimeout(function () {
        let error = true;

        try {
            if (error) {
                throw new Error("Fetch failed");
            }
            callback("Data fetched");
        } catch (err) {
            console.error("Error: " + err.message);
        }
    }, 2000);
}

function handleData(result) {
    console.log(result);
}

fetchDataWithCallback(handleData);