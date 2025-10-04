# The movie ticket and price calculator
# Ask the user  to enter their age 
age = int(input("Enter your age: "))

# Determine the ticket price 
if age < 0:
    print("Invaild age. Please eneter a positive number.")
elif age < 5:
    print("Your ticket is free.")
elif age <=13:
    print("your ticket price is shs.10,200.")
elif age <= 63:
    print("Your ticket price is shs. 12,200.")
else:
    print("Your ticket price is shs.12500")