class RiceCooker
    attr_accessor :plugged_in, :status,:max_capacity, :quantity, :cook_time, :water_amount
  
    def initialize(plugged_in: false, status: 'Power Off', max_capacity: 3000, quantity: 0, cook_time: 0, water_amount: 0)
      @plugged_in = plugged_in
      @status = status
      @max_capacity = max_capacity
      @quantity = quantity
      @cook_time = cook_time
      @water_amount = water_amount
    end
  
    def plug
      @plugged_in = !@plugged_in
      puts "Plugged in: #{@plugged_in ? 'On' : 'Off'}"
    end
  
    def set_quantity(new_quantity)
      if new_quantity > @max_capacity
        puts "Error: quantity cannot exceed maximum capacity of #{@max_capacity}"
      else
        @quantity = new_quantity
        puts "Quantity is now: #{@quantity}"
      end
    end
  
    def set_cook_time(new_cook_time)
      if new_cook_time <= 0
        puts 'Error: cook time must be positive'
      else
        @cook_time = new_cook_time
        puts "Cook time is now: #{@cook_time}"
      end
    end
  
    def set_water_amount(new_water_amount)
      if new_water_amount <= 0
        puts 'Error: water amount must be positive'
      else
        @water_amount = new_water_amount
        puts "Water amount is now: #{@water_amount}"
      end
    end
  
    def cook_rice
      if @quantity <= 0
        puts 'You need to put the rice you want to cook in'
        return
      end
  
      if @water_amount <= 0
        puts 'You need to put water to be able to cook rice'
        return
      end
  
      unless @plugged_in
        puts 'Please turn on the rice cooker'
        return
      end
  
      if @quantity > @max_capacity
        puts 'Too much rice, the cooker cannot handle it'
        return
      end
  
      puts "Cooking #{@quantity}g of rice"
      puts "This will take approximately #{@cook_time} minutes"
    end
  end
  