function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

let btn = document.getElementById("regBtn");
btn.addEventListener("click", function()
{
    let elementos = document.getElementsByClassName("form-control");
    let con1 = document.getElementById("password1").value;
    let con2 = document.getElementById("password2").value;
    let chk = document.getElementById("terminos").checked;
    if (elementos[0].value == "" || elementos[1].value == "" || elementos[2].value == "" || elementos[3].value == "" || elementos[4].value == "" || (con1 != con2) || con1.length < 6 || !chk)
    {
        showAlertError();
        return false;
    }
    else
    {
        showAlertSuccess();
        return true;
    }
})

