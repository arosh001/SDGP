import cv2
import mediapipe as mp
import numpy as np
from tensorflow.keras.models import load_model

mp_hands = mp.solutions.hands
hands = mp_hands.Hands(static_image_mode=False, max_num_hands=2, min_detection_confidence=0.5)

model = load_model("C:\\Users\\sidug\\Downloads\\trained_model (2).h5")

# Define the extract_bounding_box function
def extract_bounding_box(hand_landmarks, frame_shape):
    x_values = [landmark.x for landmark in hand_landmarks.landmark]
    y_values = [landmark.y for landmark in hand_landmarks.landmark]

    x_min = min(x_values) * frame_shape[1]
    y_min = min(y_values) * frame_shape[0]

    return int(x_min), int(y_min)
