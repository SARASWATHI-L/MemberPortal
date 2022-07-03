// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
var mid, pid, hid, bid;
document.getElementById("populate").onclick = function () {
    mid = document.getElementById("mid").value;
    pid = document.getElementById("pid").value;
    if (mid == 1 && pid == 1) {
        document.getElementById("hid").value = 1;
        document.getElementById("bid").value = 1;
    }
    else if (mid == 1 && pid == 2) {
        document.getElementById("hid").value = 3;
        document.getElementById("bid").value = 2;
    }
    else if (mid == 2 && pid == 1) {
        document.getElementById("hid").value = 2;
        document.getElementById("bid").value = 1;
    }
    else if (mid == 3 && pid == 2) {
        document.getElementById("hid").value = 3;
        document.getElementById("bid").value = 1;
    }
    else if (mid == 4 && pid == 3) {
        document.getElementById("hid").value = 4;
        document.getElementById("bid").value = 2;
    }


    bid = document.getElementById("bid").value;
    if (bid == 1)
        document.getElementById("bname").value = "MedicalCheckup";
    else if (bid == 2)
        document.getElementById("bname").value = "Accidental";

    hid = document.getElementById("hid").value;
    if (hid == 1)
        document.getElementById("hospdetails").innerHTML = "HospitalName = Apollo Hospital,HospitalAddress = Beleghata Road, Location = Kolkata";
    else if (hid == 2)
        document.getElementById("hospdetails").innerHTML = "HospitalName = Apollo Hospital,HospitalAddress = Beleghata Road, Location = Kolkata";
    else if (hid == 3)
        document.getElementById("hospdetails").innerHTML = "HospitalName = Apollo Hospital,HospitalAddress = Beleghata Road, Location = Kolkata";
    else if (hid == 4)
        document.getElementById("hospdetails").innerHTML = "HospitalName = Apollo Hospital,HospitalAddress = Beleghata Road, Location = Kolkata";

    //alert(mid);
};


document.getElementById("geteligible").onclick = function () {
    mid = document.getElementById("mid").value;
    if (mid == 1)
        document.getElementById("eligibleamt").value = 100000;
    else if (mid == 2)
        document.getElementById("eligibleamt").value = 120000;
    else if (mid == 3)
        document.getElementById("eligibleamt").value = 80000;
    else if (mid == 4)
        document.getElementById("eligibleamt").value = 90000;
};












