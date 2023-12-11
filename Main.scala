import scala.io.StdIn.readLine
import main.RiceCooker

object Main extends App {

  var riceCooker = new RiceCooker()

  while (true) {
    println("\n1. Plug in/out")
    println("2. Set rice quantity")
    println("3. Set cook time")
    println("4. Set water amount")
    println("5. Cook rice")
    println("6. Exit")

    print("Choose an option: ")
    val option = readLine()

    if (option == "6") {
      println("Goodbye!!")
      sys.exit()
    }

    handleChoice(option, riceCooker)
  }

  def handleChoice(option: String, riceCooker: RiceCooker): Unit = {
    option match {
      case "1" => riceCooker.plug()
      case "2" =>
        print("Enter rice quantity: ")
        val newQuantity = readLine().toIntOption.getOrElse(0)
        riceCooker.setQuantity(newQuantity)
      case "3" =>
        print("Enter new cook time: ")
        val newCookTime = readLine().toIntOption.getOrElse(0)
        riceCooker.setCookTime(newCookTime)
      case "4" =>
        print("Enter new water amount: ")
        val newWaterAmount = readLine().toIntOption.getOrElse(0)
        riceCooker.setWaterAmount(newWaterAmount)
      case "5" => riceCooker.cookRice()
      case _ => println("Invalid option")
    }
  }
}
