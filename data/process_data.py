
import json
from elasticsearch import Elasticsearch
f = open("IFP_ver2.csv" , "r" , encoding="Windows-1252")
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
	s = str.replace('"' , '')
	s = s.replace(',' , '')
	s = s.replace(';' , '')
	return s

def createDocumnent(es, doc , cats_map):
	esdoc = {}
	esdoc["recKey"] = doc["recKey"]
	esdoc["recordlocator"] = doc["recLoc"]
	esdoc["title"] =  doc["title"]
	esdoc["material"] =  doc["material"]
	esdoc["subject"] = doc["subject"] 
	esdoc["script"] = doc["script"] 
	esdoc["url"] = doc["url"].split(";")
	esdoc["category"] = doc["category"].strip().replace(" " , "-")
	esdoc["tree_index"] = esdoc["category"]
	esdoc["category"] = getCategories(cats_map ,esdoc["category"].split("/"))
	#if any one entry in the category list in uncategorized mark the entire 
	#entry as uncategorized
	if "Uncategorised" in esdoc["category"]:
		esdoc["category"] = ["Uncategorised"]

	try:
		body = json.dumps(esdoc)
		es.create("nithya_index", "manuscript" , esdoc["recKey"],body)
	except e:
		print(e)

def main():	
	recKey = 0
	es = Elasticsearch()
	cats_map = getCatsMap()
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
		doc["category"] = rsc(a[5])
		doc["material"] = rsc(a[6])
		doc["url"] = url
		createDocumnent(es , doc , cats_map)
		recKey += 1
	f.close()

main()
