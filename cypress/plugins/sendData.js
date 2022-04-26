const fetch = require('node-fetch');
const fs = require('fs');

async function getTestRuns(){
    
    return lastId;
}

async function sendZipToTestRun(file){
    const data = fs.readFileSync(file);
    const stream = data.toString('base64');

    let headersListGet = {
        "Accept": "*/*",
        "Authorization": "Basic TW9udGVybzp4a2dvdWt1ZmQ0aWJ5b2JteTZ4NXUzYTVzNGJ2NXBuNDZxNm51czM0d295NmxpNjRoeWth"
       }
       
    let response = await fetch("https://dev.azure.com/danielmontero0193/danielmontero/_apis/test/runs?api-version=6.0", { 
         method: "GET",
         headers: headersListGet
        });
    let dataGet = await response.json();
    let count = dataGet.count;
    let lastId = dataGet.value[count-1].id;

    let headersList = {
        "Accept": "*/*",
        "Authorization": "Basic TW9udGVybzp4a2dvdWt1ZmQ0aWJ5b2JteTZ4NXUzYTVzNGJ2NXBuNDZxNm51czM0d295NmxpNjRoeWth",
        "Content-Type": "application/json"
       }
       
       let bodyContent = JSON.stringify({
         "stream": stream,
         "fileName": "videos.zip",
         "comment": "Test attachment upload",
         "attachmentType": "GeneralAttachment"
       });
       
       fetch("https://dev.azure.com/danielmontero0193/danielmontero/_apis/test/Runs/"+lastId+"/attachments?api-version=6.0-preview.1", { 
         method: "POST",
         body: bodyContent,
         headers: headersList
       }).then(function(response) {
         return response.text();
       }).then(function(data) {
         console.log(data);
       });
}
const outDirectory = './videos.zip';
sendZipToTestRun(outDirectory);

