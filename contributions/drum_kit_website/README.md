Drum Kit Website

index.html - Basic Website Strucute
styles.css - Styling of the elements in the index.html
index.js - Working behind the website

index.html and styles.css are basic to undestand for building a static website.

I will be explaining the working of the website - index.js :
1) we used .addEventListner() to check if any click/key press is practiced.
2) We added .addEventListner(click) to all the instruments which has class .drum using an for loop to reduce the repitation of same code adding .addEventListner(click) to each instrument.
3) We added .addEventListner(keypress) which will triger makeSound() and makeAnimation() if the keys a,w,s,d,j,k,l are pressed on keyboard.
4) makeSound(key) will play the sound of the instrument of the particular key pressed.
5) makeAnimation(key) will display a flash animation to let the user know that this particular key was pressed.
6) All combined, when a key is pressed or a key button was clicked, makeSound(key) will make the sound and makeAnimation(key) will flash the instrument.

Thank You.