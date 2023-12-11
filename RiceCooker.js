"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RiceCooker = void 0;
var RiceCooker = /** @class */ (function () {
    function RiceCooker(pluggedIn, status, maxCapacity, quantity, cookTime, waterAmount) {
        if (pluggedIn === void 0) { pluggedIn = false; }
        if (status === void 0) { status = 'Power Off'; }
        if (maxCapacity === void 0) { maxCapacity = 3000; }
        if (quantity === void 0) { quantity = 0; }
        if (cookTime === void 0) { cookTime = 0; }
        if (waterAmount === void 0) { waterAmount = 0; }
        this.pluggedIn = pluggedIn;
        this.status = status;
        this.maxCapacity = maxCapacity;
        this.quantity = quantity;
        this.cookTime = cookTime;
        this.waterAmount = waterAmount;
    }
    RiceCooker.prototype.plug = function () {
        this.pluggedIn = !this.pluggedIn;
        console.log("Plugged in: ".concat(this.pluggedIn ? 'On' : 'Off'));
    };
    RiceCooker.prototype.setQuantity = function (newQuantity) {
        if (newQuantity > this.maxCapacity) {
            console.log("Error: quantity cannot exceed maximum capacity of ".concat(this.maxCapacity));
        }
        else {
            this.quantity = newQuantity;
            console.log("Quantity is now: ".concat(this.quantity));
        }
    };
    RiceCooker.prototype.setCookTime = function (newCookTime) {
        if (newCookTime <= 0) {
            console.log('Error: cook time must be positive');
        }
        else {
            this.cookTime = newCookTime;
            console.log("Cook time is now: ".concat(this.cookTime));
        }
    };
    RiceCooker.prototype.setWaterAmount = function (newWaterAmount) {
        if (newWaterAmount <= 0) {
            console.log('Error: water amount must be positive');
        }
        else {
            this.waterAmount = newWaterAmount;
            console.log("Water amount is now: ".concat(this.waterAmount));
        }
    };
    RiceCooker.prototype.cookRice = function () {
        if (this.quantity <= 0) {
            console.log('You need to put the rice you want to cook in');
            return;
        }
        if (this.waterAmount <= 0) {
            console.log('You need to put water to be able to cook rice');
            return;
        }
        if (!this.pluggedIn) {
            console.log('Please turn on the rice cooker');
            return;
        }
        if (this.quantity > this.maxCapacity) {
            console.log('Too much rice, the cooker cannot handle it');
            return;
        }
        console.log("Cooking ".concat(this.quantity, "g of rice"));
        console.log("This will take approximately ".concat(this.cookTime, " minutes"));
    };
    return RiceCooker;
}());
exports.RiceCooker = RiceCooker;
