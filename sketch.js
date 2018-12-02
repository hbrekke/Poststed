function poststed() {

  var x = document.getElementById("postnummer").value;

  if (x.length == 4) {

    $.getJSON("https://api.bring.com/shippingguide/api/postalCode.json?clientUrl=localhost&pnr=" + x, function(data) {

        if (data['result'] == 'EmptyPostnumber') {
          document.getElementById('poststed').value = '';
        } else {
          document.getElementById('poststed').value = data['result'];
        }
      }
    );
  }
}
