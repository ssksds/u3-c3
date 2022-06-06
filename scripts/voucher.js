let arr2 = JSON.parse(localStorage.getItem("purchase")) || [];

let user=JSON.parse(localStorage.getItem("user"))
 
    let wallet=document.getElementById("wallet_balance")
   wallet.innerHTML=user[0].amount


async function getData() {
  let url = "https://masai-vouchers-api.herokuapp.com/api/vouchers";

  try {
    let res = await fetch(url);
    let data = await res.json();
    //console.log(data[0].vouchers);
    append(data[0].vouchers);
  } catch (err) {
    console.log(err);
  }
}
getData();

function append(data) {
  let container = document.getElementById("voucher_list");
  data.forEach(function (el,index) {
    let div = document.createElement("div");

    let img = document.createElement("img");
    img.src = el.image;

    let name = document.createElement("p");
    name.innerText = el.name;

    let price = document.createElement("h3");
    price.innerText = el.price;

    let button = document.createElement("button");
    button.innerText = "buy";
    button.setAttribute("class", "buy_voucher");
    button.addEventListener("click", function () {
      addtoCart(el);
    });

    div.append(img, name, price, button);

    container.append(div);
  });



function addtoCart(el) {
    final=wallet.value
    if(final<el.price){
        alert("purchase_sucussful")
    }
    else{
        alert("failed")
    }
    
    arr2.push(el);
    localStorage.setItem("purchase", JSON.stringify(arr2));
    alert("successful")
  
}


}













