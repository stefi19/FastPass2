from flask import Blueprint, request, jsonify
from models.user import create_user, get_user_by_email, verify_password

auth_bp = Blueprint('auth', __name__)

@auth_bp.route('/signup', methods=['POST'])
def signup():
    data = request.get_json()
    email = data['email']
    password = data['password']

    if get_user_by_email(email):
        return jsonify({"success": False, "message": "User already exists"}), 400

    create_user(email, password)
    return jsonify({"success": True}), 201

@auth_bp.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    email = data['email']
    password = data['password']

    user = get_user_by_email(email)
    if user and verify_password(user['password'], password):
        return jsonify({"success": True}), 200
    else:
        return jsonify({"success": False, "message": "Invalid credentials"}), 401

@auth_bp.route('/forgot-password', methods=['POST'])
def forgot_password():
    data = request.get_json()
    email = data['email']

    user = get_user_by_email(email)
    if user:
        # Implement your password reset logic here
        # For example, generate a reset token and send an email
        return jsonify({"success": True}), 200
    else:
        return jsonify({"success": False, "message": "Email not found"}), 404
