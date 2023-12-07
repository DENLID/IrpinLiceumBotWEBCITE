let tg = window.Telegram.WebApp;
tg.expand()
tg.MainButton.setText("Відправити");
tg.MainButton.show();

Telegram.WebApp.onEvent("mainButtonClicked", function(){
    let ms = document.getElementById("input1").value;
    let clas = document.getElementById("input2").value;

    data = {
        ms: ms,
        class: clas
    }
    
    tg.sendData(JSON.stringify(data));
    tg.close();
});
