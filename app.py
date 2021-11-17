from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/graphs")
def graph():
    return render_template("graphs.html")

@app.route("/maps")
def maps():
    return render_template("maps.html")

@app.route("/carousel")
def carousel():
    return render_template("carousel.html")
    
if __name__ == "__main__":
    app.run(debug=True)