import hashlib
from .db import users

def create_user(email, password):
    hashed_password = hashlib.sha256(password.encode()).hexdigest()
    user = {
        "email": email,
        "password": hashed_password
    }
    return users.insert_one(user)

def get_user_by_email(email):
    return users.find_one({"email": email})

def verify_password(stored_password, provided_password):
    return stored_password == hashlib.sha256(provided_password.encode()).hexdigest()
