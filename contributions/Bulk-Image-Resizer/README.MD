A simple script to bulk resize images.

libraries used 
- Pil (This is used because its quick and better than the deprecated scipy imgresize)
- os (This is used for os related tasks)

How we access the image directories:
img_dir = r'Image directory'

This is how we resize images, you can replace "80", "160" with the sizes you want.
	img = img.resize((80, 160)
  
  
This gives the resized images it's name which is currently its old name with _resized at the end.
	img.save(f + '_resized.jpg')

