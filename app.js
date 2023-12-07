let tg = window.Telegram.WebApp;
tg.MainButton.setText("Відправити");
tg.MainButton.show();

WebApp.onEvent("mainButtonClicked", function(){
    let input1 = document.getElementById("input1").value;
    let input2 = document.getElementById("input2").value;

    data = {
        ms: input1,
        class: input2
    }
    
    tg.sendData(JSON.stringify(data));
    tg.close();
});
