// jQuery(document).ready(function(){});
// $(function(){});
// $(function(){});
// $(function(){

//     $("#service-tab").resposiveTabs({
//         animate:'slide'

//     })
// });

// responsive Tab
$('#service-tab').responsiveTabs({
    startCollapsed: 'accordion'
});
// responsive Tab



// Latest News Section Current Date
var date= new Date();
var day = date.getDate();
var month = date.getMonth();
var x = ["jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
var ResMonth=x[month]
var year = date.getFullYear();
var currentDate= day +" "+ResMonth+" "+year;
document.getElementById('DTT').innerHTML=currentDate;
document.getElementById('DTT2').innerHTML=currentDate;
document.getElementById('DTT3').innerHTML=currentDate;
// Latest News Section Current Date

// Project tab
$('#project-tab').responsiveTabs({
    startCollapsed: 'accordion'
});
// Project tab