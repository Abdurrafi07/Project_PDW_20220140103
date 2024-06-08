function updateDateTime() {
    const now = new Date();
    const options = {
        weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
        hour: '2-digit', minute: '2-digit', second: '2-digit'
    };
    const formattedDateTime = now.toLocaleDateString('id-ID', options);

    document.getElementById('datetime').innerText = formattedDateTime;
}

setInterval(updateDateTime, 1000);
updateDateTime(); // Initial call to display immediately

    $(document).ready(function(){
        $(".navbar-toggler").click(function(){
            $("#navbarSupportedContent").toggleClass("collapse");
        });
    });

