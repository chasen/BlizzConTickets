if ($('#primary_cta').length) {
    $('select.ticket_table_select').val(4);
    location.href = "javascript: updateCheckout(); void 0;";
    location.href = "javascript: eventbriteCheckout(); void 0;";
}
else {
    location.reload(true);
}