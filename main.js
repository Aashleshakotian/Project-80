function getparagraph1()
{
    var inputs = [];
    for (var i = 1; i<=6 ; i++)
    {
        inputs.push(document.getElementById("paral_input_box_" + i ).value);
    }
    document.getElementById(showparagh1());
        inputs.join(".");