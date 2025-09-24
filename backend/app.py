from flask import Flask, jsonify
from flask_cors import CORS
from models import db
import os


def create_app():
    app = Flask(__name__)
    base = os.path.abspath(os.path.dirname(__file__))
    app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get(
        'DATABASE_URL', 'sqlite:///' + os.path.join(base, 'database.db'))
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    db.init_app(app)
    CORS(app)

    with app.app_context():
        from models import User, Property, Unit, Tenant, Lease, Payment
        db.create_all()
        from routes import bp
        app.register_blueprint(bp, url_prefix='/api')

    @app.route('/')
    def hello():
        return jsonify({"ok": True, "msg": "Rental & Income backend running"})

    return app


if __name__ == '__main__':
    create_app().run(debug=True)
