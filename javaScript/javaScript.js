function fun1()
{
 
   var userName=document.getElementById("un").value;
   var passWord=document.getElementById("pw").value;

   var temp_select_month=document.getElementById("month");
   var text_month=temp_select_month.options[temp_select_month.selectedIndex].value;

   var temp_select_year=document.getElementById("year");
   var text_year=temp_select_year.options[temp_select_year.selectedIndex].value;

   var rates = document.getElementsByName("bank");
    var rate_value;
    for(var i = 0; i < rates.length; i++){
        if(rates[i].checked){
            rate_value = rates[i].value;
        }
    }   


    alert("User Name is : "+userName +"\n"+
          " Password is : "+passWord +"\n"+
          " Month is    : "+text_month +"\n"+
          " Year is     : "+text_year+"\n"+
          " Pay by      : "+rate_value);
}
function reset()
{
    document.getElementById("un").value="";
    document.getElementById("pw").value="";
    document.getElementById("month").value="1";
    document.getElementById("year").value="2022";
}
function calcID()
{
    var num1,num2,num3,num4,num5,num6,num7;
    num1=parseInt(document.getElementById("num1").textContent);
    num2=parseInt(document.getElementById("num2").textContent);
    num3=parseInt(document.getElementById("num3").textContent);
    num4=parseInt(document.getElementById("num4").textContent);
    num5=parseInt(document.getElementById("num5").textContent);
    num6=parseInt(document.getElementById("num6").textContent);
    num7=parseInt(document.getElementById("num7").textContent);
    alert(num1+"+ "+num2+"+ "+num3+"+ "+num4+"+ "+num5+"+ "+num6+"+ "+ num7 + " = "+(num1+num2+num3+num4+num5+num6+num7));
}