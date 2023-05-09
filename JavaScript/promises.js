function fetchCustom(url) {
    console.log("Starting downloading");
    setTimeout(function process() {
        console.log("DownLoad Completed")
        let response=fetch(url)
    },3000)
}

let response = fetchCustom()
