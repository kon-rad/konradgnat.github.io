# importing the requests library 
import requests 
import json
from secret import * 
import time

# api-endpoint 
URL = "https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json"

uploaded_count = 0

for n in range(0, 10000):
  print("n", n)
  try:
    r = requests.get(url = URL)
    print("content: ", r.content)
    # dump = json.dumps(r.content)
    # print("dump", dump)
    # .replace(r'\', r'\\')
    data = json.loads(r.content)
    post_data = {"text": data["quoteText"], "author": data["quoteAuthor"] }
  except Exception as e:
    print('Failed to get quote: '+ str(e))
    continue

  print("post data: ", post_data)
  r_post = requests.post('https://konradgnat.com/quotes-api/quotes/', json=post_data, auth=(ADMIN_USER, ADMIN_PASSWORD))
  print("post status code: ", r_post.status_code)
  if r_post.status_code != 201:
    print('post was unsuccessful')
    with open('quotesNotUploadedSuccessfully.json', 'w') as outfile:
        json.dump(post_data, outfile)
  else:
    print('post was successful')
    uploaded_count += 1
  time.sleep(3)
print("posted ", update_count, " number of quotes")
  
