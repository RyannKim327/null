npm install node-cron
npm install --save-dev @types/node-cron
import cron from "node-cron";

cron.schedule("* * * * *", () => {
  const now = new Date();
  console.log(`Current time: ${now.toISOString()}`);
});

console.log("Cron job started, logging time every minute.");
