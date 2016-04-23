function selectAmount(){
    chrome.storage.sync.get({
        numTickets: 1,
        creditCard: '',
        creditCardExp: '',
        creditCardCVV: '',
        use_for_all: true,
        attendee_1_first_name: '',
        attendee_1_last_name: '',
        attendee_1_email: '',
        attendee_1_character_name: '',
        attendee_2_first_name: '',
        attendee_2_last_name: '',
        attendee_2_email: '',
        attendee_2_character_name: '',
        attendee_3_first_name: '',
        attendee_3_last_name: '',
        attendee_3_email: '',
        attendee_3_character_name: '',
        attendee_4_first_name: '',
        attendee_4_last_name: '',
        attendee_4_email: '',
        attendee_4_character_name: ''
    }, function (items) {
        $('select').val(items.numTickets);
        $('select').blur();
        fillForms(items);
    });
}

function fillForms(items){

    $.each($('label:contains("First Name")'),function(index, ele){
        $(ele).next('input').val(items['attendee_'+(index+1)+'_first_name']);
    });
    $.each($('label:contains("Last Name")'),function(index, ele){
        $(ele).next('input').val(items['attendee_'+(index+1)+'_last_name']);
    });
    $.each($('label:contains("Email")'),function(index, ele){
        $(ele).next('input').val(items['attendee_'+(index+1)+'_email']);
    });
    $.each($('label:contains("Character")'),function(index, ele){
        $(ele).next('input').val(items['attendee_'+(index+1)+'_character_name']);
    });

    $('[name="card number"]').val(items.creditCard);
    $('[name="expiry date"]').val(items.creditCardExp);
    $('[name="verification code"]').val(items.creditCardCVV);
}
