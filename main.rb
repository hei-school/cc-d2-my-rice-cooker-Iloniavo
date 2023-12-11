require_relative 'rice_cooker'

def handle_choice(option, rice_cooker)
  case option
  when '1'
    rice_cooker.plug
  when '2'
    print 'Enter rice quantity: '
    new_quantity = gets.chomp.to_i
    rice_cooker.set_quantity(new_quantity)
  when '3'
    print 'Enter new cook time: '
    new_cook_time = gets.chomp.to_i
    rice_cooker.set_cook_time(new_cook_time)
  when '4'
    print 'Enter new water amount: '
    new_water_amount = gets.chomp.to_i
    rice_cooker.set_water_amount(new_water_amount)
  when '5'
    rice_cooker.cook_rice
  when '6'
    puts 'Goodbye!!'
  else
    puts 'Invalid option'
  end
end

rice_cooker = RiceCooker.new

loop do
  puts "\n1. Plug in/out"
  puts '2. Set rice quantity'
  puts '3. Set cook time'
  puts '4. Set water amount'
  puts '5. Cook rice'
  puts '6. Exit'

  print 'Choose an option: '
  option = gets.chomp

  if option == '6'
    break
  end

  handle_choice(option, rice_cooker)
end
