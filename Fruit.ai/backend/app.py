from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Allow cross-origin requests

# In-memory storage for FAQs
faqs = [
    {'id': 1, 'question': 'What is Fruit.ai?', 'answer': 'Fruit.ai is a health management app.'},
    {'id': 2, 'question': 'How does Fruit.ai work?', 'answer': 'It uses AI to track your health metrics.'},
    {'id': 3, 'question': 'How do I create an account?', 'answer': 'You can sign up using our registration form.'},
    {'id': 4, 'question': 'How do I reset my password?', 'answer': 'Use the "Forgot Password" link on the login page.'},
    {'id': 5, 'question': 'How do I contact support?', 'answer': 'You can contact us via the support form on our website.'},
]

# Define a root route
@app.route('/', methods=['GET'])
def index():
    return "Welcome to the Fruit.ai Backend API!", 200

# GET /faqs - Fetch all FAQs
@app.route('/faqs', methods=['GET'])
def get_faqs():
    return jsonify(faqs), 200

# GET /faqs/<id> - Fetch a single FAQ by ID
@app.route('/faqs/<int:faq_id>', methods=['GET'])
def get_faq(faq_id):
    faq = next((item for item in faqs if item['id'] == faq_id), None)
    if faq is None:
        return jsonify({'error': 'FAQ not found'}), 404
    return jsonify(faq), 200

# POST /faqs - Create a new FAQ
@app.route('/faqs', methods=['POST'])
def create_faq():
    new_faq = request.json
    new_faq['id'] = len(faqs) + 1  # Simple ID assignment
    faqs.append(new_faq)
    return jsonify(new_faq), 201

# PUT /faqs/<id> - Update an FAQ by ID
@app.route('/faqs/<int:faq_id>', methods=['PUT'])
def update_faq(faq_id):
    faq = next((item for item in faqs if item['id'] == faq_id), None)
    if faq is None:
        return jsonify({'error': 'FAQ not found'}), 404
    
    data = request.json
    faq.update(data)
    return jsonify(faq), 200

# DELETE /faqs/<id> - Delete an FAQ by ID
@app.route('/faqs/<int:faq_id>', methods=['DELETE'])
def delete_faq(faq_id):
    global faqs
    faqs = [item for item in faqs if item['id'] != faq_id]
    return jsonify({'message': 'FAQ deleted successfully'}), 200

if __name__ == '__main__':
    app.run(debug=True)
