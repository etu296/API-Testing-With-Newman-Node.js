# API-Testing-With-Newman-Node.js
API Testing With Newman Node.js in VS CODE with commands

newman is used for generating test report 


==== After opening file in VS code for generating package.json =====
Terminal: 
"nmp init -y"

====  installing newman ====
"npm i newman"

====  exporting collection from postman ====
1. Go to desired collection 
2. Check initial values are ok if not click Persist All and Save 
3. Create a folder in VS Code named collection
4. Then Export from postman in that folder 

====for running the collection and display newman console report =====

npx newman run .\collection\collection.json     //exported file name

==== for html report =====

1. install htmlextra
npm i newman-reporter-htmlextra
2. package will be included under dependencies in package.json file 


=== report.js file =======

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

1. create report folder where reports will be saved
2.export:'./Reports(root folder)/report.html' -- it specifies where reports will be saved
3. === run report ===
node .\report.js
4. Report will be generated in html file 

or 

Go to package.json file 
1. inside test script write "node report.js"
2. npm test


==== Running collection with api ====
1. npx newman run <api> 
