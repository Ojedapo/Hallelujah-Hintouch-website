const menuBtn = document.querySelector('.menu-btn');
const sidemenu = document.querySelector('.sidemenu');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
    if(!menuOpen)  {
        menuBtn.classList.add('open');
        sidemenu.classList.add('openM');
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        sidemenu.classList.remove('openM');
        menuOpen = false;
    }
});

$('.btn-contact').click(function() {
    $('.contact-form').show();
    if(menuOpen) {
        menuBtn.classList.remove('open');
        sidemenu.classList.remove('openM');
        menuOpen = false;
    }
});

$('.close-contact').click(function() {
    $('.contact-form').hide();
});

$('.btn-send').click(function() {
    $('.loading').show();

    const dataS = $('#contact-form').serialize();
    btn = $(this);
    $.ajax({
        url: 'send-email.php',
        type: 'POST',
        data: dataS,
        success: function(res) {
            console.log(res)
            if(res == "success") {
                $('.loading').hide();
                $(btn).text("Message Sent!");
                setTimeout(()=>{
                    $('.close-contact').click();
                    $('#contact-form').trigger("reset");
                }, 1500)
            } else {
                $('.loading').hide();

                alert("Message could not be sent!");
            }
        }
    })
    
    
})