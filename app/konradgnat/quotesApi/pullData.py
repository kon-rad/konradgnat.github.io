# importing the requests library 
import requests 	import requests 
import json	import json

print(data["quoteText"])	  print(data["quoteText"])
post_data = {"text": data["quoteText"], "author": data["quoteAuthor"] }	  
print("post data: ", post_data)	  
print("post data: ", post_data)
r_post = requests.post('https://konradgnat.com/quotes-api/quotes/', json=post_data, auth=('<>', '<>'))
print("post status code: ", r_post.status_code)	 
