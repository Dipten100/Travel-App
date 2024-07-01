 const travelsDetails=[
    {
        "_id":"1",
        "images":[
            "kashmir5.jpg",
            "kashmir1.jpg",
            "kashmir2.jpg",
            "kashmir3.jpg",
            "kashmir4.jpg"
        ],
        "title":"Kashmir toure",
        "details":"7 days and 6 nights toure includes round trip flights. Intercity car transfer.",
        "price":25000,
        "daymap":[
            {
                "date":"Day 1",
                "details":"Arrival in Srinagar",
                "activity":[
                    {
                        "transportMode":"flight",
                        "form":"New Delhi",
                        "to":"Srinagar",
                        "id":"1",
                        "description":"Flight from New Delhi to Srinagar"
                    },
                    {
                        "transportMode":"car",
                        "form":"Airport",
                        "to":"Hotel Royal plaza",
                        "id":"1",
                        "description":"Airport to hotel in Srinagar"
                    },
                    {
                        "stayIn":"Hotel",
                        "id":"1",
                        "description":"Check-in to Hotel in Srinagar @ 12 PM"
                    }
                ],
                "onGroundAssisment":"1",
                "endOfDay":"Spend time at Leisure or add an activity to your day"
            },
            {
                "date":"Day 2",
                "details":"Srinagar to Sonmarg",
                "activity":[
                    {
                        "transportMode":"car",
                        "form":"Hotel Royal plaza",
                        "to":"Hotel Mount view",
                        "id":"1",
                        "description":"Check-out from Hotel in Srinagar after breakfast at Hotel Royal Plaza"
                    },
                    {
                        "stayIn":"Hotel",
                        "id":"2",
                        "description":"Check-in to Hotel in Sonmarg @ 12 PM"
                    }
                ],
                "onGroundAssisment":"1",
                "endOfDay":"Spend time at Leisure or add an activity to your day"
            },
            {
                "date":"Day 3",
                "details":"Sonmarg to Pahalgam",
                "activity":[
                    {
                        "transportMode":"car",
                        "form":"Hotel Mount view",
                        "to":"HOTEL RIVIERA By Mountview",
                        "id":"1",
                        "description":"Check-out from Hotel in Sonmarg after breakfast at Hotel Mount view"
                    },
                    {
                        "sightSeen":"Avantipura Ruins",
                        "id":"1",
                        "description":"Sideseening in way"
                    },
                    {
                        "stayIn":"Hotel",
                        "id":"3",
                        "description":"Check-in to Hotel in Sonmarg @ 12 PM"
                    }
                ],
                "onGroundAssisment":"1",
                "endOfDay":"Spend time at Leisure or add an activity to your day"
            },
            {
                "date":"Day 4",
                "details":"Stay in Pahalgam",
                "activity":[
                    {
                        "sightSeen":"Tour of Aru & Betab Valley",
                        "id":"2",
                        "description":"Sideseening in way"
                    }
                ],
                "onGroundAssisment":"1",
                "endOfDay":"Spend time at Leisure or add an activity to your day"
            },
            {
                "date":"Day 5",
                "details":"Pahalgam to Gulmarg",
                "activity":[
                    {
                        "transportMode":"car",
                        "form":"HOTEL RIVIERA By Mountview",
                        "to":"Hotel Gulmarg House",
                        "id":"1",
                        "description":"Check-out from Hotel in Pahalgam after breakfast at Hotel Premier"
                    },
                    {
                        "stayIn":"Hotel",
                        "id":"4",
                        "description":"Check-in to Hotel in Tangmarg @ 12 PM"
                    }
                ],
                "onGroundAssisment":"1",
                "endOfDay":"Spend time at Leisure or add an activity to your day"
            },
            {
                "date":"Day 6",
                "details":"Gulmarg to Srinagar",
                "activity":[
                    {
                        "transportMode":"car",
                        "form":"Hotel Gulmarg House",
                        "to":"Hotel Milad Srinagar ",
                        "id":"1",
                        "description":"Check-out from Hotel in Gulmarg after breakfast at Hotel Gulmarg House"
                    },
                    {
                        "sightSeen":"Cheshma Shahi",
                        "id":"3",
                        "description":"Sideseening in way"
                    },
                    {
                        "sightSeen":"Nishat Bagh",
                        "id":"4",
                        "description":"Sideseening in way"
                    },
                    {
                        "sightSeen":"Shalimar Garden",
                        "id":"5",
                        "description":"Sideseening in way"
                    },
                    {
                        "sightSeen":"Shankaracharya Temple",
                        "id":"6",
                        "description":"Sideseening in way"
                    },
                    {
                        "stayIn":"Hotel",
                        "id":"5",
                        "description":"Check-in to Hotel in Raj Bagh @ 1 PM"
                    }
                ],
                "onGroundAssisment":"1",
                "endOfDay":"Spend time at Leisure or add an activity to your day"
            },
            {
                "date":"Day 7",
                "details":"Departure from Srinagar",
                "activity":[
                    {
                        "transportMode":"car",
                        "form":"Hotel Royal Milad",
                        "to":"Airport",
                        "id":"1",
                        "description":"Check-out from Hotel in Srinagar after breakfast at Hotel Royal Milad"
                    },
                    {
                        "transportMode":"flight",
                        "form":"Srinagar",
                        "to":"New Delhi",
                        "id":"4",
                        "description":"Flight from Srinagar to New Delhi"
                    }
                ],
                "onGroundAssisment":"1",
                "endOfDay":"Spend time at Leisure or add an activity to your day"
            }
        ],        
        "ratings":4,
        "reviewers":870
    }
]

export default travelsDetails