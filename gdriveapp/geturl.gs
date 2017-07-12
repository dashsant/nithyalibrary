function myFunction() {

 var folder = DriveApp.getFoldersByName("IFP Palmleaf Manuscripts PDF All");

 var o =  DriveApp.getFoldersByName("Nithyanandam");
 var outF = o.next();
  

 var l1 = {};
  var l2 = {}

  var f = folder.next();
  var it = f.getFolders();
  var arr1 = [];
  while(it.hasNext()){
      d = it.next();
      arr1.push(d);
      l1[d.getName()] =  d.getUrl();
  }
  //outF.createFile("l1.json" , JSON.stringify(l1));
  
  var arr2=[];
  for(var i in arr1){
    it = arr1[i].getFolders();
    while(it.hasNext()){
      d = it.next();
      arr2.push(d);
      l2[d.getName()] =  d.getUrl();
      //Logger.log(d.getName());
    }
    //it = arr1[i].getFiles();
    //while(it.hasNext()){
    //  d = it.next();
    //  l2[arr1[i].getName() + "/" + d.getName()] =  d.getUrl();
      //Logger.log(arr1[i].getName() + "/" + d.getName());
    //}
  }
  outF.createFile("l2-folders.json" , JSON.stringify(l2));
}

function traverseFolder(f, fullPathList){
  
  var itF = f.getFiles();
  while(itF.hasNext())
  {
    var f1 = itF.next();
    fullPathList[f.getName() + "/" + f1.getName()] = f1.getUrl();
    
  }
  
  var it = f.getFolders();
  while(it.hasNext()){
      d = it.next();
      fullPathList[f.getName() + "/" + d.getName()] =  d.getUrl();
      //traverseFolder(d , fullPathList)
  }
  

}

