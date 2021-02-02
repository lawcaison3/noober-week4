
async function pageLoaded() {
  let response = await fetch('https://kiei451.com/api/rides.json')
  let json = await response.json()

  console.dir(json)

for (let i=0; i<json.length; i++) {
  let ride = json[i]

  if (ride.length > 1) {
    levelOfService = "Noober Pool"
  }
  else if (ride[0].purpleRequested == true ) {
    levelOfService = "Noober Purple"
  }
  else if (ride[0].numberOfPassengers > 3) {
    levelOfService = "Noober XL"
  }
  else {
    levelOfService = "NooberX"
  }

if (ride[0].purpleRequested == true) {
    borderColor = "border-purple-500"
  }

  else {
    borderColor = "border-gray-900"
  }

  function renderRide(ride,levelOfService,borderColor) {
    let outputElement = document.querySelector('.rides')
    outputElement.insertAdjacentHTML('beforeend',`
    
    <h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
        <i class="fas fa-car-side"></i>
        <span>${levelOfService}</span>
    </h1>
    `)
  
    for (let x = 0; x<ride.length; x++) {
      outputElement.insertAdjacentHTML('beforeend',`
  
      <div class="border-4 ${borderColor} p-4 my-4 text-left">
        <div class="flex">
          <div class="w-1/2">
            <h2 class="text-2xl py-1">${ride[x].passengerDetails.first} ${ride[x].passengerDetails.last}</h2>
            <p class="font-bold text-gray-600">${ride[x].passengerDetails.phoneNumber} </p>
          </div>
          <div class="w-1/2 text-right">
            <span class="rounded-xl bg-gray-600 text-white p-2">
            ${ride[x].numberOfPassengers} passengers
            </span>
          </div>
        </div>
        <div class="mt-4 flex">
          <div class="w-1/2">
            <div class="text-sm font-bold text-gray-600">PICKUP</div>
            <p>${ride[x].pickupLocation.address}</p>
            <p>${ride[x].pickupLocation.city}, ${ride[x].pickupLocation.state} ${ride[x].pickupLocation.zip}</p>
          </div>
          <div class="w-1/2">
            <div class="text-sm font-bold text-gray-600">DROPOFF</div>
            <p>${ride[x].dropoffLocation.address}</p>
            <p>${ride[x].dropoffLocation.city}, ${ride[x].dropoffLocation.state} ${ride[x].dropoffLocation.zip}</p>
          </div>
        </div>
      </div>
      `)
    }
    
    }




  renderRide(ride,levelOfService,borderColor)
}

}
window.addEventListener('DOMContentLoaded', pageLoaded)

