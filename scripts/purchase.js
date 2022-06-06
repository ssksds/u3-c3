let user=JSON.parse(localStorage.getItem("user"))
let wallet=document.getElementById("wallet_balance")
wallet.innerHTML=user[0].amount

let data = JSON.parse(localStorage.getItem("purchase"))
console.log(data)

   
  let container = document.getElementById("purchased_vouchers");
  data.forEach(el=> {
    let div = document.createElement("div");

    let img = document.createElement("img");
    img.src = el.image;

    let name = document.createElement("p");
    name.innerText = el.name;

    let price = document.createElement("h3");
    price.innerText = el.price;

   

    div.append(img, name, price);

    container.append(div);
  });

