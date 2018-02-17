
import json
from elasticsearch import Elasticsearch
import re
l2 = open("l2-files.json" , "r")
l2f = open("l2-folders.json" , "r")


fileURLs = json.load(l2)
folderURLs = json.load(l2f)
l2.close()
l2f.close()

def getCatsMap():
	cats_map = {}
	c = open("cats_map.csv" , "r")
	for line in c:
		a = line.strip().split(",")
		cats_map[a[0]] = a[1]
	c.close()
	return cats_map

def getCategories(map , cats):
	o = []
	for i in cats:
		if i in map:
			o.append(map[i])
		else:
			o.append("Uncategorised")
	return o
		
def rsc(str):
	str = str.strip()
	s = str.replace('"' , '')
	s = s.replace(',' , '')
	s = s.replace(';' , '')
	return s

def createDocumnent(es, doc , cats_map):
	esdoc = {}
	
	esdoc["recKey"] = doc["recKey"]
	esdoc["title"] =  doc["title"]
	esdoc["subject"] = doc["subject"]
	esdoc["author"] = doc["author"]
	esdoc["abstract"] = doc["abstract"]
	esdoc["script"] = doc["script"] 
	esdoc["url"] = doc["url"]
	
	esdoc["category"] = doc["category"].strip().replace(" " , "-")
	# There could me multiple spaces between categories, use the following logic to replace them.
	#Replaces "---" to -
	p = re.compile("--*")
	esdoc["category"] = p.sub("-",esdoc["category"])
	esdoc["tree_index"] = esdoc["category"]
	esdoc["category"] = esdoc["category"].split("/")
	print(esdoc["url"])
	print("-----------------------------------")
	#print(esdoc)
	try:
		body = json.dumps(esdoc)
		es.create("nithya_book_index", "book" , esdoc["recKey"],body)
	except e:
		print(e)

#	Title	Subject	Author/Editor/Translator	Description/Abstract	Language	Category																						
def main():	
	f = open("book_catalog.tsv","r", encoding="UTF-8")
	recKey = 0
	es = Elasticsearch()
	cats_map = getCatsMap()
	for line in f:
		a = line.split("\t")
		t = a[1].strip()
		doc = {}
		doc["recKey"] = recKey
		doc["title"] = rsc(a[1])
		doc["subject"] = rsc(a[2])
		doc["author"] = rsc(a[3])
		doc["abstract"] = rsc(a[4])		
		doc["script"] = rsc(a[5])
		doc["category"] = rsc(a[6])
		doc["url"] = rsc(a[7])
		createDocumnent(es , doc , cats_map)
		recKey += 1
	f.close()

main()
