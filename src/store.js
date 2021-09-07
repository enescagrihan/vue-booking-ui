import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        currentIndex: 0,
        slides : [
            {
                photoUrl    : 'https://images.unsplash.com/photo-1485199433301-8b7102e86995?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
                cityName    : 'Paris', 
                visitReasons: 'museums, sightseeing, culture',
                date        : '23 Oct - 24 Oct',
                roomInfo    : '1',
                personInfo  : '2 adults'
            },
            {
                photoUrl    : 'https://images.unsplash.com/photo-1514510249063-e0faf6c6ec0c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
                cityName    : 'San Antonio Bay', 
                visitReasons: 'sunsets, beaches, nature',
                date        : '23 Oct - 24 Oct',
                roomInfo    : '1',
                personInfo  : '2 adults'
            },
            {
                photoUrl    : 'https://images.unsplash.com/photo-1578143571332-8e104b00dc5a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
                cityName    : 'Ibiza Town', 
                visitReasons: 'sunsets, beaches, nature',
                date        : '23 Oct - 24 Oct',
                roomInfo    : '1',
                personInfo  : '2 adults'
            },
            {
                photoUrl    : 'https://images.unsplash.com/photo-1505761671935-60b3a7427bad?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
                cityName    : 'London', 
                visitReasons: 'museums, sightseeing, culture',
                date        : '23 Oct - 24 Oct',
                roomInfo    : '1',
                personInfo  : '2 adults'
            },
            {
                photoUrl    : 'https://images.unsplash.com/photo-1528728329032-2972f65dfb3f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
                cityName    : 'Berlin', 
                visitReasons: 'museums, sightseeing, culture',
                date        : '23 Oct - 24 Oct',
                roomInfo    : '1',
                personInfo  : '2 adults'
            },
            {
                photoUrl    : 'https://images.unsplash.com/photo-1533050487297-09b450131914?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
                cityName    : 'Tokyo', 
                visitReasons: 'museums, sightseeing, culture',
                date        : '23 Oct - 24 Oct',
                roomInfo    : '1',
                personInfo  : '2 adults'
            },
            {
                photoUrl    : 'https://images.unsplash.com/photo-1523509433743-6f42a58221df?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
                cityName    : 'Moscow', 
                visitReasons: 'museums, sightseeing, culture',
                date        : '23 Oct - 24 Oct',
                roomInfo    : '1',
                personInfo  : '2 adults'
            },
            {
                photoUrl    : 'https://images.unsplash.com/photo-1589120206943-a39417ef5b0f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80',
                cityName    : 'Antalya', 
                visitReasons: 'museums, sightseeing, culture',
                date        : '23 Oct - 24 Oct',
                roomInfo    : '1',
                personInfo  : '2 adults'
            },
        ],
        destinations : [
            {
                destinationName     : 'Catalonia',
                destinationCountry  : 'Spain',
                destinationInfo     : '24 apartments, 10 aparthotels, 2 villas',
                destinationImg      : 'https://images.unsplash.com/photo-1505299413771-74d1b455dcaf?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
                showPlaneIcon       : false,
                showTopIcon         : true
            },
            {
                destinationName     : 'Marseille',
                destinationCountry  : 'France',
                destinationInfo     : '37 villas, 21 apartments, 6 guest houses, 5 aparthotels',
                destinationImg      : 'https://images.unsplash.com/photo-1608037580875-df901b196878?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
                showPlaneIcon       : true,
                showTopIcon         : false
            },
            {
                destinationName     : 'Istanbul',
                destinationCountry  : 'Turkey',
                destinationInfo     : '476 apartments, 243 aparthotels, 56 bed and breakfasts, 54 hostels',
                destinationImg       : 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
                showPlaneIcon       : true,
                showTopIcon         : true
            },
            {
                destinationName     : 'Barcelona',
                destinationCountry  : 'Spain',
                destinationInfo     : '1944 apartments, 259 guest houses, 111 hostels, 53 bed and breakfasts',
                destinationImg      : 'https://images.unsplash.com/photo-1564221710304-0b37c8b9d729?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
                showPlaneIcon       : true,
                showTopIcon         : true
            },
            {
                destinationName     : 'Vienna',
                destinationCountry  : 'Austria',
                destinationInfo     : '1171 apartments, 44 guest houses, 38 aparthotels, 34 bed and breakfasts',
                destinationImg      : 'https://images.unsplash.com/photo-1587717949435-dadd326765d2?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1000&q=80',
                showPlaneIcon       : true,
                showTopIcon         : true
            },
        ],
        discoverList : [
            {
                countryName : 'United States',
                text : 'Enjoy relaxation, shopping and restaurants during your next trip to USA!',
                pictureUrl : 'https://images.unsplash.com/photo-1580752300928-6e1d4ed200c0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2900&q=80',
            },
            {
                countryName : 'Italy',
                text : 'Enjoy food, scenery and relaxation during your next trip to Italy!',
                pictureUrl : 'https://images.unsplash.com/photo-1528123887526-0775584e2093?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2600&q=80',
            },
            {
                countryName : 'France',
                text : 'Put tranquillity, scenery and old town on your to-do list during your next visit to France!',
                pictureUrl : 'https://images.unsplash.com/photo-1564420179789-ede909db4882?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2300&q=80',
            },
        ],
        aparthotels : [
            {
                hotelName       : 'Mood of Galata Suites',
                hotelLocation   : 'Istanbul, Turkey',
                reviewCount     : 203,
                hotelText       : 'Offering a terrace, Mood of Galata Suites is located in Istanbul, 300 metres from Galata Tower...',
                photoUrl        : 'https://images.unsplash.com/photo-1568495248636-6432b97bd949?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=3134&q=80'
            },
            {
                hotelName       : 'A Palace Suites',
                hotelLocation   : 'Istanbul, Turkey',
                reviewCount     : 442,
                hotelText       : 'Featuring free Wi-Fi and air conditioning, A Palace Suites is located in Istanbul, Cevahir...',
                photoUrl        : 'https://images.unsplash.com/photo-1576675784432-994941412b3d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2852&q=80'
            },
            {
                hotelName       : 'Witt Istanbul Suites',
                hotelLocation   : 'Istanbul, Turkey',
                reviewCount     : 232,
                hotelText       : 'Suited in the Cihangir district, Witt Istanbul Suites offers luxurious rooms and a beatiful terrace...',
                photoUrl        : 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=3900&q=80'
            },
            {
                hotelName       : 'Maslak Istanbul',
                hotelLocation   : 'Istanbul, Turkey',
                reviewCount     : 4.5630,
                hotelText       : 'Featuring free Wi-Fi and air conditioning, Somerset Maslak Istanbul is situated in Istanbul...',
                photoUrl        : 'https://images.unsplash.com/photo-1590490359683-658d3d23f972?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1867&q=80' 
            },

        ],
        hotelReviews : [
            {
                cityName    : 'Edinburgh',
                reviewCount : '283,435'
            },
            {
                cityName    : 'Barcelona',
                reviewCount : '1,000,938'
            },
            {
                cityName    : 'Sydney',
                reviewCount : '309,780'
            },
            {
                cityName    : 'Sydney',
                reviewCount : '309,780'
            },
            {
                cityName    : 'Sydney',
                reviewCount : '309,780'
            },
            {
                cityName    : 'Bristol',
                reviewCount : '74,345'
            },
            {
                cityName    : 'Rome',
                reviewCount : '1,222,01'
            },
            {
                cityName    : 'Manchester',
                reviewCount : '194,347'
            },
            {
                cityName    : 'Manchester',
                reviewCount : '194,347'
            },
            {
                cityName    : 'Manchester',
                reviewCount : '194,347'
            },
        ],
        bbInnReviews : [
            {
                cityName    : 'Sydney',
                reviewCount : '309,780'
            },
            {
                cityName    : 'Sydney',
                reviewCount : '309,780'
            },
            {
                cityName    : 'Edinburgh',
                reviewCount : '283,435'
            },
            {
                cityName    : 'Barcelona',
                reviewCount : '1,000,938'
            },
            
            {
                cityName    : 'Sydney',
                reviewCount : '309,780'
            },
            {
                cityName    : 'Manchester',
                reviewCount : '194,347'
            },
            {
                cityName    : 'Bristol',
                reviewCount : '74,345'
            },
            {
                cityName    : 'Rome',
                reviewCount : '1,222,01'
            },
            {
                cityName    : 'Manchester',
                reviewCount : '194,347'
            },
            {
                cityName    : 'Manchester',
                reviewCount : '194,347'
            },   
        ],
        holidayRentalReviews : [
            {
                cityName    : 'Barcelona',
                reviewCount : '1,000,938'
            },
            {
                cityName    : 'Sydney',
                reviewCount : '309,780'
            },
            {
                cityName    : 'Rome',
                reviewCount : '1,222,01'
            },
            {
                cityName    : 'Sydney',
                reviewCount : '309,780'
            },
            {
                cityName    : 'Edinburgh',
                reviewCount : '283,435'
            },            
            {
                cityName    : 'Sydney',
                reviewCount : '309,780'
            },
            {
                cityName    : 'Manchester',
                reviewCount : '194,347'
            },
            {
                cityName    : 'Bristol',
                reviewCount : '74,345'
            },
            {
                cityName    : 'Manchester',
                reviewCount : '194,347'
            },
            {
                cityName    : 'Manchester',
                reviewCount : '194,347'
            },  
        ]
    },

    getters : {
        currentIndex: state => {
            return state.currentIndex;
        },
        slides: state => {
            return state.slides;
        },
        destinations: state => {
            return state.destinations;
        },
        discoverList : state => {
            return state.discoverList;
        },
        aparthotels : state => {
            return state.aparthotels;
        },
        hotelReviews : state => {
            return state.hotelReviews;
        },
        bbInnReviews : state => {
            return state.bbInnReviews;
        },
        holidayRentalReviews : state => {
            return state.holidayRentalReviews;
        }
    },
})
