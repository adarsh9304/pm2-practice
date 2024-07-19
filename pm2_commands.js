/*

# Start Process
pm2 start server.js

# OR set an application state with name --name or -n
pm2 start web.js --name "node-app-backend"

# Stop Process
pm2 stop node-app-backend

# Restart Process
pm2 restart node-app-backend

# Update Environment Variable
NODE_ENV=production pm2 restart node-app-backend --update-env

# Delete Process
pm2 delete node-app-backend

# List Processes
pm2 list
# Or
pm2 [list|ls|l|status]

# Detail Info about Process with ID
pm2 show 0

# Here 0 is process id
# Reset Restart Count - this will reset restart count
pm2 reset all

# Sort Processes
pm2 list --sort name:desc
OR
pm2 list --sort [name|id|pid|memory|cpu|status|uptime][:asc|desc]

# By default sorting field is name and sorting order is asc
# Watch and Restart app when files change
pm2 start server.js --watch

# Pass extra arguments to the script
pm2 start server.js -- arg1 arg2 arg3

# Delay between automatic restart of application
pm2 start server.js --restart-delay <delay in ms>

# Do not auto restart application
pm2 start server.js --no-autorestart

# Logging
pm2 logs
pm2 logs <app-name>

*/