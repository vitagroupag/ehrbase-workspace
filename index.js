const axios = require('axios');

const url = "https://httpbin.org/get";

axios.get(url).then((res) => console.log(res.status));