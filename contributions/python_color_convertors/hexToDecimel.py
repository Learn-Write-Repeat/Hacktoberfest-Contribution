# Python program to convert hex to rgb

hex = input("what is the hex code to convert?")

charOne = hex[0]
charTwo = hex[1]
charThree = hex[2]
charFour = hex[3]
charFive = hex[4]
charSix = hex[5]


def letterToNumber(i):
    if i == "A" or i == "a":
        i = 10
    if i == "B" or i == "b":
        i = 11
    if i == "C" or i == "c":
        i = 12
    if i == "D" or i == "d":
        i = 13
    if i == "E" or i == "e":
        i = 14
    if i == "F" or i == "f":
        i = 15
    return i


charOne = int(letterToNumber(charOne)) * 16
charTwo = int(letterToNumber(charTwo))
charThree = int(letterToNumber(charThree)) * 16
charFour = int(letterToNumber(charFour))
charFive = int(letterToNumber(charFive)) * 16
charSix = int(letterToNumber(charSix))

red = charOne + charTwo
green = charThree + charFour
blue = charFive + charSix

print("rgb(" + str(red) + "," + str(green) + "," + str(blue) + ")")
