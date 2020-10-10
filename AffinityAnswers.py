import re

def tokenize(text): 
    return re.findall(r'\w+', text.lower())

racial_slur= {"list of slur racial"}

#Creating array to store each line of text file
def file_read(fname):
        content_array = []
        with open(fname) as f:    
                for line in f:
                        content_array.append(line)
file_read('test.txt')
profanity=[]
for x in content_array:
	tokens = tokenize(x)
	#number of occurrences normalized by total number
	degree_of_profanity = sum(1 for t in tokens if t in racial_slur) / len(tokens)
	profanity.append(degree_of_profanity)

print(content_array,profanity)