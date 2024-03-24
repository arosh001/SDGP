from flask import Flask, jsonify, request
import os
import cv2
import mediapipe as mp
from tensorflow.keras.models import load_model
import firebase_admin
import numpy as np
from firebase_admin import credentials, firestore



app = Flask(__name__)

# Define the extract_bounding_box function
def extract_bounding_box(hand_landmarks, frame_shape):
    x_values = [landmark.x for landmark in hand_landmarks.landmark]
    y_values = [landmark.y for landmark in hand_landmarks.landmark]

    x_min = min(x_values) * frame_shape[1]
    y_min = min(y_values) * frame_shape[0]

    return int(x_min), int(y_min)


@app.route('/detect', methods=['POST'])
def detect():
    # Load MediaPipe Hands module
    mp_hands = mp.solutions.hands
    hands = mp_hands.Hands(static_image_mode=False, max_num_hands=2, min_detection_confidence=0.5)

    # Load the pre-trained CNN model
    model = load_model("C:\\Users\\hansi\\Desktop\\8888.h5")

    # Open a connection to the camera (0 represents the default camera)
    cap = cv2.VideoCapture(0)

    # Preprocessing parameters
    image_width, image_height = 480,640   # Assuming your model expects 400x400 input

    while True:
        # Capture video frame-by-frame
        ret, frame = cap.read()

        # Convert the BGR image to RGB
        rgb_frame = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
        #  cv2.imwrite("C:\\Users\\sidug\\OneDrive\\Desktop\\rgb frame\\1.png", rgb_frame)

        # Process the image and get hand landmarks using MediaPipe
        results = hands.process(rgb_frame)


        if results.multi_hand_landmarks:
            for hand_landmarks in results.multi_hand_landmarks:
                 # Extract bounding box coordinates based on hand landmarks
                 x, y = extract_bounding_box(hand_landmarks, frame.shape)

                 # Convert the RGB frame to grayscale
                 gray_frame = cv2.cvtColor(rgb_frame, cv2.COLOR_RGB2GRAY)
                 #  cv2.imwrite("C:\\Users\\sidug\\OneDrive\\Desktop\\gray\\1.png", gray_frame)

                 # Extract the region of interest (ROI) for hand sign recognition
                 roi_sign = gray_frame[y:y + image_height, x:x + image_width]

                 # Print out the shape and pixel values of roi_sign before preprocessing
                 print("ROI Sign shape (before preprocessing):", roi_sign.shape)
                 print("ROI Sign pixels (before preprocessing):", roi_sign)

                 # Save the ROI frame as a PNG image
                 #  cv2.imwrite("C:\\Users\\sidug\\OneDrive\\Desktop\\roi\\roi_frame.png", roi_sign)

                 # Preprocess the captured frame for the model
                 roi_sign = cv2.resize(roi_sign, (image_width, image_height))
                 roi_sign = np.expand_dims(roi_sign, axis=-1)  # Add channel dimension
                 roi_sign = roi_sign / 255.0  # Normalize pixel values
                 #  cv2.imwrite("C:\\Users\\sidug\\OneDrive\\Desktop\\roi2\\roi_frame.png", roi_sign)

                 # Print out the shape and pixel values of roi_sign after preprocessing
                 print("ROI Sign shape (after preprocessing):", roi_sign.shape)
                 print("ROI Sign pixels (after preprocessing):", roi_sign)

                 # Make predictions using the loaded model
                 prediction = model.predict(np.expand_dims(roi_sign, axis=0))
                 class_index = np.argmax(prediction)
                 class_label = f'Class: {class_index}'

                 # Display the recognized hand sign label above the left corner of the relevant hand
                 cv2.putText(frame, class_label, (x, y - 10), cv2.FONT_HERSHEY_SIMPLEX, 0.5, (0, 255, 0), 1)

        # Display the video feed
        cv2.imshow('Camera App', frame)

        # Break the loop if 'q' key is pressed
        if cv2.waitKey(1) & 0xFF == ord('q'):
             break

    # Release the camera and close all windows
    cap.release()
    cv2.destroyAllWindows()


# Initialize Firebase admin SDK
cred = credentials.Certificate('path/to/your-service-account-file.json')
firebase_admin.initialize_app(cred)

db = firestore.client()

def search_videos(collection,keyword):
     videos_ref = db.collection('collection')
     query = videos_ref.where('tags', 'array-contains', keyword.lower())
     results = query.stream()

     video_list = []
     for doc in results:
         data = doc.to_dict()
         video_list.append({
             'id': doc.id,
             'title': data['title'],
             'url': data['url']
         })

     return video_list


@app.route('/api/videos', methods=['GET'])
def get_videos():
     keyword = request.args.get('keyword')
     if not keyword:
         return jsonify({'error': 'Keyword is required'}), 400

     videos = search_videos()



if __name__ == '__main__':
    app.run(debug=True)