
import {GET_BY_NAME, GET_BY_CATALOG, ADD_TO_CART, INCREMENT, DECREMENT, DELETE_ITEM ,BANNER_CLOSE,TOTAL_ITEMS,deleteproductscart} from "../actions/types"

const initialState = {
    products: [{
        _id: 1,
        img: ['/images/speaker1.PNG',
                '/images/speak1.JPG',
                '/images/speak2.JPG',
                '/images/speak3.JPG',
        '/images/speak4.JPG'
             ],
        title: 'speaker asd2',
        price: '150',
        details: 'Bluetooth Speaker,MusiBaby Speaker,Outdoor, Portable,Waterproof,Wireless Speakers,Dual Pairing, Bluetooth 5.0,Loud Stereo,Booming Bass,1500 Mins Playtime for Home&Party Black',
        count: 1,
        isInCart: false,
        category: "speaker",
        sale:""

    },
    {
        _id: 2,
        img: ['/images/speaker2.PNG'],
        title: 'speaker dfr8',
        price: '120',
        details: 'Bluetooth Speaker,MusiBaby Speaker,Outdoor, Portable,Waterproof,Wireless Speakers,Dual Pairing, Bluetooth 5.0,Loud Stereo,Booming Bass,1500 Mins Playtime for Home&Party Black',
        count: 1,
        isInCart: false,
        category: "speaker",
        sale:""

    },
    {
        _id: 3,
        img: ['/images/speaker3.PNG'],
        title: 'speaker mtys5',
        price: '110',
        details: 'Bluetooth Speaker,MusiBaby Speaker,Outdoor, Portable,Waterproof,Wireless Speakers,Dual Pairing, Bluetooth 5.0,Loud Stereo,Booming Bass,1500 Mins Playtime for Home&Party Black',
        count: 1,
        isInCart: false,
        category: "speaker",
        sale:""

    },
    {
        _id: 4,
        img: ['/images/speaker4.PNG'],
        title: 'speaker Ads5',
        price: '125',
        details: 'Bluetooth Speaker,MusiBaby Speaker,Outdoor, Portable,Waterproof,Wireless Speakers,Dual Pairing, Bluetooth 5.0,Loud Stereo,Booming Bass,1500 Mins Playtime for Home&Party Black',
        count: 1,
        isInCart: false,
        category: "speaker",
        sale:""

    },
    {
        _id: 5,
        img: ['/images/speaker5.PNG'],
        title: 'speaker Ads5',
        price: '117',
        details: 'Bluetooth Speaker,MusiBaby Speaker,Outdoor, Portable,Waterproof,Wireless Speakers,Dual Pairing, Bluetooth 5.0,Loud Stereo,Booming Bass,1500 Mins Playtime for Home&Party Black',
        count: 1,
        isInCart: false,
        category: "speaker",
        sale:"12%"

    },
    {
        _id: 6,
        img: ['/images/speaker6.PNG'],
        title: 'speaker Ads5',
        price: '135',
        details: 'Bluetooth Speaker,MusiBaby Speaker,Outdoor, Portable,Waterproof,Wireless Speakers,Dual Pairing, Bluetooth 5.0,Loud Stereo,Booming Bass,1500 Mins Playtime for Home&Party Black',
        count: 1,
        isInCart: false,
        category: "speaker",
        sale:""

    },
    {
        _id: 7,
        img: ['/images/headphone1.PNG'],
        title: 'headphone sds9',
        price: '210',
        details: 'Bluetooth Speaker,MusiBaby Speaker,Outdoor, Portable,Waterproof,Wireless Speakers,Dual Pairing, Bluetooth 5.0,Loud Stereo,Booming Bass,1500 Mins Playtime for Home&Party Black',
        count: 1,
        isInCart: false,
        category: "headphone",
        sale:""
    },
    {
        _id: 8,
        img: ['/images/headphone2.PNG'],
        title: 'headphone rte2',
        price: '200',
        details: 'Bluetooth Speaker,MusiBaby Speaker,Outdoor, Portable,Waterproof,Wireless Speakers,Dual Pairing, Bluetooth 5.0,Loud Stereo,Booming Bass,1500 Mins Playtime for Home&Party Black',
        count: 1,
        isInCart: false,
        category: "headphone",
        sale:""

    },
    {
        _id: 9,
        img: [
            "/images/headphone3.PNG",
            "/images/head1.JPG",
            "/images/head2.JPG",
            "/images/head3.JPG",
            
        ],
        title: 'headphone qws5',
        price: '205',
        details: 'Bluetooth Speaker,MusiBaby Speaker,Outdoor, Portable,Waterproof,Wireless Speakers,Dual Pairing, Bluetooth 5.0,Loud Stereo,Booming Bass,1500 Mins Playtime for Home&Party Black',
        count: 1,
        isInCart: false,
        category: "headphone",
        sale:""

    },
    {
        _id: 10,
        img: ['/images/headphone4.PNG'],
        title: 'headphone Ads5',
        price: '215',
        details: 'Bluetooth Speaker,MusiBaby Speaker,Outdoor, Portable,Waterproof,Wireless Speakers,Dual Pairing, Bluetooth 5.0,Loud Stereo,Booming Bass,1500 Mins Playtime for Home&Party Black',
        count: 1,
        isInCart: false,
        category: "headphone",
        sale:"15%"

    },
    {
        _id: 11,
        img: ['/images/headphone5.PNG'],
        title: 'headphone Ads5',
        price: '217',
        details: 'Bluetooth Speaker,MusiBaby Speaker,Outdoor, Portable,Waterproof,Wireless Speakers,Dual Pairing, Bluetooth 5.0,Loud Stereo,Booming Bass,1500 Mins Playtime for Home&Party Black',
        count: 1,
        isInCart: false,
        category: "headphone",
        sale:""

    },
    {
        _id: 12,
        img: ['/images/headphone6.PNG'],
        title: 'headphone ry8s5',
        price: '220',
        details: 'Bluetooth Speaker,MusiBaby Speaker,Outdoor, Portable,Waterproof,Wireless Speakers,Dual Pairing, Bluetooth 5.0,Loud Stereo,Booming Bass,1500 Mins Playtime for Home&Party Black',
        count: 1,
        isInCart: false,
        category: "headphone",
        sale:""

    },
    {
        _id: 13,
        img: ['/images/mouse1.PNG'],
        title: 'mouse Ads5',
        price: '78',
        details: 'Bluetooth Speaker,MusiBaby Speaker,Outdoor, Portable,Waterproof,Wireless Speakers,Dual Pairing, Bluetooth 5.0,Loud Stereo,Booming Bass,1500 Mins Playtime for Home&Party Black',
        count: 1,
        isInCart: false,
        category: "mouse",
        sale:""

    },
    {
        _id: 14,
        img: ['/images/mouse2.PNG'],
        title: 'mouse pods5',
        price: '70',
        details: 'Bluetooth Speaker,MusiBaby Speaker,Outdoor, Portable,Waterproof,Wireless Speakers,Dual Pairing, Bluetooth 5.0,Loud Stereo,Booming Bass,1500 Mins Playtime for Home&Party Black',
        count: 1,
        isInCart: false,
        category: "mouse",
        sale:""

    },
    {
        _id: 15,
        img: ['/images/mouse3.PNG'],
        title: 'mouse yes5',
        price: '55',
        details: 'Bluetooth Speaker,MusiBaby Speaker,Outdoor, Portable,Waterproof,Wireless Speakers,Dual Pairing, Bluetooth 5.0,Loud Stereo,Booming Bass,1500 Mins Playtime for Home&Party Black',
        count: 1,
        isInCart: false,
        category: "mouse",
        sale:""

    },
    {
        _id: 16,
        img: ['/images/mouse4.PNG'],
        title: 'mouse Ads5',
        price: '80',
        details: 'Bluetooth Speaker,MusiBaby Speaker,Outdoor, Portable,Waterproof,Wireless Speakers,Dual Pairing, Bluetooth 5.0,Loud Stereo,Booming Bass,1500 Mins Playtime for Home&Party Black',
        count: 1,
        isInCart: false,
        category: "mouse",
        sale:"13%"

    },
    {
        _id: 17,
        img: ['/images/mouse5.PNG'],
        title: 'mouse twue',
        price: '75',
        details: 'Bluetooth Speaker,MusiBaby Speaker,Outdoor, Portable,Waterproof,Wireless Speakers,Dual Pairing, Bluetooth 5.0,Loud Stereo,Booming Bass,1500 Mins Playtime for Home&Party Black',
        count: 1,
        isInCart: false,
        category: "mouse",
        sale:""

    },
    {
        _id: 18,
        img: ['/images/mouse6.PNG'],
        title: 'mouse Ads5',
        price: '100',
        details: 'Bluetooth Speaker,MusiBaby Speaker,Outdoor, Portable,Waterproof,Wireless Speakers,Dual Pairing, Bluetooth 5.0,Loud Stereo,Booming Bass,1500 Mins Playtime for Home&Party Black',
        count: 1,
        isInCart: false,
        category: "mouse",
        sale:""

    },
    {
        _id: 19,
        img: ['/images/keyboard1.PNG'],
        title: 'keyboard Ads5',
        price: '100',
        details: 'Bluetooth Speaker,MusiBaby Speaker,Outdoor, Portable,Waterproof,Wireless Speakers,Dual Pairing, Bluetooth 5.0,Loud Stereo,Booming Bass,1500 Mins Playtime for Home&Party Black',
        count: 1,
        isInCart: false,
        category: "keyboard",
        sale:""

    },
    {
        _id: 20,
        img: ['/images/keyboard2.PNG'],
        title: 'keyboard Ads5',
        price: '100',
        details: 'Bluetooth Speaker,MusiBaby Speaker,Outdoor, Portable,Waterproof,Wireless Speakers,Dual Pairing, Bluetooth 5.0,Loud Stereo,Booming Bass,1500 Mins Playtime for Home&Party Black',
        count: 1,
        isInCart: false,
        category: "keyboard",
        sale:""

    },
    {
        _id: 21,
        img: ['/images/keyboard3.PNG'],
        title: 'keyboard Ads5',
        price: '90',
        details: 'Bluetooth Speaker,MusiBaby Speaker,Outdoor, Portable,Waterproof,Wireless Speakers,Dual Pairing, Bluetooth 5.0,Loud Stereo,Booming Bass,1500 Mins Playtime for Home&Party Black',
        count: 1,
        isInCart: false,
        category: "keyboard",
        sale:"20%"

    },
    {
        _id: 22,
        img: ['/images/keyboard4.PNG'],
        title: 'keyboard Ads5',
        price: '95',
        details: 'Bluetooth Speaker,MusiBaby Speaker,Outdoor, Portable,Waterproof,Wireless Speakers,Dual Pairing, Bluetooth 5.0,Loud Stereo,Booming Bass,1500 Mins Playtime for Home&Party Black',
        count: 1,
        isInCart: false,
        category: "keyboard",
        sale:""

    },
    {
        _id: 23,
        img: ['/images/keyboard5.PNG'],
        title: 'keyboard Ads5',
        price: '67',
        details: 'Bluetooth Speaker,MusiBaby Speaker,Outdoor, Portable,Waterproof,Wireless Speakers,Dual Pairing, Bluetooth 5.0,Loud Stereo,Booming Bass,1500 Mins Playtime for Home&Party Black',
        count: 1,
        isInCart: false,
        category: "keyboard",
        sale:""

    },
    {
        _id: 24,
        img: ['/images/keyboard6.PNG'],
        title: 'keyboard Ads5',
        price: '75',
        details: 'Bluetooth Speaker,MusiBaby Speaker,Outdoor, Portable,Waterproof,Wireless Speakers,Dual Pairing, Bluetooth 5.0,Loud Stereo,Booming Bass,1500 Mins Playtime for Home&Party Black',
        count: 1,
        isInCart: false,
        category: "keyboard",
        sale:"10%"
    },
    {
        _id: 25,
        img: ['/images/airpod1.PNG'],
        title: 'airpod ews5',
        price: '85',
        details: 'Bluetooth Speaker,MusiBaby Speaker,Outdoor, Portable,Waterproof,Wireless Speakers,Dual Pairing, Bluetooth 5.0,Loud Stereo,Booming Bass,1500 Mins Playtime for Home&Party Black',
        count: 1,
        isInCart: false,
        category: "airpod",
        sale:""

    },
    {
        _id: 26,
        img: ['/images/airpod2.PNG'],
        title: 'air qys5',
        price: '300',
        details: 'Bluetooth Speaker,MusiBaby Speaker,Outdoor, Portable,Waterproof,Wireless Speakers,Dual Pairing, Bluetooth 5.0,Loud Stereo,Booming Bass,1500 Mins Playtime for Home&Party Black',
        count: 1,
        isInCart: false,
        category: "airpod",
        sale:""

    },
    {
        _id: 27,
        img: ['/images/airpod3.PNG'],
        title: 'air Ar5',
        price: '325',
        details: 'Bluetooth Speaker,MusiBaby Speaker,Outdoor, Portable,Waterproof,Wireless Speakers,Dual Pairing, Bluetooth 5.0,Loud Stereo,Booming Bass,1500 Mins Playtime for Home&Party Black',
        count: 1,
        isInCart: false,
        category: "airpod",
        sale:""

    },
    {
        _id: 28,
        img: ['/images/airpod4.PNG'],
        title: 'air opd9',
        price: '310',
        details: 'Bluetooth Speaker,MusiBaby Speaker,Outdoor, Portable,Waterproof,Wireless Speakers,Dual Pairing, Bluetooth 5.0,Loud Stereo,Booming Bass,1500 Mins Playtime for Home&Party Black',
        count: 1,
        isInCart: false,
        category: "airpod",
        sale:"10%"

    },
    {
        _id: 29,
        img: ['/images/airpod5.PNG'],
        title: 'air Ads5',
        price: '320',
        details: 'Bluetooth Speaker,MusiBaby Speaker,Outdoor, Portable,Waterproof,Wireless Speakers,Dual Pairing, Bluetooth 5.0,Loud Stereo,Booming Bass,1500 Mins Playtime for Home&Party Black',
        count: 1,
        isInCart: false,
        category: "airpod",
        sale:""

    },
    {
        _id: 30,
        img: ['/images/airpod6.PNG'],
        title: 'air pis5',
        price: '315',
        details: 'Bluetooth Speaker,MusiBaby Speaker,Outdoor, Portable,Waterproof,Wireless Speakers,Dual Pairing, Bluetooth 5.0,Loud Stereo,Booming Bass,1500 Mins Playtime for Home&Party Black',
        count: 1,
        isInCart: false,
        category: "airpod",
        sale:""

    },
    {
        _id: 31,
        img: ['/images/powerbank1.PNG'],
        title: 'powerbank Aqpo5',
        price: '250',
        details: 'Bluetooth Speaker,MusiBaby Speaker,Outdoor, Portable,Waterproof,Wireless Speakers,Dual Pairing, Bluetooth 5.0,Loud Stereo,Booming Bass,1500 Mins Playtime for Home&Party Black',
        count: 1,
        isInCart: false,
        category: "powerbank",
        sale:""

    },

    {
        _id: 32,
        img: ['/images/powerbank2.PNG'],
        title: 'powerbank plm',
        price: '260',
        details: 'Bluetooth Speaker,MusiBaby Speaker,Outdoor, Portable,Waterproof,Wireless Speakers,Dual Pairing, Bluetooth 5.0,Loud Stereo,Booming Bass,1500 Mins Playtime for Home&Party Black',
        count: 1,
        isInCart: false,
        category: "powerbank",
        sale:""

    },
    {
        _id: 33,
        img: ['/images/powerbank3.PNG'],
        title: 'powerbank Ads5',
        price: '275',
        details: 'Bluetooth Speaker,MusiBaby Speaker,Outdoor, Portable,Waterproof,Wireless Speakers,Dual Pairing, Bluetooth 5.0,Loud Stereo,Booming Bass,1500 Mins Playtime for Home&Party Black',
        count: 1,
        isInCart: false,
        category: "powerbank",
        sale:""

    },
    {
        _id: 34,
        img: ['/images/powerbank4.PNG'],
        title: 'powerbank dop9',
        price: '300',
        details: 'Bluetooth Speaker,MusiBaby Speaker,Outdoor, Portable,Waterproof,Wireless Speakers,Dual Pairing, Bluetooth 5.0,Loud Stereo,Booming Bass,1500 Mins Playtime for Home&Party Black',
        count: 1,
        isInCart: false,
        category: "powerbank",
        sale:""

    },
    {
        _id: 35,
        img: ['/images/powerbank5.PNG'],
        title: 'powerbank opl5',
        price: '265',
        details: 'Bluetooth Speaker,MusiBaby Speaker,Outdoor, Portable,Waterproof,Wireless Speakers,Dual Pairing, Bluetooth 5.0,Loud Stereo,Booming Bass,1500 Mins Playtime for Home&Party Black',
        count: 1,
        isInCart: false,
        category: "powerbank",
        sale:""

    },
    {
        _id: 36,
        img: ['/images/powerbank6.PNG'],
        title: 'powerbank mnko9',
        price: '260',
        details: 'Bluetooth Speaker,MusiBaby Speaker,Outdoor, Portable,Waterproof,Wireless Speakers,Dual Pairing, Bluetooth 5.0,Loud Stereo,Booming Bass,1500 Mins Playtime for Home&Party Black',
        count: 1,
        isInCart: false,
        category: "powerbank",
        sale:"10%"

    },


    ],
    cart: [],
    isOpen: false,
    total: 0,
    shipping: 10,
    category: ""
}



const productReducer = (state = initialState, action) => {
    // if(action.type === GET_PRODUCTS){
    //    return state = action.payload;

    // }

    //filter by name
    if (action.type === GET_BY_NAME) {

        if (action.payload === "") {
            return state
        }
        else {
            const newproducts = Array.from(state.products)
            console.log(state.products);
            let filterproducts = newproducts.filter(product => product.title.toLowerCase().includes(action.payload.toLowerCase()))
            console.log(filterproducts);
            return { ...state, prods: filterproducts };
        }
    }

    // search by catalog
    if (action.type === GET_BY_CATALOG) {
        console.log(action.payload);
        if (action.payload === "all") {
            return state;
        }
        else {
            let newproducts = [...state.products];
            let filterproducts = newproducts.filter(product => product.category == action.payload);
            return { ...state, cat: filterproducts };
        }
    }

    //add to cart

    if (action.type === ADD_TO_CART) {
        let check = state.cart.length > 0 ? state.cart.find(item => item._id === action.payload) : false;
        if (!check) {
            let items = state.products.filter(item => item._id === action.payload);
            let itemsCart = [...state.cart, ...items]

            return {
                ...state,
                cart: itemsCart
            }

        }
        else {
            let items = state.products.filter(item => item._id === action.payload);
            items.forEach(item => {
                item.isInCart = true;
                // alert(`Already in Cart`)
            })

            return {
                ...state
            }
        }
    }

   // close Banner 

    if(action.type === BANNER_CLOSE){
        state.products.forEach(item=>{
            item.isInCart=false
        })
        return {...state}  
   }

    // increment
    if (action.type === INCREMENT) {
        let itemscart = state.cart.map(item => {
            if (item._id === action.payload) {
                item = { ...item, count: item.count + 1 }

            }
            return item;
        })
        return { ...state, cart: itemscart }
    }

    // decrement
    if (action.type === DECREMENT) {
        let itemscart = state.cart.map(item => {
            if (item._id === action.payload) {
                if (item.count > 1) {
                    item = { ...item, count: item.count - 1 }
                }
            }
            return item;
        })
        return { ...state, cart: itemscart }
    }

    //delete 

    if (action.type === DELETE_ITEM) {
        let itemscart = state.cart.filter(item => item._id !== action.payload)
        return { ...state, cart: itemscart }
    }

    if(action.type === TOTAL_ITEMS ){
        const totals = state.cart.reduce((prev, item)=>{
            return prev + (item.price * item.count)
            },0)

        return{
            ...state,
            total:totals
        }
    }

    if(action.type === deleteproductscart ){
        return{
            ...state,
            total:0,
            cart:[]
        }
    }

    


    return state
}

export default productReducer