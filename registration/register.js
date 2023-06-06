function    transition_to_mood2(){
    document.getElementById("one_mood").style.left = '-60px';
    document.getElementById("tow_mood").style.left = '753px';
    document.getElementById("name").classList.add('name_transition');
    document.getElementById("email").classList.add('email_transition');
    document.getElementById("password").classList.add('password_transition');
    document.getElementById("retype_password").classList.add('repassword_transition');
    document.getElementById("years").classList.add('years_transition');
    document.getElementById("month").classList.add('month_transition');
    document.getElementById("day").classList.add('day_transition');
    document.getElementById("colorON").id = "colorOFF";
    document.getElementById("colorOFFF").id = "colorON";}
