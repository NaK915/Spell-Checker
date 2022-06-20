from flask import Flask, request, send_from_directory
from flask_cors import CORS, cross_origin

app = Flask(__name__, static_folder='GrammarChecker/build', static_url_path='')
CORS(app)

@app.route("/")
@cross_origin()
def serve():
    return send_from_directory(app.static_folder, 'index.html')

@app.route("/incomingData", methods=['POST'])
@cross_origin()
def data():
    import spellcheck
    request_data=request.get_json()
    data=request_data['data']
    res=spellcheck.correct_word_spelling(data)
    ans=''
    for i in res:
        ans+=i
        ans+=" "
    return ans

if __name__ == '__main__':
    app.run(host="0.0.0.0", port=5000, debug=True, threaded=True)