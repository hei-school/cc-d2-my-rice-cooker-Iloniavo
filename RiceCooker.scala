package main

class RiceCooker(var pluggedIn: Boolean = false,
                 var status: String = "Power Off",
                 var mode: String = "Off",
                 val maxCapacity: Int = 3000,
                 var quantity: Int = 0,
                 var cookTime: Int = 0,
                 var waterAmount: Int = 0) {

  def plug(): Unit = {
    pluggedIn = !pluggedIn
    println(s"Plugged in: ${if (pluggedIn) "On" else "Off"}")
  }

  def setQuantity(newQuantity: Int): Unit = {
    if (newQuantity > maxCapacity) {
      println(s"Error: quantity cannot exceed maximum capacity of $maxCapacity")
    } else {
      quantity = newQuantity
      println(s"Quantity is now: $quantity")
    }
  }

  def setCookTime(newCookTime: Int): Unit = {
    if (newCookTime <= 0) {
      println("Error: cook time must be positive")
    } else {
      cookTime = newCookTime
      println(s"Cook time is now: $cookTime")
    }
  }

  def setWaterAmount(newWaterAmount: Int): Unit = {
    if (newWaterAmount <= 0) {
      println("Error: water amount must be positive")
    } else {
      waterAmount = newWaterAmount
      println(s"Water amount is now: $waterAmount")
    }
  }

  def cookRice(): Unit = {
    if (quantity <= 0) {
      println("You need to put the rice you want to cook in")
      return
    }

    if (waterAmount <= 0) {
      println("You need to put water to be able to cook rice")
      return
    }

    if (!pluggedIn) {
      println("Please turn on the rice cooker")
      return
    }

    if (quantity > maxCapacity) {
      println("Too much rice, the cooker cannot handle it")
      return
    }

    println(s"Cooking $quantity g of rice")
    println(s"This will take approximately $cookTime minutes")
  }
}