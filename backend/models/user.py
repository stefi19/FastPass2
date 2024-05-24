from pymongo import MongoClient
from bcrypt import hashpw, gensalt, checkpw

client = MongoClient('mongodb://localhost:27017/')
db = client['event_entry_system']
users = db['users']

def create_user(email, password):
    hashed_password = hashpw(password.encode('utf-8'), gensalt())
    user = {
        "email": email,
        "password": hashed_password
    }
    return users.insert_one(user)

def get_user_by_email(email):
    return users.find_one({"email": email})

def verify_password(stored_password, provided_password):
    return checkpw(provided_password.encode('utf-8'), stored_password)
