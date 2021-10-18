This piece of code help in calculating the brightness of an image (I've comment out the method to make this code run for entire folder of images)
Main concept behind this code is ColorSpace. 
In python language we have options to change the colorspace of the images
LAB colorspace is useful for calculation of brigthness/luminosity because the 'L' channel in LAB store the luminious value, and this is what we required to calculate.
Please visit the code to better understanding the method of calculating it

Please remember the L-channel scale is 0 to 255
