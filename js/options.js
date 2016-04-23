// Saves options to chrome.storage
function save_options() {
  var color = document.getElementById('color').value;
  var likesColor = document.getElementById('like').checked;

}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  // Use default value color = 'red' and likesColor = true.
  // chrome.storage.sync.get({
  //   favoriteColor: 'red',
  //   likesColor: true
  // }, function(items) {
  //   document.getElementById('color').value = items.favoriteColor;
  //   document.getElementById('like').checked = items.likesColor;
  // });
}
document.addEventListener('DOMContentLoaded', restore_options);

$(document).on('DOMContentLoaded', function (event) {
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
    $('#numTickets').val(items.numTickets);
    $('#creditCard').val(items.creditCard);
    $('#creditCardExp').val(items.creditCardExp);
    $('#creditCardCVV').val(items.creditCardCVV);
    $('#use_for_all').prop('checked', items.use_for_all);
    $('#attendee_1_first_name').val(items.attendee_1_first_name);
    $('#attendee_1_last_name').val(items.attendee_1_last_name);
    $('#attendee_1_email').val(items.attendee_1_email);
    $('#attendee_1_character_name').val(items.attendee_1_character_name);

    $('#attendee_2_first_name').val(items.attendee_1_first_name);
    $('#attendee_2_last_name').val(items.attendee_1_last_name);
    $('#attendee_2_email').val(items.attendee_1_email);
    $('#attendee_2_character_name').val(items.attendee_1_character_name);

    $('#attendee_3_first_name').val(items.attendee_1_first_name);
    $('#attendee_3_last_name').val(items.attendee_1_last_name);
    $('#attendee_3_email').val(items.attendee_1_email);
    $('#attendee_3_character_name').val(items.attendee_1_character_name);

    $('#attendee_4_first_name').val(items.attendee_4_first_name);
    $('#attendee_4_last_name').val(items.attendee_4_last_name);
    $('#attendee_4_email').val(items.attendee_4_email);
    $('#attendee_4_character_name').val(items.attendee_4_character_name);

  });
});

$('form').on('submit', function (event) {
  event.preventDefault();
  chrome.storage.sync.set($('form').serialize(), function () {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function () {
      status.textContent = '';
    }, 750);
  });
});


$('#numTickets').on('change', function (event) {
  if (event.currentTarget.value > 1) {
    $('#use_for_all_wrapper').removeClass('hidden');
    if ($('#use_for_all').prop('checked') === false) {
      for (var i = 1; i <= event.currentTarget.value; i++) {
        $('#attendee_' + i).removeClass('hidden');
      }
    }

  } else {
    $('use_for_all_wrapper').addClass('hidden');
    for (var j = 2; j <= 4; j++) {
      $('#attendee_' + j).addClass('hidden');
    }
  }
});

$('#use_for_all').on('change', function (event) {
  if ($(event.currentTarget).prop('checked') === false) {
    for (var i = 1; i <= $('#numTickets').val(); i++) {
      $('#attendee_' + i).removeClass('hidden');
    }
  } else {
    if ($('#numTickets').val() == 1) {
      $('use_for_all_wrapper').addClass('hidden');
    }
    for (var j = 2; j <= 4; j++) {
      $('#attendee_' + j).addClass('hidden');
    }
  }
});
