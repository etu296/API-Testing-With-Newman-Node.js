const newman = require('newman')
newman.run({
collection:require('./collection/collection.json'),

reporters: 'htmlextra',
iterationCount: 1,
reporter: {
	htmlextra:{
	export:'./Reports/report.html', //if not specified,the file will be written to `newman/`

}
}





}, function(err){
	if (err) {throw err;}
	console.log('collection run complete');
}

);


3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
46
47
48
49
50
51
52
53
54
var pdf = require("pdf-creator-node");
// var pdf = require("../index");
var fs = require("fs");
var path = require("path");
// Read HTML Template
var html = fs.readFileSync(path.join(__dirname, "./report.html"), "utf8");

var options = {
  format: "A3",
  orientation: "portrait",
  border: "10mm",
};

var users = [
  
];
var document = {
  html: html,
  data: {
   
  },
  path: "./output.pdf",
  type: "",
};
// By default a file is created but you could switch between Buffer and Streams by using "buffer" or "stream" respectively.

var document = {
  html: html,
  data: {
    users,
  },
  path: "./output.pdf",
  type: "", // "stream" || "buffer" || "" ("" defaults to pdf)
};

pdf
  .create(document, options)
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.error(error);
  });