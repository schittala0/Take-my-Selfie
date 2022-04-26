var SpeechRecognition =window.webkitSpeechRecognition;

var recognition=new SpeechRecognition();

function start()
{
    document.getElementById("textbox").innerHTML="";
    recognition.start();
}

recognition.onresult=function(event)
{
    
    var Content=event.results[0][0].transcript;
    console.log(Content);

document.getElementById("textbox").innerHTML=Content;
speak();
}

function speak()
{
var synth=window.speechSynthesis;

speak_data=document.getElementById("textbox").value;

var utterThis = new SpeechSynthesisUtterance(speak_data);

synth.speak(utterThis);

Webcam.attach(camera);    

setTimeout(function()
{
    img_id="selfie1";
    speak_data="Waited 5 sec. Taking your selfie 1 now";
    utterThis=new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    take_snapshot();
    
}, 5000);

setTimeout(function()
{
    speak_data="Waited 5 sec. Taking your selfie 2 now";
    var utterThis=new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    img_id="selfie2";
    take_snapshot();  
}, 10000);

setTimeout(function()
{
    speak_data="Waited 5 sec. Taking your selfie 3 now";
    var utterThis=new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    img_id="selfie3";
    take_snapshot();
}, 15000);

}

Webcam.set({
width:360,
height:250,
image_format:'png',
png_quality:90
});
camera=document.getElementById("camera")



function take_snapshot()
{
    console.log(img_id);

    Webcam.snap(function(data_uri) {
        if (img_id=="selfie1"){
            document.getElementById("result1").innerHTML='<img id="selfie1" src="'+data_uri+'"/>';
        }
        if (img_id=="selfie2"){
            document.getElementById("result2").innerHTML='<img id="selfie2" src="'+data_uri+'"/>';
        }
        if (img_id=="selfie3"){
            document.getElementById("result3").innerHTML='<img id="selfie3" src="'+data_uri+'"/>';
        }
    });
}