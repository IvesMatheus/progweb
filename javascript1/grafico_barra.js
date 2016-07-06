button = document.getElementById("button");
button.onclick = function ()
{
    var width_b1 = document.form.b1.value;
    var width_b2 = document.form.b2.value;
    var width_b3 = document.form.b3.value;
    var width_b4 = document.form.b4.value;
    var width_b5 = document.form.b5.value;
    var larg = document.form.largura.value;

    document.form.img1.height = width_b1;
    document.form.img2.height = width_b2;
    document.form.img3.height = width_b3;
    document.form.img4.height = width_b4;
    document.form.img5.height = width_b5;

    document.form.img1.width = larg;
    document.form.img2.width = larg;
    document.form.img3.width = larg;
    document.form.img4.width = larg;
    document.form.img5.width = larg;
}
