from flask import Blueprint, request, jsonify
from models import db, Property, Unit, Tenant, Lease, Payment
from datetime import datetime, date

bp = Blueprint('api', __name__)


@bp.route('/properties', methods=['GET'])
def get_properties():
    props = Property.query.all()
    out = []
    for p in props:
        out.append({
            'id': p.id, 'name': p.name, 'address': p.address,
            'units': [{'id': u.id, 'unit_number': u.unit_number, 'monthly_rent': float(u.monthly_rent or 0), 'is_available': u.is_available} for u in p.units]
        })
    return jsonify(out)


@bp.route('/properties', methods=['POST'])
def create_property():
    data = request.json
    p = Property(name=data.get('name'), address=data.get('address'))
    db.session.add(p)
    db.session.commit()
    return jsonify({'id': p.id}), 201


@bp.route('/tenants', methods=['GET'])
def get_tenants():
    tenants = Tenant.query.all()
    return jsonify([{'id': t.id, 'full_name': t.full_name, 'phone': t.phone, 'email': t.email} for t in tenants])


@bp.route('/tenants', methods=['POST'])
def add_tenant():
    data = request.json
    t = Tenant(full_name=data.get('full_name'), phone=data.get(
        'phone'), email=data.get('email'), notes=data.get('notes'))
    db.session.add(t)
    db.session.commit()
    return jsonify({'id': t.id}), 201


@bp.route('/leases', methods=['GET'])
def get_leases():
    leases = Lease.query.all()
    out = []
    for l in leases:
        out.append({
            'id': l.id,
            'tenant': {'id': l.tenant.id, 'full_name': l.tenant.full_name} if l.tenant else None,
            'unit': {'id': l.unit.id, 'unit_number': l.unit.unit_number, 'property_id': l.unit.property_id} if l.unit else None,
            'start_date': l.start_date.isoformat() if l.start_date else None,
            'end_date': l.end_date.isoformat() if l.end_date else None,
            'rent_amount': float(l.rent_amount or 0),
            'deposit_amount': float(l.deposit_amount or 0),
            'status': l.status
        })
    return jsonify(out)


@bp.route('/leases', methods=['POST'])
def create_lease():
    data = request.json
    tenant_id = data.get('tenant_id')
    unit_id = data.get('unit_id')
    start_date = datetime.fromisoformat(data.get('start_date')).date(
    ) if data.get('start_date') else date.today()
    end_date = datetime.fromisoformat(
        data.get('end_date')).date() if data.get('end_date') else None
    rent_amount = data.get('rent_amount')
    deposit_amount = data.get('deposit_amount', 0)
    lease = Lease(tenant_id=tenant_id, unit_id=unit_id, start_date=start_date, end_date=end_date,
                  rent_amount=rent_amount, deposit_amount=deposit_amount, status='active')
    db.session.add(lease)

    unit = Unit.query.get(unit_id)
    if unit:
        unit.is_available = False
    db.session.commit()
    return jsonify({'id': lease.id}), 201


@bp.route('/payments', methods=['GET'])
def get_payments():
    payments = Payment.query.order_by(Payment.date.desc()).limit(200).all()
    out = []
    for p in payments:
        out.append({
            'id': p.id,
            'lease_id': p.lease_id,
            'amount': float(p.amount or 0),
            'date': p.date.isoformat(),
            'payment_type': p.payment_type,
            'method': p.method,
            'reference': p.reference,
            'notes': p.notes
        })
    return jsonify(out)


@bp.route('/payments', methods=['POST'])
def add_payment():
    data = request.json
    p = Payment(lease_id=data.get('lease_id'), amount=data.get('amount'), date=datetime.fromisoformat(data.get('date')) if data.get(
        'date') else datetime.utcnow(), payment_type=data.get('payment_type'), method=data.get('method'), reference=data.get('reference'), notes=data.get('notes'))
    db.session.add(p)
    db.session.commit()
    return jsonify({'id': p.id}), 201
