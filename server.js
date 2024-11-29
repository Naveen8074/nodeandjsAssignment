const express = require('express');

const app = express();

app.get('/', (req, res) => {

    res.json({
        message: "Hello, this is your JSON response!",
        status: "success",
        timestamp: new Date().toISOString(),
    });
});

app.listen(3000, () => {
    console.log(`Server is running on http://localhost:3000`);
});
