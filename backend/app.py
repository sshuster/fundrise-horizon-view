
from flask import Flask, request, jsonify
from flask_cors import CORS
from models import db, Startup, Investor, Fundraising
import os

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///fundraise.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# Initialize CORS to allow requests from your frontend
CORS(app, resources={r"/*": {"origins": "*"}})

# Initialize the database
db.init_app(app)

# Create tables on application startup
@app.before_first_request
def create_tables():
    db.create_all()

# Startup endpoints
@app.route('/api/startups', methods=['GET'])
def get_startups():
    startups = Startup.query.all()
    return jsonify([{
        'id': s.id,
        'name': s.name,
        'description': s.description,
        'industry': s.industry,
        'founding_date': s.founding_date,
        'website': s.website
    } for s in startups])

@app.route('/api/startups/<int:startup_id>', methods=['GET'])
def get_startup(startup_id):
    startup = Startup.query.get_or_404(startup_id)
    return jsonify({
        'id': startup.id,
        'name': startup.name,
        'description': startup.description,
        'industry': startup.industry,
        'founding_date': startup.founding_date,
        'website': startup.website
    })

@app.route('/api/startups', methods=['POST'])
def create_startup():
    data = request.get_json()
    startup = Startup(
        name=data['name'],
        description=data.get('description', ''),
        industry=data.get('industry', ''),
        founding_date=data.get('founding_date', ''),
        website=data.get('website', '')
    )
    db.session.add(startup)
    db.session.commit()
    return jsonify({'id': startup.id, 'message': 'Startup created successfully'}), 201

# Investor endpoints
@app.route('/api/investors', methods=['GET'])
def get_investors():
    investors = Investor.query.all()
    return jsonify([{
        'id': i.id,
        'name': i.name,
        'firm_name': i.firm_name,
        'investment_focus': i.investment_focus,
        'website': i.website,
        'email': i.email
    } for i in investors])

@app.route('/api/investors/<int:investor_id>', methods=['GET'])
def get_investor(investor_id):
    investor = Investor.query.get_or_404(investor_id)
    return jsonify({
        'id': investor.id,
        'name': investor.name,
        'firm_name': investor.firm_name,
        'investment_focus': investor.investment_focus,
        'website': investor.website,
        'email': investor.email
    })

@app.route('/api/investors', methods=['POST'])
def create_investor():
    data = request.get_json()
    investor = Investor(
        name=data['name'],
        firm_name=data.get('firm_name', ''),
        investment_focus=data.get('investment_focus', ''),
        website=data.get('website', ''),
        email=data.get('email', '')
    )
    db.session.add(investor)
    db.session.commit()
    return jsonify({'id': investor.id, 'message': 'Investor created successfully'}), 201

# Fundraising endpoints
@app.route('/api/fundraising', methods=['GET'])
def get_fundraisings():
    fundraisings = Fundraising.query.all()
    return jsonify([{
        'id': f.id,
        'startup_id': f.startup_id,
        'target_amount': f.target_amount,
        'raised_amount': f.raised_amount,
        'start_date': f.start_date,
        'end_date': f.end_date,
        'status': f.status
    } for f in fundraisings])

@app.route('/api/fundraising/<int:fundraising_id>', methods=['GET'])
def get_fundraising(fundraising_id):
    fundraising = Fundraising.query.get_or_404(fundraising_id)
    return jsonify({
        'id': fundraising.id,
        'startup_id': fundraising.startup_id,
        'target_amount': fundraising.target_amount,
        'raised_amount': fundraising.raised_amount,
        'start_date': fundraising.start_date,
        'end_date': fundraising.end_date,
        'status': fundraising.status
    })

@app.route('/api/fundraising', methods=['POST'])
def create_fundraising():
    data = request.get_json()
    fundraising = Fundraising(
        startup_id=data['startup_id'],
        target_amount=data['target_amount'],
        raised_amount=data.get('raised_amount', 0),
        start_date=data.get('start_date', ''),
        end_date=data.get('end_date', ''),
        status=data.get('status', 'Active')
    )
    db.session.add(fundraising)
    db.session.commit()
    return jsonify({'id': fundraising.id, 'message': 'Fundraising created successfully'}), 201

@app.route('/api/fundraising/<int:fundraising_id>', methods=['PUT'])
def update_fundraising(fundraising_id):
    fundraising = Fundraising.query.get_or_404(fundraising_id)
    data = request.get_json()
    
    if 'target_amount' in data:
        fundraising.target_amount = data['target_amount']
    if 'raised_amount' in data:
        fundraising.raised_amount = data['raised_amount']
    if 'start_date' in data:
        fundraising.start_date = data['start_date']
    if 'end_date' in data:
        fundraising.end_date = data['end_date']
    if 'status' in data:
        fundraising.status = data['status']
    
    db.session.commit()
    return jsonify({'message': 'Fundraising updated successfully'})

if __name__ == '__main__':
    app.run(debug=True)
