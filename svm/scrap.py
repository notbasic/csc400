from bs4 import BeautifulSoup
import requests
import time

url= "http://192.168.1.128:5000"
page = requests.get(url)

soup = BeautifulSoup(page.text, 'html.parser')

lists = soup.find_all('span', class_="volts")

# for list in lists:
#     title = list.find_all('div', class_="volts")[0]
#     #print(title)


for x in soup.find_all('span', class_="volts"):
    print(x.text)












#print(lists)
