# The program that classifies the Age
# Ask the user to enter ther age
age = int(input("Enter your age: "))

# Check the age and print the message 
if age < 13:
    print("You are a child.")
elif age < 19:
    print("you are a teenager.")
else:
    print("you are an adult.")




# The program that checks if a number is even or odd
# Ask the user to enter a number
number = int(input("Enter a number:"))

# check if the number is even or odd
if number % 2 == 0:
    print(f"{number} is an even number.")
else:
    print(f"{number} is an odd number.")
