var connectHariBtn = document.getElementById('connect_to_hari_button');
var sendToHariBtn = document.getElementById('send_to_hari_button');
var inputTextArea = document.getElementById("inputQuestion");
var answerId = document.getElementById("answerId");

function connectHari() {
    connectHariBtn.disable = true;//();
    connectHariBtn.textContent = 'Connecting to Hari';
    //OnConnect(),
    //TODO: change text to 'connected'
    //TODO: keep connectHariBtn disabled
    // connectHariBtn.disable = false;//();
    connectHariBtn.style.background = 'lime';

}

function sendTextToHari() {
    sendToHariBtn.disable = true;
    //    disabled = false;
    var inputQuest = inputTextArea.value;
    console.log(inputQuest);
    sendToHariBtn.textContent = 'Sending text to Hari';
    sendToHariBtn.style.background = 'lime';

    //TODO: Send inputQuest to Hari

    //OnResult()
    //TODO: Change text to 'Showing the result from HARI'
    //TODO: Show result in a text box
    //TODO: enable sendToHariBtn
    //sendToHariBtn.disable = false;
    //TODO: clear inputQuest area
    //inputQuest.value = '';
    answerId.value = "Answer to " + inputQuest;//TODO: answer from HARI";
}
