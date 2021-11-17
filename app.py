from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/left-button")
def left_button():
    return "You clicked the left button!"

@app.route("/middle-button")
def middle_button():
    return "You clicked the middle button!"

@app.route("/right-button")
def right_button():
    return "You clicked the right button!"
    
if __name__ == "__main__":
    app.run(debug=True)