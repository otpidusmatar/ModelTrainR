from flask import Flask, render_template, request, jsonify
from transformers import pipeline
  
app = Flask(__name__, template_folder="../../") 
  
@app.route("/") 
def hello(): 
    return render_template('index.html') 
  
@app.route('/process', methods=['POST']) 
def process(): 
    data = request.get_json() # retrieve the data sent from JavaScript 
    # process the data using Python code 
    # generator = pipeline('text-generation', model='gpt2')
    # result = generator(data)
    result = data
    return jsonify(result=result) # return the result to JavaScript 
  
if __name__ == '__main__': 
    app.run(debug=True) 

# from transformers import pipeline
# generator = pipeline('text-generation', model='gpt2')
# output = generator("Hello, I am a large language model")