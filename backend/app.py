from flask import Flask
from flask_cors import CORS
from routes.auth import auth_bp

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})  # Allow all origins for simplicity. Restrict this in production.

app.register_blueprint(auth_bp, url_prefix='/')

if __name__ == '__main__':
    app.run(debug=True)
