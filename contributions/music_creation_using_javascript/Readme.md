index.html is providing the structure of the website.
style.css is helping in provifing style to the website.

script.js is for giving animation and dynamic behaviour to the website.

In script.js we have created four arrays named as sounds,pads,visuals and colours.

/*
pads.forEach((pad, index) => {
      pad.addEventListener("click", function() {
        sounds[index].currentTime = 0;
        sounds[index].play();
        createBubble(index);
      });
    });
*/
The above code is helping us in playing the sound whenever there is click on a pad and creating bubble by calling create bubble function.


/* 
const createBubble = index => {
      //Create bubbles
      const bubble = document.createElement("div");
      visual.appendChild(bubble);
      bubble.style.backgroundColor = colors[index];
      bubble.style.animation = `jump 1s ease`;
      bubble.addEventListener("animationend", function() {
        visual.removeChild(this);
      });
    };
*/
The above code is helping us in making animation.