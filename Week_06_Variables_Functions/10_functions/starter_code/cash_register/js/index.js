$(document).ready(function() {
    // This is the total of my register when I load page.
    var total = 0;

    $('#entry').submit(useRegister);

    function useRegister(event) {
        event.preventDefault();

        // Get what the users entered.
        var newEntry = $('#newEntry').val();
        $('#entries').html('<td>' + newEntry + '</td>');

        newEntry = parseInt(newEntry);
        total = total + newEntry;
        console.log(total);

        $('#total').html(total);
    }

});