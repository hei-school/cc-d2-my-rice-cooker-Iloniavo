class RiceCooker {
  bool pluggedIn;
  String status;
  String mode;
  int maxCapacity;
  int quantity;
  int cookTime;
  int waterAmount;

  RiceCooker({
    this.pluggedIn = false,
    this.status = 'Power Off',
    this.mode = 'Off',
    this.maxCapacity = 3000,
    this.quantity = 0,
    this.cookTime = 0,
    this.waterAmount = 0,
  });

  void plug() {
    this.pluggedIn = !this.pluggedIn;
    print('Plugged in : ${this.pluggedIn ? "On" : "Off"}');
  }

  void setQuantity(int newQuantity) {
    if (newQuantity > maxCapacity) {
      print('Error: quantity cannot exceed maximum capacity of $maxCapacity');
    } else {
      this.quantity = newQuantity;
      print('Quantity is now: $quantity');
    }
  }

  void setCookTime(int newCookTime) {
    if (newCookTime <= 0) {
      print('Error: cook time must be positive');
    } else {
      this.cookTime = newCookTime;
      print('Cook time is now: $cookTime');
    }
  }

  void setWaterAmount(int newWaterAmount) {
    if (newWaterAmount <= 0) {
      print('Error: water amount must be positive');
    } else {
      this.waterAmount = newWaterAmount;
      print('Water amount is now: $waterAmount');
    }
  }

  void cookRice() {

    if(this.quantity <= 0){
      print("You need to put the rice you want to cook in");
      return;
    }

    if(this.waterAmount <= 0){
      print("You need to put water to be able to cook rice");
      return;
    }

    if (!this.pluggedIn) {
      print('Please turn on the rice cooker');
      return;
    }

    if (this.quantity > this.maxCapacity) {
      print('Too much rice, the cooker cannot handle it');
      return;
    }

    print('Cooking ${this.quantity}g of rice');
    print('This will take approximately ${this.cookTime} minutes');
  }
}