from flask import Flask, jsonify, request
import cv2


app = Flask(__name__)

@app.route('/detect', methods=['POST'])
def detect():
    # Get the video frame from the request
    #frame = request.files['frame'].read()

    # Preprocess the frame
    #frame = cv2.imdecode(np.frombuffer(frame, np.uint8), cv2.IMREAD_COLOR)
    #frame = cv2.resize(frame, (224, 224))
    #gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)

    # Detect sign language gestures
    model = load_model('sign_language_model.h5')
    prediction = model.predict(gray.reshape(1, 224, 224, 1))
    label = np.argmax(prediction)

    # Return the class label as a JSON response
    return jsonify({'label': label})
    


if __name__ == '__main__':
    app.run(debug=True)