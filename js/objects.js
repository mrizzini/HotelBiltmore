var hotel = { 
  name: 'Biltmore',
  rooms: 500,
  roomsBooked: 150,
  roomService: true,
  pool: false,
  
  roomsAvail: function() {
    return this.rooms - this.roomsBooked;
  } 
  
  
};

function tahDah () {
    document.getElementById('name').innerHTML = hotel.name;
    document.getElementById('rooms').innerHTML = hotel.rooms;
    document.getElementById('available').innerHTML = hotel.roomsAvail();
    document.getElementById('service').innerHTML= hotel.roomService;
    document.getElementById('pool').innerHTML = hotel.pool;
  };