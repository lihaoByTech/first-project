const path = require('path');
const express = require('express');
const app = express();

// api接口
app.use(express.static(path.resolve(__dirname, '../dist')));

app.listen(3027);
