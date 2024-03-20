import cv2
import mediapipe as mp
import numpy as np
from tensorflow.keras.models import load_model

mp_hands = mp.solutions.hands
hands = mp_hands.Hands(static_image_mode=False, max_num_hands=2, min_detection_confidence=0.5)

model = load_model("C:\\Users\\sidug\\Downloads\\trained_model (2).h5")
