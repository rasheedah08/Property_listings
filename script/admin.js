// localStorage.removeItem('Properties')
let properties = JSON.parse(localStorage.getItem("properties"))
  ? JSON.parse(localStorage.getItem("properties"))
  : [
    {
      image: `../images/02C.jpg`,
      location: 'Grassy Park',
      price: 3570000,
      bedrooms: 4,
      type: 'House',
      description: 'This Beautiful spacious 4 bedroom 4 bathroom ( All en-suite), 520sqm family home for sale at Fly-Inn, a Country Aviation Estate between Pretoria and Kempton Park. From the main bedroom and balcony you have a stunning view overlooking the runway.Tiles throughout the house makes for easy cleaning and all finishing on the in and outside is of a high standard. The kitchen boasts a Fitted Miele Fridge / Freezer, Miele Dishwasher and also a Miele oven and hob. The hangar that is attached to the house is a decent sized hangar that will fit most small aircraft. Hangar height at the lowest point is 3 meters. Fly Inn has a 1 km Private runway, fueling bay , tennis court, braai area and swimming pool.',
      city:'Cape Town',
  },
  {
      image: `../images/house_1.webp`,
      location: 'Retreat',
      price: 1820000,
      bedrooms: 3,
      type: 'House',
      description: 'This spacious family home is situated in Windsor Park, one of the older and more established suburbs of Kraaifontein. It offers loads of potential and space inside and out.This spacious family home has perimeter fencing with a secure gate at the front. There is a large driveway, a carport and a single garage.All the bedrooms are spacious and have parquet flooring.The lounge, dining room and kitchen are at the front of the house whilst the 3 bedrooms are at the back of the house. There are 2 bathrooms;- the main bedroom has a full bathroom en-suite and the second bathroom has a shower-over-bath, basin and a separate toilet. The property is situated a 3 minute drive from Cape Gate Medi-clinic, Cape Gate Shopping Mall.',
      city:'Cape Town',
  },
  {
      image: `../images/house_new_2.jpg`,
      location: 'Retreat',
      price: 1950000,
      bedrooms: 2,
      type: 'House',
      description: 'Sole Mandate. Only 400m walk to Pick n Pay centre and 600m walk to Harbour Island beach and restaurants. The location is perfect for those that enjoy walks and outdoor living. This pet friendly home is not part of a complex or home owners and offers you the freedom to live without rules or levies. This sunny well kept home offers two spacious bedrooms and one full bathroom. Open plan living areas and kitchen with a gas hob. The Back and front of the house is professionally paved with an electric motorized gate for access and parking for 3 cars behind secure gates. Single garage and off-street parking for an extra two cars. A must see!!',
      city:'Cape Town',
  },
  {
      image: `../images/house_3.jpg`,
      location: 'Upper Constantia',
      price: 2300000,
      bedrooms: 4,
      type: 'House',
      description: 'A rare gem of a property in the heart of Constantia with immaculate finishes, spacious living and excellent security with automated gate. The house offers all that a modern family requires with a paved yard and a small garden.The upper level is housing a big spacious main bedroom with ample storage space ,a balcony with a beautiful view and an en-suite. Another bedroom with built-ins and a laundry room.A must see.',
      city:'Cape Town',
  },
  {
      image: `../images/house_new_1.jpg`,
      location: 'Paarl',
      price: 5895000,
      bedrooms: 4,
      type: 'House',
      description: 'Neat as a pin, with fine updates, this home offers an open plan live-in kitchen and dining floor plan. The flatlet is updated and complete with a bathroom and kitchenette, ideal also for a work from home space, an Air B & B or alternatively this can be the main bedroom suite.The living space is generous and on a split level that opens up on a balcony overlooking the pool with a water feature and the lush leafy garden. The living space offers a built-in braai, as well as a fireplace and a study nook.Extras include two air conditioners, a Grid Tie Solar System (12 panels), two inverters with a battery for power outages, a borehole, an irrigation system, and an Eco Grater backwash system for the pool, security doors, CCTV camera and an outside toilet.',
      city:'Cape Town',
  },
  {
      image: `../images/house_5.jpg`,
      location: 'Zeekoevlei',
      price: 3465000,
      bedrooms: 3,
      type: 'House',
      description: "Looking for that luxury home that has everything to offer??...3 Bedroom house in Helderwyk with all the bells and whistles, top class finishings and more!!Upstairs: 4 Spacious Bedrooms (BICs), 2 Bathrooms (1 MES, the most luxurious bath/shower station you will ever experience). All bedrooms lead onto a balcony and a TV room. Downstairs: Big entrance, Guest toilet, Formal lounge, Dining room, Open plan kitchen with Scullery, Laundry and Pantry. 2 undercover Patios, easy access from inside and a Guest room with own shower and toilet. Kitchen features top quality granite tops, Center Island with extractor fan and ample cupboard space for the discerning chef. Outside features a spacious yard with a sparkling pool for those blistering summer days!! Double Garage with an entrance going for a third car.Lovely house for the whole family with many features to please everybody to make HOME.Don't miss out on this perfect opportunity!! Not sure if you qualify?? Then let Picket Fence Properties help you with your pre approval today!!Don't delay and call Today!",
      city:'Cape Town',
  },
  {
      image: `../images/granny_new_1.jpg`,
      location: 'Maitland',
      price: 785000,
      bedrooms: 2,
      type: 'Granny Flat',
      description: 'This North facing property which is situated about 3 blocks from the Sandbaai main road, is within 5 minutes of the sea front and the local convenience shops. Monthly repayments will be R 6,444.45*based on purchase price at Prime over 20 years*',
      city:'Cape Town',
  },
  {
      image: `../images/granny_new_3.jpg`,
      location: 'Pinelands',
      price: 849000,
      bedrooms: 1,
      type: 'Granny Flat',
      description: 'This magnificent investment is up for grabs!! The land is big enough to divide in 26 stands. If you are up for a challenge then this is your chance. This land is based on 1,6271 ha.You can never go wrong in the property industry. Make your dreams come true and make your appointments today!!',
      city:'Cape Town',
  },
  {
      image: `../images/granny_flat_3.jpg`,
      location: 'Grassy Park',
      price: 300000,
      bedrooms: 2,
      type: 'Granny Flat',
      description: 'Perfect vacant stand for the growing family. An opportunity to purchase a vacant stand and build your dream home of your choice.Great investment in popular well maintained and secure block.',
      city:'Cape Town',
  },
  {
      image: `../images/flat_2.webp`,
      location: 'Woodstock',
      price: 327000,
      bedrooms: 1,
      type: 'Apartment',
      description: 'Bachelor flat in a secure area (24 hour security), spacious sunny bedroom, open living room, bath only in bathroom, a kitchen and parking. The block is short term let and AirBnb friendly and is Octotel internet fibre ready. Perfect for the first time buyer looking to get into the market or investor wanting to let or Airbnb. Do not miss this great opportunity',
      city:'Cape Town',
  },
  {
      image: `../images/flat_1.jpg`,
      location: 'Rondebosch',
      price: 2100000,
      bedrooms: 2,
      type: 'Apartment',
      description: 'Large Two Bedroom Apartment in the heart Rondebosch! The spacious lounge leads out the sun-filled balcony which over looks the lush gardens. Kitchen is fitted with water point for one appliance, free standing stove/oven and extractor. Both Bedrooms are well sized with tons of natural light. Secure undercover parking for one car. The block is well maintained, managed and secure with electric fencing and motorised gates. Well located from UCT Campus, Jammie Shuttle Routes, Riverside Mall and quick access to CBD area.',
      city:'Cape Town',
  },
  {
      image: `../images/granny_new_2.jpg`,
      location: 'Fairways',
      price: '3950 p/m',
      bedrooms: 1,
      type: 'Granny flat',
      description: 'Lovely flatlet seperate from main house with its own garage, 1 bedroom with shower and living space with kitchen. Water included as well as prepaid electricty',
      city:'Cape Town',
  }
    ];
  function loadData() {
    let display = document.getElementById("tbody");
    display.innerHTML = "";
    properties.forEach((item, index) => {
      display.innerHTML += `
      <tr>
      <td>${item.type}</td>
      <td>${item.price}</td>
      <td>${item.location}</td>
      <!-- icons -->
      <td>
      <!-- Update -->
      <a type="button" class="btn" data-bs-toggle="modal" data-bs-target="#update${index}"><i class="fa-solid fa-pen-to-square"></i></a>
      <!-- Delete -->
      <a class="btn" id="delete" onclick="deleteItem(${index})"><i class="fa-solid fa-trash-can"></i></a>
      </td>
      </tr>


      <!-- Modal -->
      <div class="modal modal-xl fade" id="update${index}" tabindex="-1" aria-labelledby="exampleModalLabel"
          aria-hidden="true">
          <div class="modal-dialog">
              <div class="modal-content">
                  <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel">${item.type}</h5>
                      <button type="button" class="btn-close btn btn-danger" data-bs-dismiss="modal"
                          aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                      <div class="row">
                          <!-- Type -->
                          <div class="mb-3">
                              <label for="editType${index}" class="form-label">Type</label>
                              <input class="form-control" type="text" name="editType${index}" id="editType${index}"
                                  value="${item.type}" />
                          </div>
                          <!-- Price -->
                          <div class="mb-3">
                              <label for="editPrice${index}" class="form-label">Price</label>
                              <input class="form-control" type="text" name="editPrice${index}" id="editPrice${index}"
                                  value="${item.price}" />
                          </div>
                          <!-- Location -->
                          <div class="mb-3">
                              <label for="editLocation${index}" class="form-label">Location</label>
                              <input class="form-control" type="text" name="editLocation${index}"
                                  id="editLocation${index}" value="${item.location}"/>
                          </div>
                      </div>
                  </div>
              </div>
              <div class="modal-footer">
                  <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>

                  <button type="button" onclick="updateProperty(${index})" class="btn btn-primary">Save changes</button>
              </div>
          </div>
      </div>
      `;
    });
  }
  loadData();
  // Add
  function addItem() {
    // e.preventDefault();
    properties.push(
        {
            id: properties.length + 1,
            type: document.querySelector('#addType').value,
            price: document.querySelector('#addPrice').value,
            location: document.querySelector('#addLocation').value,
        }
    );
    localStorage.setItem("properties", JSON.stringify(properties));
    loadData();
  }
  document.getElementById('btnAdd').addEventListener('click', addItem)
  
  // UPDATE
  function updateProperty(id) {
    console.log('Helo')
    let etype = document.getElementById(`editType${id}`).value
    let eprice = document.getElementById(`editPrice${id}`).value
    let elocation = document.getElementById(`editLocation${id}`).value
    
    properties[id].type = etype
    properties[id].price   = eprice
    properties[id].location = elocation
    localStorage.setItem("properties", JSON.stringify(properties));
    console.table(properties)
    loadData()
  }

  // DELETE
  function deleteItem(id) {
    if (id > -1) {
      properties.splice(id, 1);
      localStorage.setItem("properties", JSON.stringify(properties));
    }
    loadData();
  }
//   document.getElementById('delete').addEventListener('click', deleteItem)




















