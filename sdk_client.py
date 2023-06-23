from student import Student
import sys
import student_sdk as student_sdk

def get_data(arg1, arg2, arg3):
    student = Student(
        arg1,
        arg2,
        arg3
    )
    student_sdk.add_student(student)
get_data(sys.argv[1], sys.argv[2], sys.argv[3])


print(student_sdk.get_students())

student_sdk.delete_student()
