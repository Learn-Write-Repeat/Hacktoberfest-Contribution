#Aim is to calculate Luminosity/Brightness of an image using its L-channel value

import cv2
import glob
import PIL 
from PIL import Image 
import os
import numpy as np
from skimage import io, color

#Using glob to read the image, Main reason of using Glob here because it help in reading multiple images at a time by using the syntax *.JPG..
for img_name in glob.glob("C:/Users/saloni.shukla/Downloads/tesla.JPG"):
    img=cv2.imread(img_name)
    #Converting BGR format image into RGB format
    rgb_image = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
    #Converting RGB format image to LAB format 
    img = color.rgb2lab(rgb_image, illuminant='D50')
    #Spliting the colorspace in LAB
    l,a,b = cv2.split(img)
    #With flatten, creating normalized score of luminosity 
    luminosity=np.average(l.flatten())
    print(luminosity)
       
