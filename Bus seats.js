// Total seats in the bus
const totalSeats = 13;

let seats = new Array(totalSeats). fill(false);


function displaySeats() {
    console.log("Seat status:");
    for (let i = 0; i < totalSeats; i++) {
        console.log('Seat ${i + 1}: ${seats[i] ? "Booked" : "Available"}');
    }
}

// function to book a seat
function bookSeat(seatNumber) {
    if (seatNumber < 1 || seatNumber > totalSeats) {
        console.log("Invalid seat number. please choose between 1 and " + totalSeats);

    }else if (seats[seatNumber - 1]) {
        console.log(`Seat ${seatNumber} is already booked.`);
    } else {
        seats[seatNumber - 1] = true;
        console.log(`Seat ${seatNumber} successfully booked!`);
    
    }

}

function simulateBooking() {
    let userAttempts = [2, 7, 14, 11, 1, 16, 7, 4, 3]; 
    for (let i = 0; i < userAttempts.length; i++) {
        console.log(`\nAttempting to book seat ${userAttempts[i]}...`);
        bookSeat(userAttempts[i]);
    }
    console.log("\nFinal Seat Status:");
    displaySeats();
}
