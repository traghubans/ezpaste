// This file creates the context menu item and elicits the trigger


// Update Context Menu
var contextMenuItem = 
{
    id:         'sendText',
    title :     'Add to document',
    contexts:   ['selection'],
}

chrome.contextMenus.create(contextMenuItem)

chrome.contextMenus.onClicked.addListener( function(clickData) 
{
    // find out which context menu item is clicked
    if(clickData.menuItemId == "sendText")
    {
        // Call or replicate send data function
        sendData(clickData.selectionText)
    }
})

// chrome.browserAction.onClicked.addListener( function()
// {
//     alert('In function')
//     getlink()
// })

// check link value
function getlink()
{
    if( localStorage.getItem('document_link') !== null)
    {
        alert('In function')

        // get url 
        var url = localStorage.getItem('document_link');
        document.getElementById('linkButton').setAttribute("value", "unlink")
        document.getElementById( "linkButton" ).setAttribute( "onclick", "javascript: unlinkDocument();" );
        document.getElementById("ezInput").setAttribute('value', url)
        document.getElementById("ezInput").disabled = true;

    }

    
}

function sendData(data)
{
    var SCRIPT_ID = 'https://script.google.com/macros/s/AKfycbzapP57AoQrm6oUXnt0uiiwQ7aaJg5IkGFmttJcKpB3/dev'
    var message = data
    var url = localStorage.getItem('document_link')


    // call api and send the data
    fetch(`${SCRIPT_ID}?message=${message}&url=${url}`)
    .then(function(res)
    {
        console.log('Success, check function')
    })
    .catch(function(err)
    {
        console.error(`Error: ${err}`)
    })

}