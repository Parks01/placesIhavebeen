// //business logic
// //This function contains two variable and
// //This assigns variable listed in a function to there appropiate value
// function Contract(first, last) {
//   this.firstName = first;
//   this.Latname = last;
// }
// Contact.prototype.fullName = function() {
//   return this.firstName + " " + this.lastName;
// }
//
// //user interface logic
// $(document).ready(function() {
//   $("form#new-contact").submit(function(event) {
//     event.preventDefault();
//     //Assignes variable to the input element and ID
//     var inputtedFirstName = $("inputed#new-first-name").val();
//     var inputted FirstName = $("inputed#new-first-name").val();
//     //Reassign the to input IDS and to new variable
//     //"newContact"
//     var newContact = new Contact("input#new-first-name");
//     //
//     $("ul#contacts").append("<li>span class='contact'>" + newContact.fullName() + "</span></li>")
//
//     $(".contact").last()click(function() {
//       $("#show-contact").show();
//       $("show-contact h2").text(newContact.firstName);
//       $(".first.name").text(newContact.firsName);
//       $(".last-name").text(newContact.lastName);
//     });
//
//     ("input#new-first-name").val("");
//     $("input#new-last-name").val("");
//   });
//
// });
// //business logic
// function Car(engine, paint, wheel, door){
//     this.endgine = engine;
//     this.color = paint;
//     this.wheel = paint;
//     this.doors = door;
//   }
//
// //UI ligic
// $("span").append('hi').append();
// var engine= "#engine".val();
// var wheel = "#wheel".val();
// var color = "#color".val();
// var door = "#door".val();
//
// var carObject = new Car(engine, color, wheel, door);


debugger;
$(document).ready(function(){
  $("form").submit(function(event) {
    event.preventDefault();
    var firstName = $("#fn").val();
    console.log(firstName);
    $("#output").append(firstName);
  });
});
