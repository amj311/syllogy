import { BomFeature } from "@/views/maps/mapTypes";

export const BomFeatures: Record<string, BomFeature> = {
	// START HERE
	"feature-City-of-Aaron": {
		id: "feature-City-of-Aaron",
		name: "City of Aaron",
		mapLabel: "Aaron",
		description: "Alma2's planned destination after rejection in Ammonihah. Later fortified by Moroni1 through the creation of new cities Moroni and Nephihah.[2]",
		type: "city_1",
		startDate: null,
		endDate: null,
		constraints: [
			{ featureId: "feature-City-of-Ammonihah", description: "Planned destination after rejection in Ammonihah" },
			{ featureId: "feature-City-of-Moroni", description: "Fortified by Moroni1 through the creation of new cities Moroni and Nephihah" },
			{ featureId: "feature-City-of-Nephihah", description: "Fortified by Moroni1 through the creation of new cities Moroni and Nephihah" }
		]
	},
	"feature-Ablom": {
		id: "feature-Ablom",
		name: "Ablom",
		description: "east of the Hill of Shim, near the seashore, and a refuge for king Omer and his family as they escaped Akish and his secret combinations.",
		type: "city_1",
		startDate: null,
		endDate: null,
		constraints: [
			{ featureId: "feature-Hill-Shim", description: "East of the Hill of Shim" }
		]
	},
	"feature-Plains-of-Agosh": {
		id: "feature-Plains-of-Agosh",
		name: "Plains of Agosh",
		description: "Jaredite battle site where the wicked king Lib2 fought Coriantumr2 and lost his life.",
		type: "wilderness",
		startDate: null,
		endDate: null,
		constraints: [
			{ description: "Battle site where the wicked king Lib2 fought Coriantumr2 and lost his life" }
		]
	},
	"feature-Aiath": {
		id: "feature-Aiath",
		name: "Aiath",
		description: "Biblical city mentioned by Isaiah, as quoted by Nephi1.[6] Also known as Ai or Aija, and likely located in the tribal land of Benjamin, near Jerusalem. The archaeological site associated with ancient Ai is often identified as Et-Tell.",
		type: "city_1",
		startDate: null,
		endDate: null,
		constraints: [
			{ featureId: "feature-Jerusalem-1", description: "Likely located in the tribal land of Benjamin, near Jerusalem" }
		]
	},
	"feature-Wilderness-of-Akish": {
		id: "feature-Wilderness-of-Akish",
		name: "Wilderness of Akish",
		description: "Jaredite land into which Gilead fled, and battled Coriantumr2. At a later time, the army of Coriantumr2 fled to the same location after losing to Lib2.[8]",
		type: "wilderness",
		startDate: null,
		endDate: null,
		constraints: [
			{ description: "Jaredite land into which Gilead fled and battled Coriantumr2" },
			{ description: "Army of Coriantumr2 fled to the same location after losing to Lib2" }
		]
	},
	"feature-Valley-of-Alma": {
		id: "feature-Valley-of-Alma",
		name: "Valley of Alma",
		description: "rest stop for Alma1 and his followers as they fled from Noahite priest Amulon and the land of Helam.",
		type: "wilderness",
		startDate: null,
		endDate: null,
		constraints: [
			{ featureId: "feature-Land-of-Helam", description: "Rest stop for Alma1 and his followers as they fled from Noahite priest Amulon and the land of Helam" }
		]
	},
	"feature-City-of-Ammonihah": {
		id: "feature-City-of-Ammonihah",
		name: "City of Ammonihah",
		mapLabel: "Ammonihah",
		description: "wicked Nephite city that reviled Alma2 and Amulon, imprisoned them, and suffered destruction when prison walls were broken. Later attacked and utterly destroyed by Lamanites. Associated with desolation of Nehors. Partially rebuilt at a later time. Located three days north of the Land of Melek.",
		type: "city_1",
		startDate: null,
		endDate: null,
		constraints: [
			{ featureId: "feature-Land-of-Melek", description: "Located three days north of the Land of Melek" }
		]
	},
	"feature-Land-of-Ammonihah": {
		id: "feature-Land-of-Ammonihah",
		name: "Land of Ammonihah",
		description: "Area surrounding the city of Ammonihah",
		type: "region_2",
		startDate: null,
		endDate: null,
		constraints: [
			{ featureId: "feature-City-of-Ammonihah", description: "Area surrounding the city of Ammonihah" }
		]
	},
	"feature-Hill-Amnihu": {
		id: "feature-Hill-Amnihu",
		name: "Hill Amnihu",
		description: "site of the initial Amlicite strike. Located east of the River Sidon.",
		type: "hill",
		startDate: null,
		endDate: null,
		constraints: [
			{ featureId: "feature-Sidon-River", description: "Located east of the River Sidon" }
		]
	},
	"feature-Land-of-Amulon": {
		id: "feature-Land-of-Amulon",
		name: "Land of Amulon",
		description: "settled by Amulon and priests, between Zarahemla and Nephi",
		type: "region_2",
		startDate: null,
		endDate: null,
		constraints: [
			{ featureId: "feature-Land-of-Zarahemla", description: "Located between Zarahemla and Nephi" },
			{ featureId: "feature-Land-of-Nephi", description: "Located between Zarahemla and Nephi" }
		]
	},
	"feature-Anathoth": {
		id: "feature-Anathoth",
		name: "Anathoth",
		description: "city adjacent to and just north of Jerusalem, mentioned by Isaiah, as quoted by Nephi1. Notable as the hometown of the prophet Jeremiah.",
		type: "city_1",
		startDate: null,
		endDate: null,
		constraints: [
			{ featureId: "feature-Jerusalem-1", description: "City adjacent to and just north of Jerusalem" }
		]
	},
	"feature-Angola": {
		id: "feature-Angola",
		name: "Angola",
		description: "retreat for Mormon's army",
		type: "city_1",
		startDate: null,
		endDate: null,
		constraints: [
			{ description: "Retreat for Mormon's army" }
		]
	},
	"feature-Ani-Anti": {
		id: "feature-Ani-Anti",
		name: "Ani-Anti",
		description: "Lamanite village visited by Nephite missionaries",
		type: "city_1",
		startDate: null,
		endDate: null,
		constraints: [
			{ description: "Visited by Nephite missionaries" }
		]
	},
	"feature-Land-of-Antionum": {
		id: "feature-Land-of-Antionum",
		name: "Land of Antionum",
		description: "home of Zoramites, and visited by Nephite missionaries",
		type: "region_2",
		startDate: null,
		endDate: null,
		constraints: [
			{ description: "Home of Zoramites, and visited by Nephite missionaries" }
		]
	},
	"feature-Antiparah": {
		id: "feature-Antiparah",
		name: "Antiparah",
		description: "city captured by Lamanites and regained by Helaman and Antipus",
		type: "city_1",
		startDate: null,
		endDate: null,
		constraints: [
			{ description: "Captured by Lamanites and regained by Helaman and Antipus" }
		]
	},
	"feature-Mount-Antipas": {
		id: "feature-Mount-Antipas",
		name: "Mount Antipas",
		description: "gathering place for Lehonti and the peaceful Lamanites",
		type: "hill",
		startDate: null,
		endDate: null,
		constraints: [
			{ description: "Gathering place for Lehonti and the peaceful Lamanites" }
		]
	},
	"feature-Land-of-Antum": {
		id: "feature-Land-of-Antum",
		name: "Land of Antum",
		description: "northern land visited by Mormon and Ammoron",
		type: "region_2",
		startDate: null,
		endDate: null,
		constraints: [
			{ description: "Visited by Mormon and Ammoron" }
		]
	},
	"feature-Arpad": {
		id: "feature-Arpad",
		name: "Arpad",
		description: "Biblical location mentioned by Isaiah, as quoted by Nephi1. Located in northern Syria, near Aleppo. Historically, Arpad played a significant role in the region due to its strategic position. It is currently called Tel Rifaat.",
		type: "city_1",
		startDate: null,
		endDate: null,
		constraints: [
			{ description: "Located in northern Syria, near Aleppo" }
		]
	},
	"feature-Assyria": {
		id: "feature-Assyria",
		name: "Assyria",
		description: "country in western Asia",
		type: "region_2",
		startDate: null,
		endDate: null,
		constraints: [
			{ description: "Country in western Asia" }
		]
	},
	"feature-Babylon": {
		id: "feature-Babylon",
		name: "Babylon",
		description: "Biblical capital of Babylonia, in southwest Asia, the Jewish captivity into which was prophesied by Lehi.",
		type: "city_1",
		startDate: null,
		endDate: null,
		constraints: [
			{ description: "Biblical capital of Babylonia, in southwest Asia" }
		]
	},
	"feature-Bashan": {
		id: "feature-Bashan",
		name: "Bashan",
		description: "country east of the Jordan river",
		type: "region_2",
		startDate: null,
		endDate: null,
		constraints: [
			{ featureId: "feature-Jordan-River", description: "Country east of the Jordan river" }
		]
	},
	"feature-Bethabara": {
		id: "feature-Bethabara",
		name: "Bethabara",
		description: "Biblical site on the east bank of the Jordan River, where John the Baptist preached and conducted baptisms, as prophesied by Lehi.",
		type: "city_1",
		startDate: null,
		endDate: null,
		constraints: [
			{ featureId: "feature-Jordan-River", description: "Located on the east bank of the Jordan River" }
		]
	},
// END HERE



// START HERE

	"feature-Boaz": {
		id: "feature-Boaz",
		name: "Boaz",
		description: "Nephite retreat and battle ground",
		type: "region_2",
		startDate: null,
		endDate: null,
		constraints: [
			{ description: "Nephite retreat and battle ground" }
		]
	},
	"feature-City-of-Bountiful": {
		id: "feature-City-of-Bountiful",
		name: "City of Bountiful",
		mapLabel: "Bountiful",
		description: "major Nephite city in the northeastern quadrant",
		type: "city_1",
		startDate: null,
		endDate: null,
		constraints: [
			{ description: "Major Nephite city in the northeastern quadrant" }
		]
	},
	"feature-Land-of-Bountiful-1": {
		id: "feature-Land-of-Bountiful-1",
		name: "Land of Bountiful-1",
		description: "area in southern Arabia, near sea",
		type: "region_2",
		startDate: null,
		endDate: null,
		constraints: [
			{ description: "Area in southern Arabia, near sea" }
		]
	},
	"feature-Land-of-Bountiful-2": {
		id: "feature-Land-of-Bountiful-2",
		name: "Land of Bountiful-2",
		description: "Nephite territory north of Zarahemla",
		type: "region_2",
		startDate: null,
		endDate: null,
		constraints: [
			{ featureId: "feature-Land-of-Zarahemla", description: "Nephite territory north of Zarahemla" }
		]
	},
	"feature-Calno": {
		id: "feature-Calno",
		name: "Calno",
		description: "Biblical location mentioned by Isaiah, as quoted by Nephi1.[14] Sometimes identified with the ancient city of Calneh, and believed to be located in northern Mesopotamia. One of the likely candidates for ancient Calneh is the site known today as Kullan-Köy, near the city of Ar-Raqqah in modern Syria.",
		type: "city_1",
		startDate: null,
		endDate: null,
		constraints: [
			{ description: "Believed to be located in northern Mesopotamia" }
		]
	},
	"feature-Carchemish": {
		id: "feature-Carchemish",
		name: "Carchemish",
		description: "Ancient city on the Euphrates River, known for the Battle of Carchemish.",
		type: "city_1",
		startDate: null,
		endDate: null,
		constraints: [
			{ description: "Ancient city on the Euphrates River" }
		]
	},
	"feature-Cumeni": {
		id: "feature-Cumeni",
		name: "Cumeni",
		description: "",
		type: "city_1",
		startDate: null,
		endDate: null,
		constraints: []
	},
	"feature-Hill-Cumorah": {
		id: "feature-Hill-Cumorah",
		name: "Hill Cumorah",
		description: "meeting place for battle, record depository",
		type: "hill",
		startDate: null,
		endDate: null,
		constraints: [
			{ description: "Meeting place for battle, record depository" }
		]
	},
	"feature-Damascus": {
		id: "feature-Damascus",
		name: "Damascus",
		description: "Biblical capital of the Aramean kingdom, mentioned by Isaiah, as quoted by Nephi1. Located in present-day Syria, Damascus frequently conflicted with both the northern kingdom of Israel and the southern kingdom of Judah. The fall of Damascus to the Assyrians under King Tiglath-Pileser III around 732 BC was a significant event in the regional power dynamics, effectively ending the independence of the Aramean kingdom and marking the expansion of Assyrian control.",
		type: "city_1",
		startDate: null,
		endDate: null,
		constraints: [
			{ description: "Located in present-day Syria" }
		]
	},
	"feature-Land-of-David": {
		id: "feature-Land-of-David",
		name: "Land of David",
		description: "Nephite land on the west coast",
		type: "region_2",
		startDate: null,
		endDate: null,
		constraints: [
			{ description: "Nephite land on the west coast" }
		]
	},
	"feature-City-of-Desolation": {
		id: "feature-City-of-Desolation",
		name: "City of Desolation",
		mapLabel: "Desolation",
		description: "northern Nephite city",
		type: "city_1",
		startDate: null,
		endDate: null,
		constraints: [
			{ description: "Northern Nephite city" }
		]
	},
	"feature-Land-of-Desolation": {
		id: "feature-Land-of-Desolation",
		name: "Land of Desolation",
		description: "north of the land Bountiful",
		type: "region_1",
		startDate: null,
		endDate: null,
		constraints: [
			{ featureId: "feature-Land-of-Bountiful-2", description: "North of the land Bountiful" }
		]
	},
	"feature-Garden-of-Eden": {
		id: "feature-Garden-of-Eden",
		name: "Garden of Eden",
		description: "original home of Adam and Eve",
		type: "region_2",
		startDate: null,
		endDate: null,
		constraints: [
			{ description: "Original home of Adam and Eve" }
		]
	},
	"feature-Edom": {
		id: "feature-Edom",
		name: "Edom",
		description: "arid region in southwest Israel",
		type: "region_2",
		startDate: null,
		endDate: null,
		constraints: [
			{ description: "Arid region in southwest Israel" }
		]
	},
	"feature-Egypt": {
		id: "feature-Egypt",
		name: "Egypt",
		description: "land of Israel's captivity",
		type: "region_2",
		startDate: null,
		endDate: null,
		constraints: [
			{ description: "Land of Israel's captivity" }
		]
	},
	"feature-Elam": {
		id: "feature-Elam",
		name: "Elam",
		description: "one of the oldest recorded civilizations",
		type: "region_2",
		startDate: null,
		endDate: null,
		constraints: [
			{ description: "One of the oldest recorded civilizations" }
		]
	},
	"feature-Hill-Ephraim": {
		id: "feature-Hill-Ephraim",
		name: "Hill Ephraim",
		description: "hill in the northern region",
		type: "hill",
		startDate: null,
		endDate: null,
		constraints: [
			{ description: "Hill in the northern region" }
		]
	},
	"feature-Land-of-First-Inheritance": {
		id: "feature-Land-of-First-Inheritance",
		name: "Land of First Inheritance",
		description: "near the Lehites' original landing point",
		type: "region_2",
		startDate: null,
		endDate: null,
		constraints: [
			{ description: "Near the Lehites' original landing point" }
		]
	},
	"feature-City-of-Gad": {
		id: "feature-City-of-Gad",
		name: "City of Gad",
		mapLabel: "Gad",
		description: "city destroyed at the crucifixion",
		type: "city_1",
		startDate: null,
		endDate: null,
		constraints: [
			{ description: "City destroyed at the crucifixion" }
		]
	},
	"feature-City-of-Gadiandi": {
		id: "feature-City-of-Gadiandi",
		name: "City of Gadiandi",
		mapLabel: "Gadiandi",
		description: "city destroyed at the crucifixion",
		type: "city_1",
		startDate: null,
		endDate: null,
		constraints: [
			{ description: "City destroyed at the crucifixion" }
		]
	},
	"feature-City-of-Gadiomnah": {
		id: "feature-City-of-Gadiomnah",
		name: "City of Gadiomnah",
		mapLabel: "Gadiomnah",
		description: "city destroyed at the crucifixion",
		type: "city_1",
		startDate: null,
		endDate: null,
		constraints: [
			{ description: "City destroyed at the crucifixion" }
		]
	},
	"feature-Gallim": {
		id: "feature-Gallim",
		name: "Gallim",
		description: "Biblical city mentioned by Isaiah, as quoted by Nephi1.[12] Probably in Benjamin, to the north of Jerusalem.",
		type: "city_1",
		startDate: null,
		endDate: null,
		constraints: [
			{ featureId: "feature-Jerusalem-1", description: "Probably in Benjamin, to the north of Jerusalem" }
		]
	},
	"feature-Geba": {
		id: "feature-Geba",
		name: "Geba",
		description: "Biblical city mentioned by Isaiah, as quoted by Nephi1. Archaeological evidence and biblical texts together help locate Geba near the modern village of Jaba', which lies northeast of Jerusalem.",
		type: "city_1",
		startDate: null,
		endDate: null,
		constraints: [
			{ featureId: "feature-Jerusalem-1", description: "Located near the modern village of Jaba', which lies northeast of Jerusalem" }
		]
	},
	"feature-Gibeah": {
		id: "feature-Gibeah",
		name: "Gibeah",
		description: "Biblical city mentioned by Isaiah, as quoted by Nephi1. Hometown and capital of King Saul, located just north of Jerusalem.",
		type: "city_1",
		startDate: null,
		endDate: null,
		constraints: [
			{ featureId: "feature-Jerusalem-1", description: "Hometown and capital of King Saul, located just north of Jerusalem" }
		]
	},
	"feature-Gebim": {
		id: "feature-Gebim",
		name: "Gebim",
		description: "location near Jerusalem mentioned by Isaiah, as quoted by Nephi1.[24] The name means means \"cisterns\" or \"pits\" in Hebrew, suggesting that it was known for water sources or storage.",
		type: "city_1",
		startDate: null,
		endDate: null,
		constraints: [
			{ featureId: "feature-Jerusalem-1", description: "Location near Jerusalem, known for water sources or storage" }
		]
	},
	"feature-City-of-Gid": {
		id: "feature-City-of-Gid",
		name: "City of Gid",
		mapLabel: "Gid",
		description: "city invaded by Lamanites and used as a prison camp to detain Nephites",
		type: "city_1",
		startDate: null,
		endDate: null,
		constraints: [
			{ description: "City invaded by Lamanites and used as a prison camp to detain Nephites" }
		]
	},
	"feature-City-of-Gideon": {
		id: "feature-City-of-Gideon",
		name: "City of Gideon",
		mapLabel: "Gideon",
		description: "suburb of Zarahemla, location of battle, preaching, and other events",
		type: "city_1",
		startDate: null,
		endDate: null,
		constraints: [
			{ featureId: "feature-Land-of-Zarahemla", description: "Suburb of Zarahemla, location of battle, preaching, and other events" }
		]
	},
	"feature-Land-and-Valley-of-Gideon": {
		id: "feature-Land-and-Valley-of-Gideon",
		name: "Land and Valley of Gideon",
		description: "east of river Sidon",
		type: "region_2",
		startDate: null,
		endDate: null,
		constraints: [
			{ featureId: "feature-Sidon-River", description: "East of river Sidon" }
		]
	},
	"feature-City-of-Gilgal": {
		id: "feature-City-of-Gilgal",
		name: "City of Gilgal",
		mapLabel: "Gilgal",
		description: "city destroyed at the crucifixion",
		type: "city_1",
		startDate: null,
		endDate: null,
		constraints: [
			{ description: "City destroyed at the crucifixion" }
		]
	},
	"feature-Valley-of-Gilgal": {
		id: "feature-Valley-of-Gilgal",
		name: "Valley of Gilgal",
		description: "Jaredite battle region",
		type: "region_2",
		startDate: null,
		endDate: null,
		constraints: [
			{ description: "Jaredite battle region" }
		]
	},
	"feature-City-of-Gimgimno": {
		id: "feature-City-of-Gimgimno",
		name: "City of Gimgimno",
		mapLabel: "Gimgimno",
		description: "city destroyed at the crucifixion",
		type: "city_1",
		startDate: null,
		endDate: null,
		constraints: [
			{ description: "City destroyed at the crucifixion" }
		]
	},
	"feature-Gomorrah": {
		id: "feature-Gomorrah",
		name: "Gomorrah",
		description: "wicked city of the old world",
		type: "city_1",
		startDate: null,
		endDate: null,
		constraints: [
			{ description: "Wicked city of the old world" }
		]
	},
	"feature-Hagoth": {
		id: "feature-Hagoth",
		name: "Hagoth",
		description: "Hagoth's shipbuilding site",
		type: "point",
		startDate: null,
		endDate: null,
		constraints: [
			{ description: "Hagoth's shipbuilding site" }
		]
	},
	

	// END HERE

	// start here
	"feature-Hamath": {
		id: "feature-Hamath",
		name: "Hamath",
		description: "Biblical location mentioned by Isaiah, as quoted by Nephi1. Located on the Orontes River in modern-day Syria and one of the major cities of ancient Syria. Often mentioned as a northern boundary of the Israelite territories, expressed in the phrase \"from Dan to Beersheba, and from the sea to Hamath.\"",
		type: "city_1",
		startDate: null,
		endDate: null,
		constraints: [
			{ description: "Located on the Orontes River in modern-day Syria" }
		]
	},
	"feature-Land-of-Helam": {
		id: "feature-Land-of-Helam",
		name: "Land of Helam",
		description: "land eight days into the wilderness, found and settled by people of Alma1.",
		type: "region_2",
		startDate: null,
		endDate: null,
		constraints: [
			{ description: "Found and settled by people of Alma1" }
		]
	},
	"feature-Hermounts": {
		id: "feature-Hermounts",
		name: "Hermounts",
		description: "wilderness on west and north",
		type: "region_2",
		startDate: null,
		endDate: null,
		constraints: [
			{ description: "Wilderness on west and north" }
		]
	},
	"feature-Plains-of-Heshlon": {
		id: "feature-Plains-of-Heshlon",
		name: "Plains of Heshlon",
		description: "battleground of Coriantum and Shared",
		type: "region_2",
		startDate: null,
		endDate: null,
		constraints: [
			{ description: "Battleground of Coriantum and Shared" }
		]
	},
	"feature-Land-of-Heth": {
		id: "feature-Land-of-Heth",
		name: "Land of Heth",
		description: "land in the northern region",
		type: "region_2",
		startDate: null,
		endDate: null,
		constraints: [
			{ description: "Land in the northern region" }
		]
	},
	"feature-Horeb": {
		id: "feature-Horeb",
		name: "Horeb",
		description: "mountains on the Sinai Peninsula",
		type: "hill",
		startDate: null,
		endDate: null,
		constraints: [
			{ description: "Mountains on the Sinai Peninsula" }
		]
	},
	"feature-Irreantum": {
		id: "feature-Irreantum",
		name: "Irreantum",
		description: "(/ˌɪriˈæntəm/)",
		type: "sea",
		startDate: null,
		endDate: null,
		constraints: [
			{ description: "Sea" }
		]
	},
	"feature-Land-of-Ishmael": {
		id: "feature-Land-of-Ishmael",
		name: "Land of Ishmael",
		description: "portion of land of Nephi",
		type: "region_2",
		startDate: null,
		endDate: null,
		constraints: [
			{ featureId: "feature-Land-of-Nephi", description: "Portion of land of Nephi" }
		]
	},
	"feature-Israel": {
		id: "feature-Israel",
		name: "Israel",
		description: "promised land of Moses' people",
		type: "region_2",
		startDate: null,
		endDate: null,
		constraints: [
			{ description: "Promised land of Moses' people" }
		]
	},
	"feature-City-of-Jacob": {
		id: "feature-City-of-Jacob",
		name: "City of Jacob",
		mapLabel: "Jacob",
		description: "city destroyed at the crucifixion",
		type: "city_1",
		startDate: null,
		endDate: null,
		constraints: [
			{ description: "City destroyed at the crucifixion" }
		]
	},
	"feature-Jacobugath": {
		id: "feature-Jacobugath",
		name: "Jacobugath",
		description: "city of followers of Jacob",
		type: "city_1",
		startDate: null,
		endDate: null,
		constraints: [
			{ description: "City of followers of Jacob" }
		]
	},
	"feature-Land-of-Jashon": {
		id: "feature-Land-of-Jashon",
		name: "Land of Jashon",
		description: "Nephite retreat near Ammoron's record burial site",
		type: "region_2",
		startDate: null,
		endDate: null,
		constraints: [
			{ description: "Nephite retreat near Ammoron's record burial site" }
		]
	},
	"feature-City-of-Jashon": {
		id: "feature-City-of-Jashon",
		name: "City of Jashon",
		mapLabel: "Jashon",
		description: "Nephite retreat near Ammoron's record burial site",
		type: "city_1",
		startDate: null,
		endDate: null,
		constraints: [
			{ description: "Nephite retreat near Ammoron's record burial site" }
		]
	},
	"feature-Land-of-Jershon": {
		id: "feature-Land-of-Jershon",
		name: "Land of Jershon",
		description: "land on east by sea, south of land Bountiful. First mentioned when people of Ammon, seeking protection from fellow Lamanites, resettled there about 76 BC (Alma 27:22-24). Because of the threat of war from the Zoramites in Antionum to the south, Ammonites were relocated to Melek about 73 BC. All references to Jershon come from this three- to four-year period.",
		type: "region_2",
		startDate: null,
		endDate: null,
		constraints: [
			{ featureId: "feature-Land-of-Bountiful-2", description: "South of land Bountiful" },
			{ featureId: "feature-Melek", description: "Ammonites were relocated to Melek about 73 BC" }
		]
	},
	"feature-Jerusalem-1": {
		id: "feature-Jerusalem-1",
		name: "Jerusalem-1",
		description: "chief city of Jews and its surrounding area, original home of Lehi's family.",
		type: "city_1",
		startDate: null,
		endDate: null,
		constraints: [
			{ description: "Chief city of Jews and its surrounding area" }
		]
	},
	"feature-Jerusalem-2": {
		id: "feature-Jerusalem-2",
		name: "Jerusalem-2",
		description: "Lamanite city and land in land of Nephi",
		type: "city_1",
		startDate: null,
		endDate: null,
		constraints: [
			{ featureId: "feature-Land-of-Nephi", description: "Lamanite city and land in land of Nephi" }
		]
	},
	"feature-Jordan-River": {
		id: "feature-Jordan-River",
		name: "Jordan River",
		description: "river in Palestine",
		type: "river",
		startDate: null,
		endDate: null,
		constraints: [
			{ description: "River in Palestine" }
		]
	},
	"feature-City-of-Jordan": {
		id: "feature-City-of-Jordan",
		name: "City of Jordan",
		mapLabel: "Jordan",
		description: "Nephite retreat maintained by Mormon",
		type: "city_1",
		startDate: null,
		endDate: null,
		constraints: [
			{ description: "Nephite retreat maintained by Mormon" }
		]
	},
	"feature-City-of-Josh": {
		id: "feature-City-of-Josh",
		name: "City of Josh",
		mapLabel: "Josh",
		description: "city destroyed at the crucifixion",
		type: "city_1",
		startDate: null,
		endDate: null,
		constraints: [
			{ description: "City destroyed at the crucifixion" }
		]
	},
	"feature-Land-of-Joshua": {
		id: "feature-Land-of-Joshua",
		name: "Land of Joshua",
		description: "land in borders west, by seashore",
		type: "region_2",
		startDate: null,
		endDate: null,
		constraints: [
			{ description: "Land in borders west, by seashore" }
		]
	},
	"feature-Judah": {
		id: "feature-Judah",
		name: "Judah",
		description: "southern kingdom of Israelites",
		type: "region_2",
		startDate: null,
		endDate: null,
		constraints: [
			{ description: "Southern kingdom of Israelites" }
		]
	},
	"feature-City-of-Judea": {
		id: "feature-City-of-Judea",
		name: "City of Judea",
		mapLabel: "Judea",
		description: "Nephite city",
		type: "city_1",
		startDate: null,
		endDate: null,
		constraints: [
			{ description: "Nephite city" }
		]
	},
	"feature-City-of-Kishkumen": {
		id: "feature-City-of-Kishkumen",
		name: "City of Kishkumen",
		mapLabel: "Kishkumen",
		description: "Wicked city destroyed at the crucifixion",
		type: "city_1",
		startDate: null,
		endDate: null,
		constraints: [
			{ description: "Wicked city destroyed at the crucifixion" }
		]
	},
	"feature-Laish": {
		id: "feature-Laish",
		name: "Laish",
		description: "city located in the northernmost part of ancient Israel, mentioned by Isaiah, as quoted by Nephi1. Also known as Leshem before being captured and renamed Dan by the tribe of Dan.",
		type: "city_1",
		startDate: null,
		endDate: null,
		constraints: [
			{ description: "Located in the northernmost part of ancient Israel" }
		]
	},
	"feature-City-of-Laman": {
		id: "feature-City-of-Laman",
		name: "City of Laman",
		mapLabel: "Laman",
		description: "City destroyed at the crucifixion",
		type: "city_1",
		startDate: null,
		endDate: null,
		constraints: [
			{ description: "City destroyed at the crucifixion" }
		]
	},
	"feature-River-Laman": {
		id: "feature-River-Laman",
		name: "River Laman",
		description: "River emptying into Red Sea",
		type: "river",
		startDate: null,
		endDate: null,
		constraints: [
			{ description: "River emptying into Red Sea" }
		]
	},
	"feature-Lebanon": {
		id: "feature-Lebanon",
		name: "Lebanon",
		description: "the historical Phoenicia, middle eastern country directly north of Israel, the fall of which was prophesied by Isaiah, as quoted by Nephi1.",
		type: "region_2",
		startDate: null,
		endDate: null,
		constraints: [
			{ description: "Middle eastern country directly north of Israel" }
		]
	},
	"feature-Land-of-Lehi-1": {
		id: "feature-Land-of-Lehi-1",
		name: "Land of Lehi-1",
		description: "Land adjoining land of Morianton and containing city of Lehi",
		type: "region_2",
		startDate: null,
		endDate: null,
		constraints: [
			{ featureId: "feature-Land-of-Morianton", description: "Adjoining land of Morianton" }
		]
	},
	"feature-City-of-Lehi-1": {
		id: "feature-City-of-Lehi-1",
		name: "City of Lehi-1",
		mapLabel: "Lehi-1",
		description: "Land adjoining land of Morianton and containing city of Lehi",
		type: "city_1",
		startDate: null,
		endDate: null,
		constraints: [
			{ featureId: "feature-Land-of-Morianton", description: "Adjoining land of Morianton" }
		]
	},
	"feature-Land-of-Lehi-2": {
		id: "feature-Land-of-Lehi-2",
		name: "Land of Lehi-2",
		description: "Apparently the entire land south",
		type: "region_2",
		startDate: null,
		endDate: null,
		constraints: [
			{ description: "Apparently the entire land south" }
		]
	},
	"feature-Land-of-Lehi-Nephi": {
		id: "feature-Land-of-Lehi-Nephi",
		name: "Land of Lehi-Nephi",
		description: "Also called land of Nephi, of which it is a part",
		type: "region_2",
		startDate: null,
		endDate: null,
		constraints: [
			{ featureId: "feature-Land-of-Nephi", description: "Also called land of Nephi" }
		]
	},
	"feature-City-of-Lehi-Nephi": {
		id: "feature-City-of-Lehi-Nephi",
		name: "City of Lehi-Nephi",
		mapLabel: "Lehi-Nephi",
		description: "Also called land of Nephi, of which it is a part",
		type: "city_1",
		startDate: null,
		endDate: null,
		constraints: [
			{ featureId: "feature-Land-of-Nephi", description: "Also called land of Nephi" }
		]
	},
	"feature-City-of-Lemuel": {
		id: "feature-City-of-Lemuel",
		name: "City of Lemuel",
		mapLabel: "Lemuel",
		description: "Lamanite city",
		type: "city_1",
		startDate: null,
		endDate: null,
		constraints: [
			{ description: "Lamanite city" }
		]
	},
	"feature-Valley-of-Lemuel": {
		id: "feature-Valley-of-Lemuel",
		name: "Valley of Lemuel",
		description: "Lehite campsite near borders of Red Sea",
		type: "region_2",
		startDate: null,
		endDate: null,
		constraints: [
			{ description: "Lehite campsite near borders of Red Sea" }
		]
	},
	"feature-Madmenah": {
		id: "feature-Madmenah",
		name: "Madmenah",
		description: "location near Jerusalem, mentioned by Isaiah, as quoted by Nephi1. Likely within the tribal lands of Benjamin near the ancient Kingdom of Judah.",
		type: "city_1",
		startDate: null,
		endDate: null,
		constraints: [
			{ featureId: "feature-Jerusalem-1", description: "Likely within the tribal lands of Benjamin near the ancient Kingdom of Judah" }
		]
	},
	"feature-City-of-Manti": {
		id: "feature-City-of-Manti",
		name: "City of Manti",
		mapLabel: "Manti",
		description: "chief city in land of Manti",
		type: "city_1",
		startDate: null,
		endDate: null,
		constraints: [
			{ featureId: "feature-Land-of-Manti", description: "Chief city in land of Manti" }
		]
	},
	"feature-Hill-of-Manti": {
		id: "feature-Hill-of-Manti",
		name: "Hill of Manti",
		description: "near city of Zarahemla",
		type: "hill",
		startDate: null,
		endDate: null,
		constraints: [
			{ featureId: "feature-City-of-Zarahemla", description: "Near city of Zarahemla" }
		]
	},
	"feature-Land-of-Manti": {
		id: "feature-Land-of-Manti",
		name: "Land of Manti",
		description: "most southerly land of Nephites",
		type: "region_2",
		startDate: null,
		endDate: null,
		constraints: [
			{ description: "Most southerly land of Nephites" }
		]
	},
	"feature-Melek": {
		id: "feature-Melek",
		name: "Melek",
		description: "Nephite land west of Sidon",
		type: "region_2",
		startDate: null,
		endDate: null,
		constraints: [
			{ featureId: "feature-Sidon-River", description: "West of Sidon" }
		]
	},
// END HERE



// START HERE

"feature-Michmash": {
	id: "feature-Michmash",
	name: "Michmash",
	description: "Biblical city mentioned by Isaiah, as quoted by Nephi1. Town of Benjamin east of Bethel, generally identified with the modern-day village of Mukhmas.",
	type: "city_1",
	startDate: null,
	endDate: null,
	constraints: [
		{ description: "Town of Benjamin east of Bethel" }
	]
},
"feature-Middoni": {
	id: "feature-Middoni",
	name: "Middoni",
	description: "Lamanite land, location of Lamanite prison",
	type: "region_2",
	startDate: null,
	endDate: null,
	constraints: [
		{ description: "Location of Lamanite prison" }
	]
},
"feature-Midian1": {
	id: "feature-Midian1",
	name: "Midian1",
	description: "Biblical region and people, mentioned by Isaiah, as quoted by Nephi1. Located primarily in what is now northwestern Saudi Arabia, southern Jordan, southern Israel, and the Sinai Peninsula.",
	type: "region_2",
	startDate: null,
	endDate: null,
	constraints: [
		{ description: "Located primarily in what is now northwestern Saudi Arabia, southern Jordan, southern Israel, and the Sinai Peninsula" }
	]
},
"feature-Land-of-Midian2": {
	id: "feature-Land-of-Midian2",
	name: "Land of Midian2",
	description: "Lamanite land east of Lehi-Nephi",
	type: "region_2",
	startDate: null,
	endDate: null,
	constraints: [
		{ featureId: "feature-Land-of-Lehi-Nephi", description: "East of Lehi-Nephi" }
	]
},
"feature-Migron": {
	id: "feature-Migron",
	name: "Migron",
	description: "Biblical city mentioned by Isaiah, as quoted by Nephi1.[6] Likely situated in the territory of the tribe of Benjamin, north of Jerusalem, probably a small outpost or settlement.",
	type: "city_1",
	startDate: null,
	endDate: null,
	constraints: [
		{ featureId: "feature-Jerusalem-1", description: "Likely situated in the territory of the tribe of Benjamin, north of Jerusalem" }
	]
},
"feature-Minon": {
	id: "feature-Minon",
	name: "Minon",
	description: "Nephite land on west bank of river Sidon",
	type: "region_2",
	startDate: null,
	endDate: null,
	constraints: [
		{ featureId: "feature-Sidon-River", description: "On west bank of river Sidon" }
	]
},
"feature-Moab": {
	id: "feature-Moab",
	name: "Moab",
	description: "land of the Moabites, Israelite rivals",
	type: "region_2",
	startDate: null,
	endDate: null,
	constraints: [
		{ description: "Land of the Moabites, Israelite rivals" }
	]
},
"feature-City-of-Mocum": {
	id: "feature-City-of-Mocum",
	name: "City of Mocum",
	mapLabel: "Mocum",
	description: "city destroyed at the crucifixion",
	type: "city_1",
	startDate: null,
	endDate: null,
	constraints: [
		{ description: "City destroyed at the crucifixion" }
	]
},
"feature-Moriancumer": {
	id: "feature-Moriancumer",
	name: "Moriancumer",
	description: "Mesopotamian coastal region",
	type: "region_2",
	startDate: null,
	endDate: null,
	constraints: [
		{ description: "Mesopotamian coastal region" }
	]
},
"feature-Land-of-Morianton": {
	id: "feature-Land-of-Morianton",
	name: "Land of Morianton",
	description: "area settled by Morianton-2",
	type: "region_2",
	startDate: null,
	endDate: null,
	constraints: [
		{ description: "Area settled by Morianton-2" }
	]
},
"feature-City-of-Morianton": {
	id: "feature-City-of-Morianton",
	name: "City of Morianton",
	mapLabel: "Morianton",
	description: "area settled by Morianton-2",
	type: "city_1",
	startDate: null,
	endDate: null,
	constraints: [
		{ description: "Area settled by Morianton-2" }
	]
},
"feature-Moriantum": {
	id: "feature-Moriantum",
	name: "Moriantum",
	description: "Nephite area",
	type: "region_2",
	startDate: null,
	endDate: null,
	constraints: [
		{ description: "Nephite area" }
	]
},
"feature-Forest-of-Mormon": {
	id: "feature-Forest-of-Mormon",
	name: "Forest of Mormon",
	description: "near waters of Mormon",
	type: "region_2",
	startDate: null,
	endDate: null,
	constraints: [
		{ featureId: "feature-Waters-of-Mormon", description: "Near waters of Mormon" }
	]
},
"feature-feature-of-Mormon": {
	id: "feature-feature-of-Mormon",
	name: "Place of Mormon",
	description: "region near city of Lehi-Nephi",
	type: "region_2",
	startDate: null,
	endDate: null,
	constraints: [
		{ featureId: "feature-City-of-Lehi-Nephi", description: "Region near city of Lehi-Nephi" }
	]
},
"feature-Waters-of-Mormon": {
	id: "feature-Waters-of-Mormon",
	name: "Waters of Mormon",
	description: "baptismal waters for over 200 Nephites",
	type: "sea",
	startDate: null,
	endDate: null,
	constraints: [
		{ description: "Baptismal waters for over 200 Nephites" }
	]
},
"feature-Land-of-Moron": {
	id: "feature-Land-of-Moron",
	name: "Land of Moron",
	description: "north of the great land of Desolation",
	type: "region_2",
	startDate: null,
	endDate: null,
	constraints: [
		{ featureId: "feature-Land-of-Desolation", description: "North of the great land of Desolation" }
	]
},
"feature-Moroni's Camp": {
	id: "feature-Moroni's Camp",
	name: "Moroni's Camp",
	description: "Nephite military post",
	type: "point",
	startDate: null,
	endDate: null,
	constraints: [
		{ description: "Nephite military post" }
	]
},
"feature-Land-of-Moroni": {
	id: "feature-Land-of-Moroni",
	name: "Land of Moroni",
	description: "in southeast of Nephite lands",
	type: "region_2",
	startDate: null,
	endDate: null,
	constraints: [
		{ description: "In southeast of Nephite lands" }
	]
},
"feature-City-of-Moroni": {
	id: "feature-City-of-Moroni",
	name: "City of Moroni",
	mapLabel: "Moroni",
	description: "in southeast of Nephite lands",
	type: "city_1",
	startDate: null,
	endDate: null,
	constraints: [
		{ description: "In southeast of Nephite lands" }
	]
},
"feature-City-of-Moronihah": {
	id: "feature-City-of-Moronihah",
	name: "City of Moronihah",
	mapLabel: "Moronihah",
	description: "iniquitous Nephite city",
	type: "city_1",
	startDate: null,
	endDate: null,
	constraints: [
		{ description: "Iniquitous Nephite city" }
	]
},
"feature-City-of-Mulek": {
	id: "feature-City-of-Mulek",
	name: "City of Mulek",
	mapLabel: "Mulek",
	description: "Nephite city south of Bountiful",
	type: "city_1",
	startDate: null,
	endDate: null,
	constraints: [
		{ featureId: "feature-Land-of-Bountiful-2", description: "Nephite city south of Bountiful" }
	]
},
"feature-Nahom": {
	id: "feature-Nahom",
	name: "Nahom",
	description: "location in Arabian desert",
	type: "region_2",
	startDate: null,
	endDate: null,
	constraints: [
		{ description: "Location in Arabian desert" }
	]
},
"feature-Land-of-Naphtali": {
	id: "feature-Land-of-Naphtali",
	name: "Land of Naphtali",
	description: "Israelite territory",
	type: "region_2",
	startDate: null,
	endDate: null,
	constraints: [
		{ description: "Israelite territory" }
	]
},
"feature-Narrow-Neck": {
	id: "feature-Narrow-Neck",
	name: "Narrow Neck",
	description: "near west sea, which led into the land northward",
	type: "region_2",
	startDate: null,
	endDate: null,
	constraints: [
		{ description: "Near west sea, which led into the land northward" }
	]
},
"feature-Narrow-Pass": {
	id: "feature-Narrow-Pass",
	name: "Narrow Pass",
	description: "led by the sea into the land northward",
	type: "region_2",
	startDate: null,
	endDate: null,
	constraints: [
		{ description: "Led by the sea into the land northward" }
	]
},
"feature-Narrow-Strip-of-Wilderness": {
	id: "feature-Narrow-Strip-of-Wilderness",
	name: "Narrow Strip of Wilderness",
	description: "ran from the sea east to the sea west",
	type: "region_2",
	startDate: null,
	endDate: null,
	constraints: [
		{ description: "Ran from the sea east to the sea west" }
	]
},
"feature-Nazareth": {
	id: "feature-Nazareth",
	name: "Nazareth",
	description: "city of Christ's childhood",
	type: "city_1",
	startDate: null,
	endDate: null,
	constraints: [
		{ description: "City of Christ's childhood" }
	]
},
"feature-City-of-Nehor": {
	id: "feature-City-of-Nehor",
	name: "City of Nehor",
	mapLabel: "Nehor",
	description: "battleground for Corihor and Shule",
	type: "city_1",
	startDate: null,
	endDate: null,
	constraints: [
		{ description: "Battleground for Corihor and Shule" }
	]
},
"feature-City-of-Nephi": {
	id: "feature-City-of-Nephi",
	name: "City of Nephi",
	mapLabel: "Nephi",
	description: "city established by Nephi, later occupied by Lamanites, Zeniffites",
	type: "city_1",
	startDate: null,
	endDate: null,
	constraints: [
		{ featureId: "feature-Land-of-Nephi", description: "City established by Nephi, later occupied by Lamanites, Zeniffites" }
	]
},
"feature-Land-of-Nephi": {
	id: "feature-Land-of-Nephi",
	name: "Land of Nephi",
	description: "land established by Nephi, later occupied by Lamanites, Zeniffites",
	type: "region_1",
	startDate: null,
	endDate: null,
	constraints: []
},
"feature-City-of-Nephihah": {
	id: "feature-City-of-Nephihah",
	name: "City of Nephihah",
	mapLabel: "Nephihah",
	description: "Nephite refuge captured and lost by the Lamanites",
	type: "city_1",
	startDate: null,
	endDate: null,
	constraints: [
		{ description: "Nephite refuge captured and lost by the Lamanites" }
	]
},
"feature-Plains-of-Nephihah": {
	id: "feature-Plains-of-Nephihah",
	name: "Plains of Nephihah",
	description: "near the city of Nephihah",
	type: "region_2",
	startDate: null,
	endDate: null,
	constraints: [
		{ featureId: "feature-City-of-Nephihah", description: "Near the city of Nephihah" }
	]
},
"feature-Nephite-Refuge": {
	id: "feature-Nephite-Refuge",
	name: "Nephite Refuge",
	description: "location for Nephite centralization",
	type: "region_2",
	startDate: null,
	endDate: null,
	constraints: [
		{ description: "Location for Nephite centralization" }
	]
},
"feature-Valley-of-Nimrod": {
	id: "feature-Valley-of-Nimrod",
	name: "Valley of Nimrod",
	description: "in Mesopotamia",
	type: "region_2",
	startDate: null,
	endDate: null,
	constraints: [
		{ description: "In Mesopotamia" }
	]
},
"feature-Nob": {
	id: "feature-Nob",
	name: "Nob",
	description: "city north of Jerusalem, within the ancient kingdom of Judah, mentioned by Isaiah, as quoted by Nephi1.",
	type: "city_1",
	startDate: null,
	endDate: null,
	constraints: [
		{ featureId: "feature-Jerusalem-1", description: "City north of Jerusalem, within the ancient kingdom of Judah" }
	]
},
"feature-City-and-Land-of-Noah": {
	id: "feature-City-and-Land-of-Noah",
	name: "City and Land of Noah",
	description: "in land of Zarahemla, near Ammonihah. It was here, in 72 BC by the Nephite calendar, that the Lamanites, under the command of Lamanite king Amalickiah, attacked the Nephites. No Nephites died, but over a thousand Lamanites died, including all their chief captains.",
	type: "region_2",
	startDate: null,
	endDate: null,
	constraints: [
		{ featureId: "feature-Land-of-Zarahemla", description: "In land of Zarahemla, near Ammonihah" },
		{ featureId: "feature-City-of-Ammonihah", description: "Near Ammonihah" }
	]
},
"feature-Ogath": {
	id: "feature-Ogath",
	name: "Ogath",
	description: "place near hill Ramah",
	type: "region_2",
	startDate: null,
	endDate: null,
	constraints: [
		{ featureId: "feature-Hill-Ramah", description: "Place near hill Ramah" }
	]
},
"feature-City-of-Omner": {
	id: "feature-City-of-Omner",
	name: "City of Omner",
	mapLabel: "Omner",
	description: "Nephite city by seashore on east borders",
	type: "city_1",
	startDate: null,
	endDate: null,
	constraints: [
		{ description: "Nephite city by seashore on east borders" }
	]
},
"feature-Onidah": {
	id: "feature-Onidah",
	name: "Onidah",
	description: "gathering place for dissatisfied Lamanites",
	type: "region_2",
	startDate: null,
	endDate: null,
	constraints: [
		{ description: "Gathering place for dissatisfied Lamanites" }
	]
},
"feature-Hill-Onidah": {
	id: "feature-Hill-Onidah",
	name: "Hill Onidah",
	description: "in land of Antionum",
	type: "hill",
	startDate: null,
	endDate: null,
	constraints: [
		{ featureId: "feature-Land-of-Antionum", description: "In land of Antionum" }
	]
},
"feature-Onihah": {
	id: "feature-Onihah",
	name: "Onihah",
	description: "city destroyed at the crucifixion",
	type: "city_1",
	startDate: null,
	endDate: null,
	constraints: [
		{ description: "City destroyed at the crucifixion" }
	]
},
"feature-Rock-of-Oreb": {
	id: "feature-Rock-of-Oreb",
	name: "Rock of Oreb",
	description: "Biblical location mentioned by Isaiah, as quoted by Nephi1. Landmark associated with a specific event where the Midianite leaders, Oreb and Zeeb, were defeated and killed by the Israelites.",
	type: "point",
	startDate: null,
	endDate: null,
	constraints: [
		{ description: "Landmark associated with a specific event where the Midianite leaders, Oreb and Zeeb, were defeated and killed by the Israelites" }
	]
},
// END HERE

// START HERE
"feature-Palestina": {
	id: "feature-Palestina",
	name: "Palestina",
	description: "middle eastern land neighboring Israel",
	type: "region_2",
	startDate: null,
	endDate: null,
	constraints: [
		{ featureId: "feature-Israel", description: "Neighboring Israel" }
	]
},
"feature-Pathros": {
	id: "feature-Pathros",
	name: "Pathros",
	description: "location in upper Egypt",
	type: "region_2",
	startDate: null,
	endDate: null,
	constraints: [
		{ featureId: "feature-Egypt", description: "Location in upper Egypt" }
	]
},
"feature-Hill-Ramah": {
	id: "feature-Hill-Ramah",
	name: "Hill Ramah",
	description: "Jaredite name for Hill Cumorah",
	type: "hill",
	startDate: null,
	endDate: null,
	constraints: [
		{ featureId: "feature-Hill-Cumorah", description: "Jaredite name for Hill Cumorah" }
	]
},
"feature-Ramath": {
	id: "feature-Ramath",
	name: "Ramath",
	description: "(also spelled Ramah), Biblical city mentioned by Isaiah, as quoted by Nephi1.[22] Likely located in the territory of the tribe of Benjamin, north of Jerusalem, and destroyed by divine decree.",
	type: "city_1",
	startDate: null,
	endDate: null,
	constraints: [
		{ featureId: "feature-Jerusalem-1", description: "Located in the territory of the tribe of Benjamin, north of Jerusalem" }
	]
},
"feature-Hill-Riplah": {
	id: "feature-Hill-Riplah",
	name: "Hill Riplah",
	description: "east of river Sidon, near land of Manti",
	type: "hill",
	startDate: null,
	endDate: null,
	constraints: [
		{ featureId: "feature-Sidon-River", description: "East of river Sidon" },
		{ featureId: "feature-Land-of-Manti", description: "Near land of Manti" }
	]
},
"feature-Waters-of-Ripliancum": {
	id: "feature-Waters-of-Ripliancum",
	name: "Waters of Ripliancum",
	description: "aquatic region in the land northward",
	type: "sea",
	startDate: null,
	endDate: null,
	constraints: [
		{ description: "Aquatic region in the land northward" }
	]
},
"feature-Salem": {
	id: "feature-Salem",
	name: "Salem",
	description: "ancient name for Jerusalem",
	type: "city_1",
	startDate: null,
	endDate: null,
	constraints: [
		{ featureId: "feature-Jerusalem-1", description: "Ancient name for Jerusalem" }
	]
},
"feature-Samaria": {
	id: "feature-Samaria",
	name: "Samaria",
	description: "Biblical location mentioned by Isaiah, as quoted by Nephi1. Capital city of the northern Kingdom of Israel that played a significant role in the region's history until it fell to the Assyrians in 722 BC. Located in the hill country of Ephraim (central to what is now the Northern West Bank), Samaria was strategically positioned atop a hill, providing natural defenses.",
	type: "city_1",
	startDate: null,
	endDate: null,
	constraints: [
		{ featureId: "feature-Israel", description: "Capital city of the northern Kingdom of Israel" }
	]
},
"feature-city-by-the-sea": {
	id: "feature-city-by-the-sea",
	name: "City by the Sea",
	description: "",
	type: "city_1",
	startDate: null,
	endDate: null,
	constraints: [
		{ featureId: "feature-Land-of-Ishmael", description: "Watering place in land of Ishmael" }
	]
},
"feature-Waters-of-Sebus": {
	id: "feature-Waters-of-Sebus",
	name: "Waters of Sebus",
	description: "watering place in land of Ishmael",
	type: "sea",
	startDate: null,
	endDate: null,
	constraints: [
		{ featureId: "feature-Land-of-Ishmael", description: "Watering place in land of Ishmael" }
	]
},
"feature-Shazer": {
	id: "feature-Shazer",
	name: "Shazer",
	description: "Lehite rest stop in Arabia",
	type: "region_2",
	startDate: null,
	endDate: null,
	constraints: [
		{ description: "Lehite rest stop in Arabia" }
	]
},
"feature-Shelem": {
	id: "feature-Shelem",
	name: "Shelem",
	description: "mountain in Mesopotamia",
	type: "hill",
	startDate: null,
	endDate: null,
	constraints: [
		{ description: "Mountain in Mesopotamia" }
	]
},
"feature-Land-of-Shem-2": {
	id: "feature-Land-of-Shem-2",
	name: "Land of Shem-2",
	description: "Nephite land north of Antum and Jashon",
	type: "region_2",
	startDate: null,
	endDate: null,
	constraints: [
		{ featureId: "feature-Land-of-Antum", description: "North of Antum" },
		{ featureId: "feature-Land-of-Jashon", description: "North of Jashon" }
	]
},
"feature-City-of-Shem-2": {
	id: "feature-City-of-Shem-2",
	name: "City of Shem-2",
	mapLabel: "Shem-2",
	description: "Nephite land north of Antum and Jashon",
	type: "city_1",
	startDate: null,
	endDate: null,
	constraints: [
		{ featureId: "feature-Land-of-Antum", description: "North of Antum" },
		{ featureId: "feature-Land-of-Jashon", description: "North of Jashon" }
	]
},
"feature-Land-of-Shemlon": {
	id: "feature-Land-of-Shemlon",
	name: "Land of Shemlon",
	description: "Region bordering on land of Lehi-Nephi",
	type: "region_2",
	startDate: null,
	endDate: null,
	constraints: [
		{ featureId: "feature-Land-of-Lehi-Nephi", description: "Bordering on land of Lehi-Nephi" }
	]
},
"feature-Sherrizah": {
	id: "feature-Sherrizah",
	name: "Sherrizah",
	description: "Nephite stronghold conquered by Lamanites",
	type: "city_1",
	startDate: null,
	endDate: null,
	constraints: [
		{ description: "Nephite stronghold conquered by Lamanites" }
	]
},
"feature-Waters-of-Shiloah": {
	id: "feature-Waters-of-Shiloah",
	name: "Waters of Shiloah",
	description: "pool near Jerusalem1",
	type: "sea",
	startDate: null,
	endDate: null,
	constraints: [
		{ featureId: "feature-Jerusalem-1", description: "Pool near Jerusalem1" }
	]
},
"feature-Land-of-Shilom": {
	id: "feature-Land-of-Shilom",
	name: "Land of Shilom",
	description: "small region next to land of Lehi-Nephi",
	type: "region_2",
	startDate: null,
	endDate: null,
	constraints: [
		{ featureId: "feature-Land-of-Lehi-Nephi", description: "Next to land of Lehi-Nephi" }
	]
},
"feature-City-of-Shilom": {
	id: "feature-City-of-Shilom",
	name: "City of Shilom",
	mapLabel: "Shilom",
	description: "small region next to land of Lehi-Nephi",
	type: "city_1",
	startDate: null,
	endDate: null,
	constraints: [
		{ featureId: "feature-Land-of-Lehi-Nephi", description: "Next to land of Lehi-Nephi" }
	]
},
"feature-Hill-Shim": {
	id: "feature-Hill-Shim",
	name: "Hill Shim",
	description: "hill in the land northward",
	type: "hill",
	startDate: null,
	endDate: null,
	constraints: [
		{ description: "Hill in the land northward" }
	]
},
"feature-Shimnilom": {
	id: "feature-Shimnilom",
	name: "Shimnilom",
	description: "city in the land of Nephi",
	type: "city_1",
	startDate: null,
	endDate: null,
	constraints: [
		{ featureId: "feature-Land-of-Nephi", description: "City in the land of Nephi" }
	]
},
"feature-Shinar": {
	id: "feature-Shinar",
	name: "Shinar",
	description: "ancient name for Mesopotamia",
	type: "region_2",
	startDate: null,
	endDate: null,
	constraints: [
		{ description: "Ancient name for Mesopotamia" }
	]
},
"feature-Valley-of-Shurr": {
	id: "feature-Valley-of-Shurr",
	name: "Valley of Shurr",
	description: "/ʃɜːr/), Coriantumr's base camp",
	type: "region_2",
	startDate: null,
	endDate: null,
	constraints: [
		{ description: "Coriantumr's base camp" }
	]
},
// END HERE


	// START HERE

	"feature-Land-of-Sidom": {
		id: "feature-Land-of-Sidom",
		name: "Land of Sidom",
		description: "city near Ammonihah where Zeezrom, Alma and Amulek retreated",
		type: "region_2",
		startDate: null,
		endDate: null,
		constraints: [
			{ featureId: "feature-City-of-Ammonihah", description: "Near Ammonihah" }
		]
	},
	"feature-Sidon-River": {
		id: "feature-Sidon-River",
		name: "Sidon River",
		description: "major river flowing through the land of Zarahemla",
		type: "river",
		startDate: null,
		endDate: null,
		constraints: [
			{ featureId: "feature-Land-of-Zarahemla", description: "Flows through the land of Zarahemla" }
		]
	},
	"feature-Mount-Sinai": {
		id: "feature-Mount-Sinai",
		name: "Mount Sinai",
		description: "mountain where Moses received the ten commandments",
		type: "hill",
		startDate: null,
		endDate: null,
		constraints: [
			{ description: "Mountain where Moses received the ten commandments" }
		]
	},
	"feature-Sinim": {
		id: "feature-Sinim",
		name: "Sinim",
		description: "distant land, possibly China",
		type: "region_2",
		startDate: null,
		endDate: null,
		constraints: [
			{ description: "Distant land, possibly China" }
		]
	},
	"feature-Siron": {
		id: "feature-Siron",
		name: "Siron",
		description: "city near Antionum where Corianton met Isabel",
		type: "city_1",
		startDate: null,
		endDate: null,
		constraints: [
			{ featureId: "feature-Land-of-Antionum", description: "Near Antionum" }
		]
	},
	"feature-Sodom": {
		id: "feature-Sodom",
		name: "Sodom",
		description: "wicked city of the old world",
		type: "city_1",
		startDate: null,
		endDate: null,
		constraints: [
			{ description: "Wicked city of the old world" }
		]
	},
	"feature-Syria": {
		id: "feature-Syria",
		name: "Syria",
		description: "middle Eastern country",
		type: "region_2",
		startDate: null,
		endDate: null,
		constraints: [
			{ description: "Middle Eastern country" }
		]
	},
	"feature-Tarshish": {
		id: "feature-Tarshish",
		name: "Tarshish",
		description: "possibly the city Tarsus",
		type: "city_1",
		startDate: null,
		endDate: null,
		constraints: [
			{ description: "Possibly the city Tarsus" }
		]
	},
	"feature-City-of-Teancum": {
		id: "feature-City-of-Teancum",
		name: "City of Teancum",
		mapLabel: "Teancum",
		description: "by seashore near city of Desolation",
		type: "city_1",
		startDate: null,
		endDate: null,
		constraints: [
			{ featureId: "feature-City-of-Desolation", description: "Near city of Desolation" }
		]
	},
	"feature-Tower-of-Babel": {
		id: "feature-Tower-of-Babel",
		name: "Tower of Babel",
		description: "near original home of the Jaredites",
		type: "point",
		startDate: null,
		endDate: null,
		constraints: [
			{ description: "Near original home of the Jaredites" }
		]
	},
	"feature-Wilderness": {
		id: "feature-Wilderness",
		name: "Wilderness",
		description: "region beyond the land of Nephi into which Mosiah1 and his followers fled until arriving at the land of Zarahemla. At a later time, groups of Nephites, including Zeniff, attempted to reverse that journey to regain the land of their inheritance.[75] Likely same wilderness where Zeniff hid women and children before going to battle against Lamanites.[76] The sons of Mosiah2 again reversed that journey to go preach to the Lamanites.[77]",
		type: "region_2",
		startDate: null,
		endDate: null,
		constraints: [
			{ featureId: "feature-Land-of-Nephi", description: "Beyond the land of Nephi" },
			{ featureId: "feature-Land-of-Zarahemla", description: "Arriving at the land of Zarahemla" }
		]
	},
	"feature-Wilderness-of-the-Mulekites": {
		id: "feature-Wilderness-of-the-Mulekites",
		name: "Wilderness of the Mulekites",
		description: "area into which the followers of Mulek (the purported last son of Jewish king Zedekiah1), travelled as they escaped the fall of Jerusalem.",
		type: "region_2",
		startDate: null,
		endDate: null,
		constraints: [
			{ featureId: "feature-Jerusalem-1", description: "Followers of Mulek escaped the fall of Jerusalem" }
		]
	},
	"feature-Wilderness-of-the-Jaredites": {
		id: "feature-Wilderness-of-the-Jaredites",
		name: "Wilderness of the Jaredites",
		description: "found by the explorers sent by King Limhi who lost their way and stumbled into a land covered in skeletal human remains and ruins.",
		type: "region_2",
		startDate: null,
		endDate: null,
		constraints: [
			{ description: "Found by the explorers sent by King Limhi" }
		]
	},
	"feature-Wilderness-of-Alma1": {
		id: "feature-Wilderness-of-Alma1",
		name: "Wilderness of Alma1",
		description: "into which Alma1 and his followers fled to escape the army of King Noah3. They eventually came upon a place of clear water eight days into the wilderness (which place they called Helam), where they settled.[26] After Helam was found and captured by the Lamanites, and the people were tormented by Amulon, Alma1 and his followers escaped again into this wilderness, and rested in a valley a day's travel away (which valley they called Alma).[9] A further twelve day's distance took them to Zarahemla.[81]",
		type: "region_2",
		startDate: null,
		endDate: null,
		constraints: [
			{ featureId: "feature-City-of-Helam", description: "Place of clear water eight days into the wilderness" },
			{ featureId: "feature-City-of-Zarahemla", description: "A further twelve day's distance took them to Zarahemla" }
		]
	},
	"feature-Wilderness-of-the-Noahites": {
		id: "feature-Wilderness-of-the-Noahites",
		name: "Wilderness of the Noahites",
		description: "beyond the Land of Shemlon, into which the followers of King Noah3 fled to escape the Lamanite army, and from which the captive survivors, including Limhi, were returned and forbidden to reenter. The former priests of Noah3 captured daughters of the Lamanites and carried them captive back into this wilderness.[83] Some time later, with the help of Ammon2 and Gideon, the people of Limhi were able to escape back into this wilderness to be united with the people of Mosiah2.[84]",
		type: "region_2",
		startDate: null,
		endDate: null,
		constraints: [
			{ featureId: "feature-Land-of-Shemlon", description: "Beyond the Land of Shemlon" }
		]
	},
	"feature-Wilderness-of-Sidon": {
		id: "feature-Wilderness-of-Sidon",
		name: "Wilderness of Sidon",
		description: "to the west and north of the River Sidon (where the war of the Amlicites/Lamanites and the Nephite people of Alma2 was fought), and into which the defeated Amlicite and Lamanite survivors fled and where many were devoured by ravenous beasts and birds of prey.",
		type: "wilderness",
		startDate: null,
		endDate: null,
		constraints: [
			{ featureId: "feature-Sidon-River", description: "To the west and north of the River Sidon" }
		]
	},
	"feature-City-of-Zarahemla": {
		id: "feature-City-of-Zarahemla",
		name: "City of Zarahemla",
		mapLabel: "Zarahemla",
		description: "major capital of Nephites from about 200 B.C. to A.D. 200",
		type: "city_1",
		startDate: null,
		endDate: null,
		constraints: [
			{ featureId: "feature-Land-of-Zarahemla", description: "Major capital of Nephites" }
		]
	},
	"feature-Land-of-Zarahemla": {
		id: "feature-Land-of-Zarahemla",
		name: "Land of Zarahemla",
		description: "general reference to the area near the city of Zarahemla",
		type: "region_1",
		startDate: null,
		endDate: null,
		constraints: [
			{ featureId: "feature-City-of-Zarahemla", description: "Near the city of Zarahemla" }
		]
	},
	"feature-Land-of-Zebulun": {
		id: "feature-Land-of-Zebulun",
		name: "Land of Zebulun",
		description: "Israelite territory",
		type: "region_2",
		startDate: null,
		endDate: null,
		constraints: [
			{ description: "Israelite territory" }
		]
	},
	"feature-City-of-Zeezrom": {
		id: "feature-City-of-Zeezrom",
		name: "City of Zeezrom",
		mapLabel: "Zeezrom",
		description: "Nephite city on southwest frontier",
		type: "city_1",
		startDate: null,
		endDate: null,
		constraints: [
			{ description: "Nephite city on southwest frontier" }
		]
	},
	"feature-Mount-Zerin": {
		id: "feature-Mount-Zerin",
		name: "Mount Zerin",
		description: "mountain, presumably in Mesopotamia",
		type: "hill",
		startDate: null,
		endDate: null,
		constraints: [
			{ description: "Mountain, presumably in Mesopotamia" }
		]
	},
	"feature-Zion": {
		id: "feature-Zion",
		name: "Zion",
		description: "city of God",
		type: "city_1",
		startDate: null,
		endDate: null,
		constraints: [
			{ description: "City of God" }
		]
	}

	// end here!
};
