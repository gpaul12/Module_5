var shoppingFormEl = $('#shopping-form');
var shoppingListEl = $('#shopping-list');

// TODO: Create a function to handle the form submission event that captures the form's `<input>` value and prints it to the `shoppingListEl` as a `<li>`
function handleFormSubmit(event) {
    event.preventDefault();

    var newItem = $("#shopping-input");
    shoppingListEl.append("<li>"+newItem+"</li>");
}
// TODO: Add an event listener to the `shoppingFormEl` to handle submission
shoppingFormEl.on("sumbit", handleFormSubmit);