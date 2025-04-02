
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime

db = SQLAlchemy()

class Startup(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    description = db.Column(db.Text)
    industry = db.Column(db.String(50))
    founding_date = db.Column(db.String(20))
    website = db.Column(db.String(100))
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    
    fundraisings = db.relationship('Fundraising', backref='startup', lazy=True)

class Investor(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    firm_name = db.Column(db.String(100))
    investment_focus = db.Column(db.String(100))
    website = db.Column(db.String(100))
    email = db.Column(db.String(100))
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

class Fundraising(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    startup_id = db.Column(db.Integer, db.ForeignKey('startup.id'), nullable=False)
    target_amount = db.Column(db.Float, nullable=False)
    raised_amount = db.Column(db.Float, default=0)
    start_date = db.Column(db.String(20))
    end_date = db.Column(db.String(20))
    status = db.Column(db.String(20), default='Active')
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
