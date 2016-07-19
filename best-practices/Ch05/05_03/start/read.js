//var JFile=require('jfile');
var JFile=require('/Users/abdennour/dev/nodejs-plugins/jfile/index.js');
var ff=new JFile(__dirname+"/writtenByNode.md");
console.log("============");
console.log(ff.text);

console.log("===3rd Line===");
console.log(ff.lines[2]);
console.log("==== Find lines with Word======")
console.log(ff.grep("ctive",true));
console.log(ff);


var apiDir=new JFile(__dirname+"/api");

var sample=new JFile(__dirname+"/ss.txt");
sample.text="go";
//apiDir.mkdir();
//let cc=apiDir.addFolder("uio").addFolder("lalas").addFolder("zoso");
// console.log(cc);
