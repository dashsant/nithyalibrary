
import json
from elasticsearch import Elasticsearch
import re
l2 = open("mum-files-url.json" , "r", encoding="UTF-8")

filesUrl = json.load(l2)
		
def rsc(str):
	str = str.strip()
	s = str.replace('"' , '')
	s = s.replace(',' , '')
	s = s.replace(';' , '')
	return s

def createDocumnent(es, doc ):
	esdoc = {}
	esdoc["recKey"] = doc["recKey"]
	esdoc["title"] =  doc["title"]
	esdoc["subject"] = doc["subject"] 
	esdoc["author"] = doc["author"]
	esdoc["abstract"] = doc["abstract"]
	esdoc["language"] = doc["language"]
	esdoc["script"] = doc["script"]
	esdoc["url"] = doc["url"]

	
	esdoc["category"] = doc["category"].strip().replace(" " , "-")
	# There could me multiple spaces between categories, use the following logic to replace them.
	#Replaces "---" to -
	p = re.compile("--*")
	esdoc["category"] = p.sub("-",esdoc["category"])
	esdoc["tree_index"] = esdoc["category"]
	esdoc["category"] = esdoc["category"].split("/")
	try:
		body = json.dumps(esdoc)
		#print(esdoc["url"] , esdoc["title"] , esdoc["tree_index"] )
		es.create("nithya_book_index", "book" , esdoc["recKey"],body)
	except e:
		print(e)

def main():	
	f = open("mum_catalogue.tsv","r", encoding="UTF-8")
	#S.No	Title	Subject	Author	Abstract	Language	Category	Language	File Name


	es = Elasticsearch(["45.18.12.178"] , port=9200)
	#GET /nithya_book_index/_count 
	# For now it hardcoded, but we need to get it from the back-end
	r = es.count(index='nithya_book_index')
	recKey = r["count"]
	for line in f:
		a = line.split("\t")
		t = a[1].strip()
		doc = {}
		doc["recKey"] = recKey
		doc["title"] = rsc(a[1])
		doc["subject"] = rsc(a[2])
		doc["author"] = rsc(a[3])
		doc["abstract"] = rsc(a[4])
		doc["language"] = rsc(a[5])
		doc["category"] = rsc(a[6])
		doc["script"] = rsc(a[7])
		tmp = rsc(a[8]).strip()
		x = tmp + ".pdf"
		
		if( tmp in filesUrl):
			doc["url"] = filesUrl[tmp]
			createDocumnent(es , doc )
			recKey = recKey + 1
	
		elif (x in filesUrl):
			doc["url"] = filesUrl[x]
			createDocumnent(es , doc )
			recKey = recKey + 1
	f.close()

main()
