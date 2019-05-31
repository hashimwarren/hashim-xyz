let restaurant = {
    name: "Chik Fil A",
    guestCapacity: 75,
    guestCount: 0,
    checkAvailability: function (partySize) {
        let seatsLeft = this.guestCapacity - this.guestCount
        return partySize <= seatsLeft
    },
    seatParty: function (guests) {
        return this.guestCount = this.guestCount + guests
    },
    removeParty: function (guests) {
        return restaurant.guestCount = restaurant.guestCount - guests
    }



}

// seatParty
// removeParty




restaurant.seatParty(72)


console.log(restaurant.checkAvailability(4))

restaurant.removeParty(5)

console.log(restaurant.checkAvailability(4))
