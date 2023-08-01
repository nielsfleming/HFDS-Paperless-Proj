from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Members API route example
@app.route("/members")
def members():
    return {"members": ["Niels", "Mindy", "Jaimil"]}

if __name__ == "__main__":
    app.run(debug=True)