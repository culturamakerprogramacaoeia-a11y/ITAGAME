from flask import Flask, jsonify, request, send_from_directory
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from flask_jwt_extended import JWTManager
import os

app = Flask(__name__, static_folder='../dist', static_url_path='/')
CORS(app)

# Configurações para PythonAnywhere / Local
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///itagame.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['JWT_SECRET_KEY'] = 'super-secret-key-mudar-depois' # Mudar em produção

db = SQLAlchemy(app)
jwt = JWTManager(app)

@app.route('/')
def index():
    return send_from_directory(app.static_folder, 'index.html')

@app.route('/<path:path>')
def catch_all(path):
    if os.path.exists(os.path.join(app.static_folder, path)):
        return send_from_directory(app.static_folder, path)
    return send_from_directory(app.static_folder, 'index.html')

@app.route('/health')
def home():
    return jsonify({"status": "healthy", "message": "ITAGAME API 2.0 - Online"}), 200

# Endpoint de teste para Gamificação
@app.route('/api/stats', methods=['GET'])
def get_stats():
    # Simulação de dados para o Dashboard
    return jsonify({
        "xp": 1250,
        "level": 5,
        "next_level_xp": 2000,
        "rank": 12,
        "achievements": 8
    }), 200

if __name__ == '__main__':
    app.run(debug=True, port=5000)
