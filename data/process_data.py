
import json
from elasticsearch import Elasticsearch
f = open("IFP_ver2.csv" , "r" , encoding="Windows-1252")
l2 = open("l2-files.json" , "r")
l2f = open("l2-folders.json" , "r")
fileURLs = json.load(l2)
folderURLs = json.load(l2f)
l2.close()
l2f.close()
o = open("output.csv" , "w")

def rsc(str):
	s = str.replace('"' , '')
	s = s.replace(',' , '')
	s = s.replace(';' , '')
	return s

def createDocumnent(es, doc):
	esdoc = {}
	esdoc["recordlocator"] = doc["recLoc"]
	esdoc["title"] =  doc["title"]
	esdoc["material"] =  doc["material"]
	esdoc["subject"] = doc["subject"] 
	esdoc["script"] = doc["script"] 
	esdoc["url"] = doc["url"].split(";")
	esdoc["tags"] = doc["tags"].split("/")
	esdoc["category"] = esdoc["category"].replace(" " , "-")
	esdoc["category"] = doc["category"].split("/")
	try:
		body = json.dumps(esdoc)
		es.create("nithya_index_ver1", "manuscript" , doc["recKey"],body)
	except e:
		print(e)

def main():	
	recKey = 0
	es = Elasticsearch()
	for line in f:
		a = line.split(",")
		t = a[1].strip()
		if (len(t) == 0):
			continue
		b = a[1].split(" ")
		if(len(b) == 1):
			continue
		recLoc = b[0]+b[1]
		if recLoc in folderURLs:
			url = folderURLs[recLoc]
		else:
			matchedLinks = []
			for i in fileURLs:
				if i.find(recLoc) >= 0:
					matchedLinks.append(fileURLs[i])
			if(len(matchedLinks) == 0):
				continue
			url = ""
			for i in matchedLinks:
				url = url + i + ";"
			url = url[0:len(url)-1]

		doc = {}
		doc["recKey"] = recKey
		doc["recLoc"] = recLoc
		doc["title"] = rsc(a[2])
		doc["subject"] = rsc(a[3])
		doc["script"] = rsc(a[4])
		doc["tags"] = rsc(a[5])
		doc["category"] = rsc(a[5])
		doc["material"] = rsc(a[6])
		doc["url"] = url
		createDocumnent(es , doc)
		
		lineOut = str(doc["recKey"]) + "," + doc["recLoc"] + "," + doc["title"] + "," + doc["subject"] + "," + doc["script"] + "," + doc["tags"] + "," + doc["category"] + "," + doc["material"] + "," + doc["url"]
		recKey += 1
		o.write(lineOut)
		o.write("\n")
	o.close()
	f.close()

main()
