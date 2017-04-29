console.log("Hey");

$("#add-btn").on("click", function(event) {
  event.preventDefault();
  var newTable = {
    name: $("#reserve_name").val().trim(),
    phone: $("#reserve_phone").val().trim(),
    email: $("#reserve_email").val().trim(),
    uniqueID: $("#reserve_uniqueID").val().trim()
  };

  // Question: What does this code do??
  $.post("http://localhost:3000/api/newtable", newTable)
  .done(function(data) {
    console.log(data);
    alert("Adding a reservation");
  });
});
