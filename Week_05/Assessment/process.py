# PART ONE

# log_file = open("um-server-01.txt")     #<-- is opening the text file in python for data to be accessed


# def sales_reports(log_file):            #<-- creates a log of the sales report
#     for line in log_file:               #<-- loops through each line in the sales report
#         line = line.rstrip()            #<-- returns the lines without extra characters
#         day = line[0:3]                 #<-- targets the 0-3 index to pick out the day
#         if day == "Tue":                #<-- an if statement selecting "Tue" days
#             print(line)                 #<-- returns and gives us only the "Tue" lines


# sales_reports(log_file)                 #<-- runs sales_reports function to give us only "Tue" data

#----------------------------------------------------PART TWO--------------------------------------------------------------------------

log_file = open("um-server-01.txt")     


def sales_reports(log_file):            
    for line in log_file:               
        line = line.rstrip()            
        day = line[0:3]                 
        if day == "Mon":                
            print(line)                 


sales_reports(log_file)                 


#----------------------------------------------------------------------------
def qty_sales_reports(log_file):
    for line in log_file:
        split_line = line.split(' ')
        qty = int(split_line[2])
        if qty > 10:
            print(line)

qty_sales_reports(log_file)
