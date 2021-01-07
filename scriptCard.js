//****CART COUNTER****/
var button = document.getElementById("addtocard"),
  count = 0;
button.onclick = function() {
  count += 1;
  cardDisplay.innerHTML = count;
};

