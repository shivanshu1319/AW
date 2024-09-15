from flask import Flask, jsonify, request, abort # type: ignore
from flask_cors import CORS # type: ignore
app = Flask(__name__)
CORS(app)
# In-memory storage for FAQs
faqs = [
    {'id': 1, 'question': 'What is Fruit.ai?', 'answer': 'Fruit.ai is a health management app.'},
    {'id': 2, 'question': 'How does Fruit.ai work?', 'answer': 'It uses AI to track your health metrics.'},
    {'id': 3, 'question': 'How do I create an account?', 'answer': 'You can sign up using our registration form.'},
    {'id': 4, 'question': 'How do I reset my password?', 'answer': 'Use the "Forgot Password" link on the login page.'},
    {'id': 5, 'question': 'How do I contact support?', 'answer': 'You can contact us via the support form on our website.'},
]

# Helper function to find an FAQ by ID
def find_faq(faq_id):
    return next((faq for faq in faqs if faq['id'] == faq_id), None)

# Get all FAQs
@app.route('/faqs', methods=['GET'])
def get_faqs():
    return jsonify(faqs)

# Get a specific FAQ by ID
@app.route('/faqs/<int:faq_id>', methods=['GET'])
def get_faq(faq_id):
    faq = find_faq(faq_id)
    if faq is None:
        abort(404, description="FAQ not found")
    return jsonify(faq)

# Create a new FAQ
@app.route('/faqs', methods=['POST'])
def create_faq():
    if not request.json or 'question' not in request.json or 'answer' not in request.json:
        abort(400, description="Invalid input: 'question' and 'answer' are required")

    new_id = max(faq['id'] for faq in faqs) + 1 if faqs else 1
    new_faq = {
        'id': new_id,
        'question': request.json['question'],
        'answer': request.json['answer']
    }
    faqs.append(new_faq)
    return jsonify(new_faq), 201

# Update an existing FAQ
@app.route('/faqs/<int:faq_id>', methods=['PUT'])
def update_faq(faq_id):
    faq = find_faq(faq_id)
    if faq is None:
        abort(404, description="FAQ not found")

    if not request.json or 'question' not in request.json or 'answer' not in request.json:
        abort(400, description="Invalid input: 'question' and 'answer' are required")

    faq['question'] = request.json['question']
    faq['answer'] = request.json['answer']
    return jsonify(faq)

# Delete an FAQ
@app.route('/faqs/<int:faq_id>', methods=['DELETE'])
def delete_faq(faq_id):
    global faqs
    faq = find_faq(faq_id)
    if faq is None:
        abort(404, description="FAQ not found")
    
    faqs = [faq for faq in faqs if faq['id'] != faq_id]
    return '', 204

# Custom error handlers
@app.errorhandler(404)
def not_found_error(error):
    return jsonify({'error': str(error)}), 404

@app.errorhandler(400)
def bad_request_error(error):
    return jsonify({'error': str(error)}), 400

if __name__ == '__main__':
    app.run(debug=True)
