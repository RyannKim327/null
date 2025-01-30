import { scheduleJob } from 'node-schedule';
import { createServer } from 'http';

// Configure a cron job that runs every minute
const job = scheduleJob('*/1 * * * *', () => {
    console.log('Cron job executed every minute!');
});

// Create a basic HTTP server
const server = createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Cron job scheduler is running!\n');
});

// Run the server
server.listen(3000, () => {
    console.log('Server running on port 3000');
});

// Error handling for the scheduler
job.on('error', (err) => {
    console.log('Cron job error:', err);
});

// Run a one-time task immediately
scheduleJob('0 * * * *', () => {
    console.log('One-time task executed!');
}).invoke();
npm install node-schedule
