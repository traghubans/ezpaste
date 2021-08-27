// check link value
function getlink()
{
    if( localStorage.getItem('document_link') !== "")
    {

        // get url 
        var url = localStorage.getItem('document_link');
        document.getElementById('linkButton').setAttribute("value", "unlink")
        document.getElementById( 'linkButton' ).setAttribute( "onclick", "javascript: unlinkDocument();" );
        document.getElementById('ezInput').setAttribute('value', url)
        document.getElementById('ezInput').disabled = true;

    }
}

// This is for saving the value in local storage
function linkDocument(input)
{
    var url = input.value;
    localStorage.setItem('document_link', url);
    document.getElementById('linkButton').style.visibility = "hidden";
    document.getElementById('unlinkButton').style.visibility = "visible";
    document.getElementById("ezInput").disabled = true;

}

function unlinkDocument()
{
    localStorage.removeItem('document_link');
    document.getElementById('linkButton').style.visibility = "visible";
    document.getElementById('unlinkButton').style.visibility = "hidden";
    document.getElementById("ezInput").disabled = false;
}

// add on click handler for function
document.addEventListener('DOMContentLoaded', function()
{
    document.getElementById('linkButton').addEventListener('click', function()
    {
        linkDocument(document.getElementById('ezInput'))
    })

    document.getElementById('unlinkButton').addEventListener('click', function ()
    {
        unlinkDocument()
    });
})


// Function Calls
window.onload = function ()
{
    if( localStorage.getItem('document_link') !== null)
    {
        // get url 
        var url = localStorage.getItem('document_link');
        document.getElementById('linkButton').style.visibility = "hidden";
        document.getElementById('unlinkButton').style.visibility = "visible";
        document.getElementById("ezInput").value = url;
        document.getElementById("ezInput").disabled = true;
    }
    else
    {
        document.getElementById('linkButton').style.visibility = "visible";
        document.getElementById('unlinkButton').style.visibility = "hidden";
    }
}