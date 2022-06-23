pp 'Starting to garden. 👩‍🌾 🌱 🌦'

pp 'Planting user seeds... 🤩'
nat = User.create!(username: 'Natasha Vincent', password: 'chordquest8')
mel = User.create!(username: 'Melody Lynn', password: 'gr8tfulplanA')
conor = User.create!(username: 'Conor McGrath', password: '$990gold')
kim = User.create!(username: 'Kim Liu', password: 'red42hot!')
darin = User.create!(username: 'Darin Hackette', password: 'JellyDonut$$')
tom = User.create!(username: 'Tommy-Lee Holland', password: 'MIBlack22')
kori = User.create!(username: 'Kori Donato', password: 'bronzeBB8')
bar = User.create!(username: 'Bárðr Alfonz', password: '2BorNot2B')
jane = User.create!(username: 'Jane Akachi', password: '1945appleJ')
her = User.create!(username: 'Hersilia Petronia', password: 'Charollette4eve')
nik = User.create!(username: 'nick', password: 'testing')

pp 'Planting castle seeds... 🏰'
c1 =
  Castle.create!(
    image:
      'https://img.gtsstatic.net/reno/imagereader.aspx?imageurl=http%3A%2F%2FRealEstateAdminImages.gabriels.net%2F170%2F78502%2F170-20210312054938498-495.jpg&option=N&idlisting=listingmedia&w=1600&permitphotoenlargement=false&fallbackimageurl=https%3A%2F%2Fstatic-christiesrealestate-cms-production-1.gtsstatic.net%2Fresources%2F_responsive%2Fimages%2Fcommon%2Fnophoto%2Flisting.jpg',
    title: 'Castle Bolenstein',
    description:
      "Built in 1340,  buildings are fully furnished and equipped with upholstery, hanging and standing lighting fixtures, kitchen equipment, crockery & cutlery, glassware, rugs, beds with accessories, gym equipment, maintenance tools etc.The grounds are equipped with a camera system with recorder. The two entrances to the estate are equipped with electric and remote controlled gates with intercom system. This estate consists of a main house, gardener's house, coach house with conservatory/plant room, deer house (currently a gym), teahouse and tennis court.All buildings are in excellent condition and are situated around a beautifully landscaped garden with water features.",
    location: 'Vecht River, Oud-Zuilen, Amsterdam',
    price: 2_991_989,
    likes: 0,
    is_sold: false,
  )
c2 =
  Castle.create!(
    image:
      'https://castleist.com/wp-content/uploads/2022/05/Old-Hickory-Nashville-Castle-for-sale-4-1024x683.jpg',
    title: 'Old Hickory Castle',
    description:
      'This unique castle property in Old Hickory boasts a medieval feel that is rare to find in Middle Tennessee. Only 20 minutes to downtown Nashville, this oasis leaves room for the imagination and attracts creatives and castle enthusiasts alike. Enjoy the summer evenings entertaining with the outdoor kitchen and beautiful English garden, or spend time in the wine cellar. There is a large space connected to the home that could be finished out into a guest quarters, music studio, Airbnb, etc. The possibilities are endless with this amazing property. Custom built and historic furnishings are included.',
    location: 'Nashville, Tennessee',
    price: 1_600_000,
    likes: 0,
    is_sold: false,
  )
c3 =
  Castle.create!(
    image:
      'https://castleist.com/wp-content/uploads/2021/10/Chateau-Cocomar-for-sale-Houston-USA-1-1024x507.jpg',
    title: 'Houston Chateau',
    description:
      'Impeccably maintained grounds with majestic Italian fountain and enchanting gazebo encompass the property and lead you up to the brilliance of the Chateau. Marble flooring and antique fixtures imported from Europe throughout. Magnificent rooms, soaring ceilings and incredible natural light highlighted by a stately first floor ballroom, stunning library and lavish chambers. Highly appointed chef’s kitchen offers everything needed to throw extravagant dinner parties. Grand ballroom and spacious terrace highlight the 2nd floor.',
    location: 'Houston, Texas',
    price: 10_000_000,
    likes: 0,
    is_sold: true,
  )
c4 =
  Castle.create!(
    image:
      'https://castleist.com/wp-content/uploads/2021/02/Orchardton-Castle-Scotland-for-sale-1-1024x512.jpg',
    title: 'Orchardton Castle',
    description:
      'Completed by William Douglas Robinson in the 1880s, on the site of a mansion dating from around 1761, Orchardton was built in ‘Scottish Baronial’ style. The building has seen life as a hotel, a school, and a hospital for wounded soldiers.',
    location: 'Auchencairn, Scotland',
    price: 1_700_000,
    likes: 0,
    is_sold: false,
  )
c5 =
  Castle.create!(
    image:
      'https://castleist.com/wp-content/uploads/2022/01/Reggello-ITALY-Luxurious-Castle-for-sale-13-1024x683.jpg',
    title: 'Castello di Cieli',
    description:
      'This impressive Castle dates back to the year 1427 when it was redeveloped by the Cavalcanti Family, of Florence, whose project ennobled and enriched the edifice, on the foundations of an ancient military watchtower. Baron Angelo Adolfo Levi further developed its grounds introducing an Italian garden in 1860, which was also accompanied by the full restoration at the hands of world renowned architect Coppedé around the turn of the Century.',
    location: 'Reggello, Italy',
    price: 8_000_000,
    likes: 0,
    is_sold: false,
  )
c6 =
  Castle.create!(
    image:
      'https://castleist.com/wp-content/uploads/2021/11/Castelnaudary-France-18th-Century-Castle-for-sale-4-1024x683.jpg',
    title: 'Century Chateau',
    description:
      "A real little hamlet, located on a hill, of about 4 hectares. Nice 18th century castle, about 530 m2 of living space, a guest house of about 200 m2, a caretaker's house of about 150 m2 and a loft of 400 m2 to be converted as required. Outbuildings complete the property. Pretty courtyard, swimming pool, chapel and view of the Pyrenees! All the roofs have been redone, as well as the electricity and the heating by heat pump for the castle. Exceptional site full of charm.",
    location: 'Castelnaudry, France',
    price: 1_895_000,
    likes: 0,
    is_sold: false,
  )
c7 =
  Castle.create!(
    image:
      'https://castleist.com/wp-content/uploads/2020/07/Stack-Rock-Fort-for-sale-1-1024x587.jpg',
    title: 'Island Sea Fort',
    description:
      'Ever thought about owning your own private island off the coast of Pembrokeshire? Well this is the ideal opportunity for you!!! The chance has arisen to purchase your very own Grade 2 listed fort off the coastal town of Milford Haven which history states was constructed between the years of 1850 – 1852. It was constructed as a gun fort with the design and idea to protect the town of Milford Haven if ever invasion were to take place. The gun fort was disarmed in 1929 however original features are still in place. The best thing we can suggest to get a more visual representation of the property is to view the fantastic drone video above and here you will be able to see the exact fort as it now currently stands.',
    location: 'Pembs, Wales',
    price: 720_000,
    likes: 0,
    is_sold: true,
  )
c8 =
  Castle.create!(
    image:
      'https://castleist.com/wp-content/uploads/2020/07/Soller-Mallorca-Fairytale-Castle-for-sale-1-1024x569.jpg',
    title: 'XIX Century Fairytale Castle',
    description:
      'A unique property in an exceptional elevated position enjoying panoramic views over the village of Sóller, the countryside and the mountains. The property was constructed in 1890 and is set on a plot of land of 2014 m². The spacious property in the style of an ancient castle has 10 bedrooms, 5 bathrooms and an additional guesthouse. ',
    location: 'Mallorca, Spain',
    price: 2_900_000,
    likes: 0,
    is_sold: false,
  )
c9 =
  Castle.create!(
    image:
      'https://castleist.com/wp-content/uploads/2020/07/Krugersdorp-South-Africa-Castle-for-sale-1-1024x683.jpg',
    title: 'Medieval Castle',
    description:
      'An old medieval castle, casting a dark and looming shadow over the landscape below. A moat surrounds said structure, and like a mirror provides shimmering reflections of the turrets above. All that surrounds this castle is lush and green with picturesque views that extend for miles.',
    location: 'Rietfontein, South Africa',
    price: 5_950_000,
    likes: 0,
    is_sold: false,
  )
c10 =
  Castle.create!(
    image:
      'https://castleist.com/wp-content/uploads/2020/07/Kasbah-Tagountaft-Castle-for-sale-1-1024x576.jpg',
    title: 'Historic Kasbah',
    description:
      'Kasbah Tagountaft was once the home of the powerful Caid of the Goundafa tribe who vied for control of the Atlas Mountains at the end of the 19th century, The Kasbah controlled the entry of the valley as it is situated high up in a striking position overlooking the River Nfis, Today the Kasbah is considered one of the most memorable sites of historical significance in Morocco.',
    location: 'Tagountaft, Morocco',
    price: 6_000_000,
    likes: 0,
    is_sold: false,
  )
c11 =
  Castle.create!(
    image:
      'https://castleist.com/wp-content/uploads/2020/07/chateau-zinkovy-czech-republic-for-sale-1.jpg',
    title: 'Vast Czech Castle',
    description:
      'The chateau is one of the most famous examples of Late Historicist chateau architecture in the Pilsen Region. Throughout its rich history, the chateau was owned by many Czech nobles or famous dynasties, such as the Lobkowitz or Harrach artistocratic houses, or the Škoda family (founders of the automobile brand).',
    location: 'Kutná Hora, Czech Republic',
    price: 26_500_000,
    likes: 0,
    is_sold: true,
  )

pp 'Finishing up with their purchases... 💰'
Purchase.create!(user_id: kori.id, castle_id: c11.id)
Purchase.create!(user_id: jane.id, castle_id: c3.id)
Purchase.create!(user_id: conor.id, castle_id: c7.id)

pp 'Done with seeding. 🥱'
