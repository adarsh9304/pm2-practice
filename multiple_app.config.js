// suppose we have this kind of two app node and other then we can make like this

module.exports = {
    apps: [
      {
        name: "node-app",
        script: "./node-app/app.js",
        instances: "max",
        exec_mode: "cluster",
        env: {
          NODE_ENV: "development",
          PORT: 3000
        },
        env_production: {
          NODE_ENV: "production",
          PORT: 3000
        }
      },
      {
        name: "flask-app",
        script: "venv/bin/gunicorn",
        args: "app:app -b 127.0.0.1:5000",
        interpreter: "python3",
        env: {
          FLASK_ENV: "development"
        },
        env_production: {
          FLASK_ENV: "production"
        }
      }
    ]
  }
  