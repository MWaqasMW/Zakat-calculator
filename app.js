function calculateZakat() {
   


    var income = document.getElementById("income").value;
    var gold = document.getElementById("gold").value;
    var silver = document.getElementById("silver").value;
    var assets = document.getElementById("assets").value;

    var assetsRs = assets * 1
    var incomeRs = income * 1
    var goldRs = gold * 20_7800
    var silverRs = silver * 2521
    var reqAmount = 132_352
    var totalamount = Number(incomeRs + goldRs + silverRs + assetsRs);
    console.log(totalamount)
    if (totalamount >= reqAmount) {
        var zakat_amount = Math.round(totalamount * 0.025)
      var inp=  document.getElementById("zakat-amount").innerHTML = "Your zakat amount is " + zakat_amount
    }
    else {
      var out=  document.getElementById("zakat-amount").innerHTML = "your not eligble for zakat "
    }

  }
  function mybtn() {
    location.reload();
   
  }


 



