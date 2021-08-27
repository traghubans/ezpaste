// Our application should:
// 1. Link with Google Document - In GAS
// 2. Update Context Menu with : "Add to Document" 
// 3. Grab highlighted text 
// 4. Send to Google Doc


// Function Declarations
function sendData()
{
    var SCRIPT_ID = 'https://script.googleapis.com/v1/scripts/AKfycbxWheIMmwCoItWriqHwoZPcVhduY615WBNtaBiS-IF-9v0H5efBwFvpBRTjckWQTpnZUg:run'
    var message = ''
    var url = document.getElementById('ezInput').value


    // Grab the highlighted text
    if (window.getSelection())
    {
        message = window.getSelection().toString();
    }

    // call api and send the data
    fetch(`${SCRIPT_ID}?message=${message}&url=${url}`)
    .then(function(res)
    {
        if (res.status !== 200 )
        {
            console.error('There was an error with your response.')
            return
        }
        else
        {
            console.log('Successfully sent')
        }
    })
    .catch(function(err)
    {
        console.error(`Error: ${err}`)
    })

}