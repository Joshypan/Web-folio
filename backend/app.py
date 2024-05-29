from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/')
def home():
    return "Welcome to Joshua's Webfolio Backend!"

@app.route('/api/projects')
def projects():
    projects = [
        {
            "id": 1,
            "name": "Project One",
            "description": "Description for project one",
            "tech_stack": ["React", "Python"]
        },
        {
            "id": 2,
            "name": "Project Two",
            "description": "Description for project two",
            "tech_stack": ["HTML", "CSS", "JavaScript"]
        }
    ]
    return jsonify(projects)

@app.route('/api/contact', methods=['POST'])
def contact():
    data = request.get_json()
    name = data.get('name')
    email = data.get('email')
    message = data.get('message')
    # Here you would normally process the data, e.g., send an email
    print(f"Received message from {name} ({email}): {message}")
    return jsonify({"message": "Message received"}), 200

if __name__ == '__main__':
    app.run(debug=True)
