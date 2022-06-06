function Farm(name,email,address,amount){
    this.name = name;
    this.email = email;
    this.address = address;
    this.amount = amount;
}

function saveData(e){
    e.preventDefault();
    
    let form=document.getElementById("form");
    let name=form.name.value;
    let email=form.email.value;
    let address=form.address.value;
    let amount=form.amount.value;

    let p= new Farm(name,email,address,amount);
    let arr=JSON.parse(localStorage.getItem("user"))||[]
    arr.push(p)
    localStorage.setItem("user",JSON.stringify(arr));
    window.location.reload()

}