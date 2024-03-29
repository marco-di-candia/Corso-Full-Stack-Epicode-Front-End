import { Injectable } from '@angular/core';
import { Todo, User } from '../interface/db';

@Injectable({
  providedIn: 'root'
})

export class TodolistService {

  arraytoDoList: Todo[] = [
    {
      "id": 1,
      "todo": "Do something nice for someone I care about",
      "completed": true,
      "userId": 26
    },
    {
      "id": 2,
      "todo": "Memorize the fifty states and their capitals",
      "completed": false,
      "userId": 48
    },
    {
      "id": 3,
      "todo": "Watch a classic movie",
      "completed": false,
      "userId": 4
    },
    {
      "id": 4,
      "todo": "Contribute code or a monetary donation to an open-source software project",
      "completed": false,
      "userId": 48
    },
    {
      "id": 5,
      "todo": "Solve a Rubik's cube",
      "completed": false,
      "userId": 31
    },
    {
      "id": 6,
      "todo": "Bake pastries for me and neighbor",
      "completed": false,
      "userId": 39
    },
    {
      "id": 7,
      "todo": "Go see a Broadway production",
      "completed": false,
      "userId": 32
    },
    {
      "id": 8,
      "todo": "Write a thank you letter to an influential person in my life",
      "completed": true,
      "userId": 13
    },
    {
      "id": 9,
      "todo": "Invite some friends over for a game night",
      "completed": false,
      "userId": 47
    },
    {
      "id": 10,
      "todo": "Have a football scrimmage with some friends",
      "completed": false,
      "userId": 19
    },
    {
      "id": 11,
      "todo": "Text a friend I haven't talked to in a long time",
      "completed": false,
      "userId": 39
    },
    {
      "id": 12,
      "todo": "Organize pantry",
      "completed": true,
      "userId": 39
    },
    {
      "id": 13,
      "todo": "Buy a new house decoration",
      "completed": false,
      "userId": 16
    },
    {
      "id": 14,
      "todo": "Plan a vacation I've always wanted to take",
      "completed": false,
      "userId": 28
    },
    {
      "id": 15,
      "todo": "Clean out car",
      "completed": false,
      "userId": 33
    },
    {
      "id": 16,
      "todo": "Draw and color a Mandala",
      "completed": true,
      "userId": 24
    },
    {
      "id": 17,
      "todo": "Create a cookbook with favorite recipes",
      "completed": false,
      "userId": 1
    },
    {
      "id": 18,
      "todo": "Bake a pie with some friends",
      "completed": false,
      "userId": 1
    },
    {
      "id": 19,
      "todo": "Create a compost pile",
      "completed": true,
      "userId": 5
    },
    {
      "id": 20,
      "todo": "Take a hike at a local park",
      "completed": true,
      "userId": 43
    },
    {
      "id": 21,
      "todo": "Take a class at local community center that interests you",
      "completed": false,
      "userId": 22
    },
    {
      "id": 22,
      "todo": "Research a topic interested in",
      "completed": false,
      "userId": 4
    },
    {
      "id": 23,
      "todo": "Plan a trip to another country",
      "completed": true,
      "userId": 37
    },
    {
      "id": 24,
      "todo": "Improve touch typing",
      "completed": false,
      "userId": 45
    },
    {
      "id": 25,
      "todo": "Learn Express.js",
      "completed": false,
      "userId": 49
    },
    {
      "id": 26,
      "todo": "Learn calligraphy",
      "completed": false,
      "userId": 50
    },
    {
      "id": 27,
      "todo": "Have a photo session with some friends",
      "completed": false,
      "userId": 14
    },
    {
      "id": 28,
      "todo": "Go to the gym",
      "completed": false,
      "userId": 15
    },
    {
      "id": 29,
      "todo": "Make own LEGO creation",
      "completed": false,
      "userId": 30
    },
    {
      "id": 30,
      "todo": "Take cat on a walk",
      "completed": false,
      "userId": 15
    },
    {
      "id": 31,
      "todo": "Find a charity and donate to it",
      "completed": true,
      "userId": 35
    },
    {
      "id": 32,
      "todo": "Donate to local food bank",
      "completed": true,
      "userId": 40
    },
    {
      "id": 33,
      "todo": "Uninstall unused apps from devices",
      "completed": false,
      "userId": 36
    },
    {
      "id": 34,
      "todo": "Write a handwritten letter to somebody",
      "completed": false,
      "userId": 38
    },
    {
      "id": 35,
      "todo": "Fill out a basketball bracket",
      "completed": false,
      "userId": 34
    },
    {
      "id": 36,
      "todo": "Do yoga",
      "completed": false,
      "userId": 35
    },
    {
      "id": 37,
      "todo": "Make a scrapbook with pictures of favorite memories",
      "completed": false,
      "userId": 9
    },
    {
      "id": 38,
      "todo": "Have a bonfire with close friends",
      "completed": true,
      "userId": 8
    },
    {
      "id": 39,
      "todo": "Go for a run",
      "completed": false,
      "userId": 16
    },
    {
      "id": 40,
      "todo": "Host a movie marathon with some friends",
      "completed": false,
      "userId": 47
    },
    {
      "id": 41,
      "todo": "Go see a movie in theaters with a few friends",
      "completed": true,
      "userId": 12
    },
    {
      "id": 42,
      "todo": "Wash car",
      "completed": false,
      "userId": 15
    },
    {
      "id": 43,
      "todo": "Patronize a local independent restaurant",
      "completed": false,
      "userId": 37
    },
    {
      "id": 44,
      "todo": "Watch a Khan Academy lecture on a subject of choosing",
      "completed": false,
      "userId": 38
    },
    {
      "id": 45,
      "todo": "Learn Javascript",
      "completed": false,
      "userId": 16
    },
    {
      "id": 46,
      "todo": "Volunteer at a local animal shelter",
      "completed": false,
      "userId": 39
    },
    {
      "id": 47,
      "todo": "Volunteer at local food pantry",
      "completed": false,
      "userId": 32
    },
    {
      "id": 48,
      "todo": "Start a book I've never gotten around to reading",
      "completed": false,
      "userId": 31
    },
    {
      "id": 49,
      "todo": "Mow neighbor's lawn",
      "completed": false,
      "userId": 14
    },
    {
      "id": 50,
      "todo": "Start a band",
      "completed": false,
      "userId": 13
    },
    {
      "id": 51,
      "todo": "Organize music collection",
      "completed": false,
      "userId": 7
    },
    {
      "id": 52,
      "todo": "Organize a cluttered drawer",
      "completed": true,
      "userId": 12
    },
    {
      "id": 53,
      "todo": "Learn a new recipe",
      "completed": true,
      "userId": 21
    },
    {
      "id": 54,
      "todo": "Start a daily journal",
      "completed": false,
      "userId": 1
    },
    {
      "id": 55,
      "todo": "Clean out closet and donate the clothes I've outgrown",
      "completed": true,
      "userId": 2
    },
    {
      "id": 56,
      "todo": "Go on a fishing trip with some friends",
      "completed": false,
      "userId": 15
    },
    {
      "id": 57,
      "todo": "Learn Morse code",
      "completed": false,
      "userId": 2
    },
    {
      "id": 58,
      "todo": "Listen to a new podcast",
      "completed": true,
      "userId": 9
    },
    {
      "id": 59,
      "todo": "Color",
      "completed": false,
      "userId": 50
    },
    {
      "id": 60,
      "todo": "Take dog on a walk",
      "completed": true,
      "userId": 26
    },
    {
      "id": 61,
      "todo": "Start a blog for something I'm passionate about",
      "completed": false,
      "userId": 27
    },
    {
      "id": 62,
      "todo": "Listen to a new music genre",
      "completed": false,
      "userId": 34
    },
    {
      "id": 63,
      "todo": "Learn how to write in shorthand",
      "completed": false,
      "userId": 20
    },
    {
      "id": 64,
      "todo": "Practice coding in favorite language",
      "completed": false,
      "userId": 42
    },
    {
      "id": 65,
      "todo": "Read a formal research paper on an interesting subject",
      "completed": true,
      "userId": 45
    },
    {
      "id": 66,
      "todo": "Learn how to whistle with fingers",
      "completed": true,
      "userId": 18
    },
    {
      "id": 67,
      "todo": "Make a couch fort",
      "completed": false,
      "userId": 14
    },
    {
      "id": 68,
      "todo": "Take a caffeine nap",
      "completed": false,
      "userId": 18
    },
    {
      "id": 69,
      "todo": "Find a DIY to do",
      "completed": false,
      "userId": 19
    },
    {
      "id": 70,
      "todo": "Go to a concert with some friends",
      "completed": false,
      "userId": 11
    },
    {
      "id": 71,
      "todo": "Give pet ten minutes of focused attention",
      "completed": false,
      "userId": 47
    },
    {
      "id": 72,
      "todo": "Rearrange and organize room",
      "completed": false,
      "userId": 9
    },
    {
      "id": 73,
      "todo": "Learn how to play a new sport",
      "completed": false,
      "userId": 25
    },
    {
      "id": 74,
      "todo": "Make homemade ice cream",
      "completed": true,
      "userId": 41
    },
    {
      "id": 75,
      "todo": "Hold a yard sale",
      "completed": true,
      "userId": 20
    },
    {
      "id": 76,
      "todo": "Learn to play a new instrument",
      "completed": false,
      "userId": 50
    },
    {
      "id": 77,
      "todo": "Resolve a problem I've been putting off",
      "completed": true,
      "userId": 17
    },
    {
      "id": 78,
      "todo": "Bake something I've never tried before",
      "completed": true,
      "userId": 27
    },
    {
      "id": 79,
      "todo": "Organize dresser",
      "completed": false,
      "userId": 41
    },
    {
      "id": 80,
      "todo": "Fix something that's broken in house",
      "completed": false,
      "userId": 43
    },
    {
      "id": 81,
      "todo": "Play a video game",
      "completed": false,
      "userId": 27
    },
    {
      "id": 82,
      "todo": "Listen to music I haven't heard in a while",
      "completed": false,
      "userId": 17
    },
    {
      "id": 83,
      "todo": "Look at finances and find one way to save money",
      "completed": false,
      "userId": 17
    },
    {
      "id": 84,
      "todo": "Learn the periodic table",
      "completed": true,
      "userId": 46
    },
    {
      "id": 85,
      "todo": "Make a budget",
      "completed": true,
      "userId": 5
    },
    {
      "id": 86,
      "todo": "Donate blood at a local blood center",
      "completed": false,
      "userId": 27
    },
    {
      "id": 87,
      "todo": "Go to the library and find an interesting book",
      "completed": false,
      "userId": 9
    },
    {
      "id": 88,
      "todo": "Configure two-factor authentication on accounts",
      "completed": false,
      "userId": 50
    },
    {
      "id": 89,
      "todo": "Take a nap",
      "completed": true,
      "userId": 39
    },
    {
      "id": 90,
      "todo": "Create or update resume",
      "completed": false,
      "userId": 24
    },
    {
      "id": 91,
      "todo": "Prepare a 72-hour kit",
      "completed": true,
      "userId": 15
    },
    {
      "id": 92,
      "todo": "Go on a long drive with no music",
      "completed": false,
      "userId": 25
    },
    {
      "id": 93,
      "todo": "Learn the NATO phonetic alphabet",
      "completed": false,
      "userId": 12
    },
    {
      "id": 94,
      "todo": "Have a jam session with friends",
      "completed": false,
      "userId": 45
    },
    {
      "id": 95,
      "todo": "Hold a video game tournament with some friends",
      "completed": false,
      "userId": 8
    },
    {
      "id": 96,
      "todo": "Catch up on world news",
      "completed": false,
      "userId": 49
    },
    {
      "id": 97,
      "todo": "Do a jigsaw puzzle",
      "completed": false,
      "userId": 11
    },
    {
      "id": 98,
      "todo": "Learn about the Golden Ratio",
      "completed": false,
      "userId": 9
    },
    {
      "id": 99,
      "todo": "Organize basement",
      "completed": true,
      "userId": 35
    },
    {
      "id": 100,
      "todo": "Learn a new programming language",
      "completed": true,
      "userId": 1
    },
    {
      "id": 101,
      "todo": "Learn how the internet works",
      "completed": false,
      "userId": 30
    },
    {
      "id": 102,
      "todo": "Organize a bookshelf",
      "completed": false,
      "userId": 48
    },
    {
      "id": 103,
      "todo": "Go to a local thrift shop",
      "completed": true,
      "userId": 5
    },
    {
      "id": 104,
      "todo": "Study a foreign language",
      "completed": true,
      "userId": 37
    },
    {
      "id": 105,
      "todo": "Explore a park I have never been to before",
      "completed": false,
      "userId": 10
    },
    {
      "id": 106,
      "todo": "Start a garden",
      "completed": true,
      "userId": 7
    },
    {
      "id": 107,
      "todo": "Shred old documents I don't need anymore",
      "completed": false,
      "userId": 11
    },
    {
      "id": 108,
      "todo": "Learn to write with nondominant hand",
      "completed": true,
      "userId": 27
    },
    {
      "id": 109,
      "todo": "Go to a nail salon",
      "completed": false,
      "userId": 39
    },
    {
      "id": 110,
      "todo": "Create a meal plan for the coming week",
      "completed": true,
      "userId": 23
    },
    {
      "id": 111,
      "todo": "Surprise significant other with something considerate",
      "completed": false,
      "userId": 39
    },
    {
      "id": 112,
      "todo": "Clean out garage",
      "completed": false,
      "userId": 32
    },
    {
      "id": 113,
      "todo": "Make a simple musical instrument",
      "completed": false,
      "userId": 19
    },
    {
      "id": 114,
      "todo": "Learn how to fold a paper crane",
      "completed": true,
      "userId": 47
    },
    {
      "id": 115,
      "todo": "Learn the Chinese erhu",
      "completed": false,
      "userId": 13
    },
    {
      "id": 116,
      "todo": "Start a family tree",
      "completed": true,
      "userId": 3
    },
    {
      "id": 117,
      "todo": "Teach dog a new trick",
      "completed": true,
      "userId": 16
    },
    {
      "id": 118,
      "todo": "Draw something interesting",
      "completed": false,
      "userId": 10
    },
    {
      "id": 119,
      "todo": "Explore the nightlife of city",
      "completed": true,
      "userId": 46
    },
    {
      "id": 120,
      "todo": "Make tie dye shirts",
      "completed": false,
      "userId": 32
    },
    {
      "id": 121,
      "todo": "Think of a new business idea",
      "completed": true,
      "userId": 16
    },
    {
      "id": 122,
      "todo": "Go swimming with a friend",
      "completed": false,
      "userId": 26
    },
    {
      "id": 123,
      "todo": "Clean out refrigerator",
      "completed": true,
      "userId": 34
    },
    {
      "id": 124,
      "todo": "Pot some plants and put them around house",
      "completed": false,
      "userId": 37
    },
    {
      "id": 125,
      "todo": "Learn how to beatbox",
      "completed": false,
      "userId": 44
    },
    {
      "id": 126,
      "todo": "Take a bubble bath",
      "completed": true,
      "userId": 15
    },
    {
      "id": 127,
      "todo": "Prepare a dish from a foreign culture",
      "completed": false,
      "userId": 7
    },
    {
      "id": 128,
      "todo": "Paint the first thing I see",
      "completed": false,
      "userId": 15
    },
    {
      "id": 129,
      "todo": "Learn how to use a french press",
      "completed": false,
      "userId": 17
    },
    {
      "id": 130,
      "todo": "Learn about a distributed version control system such as Git",
      "completed": true,
      "userId": 4
    },
    {
      "id": 131,
      "todo": "Learn GraphQL",
      "completed": false,
      "userId": 29
    },
    {
      "id": 132,
      "todo": "Learn origami",
      "completed": false,
      "userId": 29
    },
    {
      "id": 133,
      "todo": "Go to a karaoke bar with some friends",
      "completed": true,
      "userId": 39
    },
    {
      "id": 134,
      "todo": "Conquer one of fears",
      "completed": false,
      "userId": 45
    },
    {
      "id": 135,
      "todo": "Shop at support local farmers market",
      "completed": false,
      "userId": 41
    },
    {
      "id": 136,
      "todo": "Compliment someone",
      "completed": false,
      "userId": 41
    },
    {
      "id": 137,
      "todo": "Do something I used to do as a kid",
      "completed": false,
      "userId": 33
    },
    {
      "id": 138,
      "todo": "Match storage containers with their lids",
      "completed": false,
      "userId": 50
    },
    {
      "id": 139,
      "todo": "Learn Kotlin",
      "completed": false,
      "userId": 4
    },
    {
      "id": 140,
      "todo": "Write a short story",
      "completed": true,
      "userId": 48
    },
    {
      "id": 141,
      "todo": "Visit a nearby museum",
      "completed": true,
      "userId": 1
    },
    {
      "id": 142,
      "todo": "Make a new friend",
      "completed": false,
      "userId": 24
    },
    {
      "id": 143,
      "todo": "Drink water",
      "completed": false,
      "userId": 25
    },
    {
      "id": 144,
      "todo": "Charge the phone",
      "completed": false,
      "userId": 26
    },
    {
      "id": 145,
      "todo": "Pay utility bills",
      "completed": false,
      "userId": 27
    },
    {
      "id": 146,
      "todo": "Make a JavaScript library",
      "completed": false,
      "userId": 28
    },
    {
      "id": 147,
      "todo": "Use DummyJSON",
      "completed": false,
      "userId": 29
    },
    {
      "id": 148,
      "todo": "Hug Mom :)",
      "completed": false,
      "userId": 30
    },
    {
      "id": 149,
      "todo": "Play cricket",
      "completed": false,
      "userId": 31
    },
    {
      "id": 150,
      "todo": "Sleeeeep for the whole day!!!",
      "completed": false,
      "userId": 32
    }

  ]
  arrayToDoUsers: User[] = [
    {
      "id": 1,
      "firstName": "Terry",
      "lastName": "Medhurst",
      "email": "atuny0@sohu.com",
      "image": "https://robohash.org/hicveldicta.png",
      "title": "Help Desk Operator"
    },
    {
      "id": 2,
      "firstName": "Sheldon",
      "lastName": "Quigley",
      "email": "hbingley1@plala.or.jp",
      "image": "https://robohash.org/doloremquesintcorrupti.png",
      "title": "Senior Cost Accountant"
    },
    {
      "id": 3,
      "firstName": "Terrill",
      "lastName": "Hills",
      "email": "rshawe2@51.la",
      "image": "https://robohash.org/consequunturautconsequatur.png",
      "title": "Mechanical Systems Engineer"
    },
    {
      "id": 4,
      "firstName": "Miles",
      "lastName": "Cummerata",
      "email": "yraigatt3@nature.com",
      "image": "https://robohash.org/facilisdignissimosdolore.png",
      "title": "Paralegal"
    },
    {
      "id": 5,
      "firstName": "Mavis",
      "lastName": "Schultz",
      "email": "kmeus4@upenn.edu",
      "image": "https://robohash.org/adverovelit.png",
      "title": "Web Developer I"
    },
    {
      "id": 6,
      "firstName": "Alison",
      "lastName": "Reichert",
      "email": "jtreleven5@nhs.uk",
      "image": "https://robohash.org/laboriosamfacilisrem.png",
      "title": "Civil Engineer"
    },
    {
      "id": 7,
      "firstName": "Oleta",
      "lastName": "Abbott",
      "email": "dpettegre6@columbia.edu",
      "image": "https://robohash.org/cupiditatererumquos.png",
      "title": "Sales Associate"
    },
    {
      "id": 8,
      "firstName": "Ewell",
      "lastName": "Mueller",
      "email": "ggude7@chron.com",
      "image": "https://robohash.org/quiaharumsapiente.png",
      "title": "Clinical Specialist"
    },
    {
      "id": 9,
      "firstName": "Demetrius",
      "lastName": "Corkery",
      "email": "nloiterton8@aol.com",
      "image": "https://robohash.org/excepturiiuremolestiae.png",
      "title": "Community Outreach Specialist"
    },
    {
      "id": 10,
      "firstName": "Eleanora",
      "lastName": "Price",
      "email": "umcgourty9@jalbum.net",
      "image": "https://robohash.org/aliquamcumqueiure.png",
      "title": "Senior Sales Associate"
    },
    {
      "id": 11,
      "firstName": "Marcel",
      "lastName": "Jones",
      "email": "acharlota@liveinternet.ru",
      "image": "https://robohash.org/impeditautest.png",
      "title": "Account Executive"
    },
    {
      "id": 12,
      "firstName": "Assunta",
      "lastName": "Rath",
      "email": "rhallawellb@dropbox.com",
      "image": "https://robohash.org/namquaerataut.png",
      "title": "Developer II"
    },
    {
      "id": 13,
      "firstName": "Trace",
      "lastName": "Douglas",
      "email": "lgribbinc@posterous.com",
      "image": "https://robohash.org/voluptatemsintnulla.png",
      "title": "Sales Associate"
    },
    {
      "id": 14,
      "firstName": "Enoch",
      "lastName": "Lynch",
      "email": "mturleyd@tumblr.com",
      "image": "https://robohash.org/quisequienim.png",
      "title": "Professor"
    },
    {
      "id": 15,
      "firstName": "Jeanne",
      "lastName": "Halvorson",
      "email": "kminchelle@qq.com",
      "image": "https://robohash.org/autquiaut.png",
      "title": "Software Test Engineer IV"
    },
    {
      "id": 16,
      "firstName": "Trycia",
      "lastName": "Fadel",
      "email": "dpierrof@vimeo.com",
      "image": "https://robohash.org/porronumquamid.png",
      "title": "Geological Engineer"
    },
    {
      "id": 17,
      "firstName": "Bradford",
      "lastName": "Prohaska",
      "email": "vcholdcroftg@ucoz.com",
      "image": "https://robohash.org/accusantiumvoluptateseos.png",
      "title": "Operator"
    },
    {
      "id": 18,
      "firstName": "Arely",
      "lastName": "Skiles",
      "email": "sberminghamh@chron.com",
      "image": "https://robohash.org/nihilharumqui.png",
      "title": "VP Accounting"
    },
    {
      "id": 19,
      "firstName": "Gust",
      "lastName": "Purdy",
      "email": "bleveragei@so-net.ne.jp",
      "image": "https://robohash.org/delenitipraesentiumvoluptatum.png",
      "title": "Financial Analyst"
    },
    {
      "id": 20,
      "firstName": "Lenna",
      "lastName": "Renner",
      "email": "aeatockj@psu.edu",
      "image": "https://robohash.org/ipsumutofficiis.png",
      "title": "Geologist III"
    },
    {
      "id": 21,
      "firstName": "Doyle",
      "lastName": "Ernser",
      "email": "ckensleyk@pen.io",
      "image": "https://robohash.org/providenttemporadelectus.png",
      "title": "Programmer Analyst I"
    },
    {
      "id": 22,
      "firstName": "Tressa",
      "lastName": "Weber",
      "email": "froachel@howstuffworks.com",
      "image": "https://robohash.org/temporarecusandaeest.png",
      "title": "VP Quality Control"
    },
    {
      "id": 23,
      "firstName": "Felicity",
      "lastName": "O'Reilly",
      "email": "beykelhofm@wikispaces.com",
      "image": "https://robohash.org/odioquivero.png",
      "title": "Assistant Manager"
    },
    {
      "id": 24,
      "firstName": "Jocelyn",
      "lastName": "Schuster",
      "email": "brickeardn@fema.gov",
      "image": "https://robohash.org/odiomolestiaealias.png",
      "title": "Research Nurse"
    },
    {
      "id": 25,
      "firstName": "Edwina",
      "lastName": "Ernser",
      "email": "dfundello@amazon.co.jp",
      "image": "https://robohash.org/doloremautdolores.png",
      "title": "Cost Accountant"
    },
    {
      "id": 26,
      "firstName": "Griffin",
      "lastName": "Braun",
      "email": "lgronaverp@cornell.edu",
      "image": "https://robohash.org/laboriosammollitiaut.png",
      "title": "Senior Cost Accountant"
    },
    {
      "id": 27,
      "firstName": "Piper",
      "lastName": "Schowalter",
      "email": "fokillq@amazon.co.jp",
      "image": "https://robohash.org/nequeodiosapiente.png",
      "title": "Sales Representative"
    },
    {
      "id": 28,
      "firstName": "Kody",
      "lastName": "Terry",
      "email": "xisherwoodr@ask.com",
      "image": "https://robohash.org/consequunturabnon.png",
      "title": "Recruiting Manager"
    },
    {
      "id": 29,
      "firstName": "Macy",
      "lastName": "Greenfelder",
      "email": "jissetts@hostgator.com",
      "image": "https://robohash.org/amettemporeea.png",
      "title": "Structural Analysis Engineer"
    },
    {
      "id": 30,
      "firstName": "Maurine",
      "lastName": "Stracke",
      "email": "kdulyt@umich.edu",
      "image": "https://robohash.org/perferendisideveniet.png",
      "title": "Quality Engineer"
    },
    {
      "id": 31,
      "firstName": "Luciano",
      "lastName": "Sauer",
      "email": "smargiottau@altervista.org",
      "image": "https://robohash.org/rerumfugiatamet.png",
      "title": "Research Associate"
    },
    {
      "id": 32,
      "firstName": "Kaya",
      "lastName": "Emard",
      "email": "lskeelv@webeden.co.uk",
      "image": "https://robohash.org/etquiquibusdam.png",
      "title": "Help Desk Technician"
    },
    {
      "id": 33,
      "firstName": "Lee",
      "lastName": "Schmidt",
      "email": "gsilcockw@infoseek.co.jp",
      "image": "https://robohash.org/providentdoloremarchitecto.png",
      "title": "Associate Professor"
    },
    {
      "id": 34,
      "firstName": "Darien",
      "lastName": "Witting",
      "email": "aaughtonx@businessweek.com",
      "image": "https://robohash.org/utnonnobis.png",
      "title": "Structural Analysis Engineer"
    },
    {
      "id": 35,
      "firstName": "Jacklyn",
      "lastName": "Schimmel",
      "email": "mbrooksbanky@gnu.org",
      "image": "https://robohash.org/nequeexercitationemanimi.png",
      "title": "Sales Representative"
    },
    {
      "id": 36,
      "firstName": "Angelica",
      "lastName": "Baumbach",
      "email": "dalmondz@joomla.org",
      "image": "https://robohash.org/vitaenonqui.png",
      "title": "Physical Therapy Assistant"
    },
    {
      "id": 37,
      "firstName": "Delfina",
      "lastName": "Ziemann",
      "email": "nwytchard10@blogspot.com",
      "image": "https://robohash.org/officiisprovidentlaborum.png",
      "title": "Marketing Assistant"
    },
    {
      "id": 38,
      "firstName": "Thaddeus",
      "lastName": "McCullough",
      "email": "igannan11@microsoft.com",
      "image": "https://robohash.org/veritatisperspiciatisqui.png",
      "title": "Sales Representative"
    },
    {
      "id": 39,
      "firstName": "Salvatore",
      "lastName": "Fisher",
      "email": "lgherardi12@washington.edu",
      "image": "https://robohash.org/quosautquia.png",
      "title": "Director of Sales"
    },
    {
      "id": 40,
      "firstName": "Jasmin",
      "lastName": "Hermiston",
      "email": "lgutridge13@sun.com",
      "image": "https://robohash.org/voluptatesolutaconsequuntur.png",
      "title": "Payment Adjustment Coordinator"
    },
    {
      "id": 41,
      "firstName": "Nicklaus",
      "lastName": "Cruickshank",
      "email": "cslateford14@blogspot.com",
      "image": "https://robohash.org/quiaconsecteturaut.png",
      "title": "Compensation Analyst"
    },
    {
      "id": 42,
      "firstName": "Tiara",
      "lastName": "Rolfson",
      "email": "mhaslegrave15@springer.com",
      "image": "https://robohash.org/perferendisestanimi.png",
      "title": "Chief Design Engineer"
    },
    {
      "id": 43,
      "firstName": "Garret",
      "lastName": "Klocko",
      "email": "kbrecknock16@marriott.com",
      "image": "https://robohash.org/amaioresqui.png",
      "title": "Sales Representative"
    },
    {
      "id": 44,
      "firstName": "Reginald",
      "lastName": "Wisoky",
      "email": "rlaxe17@tamu.edu",
      "image": "https://robohash.org/vitaeharumquia.png",
      "title": "Assistant Professor"
    },
    {
      "id": 45,
      "firstName": "Humberto",
      "lastName": "Botsford",
      "email": "pidill18@china.com.cn",
      "image": "https://robohash.org/liberoquaeratquidem.png",
      "title": "Accountant III"
    },
    {
      "id": 46,
      "firstName": "Justus",
      "lastName": "Sipes",
      "email": "rmcritchie19@topsy.com",
      "image": "https://robohash.org/veritatismodiest.png",
      "title": "Media Manager IV"
    },
    {
      "id": 47,
      "firstName": "Coralie",
      "lastName": "Boyle",
      "email": "rlangston1a@51.la",
      "image": "https://robohash.org/quivoluptatepraesentium.png",
      "title": "Professor"
    },
    {
      "id": 48,
      "firstName": "Felicita",
      "lastName": "Gibson",
      "email": "jevanson1b@admin.ch",
      "image": "https://robohash.org/numquamcumquereiciendis.png",
      "title": "Professor"
    },
    {
      "id": 49,
      "firstName": "Pearl",
      "lastName": "Blick",
      "email": "ssarjant1c@statcounter.com",
      "image": "https://robohash.org/etnemoet.png",
      "title": "Account Representative I"
    },
    {
      "id": 50,
      "firstName": "Johnathon",
      "lastName": "Predovic",
      "email": "xlinster1d@bravesites.com",
      "image": "https://robohash.org/nisietqui.png",
      "title": "Assistant Professor"
    },
    {
      "id": 51,
      "firstName": "Jerry",
      "lastName": "Kertzmann",
      "email": "tmullender1e@scientificamerican.com",
      "image": "https://robohash.org/aliquideosquidem.png",
      "title": "Executive Secretary"
    },
    {
      "id": 52,
      "firstName": "Elbert",
      "lastName": "Gottlieb",
      "email": "gmein1f@nasa.gov",
      "image": "https://robohash.org/omnisipsasit.png",
      "title": "Project Manager"
    },
    {
      "id": 53,
      "firstName": "Sincere",
      "lastName": "Mueller",
      "email": "gmaccumeskey1g@buzzfeed.com",
      "image": "https://robohash.org/minimaquamcorrupti.png",
      "title": "Graphic Designer"
    },
    {
      "id": 54,
      "firstName": "Telly",
      "lastName": "Spinka",
      "email": "bpetts1h@smugmug.com",
      "image": "https://robohash.org/quianonquia.png",
      "title": "Compensation Analyst"
    },
    {
      "id": 55,
      "firstName": "Hal",
      "lastName": "Keebler",
      "email": "ajozef1i@usatoday.com",
      "image": "https://robohash.org/animiautillo.png",
      "title": "Librarian"
    },
    {
      "id": 56,
      "firstName": "Megane",
      "lastName": "Armstrong",
      "email": "oyakushkev1j@oracle.com",
      "image": "https://robohash.org/voluptatemexplicaboasperiores.png",
      "title": "Physical Therapy Assistant"
    },
    {
      "id": 57,
      "firstName": "Toy",
      "lastName": "Olson",
      "email": "bpickering1k@clickbank.net",
      "image": "https://robohash.org/eumestdolor.png",
      "title": "Recruiting Manager"
    },
    {
      "id": 58,
      "firstName": "Deanna",
      "lastName": "Glover",
      "email": "nworley1l@thetimes.co.uk",
      "image": "https://robohash.org/porroaccusamuseveniet.png",
      "title": "Account Executive"
    },
    {
      "id": 59,
      "firstName": "Marcella",
      "lastName": "Shanahan",
      "email": "klife1m@i2i.jp",
      "image": "https://robohash.org/eaipsaaliquam.png",
      "title": "Account Coordinator"
    },
    {
      "id": 60,
      "firstName": "Rachel",
      "lastName": "Jacobson",
      "email": "dlambarth1n@blinklist.com",
      "image": "https://robohash.org/doloremtemporamolestiae.png",
      "title": "Help Desk Technician"
    },
    {
      "id": 61,
      "firstName": "Nora",
      "lastName": "Sawayn",
      "email": "cepgrave1o@biblegateway.com",
      "image": "https://robohash.org/corporisvoluptatumdicta.png",
      "title": "Senior Cost Accountant"
    },
    {
      "id": 62,
      "firstName": "Mozell",
      "lastName": "O'Connell",
      "email": "mpoyner1p@google.co.uk",
      "image": "https://robohash.org/sintsequitenetur.png",
      "title": "Payment Adjustment Coordinator"
    },
    {
      "id": 63,
      "firstName": "Nasir",
      "lastName": "Leuschke",
      "email": "eburras1q@go.com",
      "image": "https://robohash.org/dignissimosplaceatet.png",
      "title": "Technical Writer"
    },
    {
      "id": 64,
      "firstName": "Quinn",
      "lastName": "Witting",
      "email": "gfernandes1r@virginia.edu",
      "image": "https://robohash.org/distinctioullamsaepe.png",
      "title": "Financial Advisor"
    },
    {
      "id": 65,
      "firstName": "Jeanne",
      "lastName": "O'Keefe",
      "email": "hollet1s@trellian.com",
      "image": "https://robohash.org/reprehenderitquisanimi.png",
      "title": "Legal Assistant"
    },
    {
      "id": 66,
      "firstName": "Terrence",
      "lastName": "Koelpin",
      "email": "hfasey1t@home.pl",
      "image": "https://robohash.org/facilisomnisvoluptatem.png",
      "title": "Software Consultant"
    },
    {
      "id": 67,
      "firstName": "Davonte",
      "lastName": "Heaney",
      "email": "gbarhams1u@cnet.com",
      "image": "https://robohash.org/ipsadistinctiovero.png",
      "title": "Speech Pathologist"
    },
    {
      "id": 68,
      "firstName": "Everette",
      "lastName": "Prohaska",
      "email": "rstrettle1v@globo.com",
      "image": "https://robohash.org/cumquesedrem.png",
      "title": "Sales Associate"
    },
    {
      "id": 69,
      "firstName": "Oda",
      "lastName": "Schmidt",
      "email": "btegler1w@elegantthemes.com",
      "image": "https://robohash.org/asperioressolutaet.png",
      "title": "Programmer Analyst IV"
    },
    {
      "id": 70,
      "firstName": "Twila",
      "lastName": "Padberg",
      "email": "cmasurel1x@baidu.com",
      "image": "https://robohash.org/quiaeaquefacere.png",
      "title": "Administrative Assistant II"
    },
    {
      "id": 71,
      "firstName": "Amelia",
      "lastName": "Mann",
      "email": "omarsland1y@washingtonpost.com",
      "image": "https://robohash.org/voluptassimiliqueet.png",
      "title": "Biostatistician IV"
    },
    {
      "id": 72,
      "firstName": "Frederique",
      "lastName": "Boehm",
      "email": "mcrumpe1z@techcrunch.com",
      "image": "https://robohash.org/doloremqueatqueet.png",
      "title": "Food Chemist"
    },
    {
      "id": 73,
      "firstName": "Clotilde",
      "lastName": "Larson",
      "email": "wfeldon20@netlog.com",
      "image": "https://robohash.org/estipsamincidunt.png",
      "title": "Professor"
    },
    {
      "id": 74,
      "firstName": "Moriah",
      "lastName": "Mills",
      "email": "ahinckes21@google.es",
      "image": "https://robohash.org/voluptatemdolorumvel.png",
      "title": "Analyst Programmer"
    },
    {
      "id": 75,
      "firstName": "Claudia",
      "lastName": "Dooley",
      "email": "ptilson22@360.cn",
      "image": "https://robohash.org/idvoluptatemrepellendus.png",
      "title": "Junior Executive"
    },
    {
      "id": 76,
      "firstName": "Deon",
      "lastName": "Gutkowski",
      "email": "cgaber23@prlog.org",
      "image": "https://robohash.org/authicnon.png",
      "title": "Account Coordinator"
    },
    {
      "id": 77,
      "firstName": "Amos",
      "lastName": "Weimann",
      "email": "rkingswood24@usa.gov",
      "image": "https://robohash.org/quasialiquidrerum.png",
      "title": "Registered Nurse"
    },
    {
      "id": 78,
      "firstName": "Frankie",
      "lastName": "Hudson",
      "email": "dbuist25@hao123.com",
      "image": "https://robohash.org/voluptaseligendiaut.png",
      "title": "Design Engineer"
    },
    {
      "id": 79,
      "firstName": "Harrison",
      "lastName": "Lemke",
      "email": "pmoraleda26@symantec.com",
      "image": "https://robohash.org/hicadipisciodio.png",
      "title": "GIS Technical Architect"
    },
    {
      "id": 80,
      "firstName": "Guy",
      "lastName": "Franecki",
      "email": "vkohrt27@hostgator.com",
      "image": "https://robohash.org/quaeratpariaturet.png",
      "title": "Financial Analyst"
    },
    {
      "id": 81,
      "firstName": "Sidney",
      "lastName": "Rutherford",
      "email": "capplewhite28@nationalgeographic.com",
      "image": "https://robohash.org/dolorumdelenitinon.png",
      "title": "Senior Editor"
    },
    {
      "id": 82,
      "firstName": "Maymie",
      "lastName": "Yundt",
      "email": "kogilvy29@blogtalkradio.com",
      "image": "https://robohash.org/providentquiaaut.png",
      "title": "Nurse Practicioner"
    },
    {
      "id": 83,
      "firstName": "Rita",
      "lastName": "Shields",
      "email": "gconford2a@wordpress.com",
      "image": "https://robohash.org/sapientelaborumminima.png",
      "title": "Registered Nurse"
    },
    {
      "id": 84,
      "firstName": "Aniya",
      "lastName": "Wisozk",
      "email": "dmantle2b@reuters.com",
      "image": "https://robohash.org/aliasiurenam.png",
      "title": "Speech Pathologist"
    },
    {
      "id": 85,
      "firstName": "Angelica",
      "lastName": "Metz",
      "email": "kpondjones2c@nsw.gov.au",
      "image": "https://robohash.org/atetsit.png",
      "title": "Design Engineer"
    },
    {
      "id": 86,
      "firstName": "Rupert",
      "lastName": "Upton",
      "email": "whuman2d@hp.com",
      "image": "https://robohash.org/mollitiasimiliqueneque.png",
      "title": "Cost Accountant"
    },
    {
      "id": 87,
      "firstName": "Eleazar",
      "lastName": "Torp",
      "email": "fschlagman2e@deliciousdays.com",
      "image": "https://robohash.org/facerealiquidexercitationem.png",
      "title": "Account Representative II"
    },
    {
      "id": 88,
      "firstName": "Anais",
      "lastName": "Yundt",
      "email": "agreenhouse2f@mashable.com",
      "image": "https://robohash.org/laborumvoluptatibusnulla.png",
      "title": "Quality Control Specialist"
    },
    {
      "id": 89,
      "firstName": "Gayle",
      "lastName": "Krajcik",
      "email": "cdwyr2g@shop-pro.jp",
      "image": "https://robohash.org/inventoredelenitiquas.png",
      "title": "Librarian"
    },
    {
      "id": 90,
      "firstName": "Wilma",
      "lastName": "Hickle",
      "email": "omottley2h@hugedomains.com",
      "image": "https://robohash.org/minimadoloreslaborum.png",
      "title": "Environmental Specialist"
    },
    {
      "id": 91,
      "firstName": "Arne",
      "lastName": "Jacobs",
      "email": "hyaknov2i@hhs.gov",
      "image": "https://robohash.org/necessitatibusvoluptatemvero.png",
      "title": "Automation Specialist I"
    },
    {
      "id": 92,
      "firstName": "Emely",
      "lastName": "Schmitt",
      "email": "clambol2j@bloglovin.com",
      "image": "https://robohash.org/cumqueharumsunt.png",
      "title": "Executive Secretary"
    },
    {
      "id": 93,
      "firstName": "Fabiola",
      "lastName": "Oberbrunner",
      "email": "dduggan2k@simplemachines.org",
      "image": "https://robohash.org/undeutveritatis.png",
      "title": "Quality Engineer"
    },
    {
      "id": 94,
      "firstName": "Kari",
      "lastName": "Schinner",
      "email": "jtossell2l@drupal.org",
      "image": "https://robohash.org/quisquamhicin.png",
      "title": "Paralegal"
    },
    {
      "id": 95,
      "firstName": "Rory",
      "lastName": "Conn",
      "email": "cchomiszewski2m@cbsnews.com",
      "image": "https://robohash.org/autcommodivoluptas.png",
      "title": "Help Desk Operator"
    },
    {
      "id": 96,
      "firstName": "Cristobal",
      "lastName": "Watsica",
      "email": "bgoby2n@washingtonpost.com",
      "image": "https://robohash.org/deseruntfaciliset.png",
      "title": "Physical Therapy Assistant"
    },
    {
      "id": 97,
      "firstName": "Allene",
      "lastName": "Harber",
      "email": "cdavydochkin2o@globo.com",
      "image": "https://robohash.org/adipiscisiteius.png",
      "title": "Structural Analysis Engineer"
    },
    {
      "id": 98,
      "firstName": "Lempi",
      "lastName": "Runte",
      "email": "zstenning2p@list-manage.com",
      "image": "https://robohash.org/estetlaudantium.png",
      "title": "Registered Nurse"
    },
    {
      "id": 99,
      "firstName": "Terrell",
      "lastName": "Schuppe",
      "email": "flesslie2q@google.nl",
      "image": "https://robohash.org/maioresethic.png",
      "title": "Senior Quality Engineer"
    },
    {
      "id": 100,
      "firstName": "Tevin",
      "lastName": "Prohaska",
      "email": "pcumbes2r@networkadvertising.org",
      "image": "https://robohash.org/eosvoluptasquia.png",
      "title": "VP Sales"
    }


  ]

  constructor() { }

  getList() {
    return this.arraytoDoList
  }

  getUsers() {
    return this.arrayToDoUsers
  }

  getUserById(userId: number): string {
    const todo = this.arraytoDoList.find(todo => todo.userId === userId);
    if (todo) {
      const user = this.arrayToDoUsers.find(user => user.id === userId);
      if (user) {
        return user.firstName + ' - ' + user.title; // Concatena il titolo e il nome dell'utente
      }
      return 'Utente non trovato';
    } 
    return 'Todo non trovato per questo utente';
  }
  
  toggleCompletion(index: number): void {
    const todo = this.arraytoDoList[index];
    todo.completed = !todo.completed;
  }

}
