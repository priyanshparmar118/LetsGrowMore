

function enroll() {
    var nam = document.getElementById("name").value;
    var em = document.getElementById("email").value;
    var con = document.getElementById("phone").value;
    var skil = document.getElementById("skil").value;
    var gender = document.getElementById("gen").value;

    document.writeln("Enrolled Student");
    document.writeln(" <br>Name : " + nam);
    document.writeln("<br>Gender : " + gender);
    document.writeln("<br>Email : "+ em);
    document.writeln("<br>Contect : "+ con);
    document.writeln("<br>Skills : " + skil);

}
