let tg = window.Telegram.WebApp;
tg.expand()
tg.MainButton.setText("Відправити");
tg.MainButton.show();
tg.MainButton.disable()

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

let ms_number = document.getElementById("ms_number");
let students_number = document.getElementById("students_number");
let ms = document.getElementById("ms");


function updateSubmitBtn(){
    const ms_numberv = ms_number.value.trim();
    const msv = ms.value.trim();
    const students_numberv = students_number.value.trim();
    debugger;
    if(ms_numberv && msv && students_numberv){
        tg.MainButton.enable()
    }else {
        tg.MainButton.disable()
    }
}

students_number.addEventListener('change', updateSubmitBtn);
ms_number.addEventListener('change', updateSubmitBtn);
ms.addEventListener('change', updateSubmitBtn);
