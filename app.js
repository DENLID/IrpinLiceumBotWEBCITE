let tg = window.Telegram.WebApp;
tg.expand()
tg.MainButton.setText("Відправити");
tg.MainButton.show();

Telegram.WebApp.onEvent("mainButtonClicked", function(){
    let class_number = document.getElementById("class_number").value;
    let class_letter = document.getElementById("class_letter").value;
    let ms_number = document.getElementById("ms_number").value;
    let students_number = document.getElementById("students_number").value;
    let ms = document.getElementById("ms").value;

    data = {
        class_number: class_number,
        class_letter: class_letter,
        ms_number: ms_number,
        students_number: students_number,
        ms: ms
    }
    
    tg.sendData(JSON.stringify(data));
    tg.close();
});
