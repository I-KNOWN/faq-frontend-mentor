var answer = document.querySelectorAll('.answer')
var question = document.querySelectorAll('.question')
var arrow = document.querySelectorAll('.arrow')
function display1()
{
    var a1 = document.getElementById("a1");
    if(a1.style.display == "none")
    {   
        for(var i = 0;i < answer.length; ++i)
        {
            arrow[i].style.transform = "rotate(0deg)"
            question[i].style.fontWeight = "lighter";
            console.log(question[i])
            answer[i].style.display = "none";
        }
        arrow[0].style.transform = "rotate(180deg)"
        question[0].style.fontWeight = "bold";
        a1.style.display = "block";
    }
    else
    {   question[0].style.fontWeight = "lighter";
    arrow[0].style.transform = "rotate(0deg)"
        a1.style.display = "none";
    }
}
function display2()
{
    var a1 = document.getElementById("a2");
    if(a1.style.display == "none")
    {   
        for(var i = 0;i < answer.length; ++i)
        {
            arrow[i].style.transform = "rotate(0deg)"
            question[i].style.fontWeight = "lighter";
            console.log(question[i])
            answer[i].style.display = "none";
        }
        arrow[1].style.transform = "rotate(180deg)"
        question[1].style.fontWeight = "bold";
        a1.style.display = "block";
    }
    else
    {   question[1].style.fontWeight = "lighter";
    arrow[1].style.transform = "rotate(0deg)"
        a1.style.display = "none";
    }
}
function display3()
{
    var a1 = document.getElementById("a3");
    if(a1.style.display == "none")
    {   
        for(var i = 0;i < answer.length; ++i)
        {
            arrow[i].style.transform = "rotate(0deg)"
            question[i].style.fontWeight = "lighter";
            console.log(question[i])
            answer[i].style.display = "none";
        }
        arrow[2].style.transform = "rotate(180deg)"
        question[2].style.fontWeight = "bold";
        a1.style.display = "block";
    }
    else
    {   question[2].style.fontWeight = "lighter";
    arrow[2].style.transform = "rotate(0deg)"
        a1.style.display = "none";
    }
}
function display4()
{
    var a1 = document.getElementById("a4");
    if(a1.style.display == "none")
    {   
        for(var i = 0;i < answer.length; ++i)
        {
            arrow[i].style.transform = "rotate(0deg)"
            question[i].style.fontWeight = "lighter";
            console.log(question[i])
            answer[i].style.display = "none";
        }
        arrow[3].style.transform = "rotate(180deg)"
        question[3].style.fontWeight = "bold";
        a1.style.display = "block";
    }
    else
    {   question[3].style.fontWeight = "lighter";
    arrow[3].style.transform = "rotate(0deg)"
        a1.style.display = "none";
    }
}
function display5()
{
    var a1 = document.getElementById("a5");
    if(a1.style.display == "none")
    {   
        for(var i = 0;i < answer.length; ++i)
        {
            arrow[i].style.transform = "rotate(0deg)"
            question[i].style.fontWeight = "lighter";
            console.log(question[i])
            answer[i].style.display = "none";
        }
        arrow[4].style.transform = "rotate(180deg)"
        question[4].style.fontWeight = "bold";
        a1.style.display = "block";
    }
    else
    {   question[4].style.fontWeight = "lighter";
    arrow[4].style.transform = "rotate(0deg)"
        a1.style.display = "none";
    }
}
