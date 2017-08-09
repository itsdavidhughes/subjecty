$(document).ready(function() {
    $(window).unload(saveSettings);
    loadSettings();
});

function loadSettings() {
    $('#height').val(localStorage.height);
    $('#weight').val(localStorage.weight);
    $('#dateOfBirth').val(localStorage.dateOfBirth);
    $('input[value="' + localStorage.gender + '"]').prop('checked', true);
    $("#sportive").val(localStorage.sportive);
}

function saveSettings() {
    localStorage.height = $('#height').val();
    localStorage.weight = $('#weight').val();
    localStorage.dateOfBirth = $('#dateOfBirth').val();
    localStorage.sportive = $("#sportive").val();
    localStorage.gender = $('input[type=radio]:checked').val();
}