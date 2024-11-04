// "Terrible" warrants a 0% tip, "Poor" receives a 5% acknowledgment, "Good" merits a 10% appreciation, "Great" enjoys a 15% nod, and "Excellent" is rewarded with a generous 20% 

function calculateTip(amount, rating) {
    //your code here
    let tip=0;
    rating=rating.toLowerCase()
    console.log(rating,amount)

    if (rating == "terrible"){
      return 0;
    }
    else if (rating=="poor"){
      tip=(5/100)*amount;
     
    }
    else if (rating=="good"){
      tip=(10/100)*amount;
     
    }
    else if (rating=="great"){
      tip=(15/100)*amount
     
    }
    else if (rating=="excellent"){
      tip=(20/100)*amount
     
    }
    else{
      return "Rating not recognised"
    }

    return Math.ceil(tip)
  }

//Use SpecRunner to check the Test Cases.