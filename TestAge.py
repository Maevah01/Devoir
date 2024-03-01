age = int(input("age?"))
def est_ado(age):
if age<=18 :
   return True
else age<21 :
   return False
if est_ado(age):
    print("vous etes adolescent")
else:
    print("vous etes majeur")
