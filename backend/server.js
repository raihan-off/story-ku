const app = require('./app');
const config = require('./config');

const PORT = config.port || 3001;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
