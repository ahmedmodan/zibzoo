/* -------------------------------------------------------------
Temporary Vendor data for starting out our application
All vendor data will have the same basic format (for now, change as needed)
====== EXAMPLE OBJ ======
{
  fullName : "",  // Full name of place
  description : ,  // description for the restraunt
  cuisine : [], // the type of cuisine
  mainImg : "", // a vendor image
  menu : [  // array is propogated with only food objects
      { food : , // food item
        price : , // price
        description : , // any description they want to give the food
        prepTime : ,   // avarage time it takes to make in mins
      }
   ],
  recomendedItem : , //should only be able to refrence an item in their list
  schedule : {
    monday : {isOpen: false, opens: null, close: null},
    tuesday : {isOen: false, opens: null, close: null},
    wednesday : {isOpen: false, opens: null, close: null},  // what days they are normaly scheduled to be open
    thursday : {isOpen: false, opens: null, close: null},   // open and close in military time
    friday : {isOpen: false, opens: null, close: null},
    saturday : {isOpen: false, opens: null, close: null},
    sunday : {isOpen: false, opens: null, close: null}
  },
  isOpen :  ,// should only be set to true when the vendor logs in (boolean val)
  foodQueue : [] , // list of orders as they come in
  currentLocation : // will need to list current geodata / zip ()
}


======= TEMP ORDER OBJ ======
Object orders should list the user information and what they ordered, picture if availible
{
  customer : ,  // name of the customer who ordered
  customerID : , // some kinda id so we know who to update later?
  customerImg : ,  // picture if availible
  food : [ ],  // list of items they ordered
  total : ,  // total cost
  estimatedTime : , // time in min
  orderTime: ,  // time order is placed in millitary
  requestedPickUpTime : , // time in military
}


------------------------------------------------------------- */

const elliotsBurgers = {
  fullName : "Elliots Burgers",
  description : "Only the best food, just dont ask how its made",
  cuisine : ["burgers", "fusion", "american""],
  mainImg : "http://www.fastfoodlondon.co.uk/wp-content/uploads/2013/07/643918_695650526470_1380903060_n.jpg",
  menu : [
    { food : "Fries",
      price : 4.50,
      description : "thin cut, homestyle fries",
      prepTime : 7
    },
    {
      food : "Burger",
      price : 7.50 ,
      description : "1/2lb all beef patty with lettus, tomato, and onions" ,
      prepTime : 10
    }
   ],
  recomendedItem : menu[1],
  schedule : {
    monday : {isOpen: false, opens: null, close: null},
    tuesday : {isOpen: true, opens: 11, close: 15},
    wednesday : {isOpen: true, opens: 11, close: 15},
    thursday : {isOpen: true, opens: 11, close: 15},
    friday : {isOpen: true, opens: 11, close: 15},
    saturday : {isOpen: false, opens: null, close: null},
    sunday : {isOpen: false, opens: null, close: null}
  },
  isOpen : false,
  foodQueue : [
    {
      customer : "Clark Williams",
      customerID : 4836759374,
      customerImg : null,
      food : [ "Burger", "Burger", "Fries"],
      total : 19.50,
      orderTime: 12,
      estimatedTime : 19,
      requestedPickUpTime : null,
    }
  ],
  currentLocation : null
},

const benjisStuffYourFace = {
  fullName : "Benji's Stuff Your Face",
  description : "Food from the place where everything wants to eat you, now you can eat it",
  cuisine : ['Australian'],
  mainImg : "http://ichef-1.bbci.co.uk/news/660/cpsprodpb/14545/production/_85696238_nativefoodonplategetty.jpg",
  menu : [
      { food : "Kangaroo Caraway Burger",
        price : 12,
        description : "Roo burgers for the BBQ or cooked inside in the frypan. Serve in Turkish bread rolls with lettuce and tomato or add any burger fillings that you like..",
        prepTime : 14,
      }
   ],
  recomendedItem : menu[0],
  schedule : {
    monday : {isOpen: false, opens: null, close: null},
    tuesday : {isOpen: true, opens: 10, close: 16},
    wednesday : {isOpen: true, opens: 10, close: 16},
    thursday : {isOpen: true, opens: 10, close: 16},
    friday : {isOpen: true, opens: 10, close: 16},
    saturday : {isOpen: false, opens: null, close: null},
    sunday : {isOpen: false, opens: null, close: null}
  },
  isOpen :  true,
  foodQueue : [
    {
      customer : "John Rice" ,
      customerID : 9385620475,
      customerImg : null,
      food : [ "Kangaroo Caraway Burger"],
      total : 12,
      orderTime: 13,
      estimatedTime : 14,
      requestedPickUpTime : null,
    },
    {
      customer : "Jill Faith" ,
      customerID : 7593740285,
      customerImg : "https://pbs.twimg.com/profile_images/502176585038823424/PQREJrKH.jpeg",
      food : [ "Kangaroo Caraway Burger", "Kangaroo Caraway Burger", "Kangaroo Caraway Burger"],
      total : 36 ,
      orderTime: 1310,
      estimatedTime : 20,
      requestedPickUpTime : null,
    }
  ] ,
  currentLocation : null;
},

const tomsKillerPizza = {
  fullName : "Toms Killer Pizza",
  description : "The best pizza around, so good it might kill you",
  cuisine : ['pizza', 'italian', 'american'],
  mainImg : "http://www.toms-pizza.com/images/Front_Page_Pizza_Cropped.jpg",
  menu : [
      { food : "cheese",
        price : 14.50,
        description : "three cheese pizza with a garlic stuffed crust",
        prepTime : 20 ,
      },
      { food : "volcano",
        price : 18.00,
        description : "three cheese topped with jalapenos, red pepers, spicy italian sausage and a stuffed jalapeno creamcheese crust ",
        prepTime : 22 ,
      },
      { food : "garlic breadsticks",
        price : 7.0,
        description : "soft homemade breadsticks brushed with butter and our special mix of garlic and spices",
        prepTime : 15 ,
      }
   ],
  recomendedItem : menu[1],
  schedule : {
    monday : {isOpen: false, opens: null, close: null},
    tuesday : {isOpen: true, opens: 12, close: 21},
    wednesday : {isOpen: true, opens: 12, close: 21},
    thursday : {isOpen: true, opens: 12, close: 21},
    friday : {isOpen: true, opens: 12, close: 21},
    saturday : {isOpen: true, opens: 12, close: 21},
    sunday : {isOpen: false, opens: null, close: null}
  },
  isOpen : true ,
  foodQueue : [
  {
    customer : "Jean Phillips",
    customerID : 7584905647,
    customerImg : null,
    food : [ "garlic breadsticks" ],
    total : 7,
    orderTime: 1215,
    estimatedTime : 15 ,
    requestedPickUpTime : ,
  },
  {
    customer : "Jessica Chang",
    customerID : 9365936100,
    customerImg : null,
    food : [ "cheese", "garlic breadsticks"],
    total : 21.50,
    orderTime: 1216,
    estimatedTime : 25,
    requestedPickUpTime : ,
  },
  {
    customer : "Loc Nguyen ,
    customerID : 0296215830,
    customerImg : ,
    food : [ "cheese", "volcano", "volcano", "garlic breadsticks"],
    total : 57.50 ,
    orderTime: 1219,
    estimatedTime : ,
    requestedPickUpTime : 14 ,
  },
] ,
  currentLocation : null,
},

const saladTime = {
  fullName : "Salad Time",
  description : "Get the best greens in town, its Salad Time!",
  cuisine : ['salad', 'italian', 'greek'],
  mainImg : "",
  menu : [
      { food : "Greek Salad",
        price : 8.50,
        description : "This is an incredibly good Greek salad recipe, nice and tangy and even better in the summer when you use fresh vegetables!",
        prepTime : 8,
      },
      { food : "Italian Salad",
        price : 8,
        description : "Part green salad, part antipasto salad, this recipe combines lettuce, celery, onion, peperoncini, olives and cherry tomatoes",
        prepTime : 8,
      },
      { food : "Sundried Tomato Salad",
        price : 9,
        description : "Sundried tomatos, roman lettus, grilled chicken with feta, pinenuts, crutons and an italian vinaigrette" ,
        prepTime : 9,
      }
   ],
  recomendedItem : menu[2] ,
  schedule : {
    monday : {isOpen: false, opens: null, close: null},
    tuesday : {isOpen: false, opens: null, close: null},
    wednesday : {isOpen: true, opens: 11, close: 21},
    thursday : {isOpen: true, opens: 11, close: 21},
    friday : {isOpen: true, opens: 11, close: 21},
    saturday : {isOpen: true, opens: 12, close: 22},
    sunday : {isOpen: true, opens: 12, close: 20}
  },
  isOpen : true,
  foodQueue : [
    {
      customer : "David Whitman",
      customerID : 3849561003,
      customerImg : "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/2/000/192/3c4/28d16a9.jpg",
      food : [ "Sundried Tomato Salad" ],
      total : 9,
      orderTime: 1245,
      estimatedTime : 9,
      requestedPickUpTime : null,
    },
    {
      customer : "Vincent Volpin" ,
      customerID : 9362479917,
      customerImg : "https://pbs.twimg.com/profile_images/784068970/jameswglass.jpg",
      food : ["Italian Salad","Italian Salad", "Greek Salad"],
      total : 32.50 ,
      orderTime: 1345,
      estimatedTime : null ,
      requestedPickUpTime : 1430,
    }

  ] ,
  currentLocation : null
}

export default = {
  elliotsBurgers,
  benjisStuffYourFace,
  tomsKillerPizza
}










/* ======= BLANK TEMPLATE: No comments =======
  ------------ VENDOR OBJ -------------
{
  fullName : "",
  description : ,
  cuisine : [],
  mainImg : "",
  menu : [
      { food : ,
        price : ,
        description : ,
        prepTime : ,
      }
   ],
  recomendedItem : ,
  schedule : {
    monday : {isOpen: false, opens: null, close: null},
    tuesday : {isOpen: false, opens: null, close: null},
    wednesday : {isOpen: false, opens: null, close: null},
    thursday : {isOpen: false, opens: null, close: null},
    friday : {isOpen: false, opens: null, close: null},
    saturday : {isOpen: false, opens: null, close: null},
    sunday : {isOpen: false, opens: null, close: null}
  },
  isOpen :  ,
  foodQueue : [] ,
  currentLocation : null
}


------------ VENDOR ORDER OBJ -------------
{
  customer : ,
  customerID : ,
  customerImg : ,
  food : [ ],
  total : ,
  orderTime: ,
  estimatedTime : ,
  requestedPickUpTime : ,
}

/*
