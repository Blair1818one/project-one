# The program that takes a students score and outputs the letter grade.
# Ask the user to enter the score
score = float(input("Enter the students score (0-100):"))

# Check if the score is within the vaild range
if score < 0 or score > 100:
    print("Invalid score, please enter a score between 0 and 100.")
elif score >= 90:
    print("Grade: A")
elif score >= 80:
    print("Grade: B")
elif score >= 70:
    print("Grade: C")
elif score >= 60:
    print("Grade: D")
else:
    print("Grade: F")
