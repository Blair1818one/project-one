#The simple calculation program
# Ask the user to enter the firsr number and the second number
num1 = float(input("Enter the first number:"))
num2 = float(input("Enter the second number:"))

# Ask the user to enter the operator
operator = input("Enter an operator (+, -, *, /):")

# perform the calculation base on the operator
if operator == "+":
    result = num1 + num2
    print("The result is:", result)
elif operator == "-":
    result = num1 - num2
    print("The result is:", result)
elif operator == "*":
    result = num1 * num2
    print("The result is:", result)
elif operator == "/":
    if num2 != 0:
        result = num1 / num2
        print("The result is:", result)
    else:
        print("Error: Division by zero is not allowed.")
else:
    print("Invalid operator.")