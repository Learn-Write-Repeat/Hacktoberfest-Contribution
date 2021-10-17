This project uses the MNIST handwritten digits dataset. It is a dataset containing of 28x28 pixel images of digits from 0 to 9. It contains a total of 70000 examples of handwritten digits.

The code imports the mnist_784 dataset hosted on openml.org and uses it to train and test the neural network. The neural network is split into 4 layers – 1 input layer(of 28x28 = 784 nodes), 2 hidden layer(of 128 and 64 nodes) and 1 output layer(of 10 nodes, one of which is 1 denoting the corresponding index value is the output of target). 

The backpropagation algorithm used here is implemented from scratch and can be used to get a good idea of implementation for begineers. The only libraries used here are to fetch the MNIST dataset.

The neural network consists of feed-forward network for calculating output values for each training set and updating the each weight in the neural network based on the error measured in the backward propagation. This process is repeated for all the examples in the training set and tested on the test set for epochs number of times.

The python notebook contains the code for the above-mentioned algorithm.
