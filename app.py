from flask import Flask, render_template, request

# نحدد مجلدات templates و static صراحةً
app = Flask(__name__, template_folder="templates", static_folder="static")

@app.route("/")
def home():
    return render_template("index.html")

# عارض الـ PDF: /catalog?file=tece.pdf&title=TECE
@app.route("/catalog")
def catalog_viewer():
    file = request.args.get("file")
    title = request.args.get("title", "الكتالوج")
    if not file:
        return "PDF not specified.", 400
    return render_template("catalog.html", file=file, title=title)

if __name__ == "__main__":
    app.run(debug=True)
