 function Loading() {
    return (
        $(window).on('load', function(){
            setTimeout(function(){
                $('#loader').fadeOut('slow');
            }, 1000);
        })
    );
}

export default Loading;
