var numberOfFaqsBtn = document.querySelectorAll(".faqs-btn").length;

for(var i=0 ; i<numberOfFaqsBtn ; i++)
{

document.querySelectorAll(".faq-open-close-icon")[i].addEventListener("click" , function()
{
    var faqId = this.id;

    if ($("#"+faqId).hasClass("open"))
         {
        $("#"+faqId+"-div").css("display","block");
        $("#"+faqId).html("<h2>-</h2>");
        $("#"+faqId).removeClass("open");
        $("#"+faqId).addClass("close");

    } 
   else if($("#"+faqId).hasClass("close"))
        {
        $("#"+faqId+"-div").css("display","none");
        $("#"+faqId).html("<h3>+</h3>");
        $("#"+faqId).removeClass("close");
        $("#"+faqId).addClass("open");
    }
  
});

}
