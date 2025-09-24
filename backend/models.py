from flask_sqlalchemy import SQLAlchemy
from datetime import datetime, date

db = SQLAlchemy()


class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120))
    email = db.Column(db.String(200), unique=True)
    password_hash = db.Column(db.String(200))
    created_at = db.Column(db.DateTime, default=datetime.utcnow)


class Property(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    owner_id = db.Column(db.Integer)
    name = db.Column(db.String(200))
    address = db.Column(db.String(300))
    units = db.relationship("Unit", backref="property", lazy=True)


class Unit(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    property_id = db.Column(db.Integer, db.ForeignKey('property.id'))
    unit_number = db.Column(db.String(50))
    monthly_rent = db.Column(db.Numeric(10, 2))
    is_available = db.Column(db.Boolean, default=True)
    leases = db.relationship("Lease", backref="unit", lazy=True)


class Tenant(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    full_name = db.Column(db.String(200))
    phone = db.Column(db.String(50))
    email = db.Column(db.String(200))
    notes = db.Column(db.Text)
    leases = db.relationship("Lease", backref="tenant", lazy=True)


class Lease(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    tenant_id = db.Column(db.Integer, db.ForeignKey('tenant.id'))
    unit_id = db.Column(db.Integer, db.ForeignKey('unit.id'))
    start_date = db.Column(db.Date)

    end_date = db.Column(db.Date, nullable=True)
    rent_amount = db.Column(db.Numeric(10, 2))
    deposit_amount = db.Column(db.Numeric(10, 2), default=0.0)
    status = db.Column(db.String(30), default='active')


class Payment(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    lease_id = db.Column(db.Integer, db.ForeignKey('lease.id'))
    amount = db.Column(db.Numeric(10, 2))
    date = db.Column(db.DateTime, default=datetime.utcnow)
    payment_type = db.Column(db.String(50))  # rent, deposit, other
    method = db.Column(db.String(50))  # cash, mpesa, bank
    reference = db.Column(db.String(200))
    notes = db.Column(db.Text)
    lease = db.relationship("Lease", backref="payments", lazy=True)
