from pymongo import MongoClient

# Replace the following with your MongoDB Atlas connection string
client = MongoClient('mongodb+srv://stefaniamozacu1:dAHilZVsgg9OP3i@clujhackathon.mongodb.net/?retryWrites=true&w=majority')
db = client['event_entry_system']
users = db['users']
