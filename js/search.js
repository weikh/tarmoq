let search = [
    {
        title: "Quyida keltirilgan kompyuter tarmoqlarining qaysi biri avval paydo bo’lgan?global kompyuter tarmoqlari",
    },
    {
        title: "To’rtta bir-biri bilan bog’langan bog’lamlar strukturasi (kvadrat shaklida) qaysi topologiya turiga mansub? Xalqa",
    },
    {
        title: "Ketma-ket bir-biri bilan bog’langan 3 ta bog’lamlar (oxiri boshi bilan bog’lanmagan) strukturasi qaysi topologiya turiga tegishli? Umumiy shina",
    },
    {
        title: "Kompyuter tizimlarida ma’lumotlarni uzatish ishonchliligini oshirish uchun nima qilinadi? kontrol summani xisoblash bilan",
    },
    {
        title: "Qaysi topologiya birgalikda foydalanilmaydigan muhitni qo’llamasligi mumkin? To’liq bog’lanishli",
    },
    {
        title: "Topologiyalardan qaysi biri ishonchliligi yuqori hisoblanadi? Yulduz",
    },
    {
        title: "MAC satxi qanday vazifani bajaradi?  uzatish muhitiga murojaat qilishni boshqarish",
    },
    {
        title: "LLC satxi qanday vazifani bajaradi?   stantsiyalar o’rtasida axborotni har-xil ishonchlilik darajasi bilan uzatish",
    },
    {
        title: "10Base-2 segmentining uzunligi ko’pi bilan qancha bo’lishi mumkin?   185 metr",
    },
    {
        title: "O’ralma juftlik kabeli simlarini, uning konnektorlariga ulashning necha xil variantlari mavjud?   2",
    },
    {
        title: "Ethernet tarmoqlarida uzatish muhitiga murojaat qilishning qaysi usuli qo’llaniladi?    CSMA/CD",
    },
    {
        title: "Ethernet da kommutatsiyalashning qaysi xilidan foydalaniladi?   paketlarni deytagrammali kommutatsiyalash",
    },
    {
        title: "Optik tolali Ethernet tarmog’ining maksimal uzunligi qanday?     2740 m",
    },
    {
        title: "100Base-TX spetsifikatsiyasi qaysi texnologiyaga tegishli?      Fast Ethernet",
    },
    {
        title: "Fast Ethernet texnologiyasi spetsifikatsiyalari qaysi komitet tarkibida ishlab chiqilgan?     802.3",
    },
    {
        title: "Ethernet texnologiyasida koaksial kabelining ma’lumotlarni uzatish tezligi qanday?      10 Mbit/s",
    },
    {
        title: "Fast Ethernet texnologiyasida o’ralma juftlik kabelining ma’lumotlarni uzatish tezligi qanday?      100 Mbit/s",
    },
    {
        title: "Lokal tarmoqlarda keng tarqalgan topologiya turi qaysi?      Yulduz",
    },
    {
        title: "100Base-TX spetsifikatsiya qaysi texnologiyaga tegishli?       Fast Ethernet",
    },
    {
        title: "1000Base-SX spetsifikatsiya qaysi texnologiyaga tegishli?      Gigabit Ethernet",
    },
    {
        title: "Fast Ethernet texnologiyasida qaysi turdagi kabel tizimlaridan foydalanilgan?   ko’pmodali optik tolali, 5 kategoriyali o’ralma juftlik, 3 kategoriyali o’ralma juftlik",
    },
    {
        title: "MАC sath osti satxi OSI modelining qaysi sathiga tegishli?     kanal sathiga",
    },
    {
        title: "Ethernet texnologiyasi nechta standartga ega?      4",
    },
    {
        title: "Fast Ethernet texnologiyasi nechta spetsifikatsiyaga ega?    3",
    },
    {
        title: "Umumiy shina topologiyali lokal tarmoqlarda kontsentratorlar qanday funktsiyani bajaradi?     Kompyuter tomonidan uzatilayotgan ma’lumotni barcha kompyuterga yo’naltiradi",
    },
    {
        title: "Simsiz tarmoqlar standartlari qaysi komitet tarkibida ishlab chiqilmoqda?    802.11",
    },
    {
        title: "Xozirgi paytda ko’p ishlatiladigan, 802.11 standartiga tegishli spetsifikatsiyani ko’rsating     a, b, g",
    },
    {
        title: "802.11 spetsifikatsiyasi  simsiz lokal tarmog’i diametrining chegaralari qanday?      100 - 300 m",
    },
    {
        title: "Tarmoqni fizik strukturalashda qaysi qurilma ishlatiladi?     takrorlovchi (kontsentrator)",
    },
    {
        title: "Qaysi qurilma tarmoqning mantiqiy strukturasini o’zgartirishi mumkin?      ko’prik, marshrutizator,kommutator va shlyuz",
    },
    {
        title: "Kompyuter tarmog’ining fizik strukturalash nima maqsadda amalga oshiriladi?    Tarmoq  diametrini oshirish uchun",
    },
    {
        title: "Kompyuter tarmog’ining mantiqiy strukturalash nima maqsadda amalga oshiriladi?     Trafikni lokallashtirish uchun",
    },
    {
        title: "Kommutator ko’prikdan nimasi bilan farq qiladi?     Kadrlarni parallel qayta ishlashda",
    },
    {
        title: "OSI modelida nechta sath mavjud?        7",
    },
    {
        title: "OSI modelining to’rtinchi satxi qanday nomlanadi?      Transport sathi",
    },
    {
        title: "OSI modelining beshinchi satxi qanday nomlanadi?        Seanslar  sathi",
    },
    {
        title: "OSI modelining birinchi satxi qanday nomlanadi?        Fizik sath",
    },
    {
        title: "OSI modelining ikkinchi satxi qanday nomlanadi?        Kanal  sathi",
    },
    {
        title: "OSI modelining uchinchi satxi qanday nomlanadi?          Tarmoq  sathi",
    },
    {
        title: "OSI modelining oltinchi satxi qanday nomlanadi?         Taqdimlash  sathi",
    },
    {
        title: "OSI modelining yettinchi satxi qanday nomlanadi?          Аmaliy sath",
    },
    {
        title: "OSI modelining qaysi sathlari tarmoqqa bog’liq satxlar hisoblanadi?      fizik, kanal va tarmoq sathlari",
    },
    {
        title: "OSI modelining tarmoq sathi vazifalari keltirilgan qurilmalarning qaysi birida bajariladi?           Marshrutizator",
    },
    {
        title: "OSI modelining kanal satxi orqali uzatiladigan ma’lumotlarning birligi qanday nomlanadi?       Kadr",
    },
    {
        title: "OSI modelining tarmoq satxi orqali uzatiladigan ma’lumotlarning birligi qanday nomlanadi?        Paket",
    },
    {
        title: "Еlektr signallarini qabul qilish va uzatish vazifalarini OSI modelining qaysi sathi bajaradi?        Fizik sath",
    },
    {
        title: "Ma’lumotlarni uzatishning optimal marshrutlarini aniqlash vazifalarini OSI modelining qaysi sathi bajaradi?         Tarmoq  sathi",
    },
    {
        title: "Mijozlar dasturlari bilan o’zaro muloqot vazifalarini OSI modelining qaysi sathi bajaradi?       Аmaliy sath",
    },
    {
        title: "Keltirilgan protokollarning qaysilari tarmoq sathi protokollariga mansub?         IP, IPX",
    },
    {
        title: "Keltirilgan protokollarning qaysilari transport sathi protokollariga mansub?        TCP,UDP",
    },
    {
        title: "Keltirilgan protokollarning qaysilari amaliy sathi protokollariga mansub?       NFS, FTP",
    },
    {
        title: "OSI modelining fizik sathi qanday funktsiyalarni bajaradi?        Elektr signallarini uzatish va qabul qilish",
    },
    {
        title: "OSI modelining kanal sathi qaysi funktsiyalarni bajaradi?      Аloqa kanalini va ma’lumotlarni uzatish muxitiga murojat qilishni boshqarish",
    },
    {
        title: "OSI modelining tarmoq sathi qanday funktsiyalarni bajaradi?       Ma’lumotlarni uzatish marshrutlarini optimalini aniqlash",
    },
    {
        title: "MАС-adres qanday uzunlikka ega?         48 bit",
    },
    {
        title: "IPv4 turidagi IP-adres qanday uzunlikka ega?        32 bit",
    },
    {
        title: "192.190.21.254 adresi   IP-adreslarningqaysi sinfiga tegishli?        C",
    },
    {
        title: "B sinfidagi tarmoq tarkibiga nechta bog’lam bo’lishi mumkin?         65536",
    },
    {
        title: "А  sinfidagi tarmoq tarkibiga nechta bog’lam bo’lishi mumkin?          16777216",
    },
    {
        title: "B sinfidagi tarmoq maskasi qanday qiymatga ega?         255.255.0.0",
    },
    {
        title: "Internet tarmog’i, kompyuter tarmoqlarining qaysi sinfiga mansub?       global tarmoq",
    },
    {
        title: "Keltirilgan texnologiyalarning qaysi birlari global tarmoq texnologiyalariga mansub?          ATM, TCP/IP",
    },
    {
        title: "MAN tarmoqlari nima uchun mo’ljallangan?          Yirik shaxar axolisiga xizmat ko’rsatish uchun",
    },
    {
        title: "1980-1985 yillarda dastlabki lokal kompyuter tarmoqlari hisoblangan qanday lokal kompyuter tarmoqlari texnologiyalari ishlab chiqildi?       Ethernet, ArcNet, Token Ring, Token Bus va FDDI",
    },
    {
        title: "OSI modelida necha xil turdagi protokollar bor?        3 xil",
    },
    {
        title: "Tarmoq ilovalari nima uchun xizmat qiladi?         Foydalanuvchilarga, kompyuter tarmog'i tomonidan ko'rsatilishi mumkin bo'lgan turli xil xizmatlarni amalga oshiruvchi dasturlar tushuniladi.",
    },
    {
        title: "Kompyuter tarmog'i texnologiyalari deganda nimani tushunasiz?        Kompyuter tarmog'ini qurish va ishlatish uchun etarli bo'lgan bir-biriga moslashtirilgan apparat va dasturiy vositalar to'plami, hamda aloqa chiziqlari orqali ma'lumotlarni uzatish imkonini beradigan uskunalar tushuniladi",
    },
    {
        title: "TCP/IP steki nechta sathga ajratilgan?         To’rtta sathga",
    },
    {
        title: "FTP (File Transfer Protokol) qanday protokol?       Fayllarni uzatish protokoli",
    },
    {
        title: "Telnet qanday protokol?      Terminalni emulasiya qilish protokoli",
    },
    {
        title: "ЅMTR (Simple Mail Transfer Protocol) qanday protokol?        Elektron pochtani uzatishning oddiy protokoli",
    },
    {
        title: "HTTP (Hyper Text Transfer Protocol) qanday vazifani bajarish uchun mo'ljallangan protokol?          Gipermatnni uzatish protokoli",
    },
    {
        title: "IP-protokol qanday vazifani bajaradi?          Paketlarni tarmoqlar o'rtasida bir marshrutizatordan boshqasiga, to paket, u yuborilgan tarmoqqa etib borguncha xarakatlantirish vazifasini bajaradi.",
    },
    {
        title: "IP-paket qanday qismlardan iborat bo'ladi?         Sarlavxa va ma'lumotlar yoziladigan qismlardan iborat",
    },
    {
        title: "IP-protokolining funktsional jihatdan sodda yoki murakkabligi nimalarga bog’liq?            IP-paketning sarlavxasi qay darajada sodda yoki murakkab ekanligiga bog'liq",
    },
    {
        title: "IPv4-paket sarlavhasining uzunligi necha bitdan iborat?         4 bitdan",
    },
    {
        title: "Simsiz MAN tarmog’lari qanday texnologiyalarda quriladi?     WiMAX, LTE, sputnik",
    },
    {
        title: "IMS kommutator qanday vazifani baradi?       Shahar tarmoqlari turli tarmoqlar bir-biri bilan bog’lanish jarayonini nazorat qiladi",
    },
    {
        title: "Qanday tarmoqlar yirik lokal tarmoqlarni birlashtirish uchun foydalanilad?      Territorial magistral tarmoq",
    },
    {
        title: "Markaziy lokal tarmoqlarni uzoqdan turib ulaish serveri?       RAS",
    },
    {
        title: "ATM tehnologiyasining uzatish tezligi necha bit/sek larga yetkazilgan         2-10 bit/sek",
    },
    {
        title: "RAS server qaysi dasturiy apparat kompleksdan iborat?         Mashrutizator, ko’prik, shlyar",
    },
    {
        title: "Marshrutlash protakollari nechta sinfga bo’linadi?         2 ta",
    },
    {
        title: "Ichki shlyuz protokollari qanday protokollar bilan ishlaydi?        RIP, IBRP, OSPF, IS-IS",
    },
    {
        title: "Qanday protakol yo’llari ko’rsatilgan ma’lumotlarni tashqi tarmoqqa uzatadi?        BBP (bateway to bateway Protocol)",
    },
    {
        title: "OSI modelining amaliy sathi qanday funktsiyalarni bajaradi?       Klient dasturlari bilan o’zaro muloqotda bo’lish",
    },
    {
        title: "Ulanish tarmoqlarini bog’lashni va yuqori tezlikdagi kanallar orqali trafik tranzitini ta’minlashni, qaysi tarmoq amalga oshiradi?        Magistral tarmoq",
    },
    {
        title: "C  sinfidagi tarmoq tarkibiga nechta bog’lam bo’lishi mumkin?        256",
    },
    {
        title: "А sinfidagi tarmoq maskasi qanday qiymatga ega?         255.0.0.0",
    },
    {
        title: "C sinfidagi tarmoq maskasi qanday qiymatga ega?           255.255.255.0",
    },
    {
        title: "512 ta bog’lamli tarmoqosti tarmoq maskasi qanday qiymatga ega?     255.255.254.0",
    },
    {
        title: "Internet tarmog’ida kommutatsiyalashning qaysi xili ishlatiladi?     paketlarni kommutatsiyalash",
    },
    {
        title: "UTP kabeli deganda qaysi kabel tushuniladi?           o’ralma juftlik kabeli",
    },
    {
        title: "Modem kanday asosiy vazifani bajaradi?           signallarni modulyatsiyalash - demodulyatsiyalash",
    },
    {
        title: "Keltirilgan qurilmalarning qaysi biri DCE bo’ladi?          modem",
    },
    {
        title: "Keltirilgan qurilmalarning qaysi biri DTE bo’ladi?           kompyuter va marshrutizator",
    },
    {
        title: "Keltirilgan protokollarning qaysilari fizik  sath protokollariga mansub?        10Base-T, 100Base-T",
    },
    {
        title: "Keltirilgan protokollarning qaysilari taqdimlash sathi protokollariga mansub?     SNMP, Telnet",
    },
    {
        title: "Keltirilgan protokollarning qaysilari saenslar sathi protokollariga mansub?       RPC, WSP",
    },
    {
        title: "OSI modelining transport sathi qanday funktsiyalarni bajaradi?      Ma’lumotlarni qabul qilish va uzatish jarayonida, ma’lumotlarni to’liq va to’g’ri uzatilishini nazorat qilish",
    },
    {
        title: "OSI modelining seanslar sathi qanday funktsiyalarni bajaradi       Bog’lanish seansini yaratish, kuzatish, oxirigacha ta’minlash",
    },
    {
        title: "OSI modelining taqdimlash sathi qanday funktsiyalarni bajaradi                 Ma’lumotlarni kodlash va shifrlash",
    },
    {
        title: "Аloqa kanaliga va uzatish muhitiga ulanishni boshqarish vazifalarini OSI modelining qaysi sathi bajaradi?          Kanal sathi",
    },
    {
        title: "Ma’lumotlarni uzatish jarayonida ularni to’liq va to’g’ri uzatilishini nazorat qilish vazifalarini OSI modelining qaysi sathi bajaradi?         Transport sathi",
    },
    {
        title: "Аloqa seansini hosil qilish, kuzatib turish va ohirigacha ta’minlab berish vazifalarini OSI modelining qaysi sathi bajaradi?           Seanslar sathi",
    },
    {
        title: "Mobil aloqa tarmoqlari tushunchasi nimani anglatadi?            Ko'chib yurish ma'nosini",
    },
    {
        title: "Mobil terminallari qaysi qurilma bilan o'zaro bog'lanib tarmoqqa ulanishni amalga oshiradi?          Baza stansiyasi",
    },
    {
        title: "2G va 3G mobil tarmoqlarining farqi nimada?        Chastota diapozoni, taqdim etadigan xizmatlari, mobil terminallari, tarmoq elementlari",
    },
    {
        title: "1G, 2G, 3G, 4G, 5G tarmoqlaridagi 'G' harfining ma'nisi nima?    'G'-inglizcha Generation so'zining bosh harfidan olingan bo'lib, avlod degani",
    },
    {
        title: "5G tarmoqlarining ma'lumot uzatish tezligi qancha?       1 Gbit/s dan katta",
    },
    {
        title: "LTE va WiMAX texnologiyalari qaysi avlodga tegishli?       4G",
    },
    {
        title: "PON so'zining ma'nosini toping.           Passiv opkit tarmog'i",
    },
    {
        title: "Raqamli abonent liniyasi - tarmoqning qaysi qismiga to'g'ri keladi?             Stansiyadan abonentning uyigacha bo'lgan qismi",
    },
    {
        title: "3G texnologiyasi asosida keng polosali abonent tarmog'ini qurish mumkinmi?      Ha",
    },
    {
        title: "xDSL texnologiyasi asosida lokal kompyuter tarmoqlarini yuqori tezlikli Internetga ulash mumkinmi?          Faqat past tezlikli internetga ulash mumkin",
    },
    {
        title: "Keng polosali abonent tarmog'i texnologiyalarini ko'rsating.         xDSL, PON, 3G, 4G, Sputnik",
    },
    {
        title: "Qanday qurilmalar orqali foydalanuvchilar tarmoq resurslaridan foydalanishi mumkin?           Kompyuter, smartfon va raqamli qurilmalar",
    },
    {
        title: "Transport tarmoqlari orqali uzatiladigan ma'lumot birligi nima?       Oqimlar",
    },
    {
        title: "Transport tarmog'ida oxirgi yillarda eng ko'p foydalanilayotgan uzatish muhitini ko'rsating.          Optik muhitlar",
    },
    {
        title: "PDH texnologiyasining kengaytirilgan ko'rinishini ko'rsating          Plesiochronous digital hierarchy",
    },
    {
        title: "SDH uzatish texnologiyasida qanday uzatish tizimlari mavjud?           STM",
    },
    {
        title: "STM-1 tizimining uzatish tezligi qancha?      155 Mbit/s",
    },
    {
        title: "DWDM texnologiyasi asosida kanallar qanday parametrga ko'ra multipleksorlanadi?         To'lqin uzunligiga ko'ra",
    },
    {
        title: "SONET tizimi bilan SDH tizimi bir xil imkoniyatli texnologiyalarmi?       Deyarli bir xil",
    },
    {
        title: "SDH uzatish tizimlari tarmoqning qaysi qismida foydalaniladi?         Shahar tarmoqlarida",
    },
    {
        title: "Global tarmoqlarni qurishda DWDM texnologiyasi qanday vazifani bajaradi?         Mamlakatlar va shaharlarni o'zaro bir biri bilan bog'lashni ta'minlaydi.",
    },
    {
        title: "Multipleksorlash qanday ma'noni anglatadi.          Zichlashtirish",
    },
    {
        title: "Klient-server arxitekturasi deganda nimani tushunasiz?            Kompyuter va serverni o'zaro bog'lanishi va ma'lumot almashish jarayonini taqdim etuvchi arxitektura",
    },
    {
        title: "Kompyuter tarmoqlarida server qanday vazifani amalga oshiradi?          Serverga ulangan kompyuterlarni o'zaro bog'lanish, resurs almashish va Internet resurslarida foydalanish imkoniyatini ta'minlaydi",
    },
    {
        title: "Klient-server arxitekturasi qanday usullarda quriladi?           Klient-server va Peer-to-peer arxitekturalariga asosan",
    },
    {
        title: "Ilova nima?         Foydalanuvchilarni tarmoq resurslaridan foydalanish imkoniyatini taqdim etuvchi dasturlar.",
    },
    {
        title: "Klient-server protokollarini ko'rsating.       SMTP,DNS",
    },
    {
        title: "Klient va server qurilmalari qanday topologiyalarda bog'lanishi mumkin?         Yulduz, nuqta-nuqta, halqa, shina",
    },
    {
        title: "Klient va server qanday ko'rinishda bog'lanishni amalga oshiradi?      Dastlab klient serverga so'rov jo'natadi va server so'rovga ishlov berib klientga javob qaytaradi.",
    },
    {
        title: "Smartfon qurilmalari bir vaqtda ham klient ham server bo'la oladimi?       Ha, foydalanilayotgan protokol va ilovaga muvofiq",
    },
    {
        title: "Server vazifasini bajarish uchun qanday shartlar topilishi kerak?    So'rovlarga ishlov berish va javob qaytarish, resurslarga ega bo'lish va doim faol bo'lish",
    },
    {
        title: "Peer-to-Peer arxitekturasiga asoslangan saytini tanlang?       Bit-torrent saytlari",
    },
    {
        title: "DNS qanday tizim?      Domen nomalar tizimi",
    },
    {
        title: "DNS qanday maqsadlar uchun foydalaniladi?          Internetga ulangan kompyuterni joylashuvini ko'rsatadi va uni aniqlaydi",
    },
    {
        title: "Quyida keltirilgan qaysi domen nomlari to'g'ri ko'rsatilgan?        Barcha domenlar to'g'ri ko'rsatilgan",
    },
    {
        title: "DNS tizimi IP adresini nomga va nomni IP adresga o'zgartiradi, masalan: google.com nomini 173.194.73.94 adresiga o'zgartiradi. Shu holat to'g'rimi?       Ha",
    },
    {
        title: ".uz bilan tugagan barcha domenlar faqat O'zbekiston hududida foydalanish mumkinligini anglatadimi?        Yoq",
    },
    {
        title: "Har bir domen nomiga bitta IP adres mos keladimi?          Bittadan ortiq IP adress bo'lishi mumkin",
    },
    {
        title: "DNS so'rovlariga qaysi qurilma ishlov beradi?           DNS serveri.",
    },
    {
        title: "ICMP nima maqsadda foydalaniladi?         Ikki qurilmadagi IP protokollari o'rtasidagi aloqani ta'minlaydi, boshqaradi",
    },
    {
        title: "Xostlar orasida ICMP boshqaruv xabarlari qanday shakllarda almashadi?           So'rov-javob shaklida",
    },
    {
        title: "ICMP qisqartmasining quyida kengaytirib yozilgan shaklini ko'rsating.     Internet control message protocol",
    },
    {
        title: "ICMP yuzaga kelgan xatoliklar haqida xabardor etadimi?           Ha",
    },
    {
        title: "ICMP xabarlari IP paketga joylashtiriladimi?             Ha",
    },
    {
        title: "ICMP xabari nechi qismdan tashkil topadi?       2 qismdan: Sarlovha va ma'lumot",
    },
    {
        title: "SNMP nima?        Tarmoqni boshqarish protokoli",
    },
    {
        title: "SNMP protokoli OSI modelining qaysi pog'onasida ishlatiladi?        Amaliy pog'ona",
    },
    {
        title: "SNMP uchun qaysi port belgilangan?            UDP 161 va 162 port",
    },
    {
        title: "SNMP so'rov va javob shakli faqat bitta portdan amalga oshiriladimi?      Yoq",
    },
    {
        title: "SNMP protokolining asosiy vazifalari nimadan iborat?        Tarmoqni monitoringni uchun tarmoqni boshqarishda ishlatiladi, IP tarmoqlariga ulangan qurilmani boshqarish haqidagi ma'lumotlarni tashkil etish va to'plash uchun standart protokol hisbolanadi",
    },
    {
        title: "Simsiz sensor tarmoqlari deganda nimani tushunasiz?        Atrof muhitdagi holatlarni monitoring qiluvchi va o'zgarishlarni qayt etuvchi qurilmalar",
    },
    {
        title: "Sensor tarmoqlari elementlariga misol keltiring.        Aqlli soat, EKG elektrod, gaz sensori",
    },
    {
        title: "Sensor qurilmalarini asosiy vazifasi nimadan iborat?        Atrof muhitdagi o'zgarishlarni monitoring qilish va kontroller qurilmasiga o'zgarishlarni jo'natish",
    },
    {
        title: "Hozirda qaysi sohalarda IoT texnologiyasidan foydalaniladi?      Barcha javob to'g'ri",
    },
    {
        title: "Sensor qurilmalarida qanday muammolar mavjud?        Barcha javob to'g'ri",
    },
    {
        title: "Sensor tarmoqlari uchun maxsus operatsion tizim talab etiladimi?      Ha",
    },
    {
        title: "Sensor tarmog'i necha qismdan iborat?       3",
    },
    {
        title: "Sensor qurilmalarni boshqaruvchi qurilma qanday nomlanadi?       Kontroller",
    },
    {
        title: "Nima sababdan sensor tarmoqlarining resurslari cheklangan bo'ladi?        Barcha javob to'g'ri",
    },
    {
        title: "Sensor qurilmalarini taqdim etadigan afzalliklari nimadan iborat?       Barcha javob to'g'ri",
    },
    {
        title: "Nima sababdan sensor qurilmalarida ma'lumot almashish tezligi past?             O'kazuvchanlik qobiliyati cheklangan",
    },
    {
        title: "Sensor tarmoqlarida qanday marshrutlash protokollaridan foydalaniladi?    OLSR, MRP",
    },
    {
        title: "Sensor tarmoqlarini qurishda qanday tarmoq topologiyalaridan foydalaniladi?      Barcha javob to'g'ri",
    },
    {
        title: "Sensor tarmoqlarida axborot xavfsizligi darajasi qay darajada ta'minlangan?       Talab darajasida emas",
    },
    {
        title: "Sensor tarmoqlarini talab darajasida takomillashtirish uchun nimalarga ahamiyat berish lozim?          Barcha javob to'g'ri",
    },
    {
        title: "Tarmoq xavfsizligi qanday vositalar orqali ta'minlanadi?         Apparat va dasturiy ta'minot vositalari orqali",
    },
    {
        title: "Tarmoq pog'onasida kimlar axborot xavfsizligini himoyalashga mas'ul?       Barcha javob to'g'ri",
    },
    {
        title: "Internet foydalanuvchilari uchun tarmoq xavfsizligi kafolatlanganmi?           Kafolatlanmagan",
    },
    {
        title: "Autentifikatsiya nima maqsadda ishlatiladi?         Foydalanuvchini identifikatsiya qilish uchun",
    },
    {
        title: "Internet saytlarida mavjud resurslardan foydalanishga kim ruxsat beradi?       Administrator",
    },
    {
        title: "Axborotlarni maxfiyligi qanday ta'minlanadi?        Shifrlash algoritmlari orqali",
    },
    {
        title: "Foydalanuvchilar axborot xavfsizligini buzilishida aybdor bo'lishlari mumkinmi?      Ha",
    },
    {
        title: "Nima uchun axborot xavfsizligi borgan sari dolzarb bo'lib bormoqda?            Axborotlar - intellektual mulk darakasiga etib kelmoqda",
    },
    {
        title: "Qanday muhitlarda axborot xavfsizligi dajarasi yuqoriroq?       Simli va optik",
    },
    {
        title: "Ilovalar axborot xavfsizlikni ta'minlashi mumkinmi?        Ha",
    },
    {
        title: "Kompyuter tarmoqlarida xavfsizlikni ta'minlash uchun nima ishlab chiqilishi lozim                    Xavfsizlik siyosati",
    },
    {
        title: "Konvergent so'zining ma'nosini ko'rsating.               Yaqinlashish",
    },
    {
        title: "Qanday holatlarda konvergensiya jarayoni yuzaga keladi?          Turli qurilmalar va dasturlarni bitta muhitda ishlash natijasida",
    },
    {
        title: "Konvergent tarmoqlariga misol keltiring.          Bluetooth, WiFi va internetga ulangan qurilmalarni o'zaro ma'lumot almashishi",
    },
    {
        title: "Turli tarmoqlar va ularning formatini moslashtirib beruvchi qurilmani ko'rsating                    Shlyuz",
    },
    {
        title: "Konvergent tarmoqlarining elementlarini ko'rsating              Barcha javob to'g'ri",
    },
    {
        title: "Konvergent tarmoqlariga o'tishning asosiy sababi...       Barcha javob to'g'ri",
    },
    {
        title: "Konvergensiyaning kamchilik tomonlarini ko'rsating            Barcha javob to'g'ri",
    },
    {
        title: "Tarmoq operatsion tizimiga ta'rif bering.           Barcha javob to'g'ri",
    },
    {
        title: "Windows server tarmoq operatsion tizimi bo'la oladimi?           Ha",
    },
    {
        title: "Windows serverni qaysi tashkilot ishlab chiqqan.          Microsoft",
    },
    {
        title: "Nima uchun IoT texnologiyasi ishlab chiqildi?             Barcha javob to'g'ri",
    },
    {
        title: "IoT qanday ma'noni anglatadi      Internet buyumlar",
    },
    {
        title: "Tumanli texnologiya qanday imkoniyatlarni taqdim etadi?       Barcha javob to'g'ri",
    },
    {
        title: "Ko'p foydalaniladagin tarmoq operatsion tizimlarining nechta asosiy turi bor?              A. 5",
    },
    {
        title: "Bulutli texnologiyada axborot xavfsizligi doimiy kafolatlanganmi?         Yoq",
    },
    {
        title: "Zamonaviy kompyuter tarmoqlari bilan an’anaviy kompyuter tarmoqlarini qanday farqlari bor?          Imkoniyatlari va sig'imi kengaytirilgan",
    },
    {
        title: "Tumanli va bulutli texnologiyalarning farqini tushuntirib bering.          Tumanli kichik va bulutli katta hududdagi tarmoqlarni qamrab oladi",
    },
    {
        title: "Quyidagilarning qaysi biri niqobni ifodalaydi?          255.255.192.0",
    },
    {
        title: "Ushbu maskani o‘lik sanoq tizimida ifodalang: 11111111.11111111.11111111.11100000           255.255.255.224",
    },
    {
    title: "Bajaradigan vazifasiga qarab kompyu¬terlarni qanday sin¬flarga bo’linadi          universal, muammoga-mo’ljallangan va maxsus",
},
{
    title: "Kompyuterlarda qo’llanilgan pro¬grammali boshqarish tamoili kim tomonidan taklif qilingan     Djonom fon Neyman tomo¬nidan",
},
{
    title: "Birinchi mikroprotsessorlar qanday arxitekturaga ega edilar       CISC",
},
{
    title: "Operativ xotira qurilmasi qaysi turdagi mikrosxemadan iborat bo’ladi.       dinamik va statik",
},
{
    title: "Kompyuter tizimi deganda nima tushuniladi       Funktsional jixatdan birlashtirilgan o’lchash, hisoblash va boshqa yordamchi texnik vositalar majmuasi",
},
{
    title: "Komyuterlar o’z taraqqiyoti davo¬mida necha bosqichdan o’tgan    6",
},
{
    title: "Xozirgi paytda kompyuterlarda qaysi xildagi buyruqlar ko’proq ishlatiladi          bir adresli va adressiz",
},
{
    title: "Komandalarining strukturasi bo’yicha kompyuterlar qanday sinflarga bo’linadi         adressiz, bir-, ikki-, … , n-adresli",
},
{
    title: "Kompyuter tizimlarini tashkil qilishning samaradorligini baholashda qaysi ko’rsatgichlardan foydalanilmaydi       texnik jihatidan foydalanish koэffitsienti",
},
{
    title: "Ko’pkompyuterli tizimlarda kompyuterlarni o’zaro ishlashi qaysi sathlarda amalga oshirilishi mumkin       Protsessorlar, tezkor xotira va aloqa kanali sathlarida",
},
{
    title: "Kupprotsessorli tizimlarda kompyuterlarni o’zaro ishlashi qaysi sathlarda amalga oshirilishi mumkin        Protsessorlar, tezkor xotira sathida",
},
{
    title: "Kompyuter protses¬sorining qaysi re¬gistrlari ma’lumotlarni saqlash uchun mo’ljallangan        АX, BX, SX va DX",
},
{
    title: "IBM PC kompyuterlarida xotira bayti adresi qanday aniqlanadi       segment adresi va segment ichidagi surilish adresi asosida",
},
{
    title: "Hisoblash vositalari arxitekturasining klassifikatsiyasi kim tomonidan taqdim etilgan        Flin tomonidan",
},
{
    title: "Strukturaviy tashkil etilishi bo’yicha kompyuterlar qanday sinflarga bo’linadi       bitta protsessorli va ko’pprotsessorli",
},
{
    title: "Kompyuterlarning qaysi sinfi maynfremlarga yaqin hisoblanadi      serverlar va klasterli strukturalar",
},
{
    title: "Hisoblash vositalari arxitekturasining nechta sinfini bilasiz        4",
},
{
    title: "Kompyuter klaviaturasidagi klavishalar kanday asosiy guruxlarga bo’linadi        alfavit-raqamli, funktsio¬nal, kursorni boshqarish, maxsus klavishalar",
},
{
    title: "Quyida sanab o’tilgan operatsion tizimlarning qaysi biri, klasterli strukturalarda qo’llash uchun mo’ljallangan      Windows NT/2000 Enterprise ning Wolfpack MS komponenti",
},
{
    title: "Klassik Djon fon-Neyman kompyuterlari qaysi sinfga tegishli         SISD",
},
{
    title: "Magistralli ko’pprotsessorli kompyuter tizimlari qaysi sinfga tegishli        MISD",
},
{
    title: "Vektorli ko’pprotsessorli kompyuter tizimlari qaysi sinfga tegishli        SIMD",
},
{
    title: "Matritsali ko’pprotsessorli kompyuter tizimlari qaysi sinfga tegishli       MIMD",
},
{
    title: "Ommaviy-parallel hisoblashli kompyuter tizimlarida bazaviy hisoblash elementi sifatida mikroprotsessorlarning qaysi xili ishlatil-moqda      transpyuterlar",
},
{
    title: "Keltirilgan kompyuter tizimlaridan qaysi biri markazlashtirilgan kompyuter tizimlariga tegishli        bitta boshqarish markaziga ega bo’lgan alohida kompyuterlar asosida qurilgan tizimlar",
},
{
    title: "Аxborotni konveyerli ishlash qanday afzalliklarga ega        amallarni bajarish vaqtini kamaytiradi",
},
{
    title: "Kompyuter tizimlarida abonentlarni kommutatsiyalashning nechta xili qo’llaniladi        2",
},
{
    title: "CDC 6600, CDC 7600, IBM 360 i IBM 370 tizimlari qaysi sinfga tegishli     magistralli",
},
{
    title: "Superkompyuterlarni qurishda ishlatiladigan yuqori tezkorli ko’pprotsessorli kompyuter tizimlari arxitekturasi qanday ko’rinishga ega bo’ladi    magistralli, vektorli va matritsali",
},
{
    title: "Super kompyuterlarda kaysi arxitekturalar qo’llaniladi    SIMD, MISD, MIMD",
},
{
    title: "Buzilmasdan ishlay olish qobiliyati deganda nima tushuniladi   kompyuter tizimining nosozlik vujudga kelgandan so’ng, berilgan dastur asosida, mantiqiy mashina sifatida o’zining harakatlarini davom ettira olish xususiyati",
},
{
    title: "Kompyuter tizimlarida parallel ishlashning necha xil usuli qo’llaniladi      3",
},
{
    title: "Kompyuter tizimlarida kompyuterlarni adreslash qanday amalga oshirilishi mumkin     uchta har-xil adreslash chizmalari asosida",
},
{
    title: "Quyida keltirilgan kompyuter tarmoqlarining qaysi biri avval paydo bo’lgan       global kompyuter tarmoqlari",
},
{
    title: "Kompyuter tizimlarida ikkilik sonlarni kodlashning qaysi xillari qo’llaniladi      potentsialli va impulsli",
},
{
    title: "Kompyuterning ketma-ket porti orqali uzatilayotgan axborotni sinxronlash qanday amalga oshiriladi       «Start» va «Stop» signallari yordamida",
},
{
    title: "Operatsion tizimning qaysi funktsiyasi redirektor funktsiyalariga tegishli bo’ladi      so’rovni anglash va uzoqdagi kompyuterga yo’naltirish",
},
{
    title: "To’rtta bir-biri bilan bog’langan bog’lamlar strukturasi (kvadrat shaklida) qaysi topologiya turiga mansub        Xalqa",
},
{
    title: "Ketma-ket bir-biri bilan bog’langan 3 ta bog’lamlar (oxiri boshi bilan bog’lanmagan) strukturasi qaysi topologiya turiga tegishli.       Umumiy shina",
},
{
    title: "Kompyuter tizimlarida ma’lumotlarni uzatish ishonchliligini oshirish uchun nima qilinadi     kontrol summani xisoblash bilan",
},
{
    title: "Qaysi topologiya birgalikda foydalanilmaydigan muhitni qo’llamasligi mumkin       to’liq bog’lanishli",
},
{
    title: "Kompyuterning tashqi interfeysi deganda nima tushuniladi    kompyuter bilan tashqi qurilmani bog’lovchi simlar va ular orqali axborot almashinish qoidalari to’plamlari",
},
{
    title: "Uchta o’zaro bog’langan bog’lamlardan iborat tuzilma (uchburchak shaklida) topologiyaning qaysi turiga tegishli    To’liq bog’lanishli",
},
{
    title: "Qanday topologiyaning xususiy xoli umumiy shina xisoblanadi     Yulduz",
},
{
    title: "Topologiyalardan qaysi biri ishonchliligi yuqori hisoblanadi      Yulduz",
},
{
    title: "MAC sathi qanday vazifani bajaradi       uzatish muhitiga murojaat qilishni boshqarish",
},
{
    title: "LLC sathi qanday vazifani bajaradi      stantsiyalar o’rtasida axborotni har-xil ishonchlilik darajasi bilan uzatish",
},
{
    title: "Stantsiyalar o’rtasida axborotni har-xil ishonchlilik darajasi bilan uzatish vazifasini qaysi sath bajaradi    LLC sathi",
},
{
    title: "Uzatish muhitiga murojaat qilishni boshqarish vazifasini qaysi sath bajaradi      MAC sathi",
},
{
    title: "l0Base-2 segmentining uzunligi ko’pi bilan qancha bo’lishi mumkin        185 metr",
},
{
    title: "O’ralma juftlik kabeli simlarini, uning konnektorlariga ulashning necha xil variantlari mavjud      2",
},
{
    title: "Ethernet tarmoqlarida uzatish muhitiga murojaat qilishning qaysi usuli qo’llaniladi        CSMA/CD",
},
{
    title: "Ethernet da kommutatsiyalashning qaysi xilidan foydalaniladi       paketlarni deytagrammali kommutatsiyalash",
},
{
    title: "Optik tolali Ethernet tarmog’ining maksimal uzunligi qanday      2740 m",
},
{
    title: "100Base-TX spetsifikatsiyasi qaysi texnologiyaga tegishli        Fast Ethernet",
},
{
    title: "Ethernet texnologiyasi tarmoqlarida ma’lumotlar kadri qanday preambulaga ega        00001111",
},
{
    title: "Signalni to’liq aylanib chiqish vaqti –PDV ning maksimal qiymati qanday      576 bitli interval",
},
{
    title: "PDV deganda nima tushuniladi       Signalni to’liq aylanib chiqish vaqti",
},
{
    title: "Fast Ethernet texnologiyasi spetsifikatsiyalari qaysi komitet tarkibida ishlab chiqilgan      802.3",
},
{
    title: "Ethernet texnologiyasida koaksial kabelining ma’lumotlarni uzatish tezligi qanday       10 Mbit/s",
},
{
    title: "Fast Ethernet texnologiyasida o’ralma juftlik kabelining ma’lumotlarni uzatish tezligi qandayEthernet       100 Mbit/s",
},
{
    title: "Lokal tarmoqlarda keng tarqalgan topologiya turi qaysi   Yulduz",
},
{
    title: "100Base-TX spetsifikatsiya qaysi texnologiyaga tegishli   Fast Ethernet",
},
{
    title: "1000Base-SX spetsifikatsiya qaysi texnologiyaga tegishli     Gigabit Ethernet",
},
{
    title: "10Base-T standartida o’ralma juftlik kabeli simlarining nechta jufti ishlatiladi      2",
},
{
    title: "100Base-TX spetsifikatsiyasida o’ralma juftlik kabeli simlarining nechta jufti ishlatiladi        2",
},
{
    title: "Kompyuterni kontsentrator yoki kommutator bilan ulash uchun UTP kabelining qaysi varianti ishlatiladi     To’g’ridan-to’g’ri ulangan varianti",
},
{
    title: "Kompyuterni kompyuter bilan ulash uchun UTP kabelining qaysi varianti ishlatiladi        Krossover varianti",
},
{
    title: "Tarmoq adapterining kadrlarni kompyuterdan uzatib beruvchi ulanish nuqtasi (kontakti) qanday belgilanadi       Tx",
},
{
    title: "Tarmoq adapterining kadrlarni kompyuterga qabul qilib oluvchi ulanish nuqtasi (kontakti) qanday belgilanadi      Rx",
},
{
    title: "Ethernet texnologiyasi qaysi mantiqiy topologiya asosida qurilgan         umumiy shina",
},
{
    title: "Fast Ethernet texnologiyasida qaysi turdagi kabel tizimlaridan foydalanilgan     ko’pmodali optik tolali , 5 kategoriyali o’ralma juftlik, 3 kategoriyali o’ralma juftlik",
},
{
    title: "Kadrlar ketma-ketligini kontsentratorlar orqali o’tishi natijasida, kadrlar orasidagi masofaning qisqarishi – PVV, ko’pi bilan qancha bo’lishi mumkin      49 bitli interval",
},
{
    title: "MАC sath osti sathi OSI modelining qaysi sathiga tegishli    kanal sathiga",
},
{
    title: "Ingichka koaksial kabel asosida qurilgan tarmoqda kompyuterlar orasidagi eng kichik masofa qanday bo’lishi kerak   1 m",
},
{
    title: "100Base-TX spetsifikatsiyasi qanday fizik topologiyaga ega       ierarxik yulduz",
},
{
    title: "100Base-TX spetsifikatsiyasi qanday mantiqiy topologiyaga ega      umumiy shina",
},
{
    title: "I va II sinf Fast Ethernet texnologiyasi takrorlagichlari nimasi bilan farq qiladi      Fizik sathiga tegishli mavjud portlari bilan",
},
{
    title: "Fast Ethernet texnologiyasida RJ-45 ulagichning qaysi kontaktlari ishlatiladi        1,2,3,6",
},
{
    title: "Ethernet texnologiyasi nechta standartga ega       4",
},
{
    title: "Fast Ethernet texnologiyasi nechta spetsifikatsiyaga ega    3",
},
{
    title: "100Base-T4 spetsifikatsiyasida o’ralma juftlik kabeli simlarining nechta jufti ishlatiladi       4",
},
{
    title: "Umumiy shina topologiyali lokal tarmoqlarda kontsentratorlar qanday funktsiyani bajaradi       Kompyuter tomonidan uzatilayotgan ma’lumotni barcha kompyuterga yo’naltiradi",
},
{
    title: "Qaysi kontsentrator kompyuter tomonidan uzatilayotgan ma’lumotni barcha kompyuterga yo’naltiradi       Ethernet kontsentratori",
},
{
    title: "Qaysi kontsentrator kompyuter tomonidan uzatilgan ma’lumotni xalqa orqali keyingi kompyuterga yo’naltiradi      Token Ring kontsentratori",
},
{
    title: "To’g’ridan-to’g’ri ulangan UTP kabelida Tx uzatuvchi sifatida qaysi ranglardagi simlar ishlatiladi       Yashil, oq-yashil",
},
{
    title: "To’g’ridan-to’g’ri ulangan UTP kabelida Rx qabul qiluvchi sifatida qaysi ranglardagi simlar ishlatiladi      Qizg’ish-sariq, oq - qizig’ish-sariq",
},
{
    title: "Kesishgan holatda ulangan (krossover) UTP kabelida Tx uzatuvchi sifatida qaysi ranglardagi simlar ishlatiladi     Qizg’ish-sariq, oq - qizig’ish-sariq",
},
{
    title: "Krossover ulangan UTP kabelida Rx qabul qiluvchi sifatida qaysi ranglardagi simlar ishlatiladi      Yashil, oq-yashil",
},
{
    title: "MSAU qanday vazifani bajaradi       faol bo’lmagan kontsentrator vazifasini",
},
{
    title: "FDDI texnologiyasida buzilmasdan ishlash qobiliyatini oshirish qanday ta’minlangan         ikkita optik tolali xalqani hosil qilish asosida",
},
{
    title: "FDDI texnologiyasining fizik sathi nachta sath osti sathlariga bo’linadi      2",
},
{
    title: "FDDI texnologiyasida, xalqalarga ko’pi bilan nechta kompyuter ulanishi mumkin      500",
},
{
    title: "FDDI tarmoqlarida uzatish muhitiga murojaat qilishning qaysi usuli qo’llaniladi       marker asosida murojaat qilishning tezkor usuli",
},
{
    title: "Token Ring tarmoqlarida uzatish muhitiga murojaat qilishning qaysi usuli qo’llaniladi      marker asosida murojaat qilish usuli",
},
{
    title: "Keltirilgan texnologiyalarning qaysi birlari lokal tarmoq texnologiyalariga mansub       FDDI, Token Ring",
},
{
    title: "FDDI texnologiyasida stantsiyalar orasidagi eng uzoq masofa kanday bo’lishi mumkin         2000m.",
},
{
    title: "Xalqa topologiyali lokal tarmoqlarda kontsentratorlar qanday funktsiyani bajaradi        Kompyuter tomonidan uzatilgan ma’lumotni xalqa orqali keyingi kompyuterga yo’naltiradi",
},
{
    title: "FDDI tarmog’idama’lumotlarni uzatishda qanday murojat kilish usuli qo’llaniladi      Tezlashtirilgan markerli murojaat qilish usuli",
},
{
    title: "Token Ring tarmog’ida ma’lumotlarni uzatishda qanday murojat qilish usuli qo’llaniladi         Markerli murojaat qilish usuli",
},
{
    title: "FDDI tarmog’ining qaysi elementlari buzilmay ishlash qobiliyatini ta’minlaydi         Ma’lumotlarni uzatish uchun ikkita xalqaning mavjudligi",
},
{
    title: "Token Ring texnologiyasi kadrining maksimal uzunligi nimaga bog’liq        xalqaning ishlash tezligiga",
},
{
    title: "Simsiz tarmoqlar standartlari qaysi komitet tarkibida ishlab chiqilmoqda         802.11",
},
{
    title: "Xozirgi paytda ko’p ishlatiladigan, 802.11 standartiga tegishli spetsifikatsiyani ko’rsating          a, b, g",
},
{
    title: "802.11 spetsifikatsiyasi simsiz lokal tarmog’i diametrining chegaralari qanday       100 - 300 m",
},
{
    title: "Keltirilgan qisqartmalarning qaysi biri bazaviy yoki asosiy xizmatlar to’plami ko’rsatiladigan tarmoqni anglatadi        BSS",
},
{
    title: "Keltirilgan qisqartmalarning qaysi biri kengaytirilgan (qo’shimcha) xizmatlar to’plamini ko’rsatadigan tarmoqni anglatadi     ESS",
},
{
    title: "BSS deganda nima tushuniladi      Asosiy xizmatlar to’plami ko’rsatiladigan simsiz tarmoq",
},
{
    title: "ESS deganda nima tushuniladi        Qo’shimcha xizmatlar to’plamini ko’rsatadigan simsiz tarmoq",
},
{
    title: "802.11a spetsifikatsiyasida ma’lumotlarni uzatishning maksimal tezligi qanday         54 Mbit/s",
},
{
    title: "802.11 spetsifikatsiyasi qanday ma’lumotlarni uzatishning maksimal tezligi qanday            2 Mbit/s",
},
{
    title: "802.11b spetsifikatsiyasi ma’lumotlarni uzatishning maksimal tezligi qanday           11 Mbit/s",
},
{
    title: "802.11g spetsifikatsiyasi ma’lumotlarni uzatishning maksimal tezligi qanday          54 Mbit/s",
},
{
    title: "802.11 standartiga tegishli topologiyalarning qaysi turlari mavjud            BSS, ESS",
},
{
    title: "Tarmoqni fizik strukturalashda qaysi qurilma ishlatiladi      takrorlovchi (kontsentrator)",
},
{
    title: "Qaysi qurilma tarmoqning mantiqiy strukturasini o’zgartirishi mumkin         ko’prik, marshrutizator, kommutator va shlyuz",
},
{
    title: "Ethernet kontsentratori qanday vazifani bajaradi          kompyuterdan kelayotgan axborotni qolgan barcha kompyuterga yo’naltirib beradi",
},
{
    title: "Kompyuter tarmog’ining fizik strukturalash nima maqsadda amalga oshiriladi            Tarmoq diametrini oshirish uchun",
},
{
    title: "Kompyuter tarmog’ining mantiqiy strukturalash nima maqsadda amalga oshiriladi       Trafikni lokallashtirish uchun",
},
{
    title: "Kommutator ko’prikdan nimasi bilan farq qiladi        Kadrlarni parallel qayta ishlashda",
},
{
    title: "OSI modelida nechta sath mavjud        7",
},
{
    title: "OSI modelining to’rtinchi sathi qanday nomlanadi       Transport sathi",
},
{
    title: "OSI modelining beshinchi sathi qanday nomlanadi    Seanslar sathi",
},
{
    title: "OSI modelining birinchi sathi qanday nomlanadi     Fizik sath",
},
{
    title: "OSI modelining ikkinchi sathi qanday nomlanadi       Kanal sathi",
},
{
    title: "OSI modelining uchinchi sathi qanday nomlanadi       Tarmoq sathi",
},
{
    title: "OSI modelining oltinchi sathi qanday nomlanadi      Taqdimlash sathi",
},
{
    title: "OSI modelining ettinchi sathi qanday nomlanadi      Аmaliy sath",
},
{
    title: "OSI modelining qaysi sathlari tarmoqqa bog’liq sathlar hisoblanadi        fizik, kanal va tarmoq sathlari",
},
{
    title: "OSI modelining tarmoq sathi vazifalari keltirilgan qurilmalarning qaysi birida bajariladi       Marshrutizator",
},
{
    title: "OSI modelining kanal sathi orqali uzatiladigan ma’lumotlarning birligi qanday nomlanadi           Kadr",
},
{
    title: "OSI modelining tarmoq sathi orqali uzatiladigan ma’lumotlarning birligi qanday nomlanadi          Paket",
},
{
    title: "Elektr signallarini qabul qilish va uzatish vazifalarini OSI modelining qaysi sathi bajaradi         Fizik sath",
},
{
    title: "Ma’lumotlarni uzatishning optimal marshrutlarini aniqlash vazifalarini OSI modelining qaysi sathi bajaradi      Tarmoq sathi",
},
{
    title: "Mijozlar dasturlari bilan o’zaro muloqot vazifalarini OSI modelining qaysi sathi bajaradi       Аmaliy sath",
},
{
    title: "Keltirilgan protokollarning qaysilari tarmoq sathi protokollariga mansub          IP, IPX",
},
{
    title: "Keltirilgan protokollarning qaysilari transport sathi protokollariga mansub          TCP,UDP",
},
{
    title: "Keltirilgan protokollarning qaysilari transport sathi protokollariga mansub         TCP,UDP",
},
{
    title: "Keltirilgan vazifalardan qaysi biri umumiy kommutatsiyalash vazifasiga tegishli emas        axborotni indekslash",
},
{
    title: "OSI modelining fizik sathi qanday funktsiyalarni bajaradi       Elektr signallarini uzatish va qabul qilish",
},
{
    title: "OSI modeliningkanal sathi qaysi funktsiyalarni bajaradi       Аloqa kanalini va ma’lumotlarni uzatish muxitiga murojat qilishni boshqarish",
},
{
    title: "OSI modeliningtarmoq sathi qanday funktsiyalarni bajaradi           Ma’lumotlarni uzatish marshrutlarini optimalini aniqlash",
},
{
    title: "OSI modelining transport sathi qanday funktsiyalarni bajaradi           Ma’lumotlarni qabul qilish va uzatish jarayonida, ma’lumotlarni to’liq va to’g’ri uzatilishini nazorat qilish",
},
{
    title: "OSI modeliningseanslar sathi qanday funktsiyalarni bajaradi          Bog’lanish seansini yaratish, kuzatish, oxirigacha ta’minlash",
},
{
    title: "OSI modeliningtaqdimlash sathi qanday funktsiyalarni bajaradi               Ma’lumotlarni kodlash va shifrlash",
},
{
    title: "Аloqa kanaliga va uzatish muhitiga ulanishni boshqarish vazifalarini OSI modelining qaysi sathi bajaradi       Kanal sathi",
},
{
    title: "Ma’lumotlarni uzatish jarayonida ularni to’liq va to’g’ri uzatilishini nazorat qilish vazifalarini OSI modelining qaysi sathi bajaradi         Transport sathi",
},
{
    title: "Аloqa seansini hosil qilish, kuzatib turish va ohirigacha ta’minlab berish vazifalarini OSI modelining qaysi sathi bajaradi    Seanslar sathi",
},
{
    title: "Talab qilinadigan algoritmlar yordamida ma’lumotlarni kodlash va shifrlash vazifalarini OSI modelining qaysi sathi bajaradi          Taqdimlash sathi",
},
{
    title: "OSI modeliningamaliy sathi qanday funktsiyalarni bajaradi     Klient dasturlari bilan o’zaro muloqotda bo’lish",
},
{
    title: "Keltirilgan protokollarning qaysilari kanal sathi protokollariga mansub       Ethernet, FDDI",
},
{
    title: "Keltirilgan protokollarning qaysilari fizik sath protokollariga mansub           10Base-T, 100Base-TX",
},
{
    title: "Keltirilgan protokollarning qaysilari taqdimlash sathi protokollariga mansub              SNMP, Telnet",
},
{
    title: "Keltirilgan protokollarning qaysilari saenslar sathi protokollariga mansub            RPC, WSP",
},
{
    title: "Kompyuter bilan tashqi qurilma o’rtasida ma’lumotlarni uzatish paytida ularni to’gri uzatilganligi qanday tekshiriladi       paritet biti asosida",
},
{
    title: "Kompyuterdan tashqi qurilmaga ma’lumotlarni asinxron rejimda uzatayotganda bitta simvolga to’g’ri keladigan paketning uzunligi qanday bo’ladi             11 bit",
},
{
    title: "Keltirilgan qurilmalarning qaysi biri DCE bo’ladi        modem",
},
{
    title: "Keltirilgan qurilmalarning qaysi biri DTE bo’ladi           kompyuter va marshrutizator",
},
{
    title: "Keltirilgan tafsiflarning qaysilari, ham aloqa chiziqlariga, ham ma’lumotlarni uzatish usullariga tegishli tavsiflar hisoblanadi          o’tkazish qobiliyati va ishonchliligi",
},
{
    title: "UTP kabeli deganda qaysi kabel tushuniladi        o’ralma juftlik kabeli",
},
{
    title: "Modem kanday asosiy vazifani bajaradi          signallarni modulyatsiyalash - demodulyatsiyalash",
},
{
    title: "Keltirilgan standartlarning qaysi biri axborotni 57600 bit/s tezlikda qabul qiladi va uzata oladi              V.92",
},
{
    title: "Аnalog signallarni diskret modulyatsiyalash nimaga asoslanadi         Naykvist-Kotelnikovlarning akslanish nazariyasiga",
},
{
    title: "Kodlarning qaysi biri kuchlanishning to’rtta sathidan foydalanadi          2V1Q",
},
{
    title: "Kompyuterdan modemga ma’lumotlarni uzatish uchun interfeysning qaysi ulanish nuqtasidan foydalaniladi       TXD",
},
{
    title: "Modemdan kompyuterga ma’lumotlarni qabul qilish uchun interfeysning qaysi ulanish nuqtasidan foydalaniladi       RXD",
},
{
    title: "DCE qaysi signal orqali aloqa o’rnatilganligi haqidagi xabarni beradi            DSR",
},
{
    title: "Kompyuter bilan tashqi qurilma o’rtasidagi interfeys ishi qanday amalga oshirilgan          kontroller va drayver yordamida",
},
{
    title: "Keltirilgan modulyatsiyalarning qaysi biri analog modulyatsiyaga mansub          chastotali",
},
{
    title: "Keltirilgan modulyatsiyalarning qaysi biri diskret modulyatsiyaga mansub       amplituda-impulsli",
},
{
    title: "Internet tarmog’ida kommutatsiyalashning qaysi xili ishlatiladi            paketlarni kommutatsiyalash",
},
{
    title: "IP-manzili qanday maydonlardan iborat         Tarmoq manzilining maydoni, bog’lash manzilining maydoni",
},
{
    title: "Kompyuter tarmog’ining aktiv qurilmalari tarkibiga qaysi qurilmalar kiradi           Tarmoq adapteri,kontsentrator",
},
{
    title: "Kompyuter tarmog’ining passiv qurilmalari tarkibiga qaysi qurilmalar kiradi          Tarmoq kabeli, RJ-45 rozetkasi",
},
{
    title: "Ovozni sifatli uzatish uchun tovushli tebranishlar amplitudasini kvantlashda qanday chastota ishlatiladi     8000 Gts",
},
{
    title: "Raqamli telefon tarmoqlarida 64 Kbit/s o’tkazuvchanlik qobiliyati nimaga asosan tanlab oligan.          Kotelnikov-Naykvist teoremasi asosida",
},
{
    title: "MАC-adres qanday uzunlikka ega          48 bit",
},
{
    title: "IPv4 turidagi IP-adres qanday uzunlikka ega           32 bit",
},
{
    title: "192.190.21.254 adresi IP-adreslarningqaysi sinfiga tegishli          C",
},
{
    title: "B sinfidagi tarmoq tarkibiga nechta bog’lam bo’lishi mumkin            65536",
},
{
    title: "А sinfidagi tarmoq tarkibiga nechta bog’lam bo’lishi mumkin              16777216",
},
{
    title: "B sinfidagi tarmoq maskasi qanday qiymatga ega        255.255.0.0",
},
{
    title: "DTE qaysi signal yordamida o’zini ishlayotganligini va DCE aloqa kanaliga ulanishi mumkinligi haqidagi xabarni beradi      DCD",
},
{
    title: "Kabel standartlarining qaysi biri EIA/TIA-568A abbreviaturasiga ega         Аmerika standarti",
},
{
    title: "RS-232C/V.24 interfeysida ulagichning qaysi modifikatsiyasi ishlatilgan       9 va 25 ta ulanish nuqtalariga ega bo’lgani",
},
{
    title: "DTE va aloqa kanali o’rtasida uzatilayotgan signallarni o’zaro moslab uzatish qanday amalga oshiriladi        modulyatsiyalash va kodlash bilan",
},
{
    title: "Kompyuter tarmoqlarida ma’lumotlarni uzatishda, kodlash deganda nima tushuniladi          ma’lumotlarni aloqa kanallaridagi ta’sirlar natijasida paydo bo’ladigan xatoliklarni aniqlash va to’g’irlash mumkin bo’ladigan ko’rinishga o’zgartirish",
},
{
    title: "Modulyatsiyalashning diskret xili nimaga asoslangan        signallarni ham amplitudasi, ham vaqt bo’yicha diskretlash",
},
{
    title: "Tarmoq orqali uzluksiz signalni raqamli ko’rinishda uzatilayotganda vaqt oralig’ining kanday qiymatini e’tibor bilan saqlab turish kerak            125 mks",
},
{
    title: "C sinfidagi tarmoq tarkibiga nechta bog’lam bo’lishi mumkin            256",
},
{
    title: "А sinfidagi tarmoq maskasi qanday qiymatga ega       255.0.0.0",
},
{
    title: "C sinfidagi tarmoq maskasi qanday qiymatga ega     255.255.255.0",
},
{
    title: "512 ta bog’lamli tarmoqosti tarmoq maskasi qanday qiymatga ega         255.255.254.0",
},
{
    title: "Internet tarmog’i, kompyuter tarmoqlarining qaysi sinfiga mansub           global tarmoq",
},
{
    title: "Keltirilgan texnologiyalarning qaysi birlari global tarmoq texnologiyalariga mansub            ATM, TCP/IP",
},
{
    title: "MAN tarmoqlari nima uchun mo’ljallangan       Yirik shaxar axolisiga xizmat ko’rsatish uchun",
},
{
    title: "Qaysi global tarmoqlarda paketlarni marshrutlashning har-xilidan foydalanilgan         Frame relay va АTM",
},
{
    title: "Xizmatlarni boshqarish markazlarida qanday axborotlar saqlanadi         Foydalanuvchilar uchun mo’ljallangan axborot, xizmat ko’rsatish uchun mo’ljallangan axborot",
},
{
    title: "Аloqa kanallari orqali ko’p sonli foydalanuvchilarning qurilmalaridan kelayotgan axborot oqimlarini yig’ib berish vazifasini qan-day tarmoq bajaradi          Ulanish tarmog’i",
},
{
    title: "Ulanish tarmoqlarini bog’lashni va yuqori tezlikdagi kanallar orqali trafik tranzitini ta’minlashni, qaysi tarmok amalga oshiradi           Magistral tarmoq",
},
{
    title: "Mobil terminallari qaysi qurilma bilan o'zaro bog'lanib tarmoqqa ulanishni amalga oshiradi?         A. Baza stansiyasi",
},
{
    title: "2G va 3G mobil tarmoqlarining farqi nimada?     A. Chastota diapozoni, taqdim etadigan xizmatlari, mobil terminallari, tarmoq elementlari",
},
{
    title: "1G, 2G, 3G, 4G, 5G tarmoqlaridagi 'G' harfining ma'nisi nima?          A. 'G'-inglizcha Generation so'zining bosh harfidan olingan bo'lib, avlod degani",
},
{
    title: "5G tarmoqlarining ma'lumot uzatish tezligi qancha?   A. 1 Gbit/s dan katta",
},
{
    title: "LTE texnologiyalari qaysi avlodga tegishli?        A. 4G",
},
{
    title: "PON so'zining ma'nosini toping.       A. Passiv opkit tarmoq",
},
{
    title: "Kirish tarmog’i - tarmoqning qaysi qismiga to'g'ri keladi?         A. Stansiyadan foydalanuvchining uyigacha bo'lgan qismi",
},
{
    title: "3G texnologiyasi asosida keng polosali abonent tarmog'ini qurish mumkinmi?        A. Ha",
},
{
    title: "xDSL texnologiyasi asosida lokal kompyuter tarmoqlarini yuqori tezlikli Internetga ulash mumkinmi?      A. Ha",
},
{
    title: "Keng polosali abonent tarmog'i texnologiyalarini ko'rsating.         A. xDSL, PON, 3G, 4G, Sputnik",
},
{
    title: "Qanday qurilmalar orqali foydalanuvchilar tarmoq resurslaridan foydalanishi mumkin?       A. Kompyuter, smartfon va oxirgi qurilmalar",
},
{
    title: "Uzatish qurilmalari orqali uzatiladigan ma'lumot birligi nima?         A. Oqimlar",
},
{
    title: "Uzatish muhitlarida oxirgi yillarda eng ko'p foydalanilayotgan muhitini ko'rsating.       A. Optik muhitlar",
},
{
    title: "PDH texnologiyasining kengaytirilgan ko'rinishini ko'rsating     A. Plesiochronous digital hierarchy",
},
{
    title: "SDH uzatish texnologiyasida qanday uzatish tizimlari mavjud?      A. STM",
},
{
    title: "STM-1 tizimining uzatish tezligi qancha?     A. 155 Mbit/s",
},
{
    title: "DWDM texnologiyasi asosida kanallar qanday parametrga ko'ra multipleksorlanadi?        A. To'lqin uzunligiga ko'ra",
},
{
    title: "SONET tizimi bilan SDH tizimi bir xil imkoniyatli texnologiyalarmi?     A. Deyarli bir xil",
},
{
    title: "SDH uzatish tizimlari tarmoqning qaysi qismida foydalaniladi?     A. Shahar tarmoqlarida",
},
{
    title: "Global tarmoqlarni qurishda DWDM texnologiyasi qanday vazifani bajaradi?       A. Mamlakatlar va shaharlarni o'zaro bir biri bilan bog'lashni ta'minlaydi.",
},
{
    title: "Multipleksorlash qanday ma'noni anglatadi.     A. Zichlashtirish",
},
{
    title: "Klient-server arxitekturasi deganda nimani tushunasiz?      A. Kompyuter va serverni o'zaro bog'lanishi va ma'lumot almashish jarayonini taqdim etuvchi arxitektura",
},
{
    title: "Server qanday vazifani amalga oshiradi?      A. Serverga ulangan kompyuterlarni o'zaro bog'lanish, resurs almashish va Internet resurslarida foydalanish imkoniyatini ta'minlaydi",
},
{
    title: "Klient-server arxitekturasi qanday usullarda quriladi?    A. Klient-server va Peer-to-peer arxitekturalariga asosan",
},
{
    title: "Ilova nima?       A. Foydalanuvchilarni kompyuter va tarmoq resurslaridan foydalanish imkoniyatini taqdim etuvchi dasturlar.",
},
{
    title: "Amaliy pog’ona protokollarini ko'rsating.    A. SMTP, DNS",
},
{
    title: "Klient va server qurilmalari qanday topologiyalarda bog'lanishi mumkin?      A. Yulduz, nuqta-nuqta, halqa, shina",
},
{
    title: "Klient va server qanday ko'rinishda bog'lanishni amalga oshiradi?         A. Dastlab klient serverga so'rov jo'natadi va server so'rovga ishlov berib klientga javob qaytaradi.",
},
{
    title: "Smartfon qurilmalari bir vaqtda ham klient ham server bo'la oladimi?         A. Ha, foydalanilayotgan sath va ilovaga muvofiq",
},
{
    title: "Server vazifasini bajarish uchun qanday shartlar topilishi kerak?            A. So'rovlarga ishlov berish va javob qaytarish, resurslarga ega bo'lish va doim faol bo'lish",
},
{
    title: "Peer-to-Peer arxitekturasiga asoslangan saytni tanlang?    A. Bit-torrent",
},
{
    title: "DNS qanday tizim?          A. Domen nomalar tizimi",
},
{
    title: "DNS qanday maqsadlar uchun foydalaniladi?   A. Domen nomini IP adresga yoki aksincha o’zgartiradi",
},
{
    title: "Quyida keltirilgan qaysi domen nomlari to'g'ri ko'rsatilgan?        A. Barcha domenlar to'g'ri ko'rsatilgan",
},
{
    title: "DNS tizimi IP adresini nomga va nomni IP adresga o'zgartiradi, masalan: google.com nomini 173.194.73.94 adresiga o'zgartiradi. Shu holat to'g'rimi?        A. Ha",
},
{
    title: ".uz bilan tugagan barcha domenlar faqat O'zbekiston hududida foydalanish mumkinligini anglatadimi?          A. Yoq",
},
{
    title: "Har bir domen nomiga bitta IP adres mos keladimi?       A. Bittadan ortiq IP adress bo'lishi mumkin",
},
{
    title: "DNS so'rovlariga qaysi qurilma ishlov beradi?      A. DNS serveri.",
},
{
    title: "ICMP nima maqsadda foydalaniladi?        A. Ikki qurilmadagi IP sathlari o'rtasidagi aloqani ta'minlaydi va boshqaradi",
},
{
    title: "Xostlar orasida ICMP boshqaruv xabarlari qanday shakllarda almashadi?          A. So'rov-javob shaklida",
},
{
    title: "ICMP qisqartmasining quyida kengaytirib yozilgan shaklini ko'rsating.              A. Internet control message protocol",
},
{
    title: "ICMP yuzaga kelgan xatoliklar haqida xabardor etadimi?       A. Ha",
},
{
    title: "ICMP xabarlari IP paketga joylashtiriladimi?        A. Ha",
},
{
    title: "ICMP xabari nechi qismdan tashkil topadi?       A. 2 qismdan: Sarlovha va ma'lumot",
},
{
    title: "SNMP qanday ma’noni anglatadi?        A. Tarmoqni boshqarish sathi",
},
{
    title: "SNMP protokoli OSI modelining qaysi pog'onasida ishlatiladi?          A. Amaliy pog'ona",
},
{
    title: "SNMP uchun qaysi port belgilangan?        A. UDP 161 va 162 port",
},
{
    title: "SNMP so'rov va javob shakli faqat bitta portdan amalga oshiriladimi?           A. Yoq",
},
{
    title: "SNMP protokolining asosiy vazifalari nimadan iborat?    A. Tarmoqni monitoringni uchun tarmoqni boshqarishda ishlatiladi, IP tarmoqlariga ulangan qurilmani boshqarish haqidagi ma'lumotlarni tashkil etish va to'plash uchun standart sath hisbolanadi",
},
{
    title: "Simsiz sensor tarmoqlari deganda nimani tushunasiz?      A. Atrof muhitdagi o’zgarishlarni monitoring qiluvchi va o'zgarishlarni qayt etuvchi qurilmalar",
},
{
    title: "Sensor tarmoqlari elementlariga misol keltiring.    A. Aqlli soat, EKG elektrod, gas sensori",
},
{
    title: "Sensor qurilmalarining asosiy vazifasi nimadan iborat?   A. Atrof muhitdagi o'zgarishlarni monitoring qilish va kontroller qurilmasiga o'zgarishlarni jo'natish",
},
{
    title: "Hozirda qaysi sohalarda IoT texnologiyasidan foydalaniladi?       A. Barcha javob to'g'ri",
},
{
    title: "Sensor qurilmalarida qanday muammolar mavjud?      A. Barcha javob to'g'ri",
},
{
    title: "Sensor tarmoqlari uchun maxsus operatsion tizim talab etiladimi?          A. Ha",
},
{
    title: "Sensor tarmog'i necha qismdan iborat?           A. 3",
},
{
    title: "Sensor qurilmalarni boshqaruvchi qurilma qanday nomlanadi?    A. Kontroller",
},
{
    title: "Nima sababdan sensor tarmoqlarining resurslari cheklangan?      A. Barcha javob to'g'ri",
},
{
    title: "Sensor qurilmalarini taqdim etadigan afzalliklari nimadan iborat?        A. Barcha javob to'g'ri",
},
{
    title: "Nima sababdan sensor qurilmalarida ma'lumot almashish tezligi past?        A. O'kazuvchanlik qobiliyati cheklangan",
},
{
    title: "Sensor tarmoqlarida qanday marshrutlash protokollaridan foydalaniladi?              A. OLSR, MRP",
},
{
    title: "Sensor tarmoqlarini qurishda qanday tarmoq topologiyalaridan foydalaniladi?        A. Barcha javob to'g'ri",
},
{
    title: "Sensor tarmoqlarida axborot xavfsizligi darajasi qay darajada ta'minlangan?          A. Talab darajasida emas",
},
{
    title: "Sensor tarmoqlarini talab darajasida takomillashtirish uchun nimalarga ahamiyat berish lozim?      A. Barcha javob to'g'ri",
},
{
    title: "Tarmoq xavfsizligi qanday vositalar orqali ta'minlanadi?     A. Apparat va dasturiy ta'minot vositalari orqali",
},
{
    title: "Tarmoq pog'onasida kimlar axborot xavfsizligini himoyalashga mas'ul?        A. Barcha javob to'g'ri",
},
{
    title: "Internet foydalanuvchilari uchun xavfsizlik masalalari to’liq kafolatlanganmi?           A. Kafolatlanmagan",
},
{
    title: "Autentifikatsiya nima maqsadda ishlatiladi?     A. Foydalanuvchini identifikatsiya qilish uchun",
},
{
    title: "Internet saytlarida mavjud resurslardan foydalanishga kim ruxsat beradi?           A. Administrator",
},
{
    title: "Axborotlarni maxfiyligi qanday ta'minlanadi?      A. Shifrlash algoritmlari orqali",
},
{
    title: "Foydalanuvchilar axborot xavfsizlini buzulishida aybdor bo'lishlari mumkinmi?               A. Ha",
},
{
    title: "Nima uchun axborot xavfsizligi borgan sari dolzarb bo'lib bormoqda?            A. Axborotlar - intellektual mulk darajasiga etib kelmoqda",
},
{
    title: "Qanday muhitlarda axborot xavfsizligi dajarasi yuqoriroq ta’minlangan?        A. Simli va optik",
},
{
    title: "Ilovalar axborot xavfsizlikni ta'minlashi mumkinmi?    A. Ha",
},
{
    title: "Kompyuter tarmoqlarida xavfsizlikni ta'minlash uchun dastlab nima ishlab chiqilishi lozim.      A. Xavfsizlik siyosati",
},
{
    title: "Konvergentsiya so'zining ma'nosini ko'rsating.      A. Yaqinlashish",
},
{
    title: "Qanday holatlarda konvergentsiya jarayoni ta’minlanadi?     A. Turli qurilmalar va dasturlarni bitta muhitda ishlash natijasida",
},
{
    title: "Konvergent tarmoqlariga misol keltiring.       A. Bluetooth, WiFi va internetga ulangan qurilmalarni o'zaro ma'lumot almashishi",
},
{
    title: "Turli tarmoqlar va ularning formatini moslashtirib beruvchi qurilmani ko'rsating         A. Shlyuz",
},
{
    title: "Konvergent tarmoqlarining elementlarini ko'rsating     A. Barcha javob to'g'ri",
},
{
    title: "Konvergent tarmoqlariga o'tishning asosiy sababi...     A. Barcha javob to'g'ri",
},
{
    title: "Konvergentsiyaning kamchilik tomonlarini ko'rsating    A. Barcha javob to'g'ri",
},
{
    title: "Tarmoq operatsion tizimiga ta'rif bering.        A. Barcha javob to'g'ri",
},
{
    title: "Windows server tarmoq operatsion tizimi bo'la oladimi?     A. Ha",
},
{
    title: "Windows serverni qaysi tashkilot ishlab chiqqan.       A. Microsoft",
},
{
    title: "IoT qanday ma'noni anglatadi        A. Internet buyumlar",
},
{
    title: "Nima uchun IoT texnologiyasi ishlab chiqildi?    A. Barcha javob to'g'ri",
},
{
    title: "Bulutli texnologiya qanday imkoniyatlarni taqdim etadi?  A. Barcha javob to'g'ri",
},
{
    title: "Tumanli texnologiya qanday imkoniyatlarni taqdim etadi?    A. Barcha javob to'g'ri",
},
{
    title: "Ko'p foydalaniladagin tarmoq operatsion tizimlarining nechta asosiy turi bor?          A. 5",
},
{
    title: "Bulutli texnologiyada axborot xavfsizligi doimiy kafolatlanganmi?             A. Yoq",
},
{
    title: "Zamonaviy kompyuter tarmoqlari bilan an’anaviy kompyuter tarmoqlarini qanday farqlari bor?        A. Imkoniyatlari va sig'imlari kengaytirilgan",
},
{
    title: "Tumanli va bulutli texnologiyalarning farqini ko’rsating.       A. Tumanli kichik va bulutli katta hududdagi tarmoqlarni qamrab oladi",
},
{
    title: "Qaysi tashkilotlar xalqaro standartlashtirish tashkilotlari hisoblanadi?            A. ISO, ITU, IEEE",
},
{
    title: "Intenet tarmog’ini kim ishlab chiqqan?           A. ARPA",
},
{
    title: "Quyida keltirilgan kompyuter tarmoqlarining qaysi biri avval paydo bo’lgan?          A. global kompyuter tarmoqlari",
},
{
    title: "Ring topologiya qanday tuzilishda bo’ladi?      A. Xalqasimon",
},
{
    title: "Fizik joylashuvidan qat’iy nazar bulutli texnologiyalardan foydalanish mumkinmi?             A. Ha",
},
{
    title: "Bulutli texnologiyalarning afzalliklari nimada?      A. Arzon, samarali, moslashuvchan, qulay, kengayuvchan",
},
{
    title: "Qaysi topologiya birgalikda foydalanilmaydigan muhitni qo’llamasligi mumkin?         A. To’liq bog’lanishli",
},
{
    title: "Topologiyalardan qaysi biri ishonchliligi yuqori hisoblanadi?          A. Yulduz",
},
{
    title: "MAC sathi qanday vazifani bajaradi?      A. Uzatish muhitiga murojaat qilishni boshqarish",
},
{
    title: "Qanday texnologiyalar bulutli texnologiyalarning asosi bo’la oladi?        A. Infratuzilma, platforma, dasturiy ta’minot",
},
{
    title: "IoT qurilmasi deganda oldin internetga ulanishi narzarda tutilmagan qurilmalar ham kiradimi?       A. Ha",
},
{
    title: "O’ralma juftlik kabeli simlarini, uning konnektorlariga ulashning necha xil variantlari mavjud?           A. 2",
},
{
    title: "Ethernet tarmoqlarida uzatish muhitiga murojaat qilishning qaysi usuli qo’llaniladi?	    A. CSMA/CD",
},
{
    title: "Sensor tarmoqlarida tugun qurilma qanday vazifani bajaradi?        A. Sensordan kelayotgan ma’lumotlari tarmoqqa ulangan asosiy qurilmaga uzatish vazifasini bajaradi",
},
{
    title: "Optik tolali Ethernet tarmog’ining maksimal uzunligi qanday?	         A. 2740 m",
},
{
    title: "100Base-TX xarakteristikasi qaysi texnologiyaga tegishli?	          A. Fast Ethernet",
},
{
    title: "Fast Ethernet texnologiyasi xarakteristikasilari qaysi komitet tarkibida ishlab chiqilgan?	          A. 802.3",
},
{
    title: "Ethernet texnologiyasida koaksial kabelining ma’lumotlarni uzatish tezligi qanday?	           A. 10 Mbit/s",
},
{
    title: "Fast Ethernet texnologiyasida o’ralma juftlik kabelining ma’lumotlarni uzatish tezligi qanday?         A. 100 Mbit/s",
},
{
    title: "Lokal tarmoqlarida keng tarqalgan topologiya turi qaysi?	        A. Yulduz",
},
{
    title: "100Base-TX xarakteristikasi qaysi texnologiyaga tegishli?      A. Fast Ethernet",
},
{
    title: "1000Base-SX xarakteristikasi qaysi texnologiyaga tegishli?       A. Gigabit Ethernet",
},
{
    title: "Fast Ethernet texnologiyasida qaysi turdagi kabel tizimlaridan foydalanilgan?        A. ko’pmodali optik tolali, 5 kategoriyali o’ralma juftlik, 3 kategoriyali o’ralma juftlik",
},
{
    title: "MАC adress OSI modelining qaysi sathiga tegishli? 	    A. kanal sathiga",
},
{
    title: "Ethernet texnologiyasi nechta standartga ega?   A. 4",
},
{
    title: "Fast Ethernet texnologiyasi nechta xarakteristikaga ega?       A. 3",
},
{
    title: "Umumiy shina topologiyali lokal tarmoqlarda kontsentratorlar qanday funktsiyani bajaradi?         A. Kompyuter tomonidan uzatilayotgan ma’lumotni barcha kompyuterga yo’naltiradi",
},
{
    title: "Simsiz tarmoqlar standartlari qaysi komitet tarkibida ishlab chiqilmoqda?         A. 802.11",
},
{
    title: "Xozirgi paytda ko’p ishlatiladigan, 802.11 standartiga tegishli xarakteristikani ko’rsating         A. a, b, g",
},
{
    title: "802.11 xarakteristikasi simsiz lokal tarmog’i diametrining chegaralari qanday?            A. 100 - 300 m",
},
{
    title: "Tarmoqni fizik strukturalashda qaysi qurilma ishlatiladi?       A. kontsentrator",
},
{
    title: "Qaysi qurilma tarmoqning mantiqiy strukturasini o’zgartirishi mumkin?       A. ko’prik, marshrutizator, kommutator va shlyuz",
},
{
    title: "Kompyuter tarmog’ining fizik strukturalash nima maqsadda amalga oshiriladi?       A. Tarmoq diametrini oshirish uchun",
},
{
    title: "Kompyuter tarmog’ining mantiqiy strukturalash nima maqsadda amalga oshiriladi?       A. Trafikni lokallashtirish uchun",
},
{
    title: "Kommutator qurilmasi ko’prik qurilmasidan nimasi bilan farq qiladi?         A. Kadrlarni parallel qayta ishlashda",
},
{
    title: "OSI modelida nechta sath mavjud?      A. 7",
},
{
    title: "OSI modelining to’rtinchi sathi qanday nomlanadi?     A. Transport sathi",
},
{
    title: "OSI modelining beshinchi sathi qanday nomlanadi?    A. Seanslar  sathi",
},
{
    title: "OSI modelining birinchi sathi qanday nomlanadi?     A. Fizik sath",
},
{
    title: "OSI modelining ikkinchi sathi qanday nomlanadi?      A. Kanal  sathi",
},
{
    title: "OSI modelining uchinchi sathi qanday nomlanadi?      A. Tarmoq  sathi",
},
{
    title: "OSI modelining oltinchi sathi qanday nomlanadi?      A. Taqdimlash  sathi",
},
{
    title: "OSI modelining ettinchi sathi qanday nomlanadi?    A. Аmaliy sath",
},
{
    title: "OSI modelining qaysi sathlari tarmoqqa bog’liq sathlar hisoblanadi?        A. fizik, kanal va tarmoq sathlari",
},
{
    title: "OSI modelining tarmoq sathi vazifalari keltirilgan qurilmalarning qaysi birida bajariladi?       A. Marshrutizator",
},
{
    title: "OSI modelining kanal sathi orqali uzatiladigan ma’lumotlarning birligi qanday nomlanadi?      A. Kadr",
},
{
    title: "OSI modelining tarmoq sathi orqali uzatiladigan ma’lumotlarning birligi qanday nomlanadi?        A. Paket",
},
{
    title: "Еlektr signallarini qabul qilish va uzatish vazifalarini OSI modelining qaysi sathi bajaradi?          A. Fizik sath",
},
{
    title: "Ma’lumotlarni uzatishning optimal marshrutlarini aniqlash vazifalarini OSI modelining qaysi sathi bajaradi?     A. Tarmoq  sathi",
},
{
    title: "Foydalanuvchi dasturlari bilan o’zaro muloqot vazifalarini OSI modelining qaysi sathi bajaradi?     A. Аmaliy sath",
},
{
    title: "Keltirilgan sathlarning qaysilari tarmoq sathi sathlariga mansub?        A. IP, IPX",
},
{
    title: "Keltirilgan sathlarning qaysilari transport sathi sathlariga mansub?        A. TCP, UDP",
},
{
    title: "Keltirilgan sathlarning qaysilari amaliy sathi sathlariga mansub?         A. DNS, FTP",
},
{
    title: "OSI modelining fizik sathi qanday vazifalarni bajaradi?      A. Elektr signallarini uzatish va qabul qilish",
},
{
    title: "OSI modelining kanal sathi qaysi vazifalarni bajaradi?   A. IP paketlarni kadrga o’zgartirish va fizik sathga uzatish",
},
{
    title: "OSI modelining tarmoq sathi qanday vazifalarni bajaradi?     A. Segmentlarni paketlash, adreslash va marshrutlash",
},
{
    title: "MАС-adres qanday uzunlikka ega?      A. 48 bit",
},
{
    title: "IPv4 turidagi IP-adres qanday uzunlikka ega?      A. 32 bit",
},
{
    title: "192.190.21.254 adresi   IP-adreslarning qaysi sinfiga tegishli?       A. C",
},
{
    title: "B sinfidagi tarmoq tarkibiga nechta bog’lam bo’lishi mumkin?         A. 65536",
},
{
    title: "А  sinfidagi tarmoq tarkibiga nechta bog’lam bo’lishi mumkin?        A. 16777216",
},
{
    title: "B sinfidagi tarmoq maskasi qanday qiymatga ega?     A. 255.255.0.0",
},
{
    title: "Internet tarmog’i, kompyuter tarmoqlarining qaysi sinfiga mansub?      A. global tarmoq",
},
{
    title: "Keltirilgan texnologiyalarning qaysi birlari global tarmoq texnologiyalariga mansub?      A. GSM, CDMA, GPRS",
},
{
    title: "MAN tarmog’i qanday hududni qamram oladi?      A. Shahar",
},
{
    title: "1980-1985 yillarda dastlabki lokal kompyuter tarmoqlari hisoblangan qanday lokal kompyuter tarmoqlari texnologiyalari ishlab chiqildi?       A. Ethernet, ArcNet, Token Ring, Token Bus va FDDI",
},
{
    title: "Bulutli texnologiyalarning kamchiliklarini ko’rsating?    A. DoS hujumga uchrash mumkin, API himoyalanmagan, ma’lumotlarni ruxsatsiz ko’chirish mumkin",
},
{
    title: "Tarmoq ilovalari qanday maqsadlar uchun xizmat qiladi?     A. Foydalanuvchilarga, kompyuter tarmog'i tomonidan ko'rsatilishi mumkin bo'lgan turli xil xizmatlarni amalga oshiruvchi dasturlar tushuniladi.",
},
{
    title: "5G tarmoqlari va xizmatlaridan hozirgi kunda joriy etilib ulardan to’liq foydalanilyaptimi?         A. Yoq, sababi 5G standarti tarmoqqa to’liq tadbiq etilmadi",
},
{
    title: "TCP/IP steki nechta sathga ajratilgan?     A. To’rtta sathga",
},
{
    title: "FTP (File Transfer Sath) qanday sath?      A. Fayllarni uzatish sathi",
},
{
    title: "Telnet qanday sath?      A. Terminalni emulasiya qilish sathi",
},
{
    title: "ЅMTP (Simple Mail Transfer Protocol) qanday sath?     A. Elektron pochtani uzatishning oddiy sathi",
},
{
    title: "HTTP (Hyper Text Transfer Protocol) qanday vazifani bajarish uchun mo'ljallangan sath?      A. Gipermatnni uzatish sathi",
},
{
    title: "IP-sath qanday vazifani bajaradi?        A. Paketlarni tarmoqlar o'rtasida bir marshrutizatordan boshqasiga, to paket, u yuborilgan tarmoqqa etib borguncha xarakatlantirish vazifasini bajaradi.",
},
{
    title: "IP-paket qanday qismlardan iborat bo'ladi?     A. Sarlavha va ma'lumot",
},
{
    title: "IP-sathining funktsional jihatdan sodda yoki murakkabligi nimalarga bog’liq?      A. IP-paketning sarlavhasi qay darajada sodda yoki murakkab ekanligiga bog'liq",
},
{
    title: "IPv4-paket sarlavhasining uzunligi necha bitdan iborat?     A. 4 bitdan",
},
{
    title: "Simsiz MAN tarmog’lari qanday texnologiyalarda quriladi?    A. WiMAX va LTE",
},
{
    title: "IMS kommutator qanday vazifani baradi?        A. Shahar tarmoqlari turli tarmoqlar bir-biri bilan bog’lanish jarayonini nazorat qiladi.",
},
{
    title: "Qanday tarmoqlar yirik lokal tarmoqlarni birlashtirish uchun foydalanilad?       A. Territorial magistral tarmoq",
},
{
    title: "Markaziy local tarmoqlarni uzoqdan turib ulash server?      A. RAS",
},
{
    title: "ATM tehnologiyasining uzatish tezligi necha bit/sek larga yetkazilgan       A. 2-10 bit/sek",
},
{
    title: "CLI interfeysidan foydalanib tarmoq elementlarini boshqarish mumkinmi?       A. Ha",
},
{
    title: "CLI va SNMP sathining asosiy farqi nimada?     A. SNMPning imkoniyatlari kengroq",
},
{
    title: "Ichki shlyuz qanday sathlar bilan ishlaydi?   A. RIP, IBRP, OSPF, IS-IS",
},
{
    title: "IPv6 sathidan hozirgi kun tarmoq qurilmalarida foydalanish imkoniyati mavjudmi?     A. Ha, agar qurilma va dasturiy ta’minot qo’llab quvvatlasa",
},
{
    title: "OSI modelining amaliy sathi qanday funktsiyalarni bajaradi?        A. Tarmoq bilan foydalanuvchi dasturlari o’rtasida aloqalarni ta’minlaydi",
},
{
    title: "Tarmoqlarni bog’lash va yuqori tezliklarda oqimlarni uzatish uchun tranzit vazifani qaysi tarmoq bajaradi?    A. Magistral tarmoq",
},
{
    title: "C sinfidagi tarmoq tarkibiga nechta tugun bo’lishi mumkin?      A. 256",
},
{
    title: "А sinfidagi tarmoq maskasi qanday qiymatga ega?    A. 255.0.0.0",
},
{
    title: "C sinfidagi tarmoq maskasi qanday qiymatga ega?    A. 255.255.255.0",
},
{
    title: "512 ta tugunli tarmoqosti tarmoq maskasi qanday qiymatga ega?       A. 255.255.254.0",
},
{
    title: "Internet tarmog’ida kommutatsiyalashning qaysi xili ishlatiladi?         A. paketlarni kommutatsiyalash",
},
{
    title: "UTP kabeli deganda qaysi kabel tushuniladi?     A. o’ralma juftlik kabeli",
},
{
    title: "Modem kanday asosiy vazifani bajaradi?    A. signallarni modulyatsiyalash - demodulyatsiyalash",
},
{
    title: "Keltirilgan qurilmalarning qaysi biri DCE (data circuit-terminating equipment) bo’ladi?       A. modem",
},
{
    title: "Keltirilgan qurilmalarning qaysi biri DTE (data terminal equipment) bo’ladi?     A. kompyuter va marshrutizator",
},
{
    title: "Keltirilgan sathlarning qaysilari fizik sath sathlariga mansub?       A. 10Base-T, 100Base-T",
},
{
    title: "Keltirilgan sathlarning qaysilari taqdimlash sathi sathlariga mansub?         A. SNMP, Telnet",
},
{
    title: "Keltirilgan sathlarning qaysilari seanslar sathi sathlariga mansub?           A. RPC, WSP",
},
{
    title: "OSI modelining transport sathi qanday funktsiyalarni bajaradi?        A. Simentlarni qabul qilish va uzatish jarayonida ishonchli va kafolatsiz xizmatlarni taqdim etadi",
},
{
    title: "OSI modelining seanslar sathi qanday funktsiyalarni bajaradi        A. Bog’lanish seansini hosil qilish, boshqarish va yakunida uzish",
},
{
    title: "OSI modelining taqdimlash sathi qanday funktsiyalarni bajaradi        A. Ma’lumotlarni kodlash va shifrlash",
},
{
    title: "Аloqa kanaliga va uzatish muhitiga ulanishni boshqarish vazifalarini OSI modelining qaysi sathi bajaradi?         A. Kanal sathi",
},
{
    title: "Sigmentlarni tarmoqqa ishonchli va kafolatsiz uzatish jarayoni OSI modelining qaysi sathi bajaradi?       A. Transport sathi",
},
{
    title: "Аloqa seansini hosil qilish, nazorat qilish va tugatish vazifasi OSI modelining qaysi sathi bajaradi?        A. Seanslar sathi",
},
{
    title: "Mobil aloqa tarmoqlaridagi “Mobil” tushunchasi nimani anglatadi?         A. Ko'chib yurish ma'nosini",
},
{
    title: "Mobil terminallari qaysi qurilma bilan o'zaro bog'lanib tarmoqqa ulanishni amalga oshiradi?       A. Baza stansiyasi",
},
{
    title: "2G va 3G mobil tarmoqlarining farqi nimada?     A. Chastota diapozoni, taqdim etadigan xizmatlari, mobil terminallari, tarmoq elementlari",
},
{
    title: "1G, 2G, 3G, 4G, 5G tarmoqlaridagi 'G' harfining ma'nisi nima?        A. 'G'-inglizcha Generation so'zining bosh harfidan olingan bo'lib, avlod degani",
},
{
    title: "5G tarmoqlarining ma'lumot uzatish tezligi qancha?    A. 1 Gbit/s dan katta",
},
{
    title: "LTE texnologiyalari qaysi avlodga tegishli?         A. 4G",
},
{
    title: "PON so'zining ma'nosini toping.      A. Passiv opkit tarmoq",
},
{
    title: "Kirish tarmog’i - tarmoqning qaysi qismiga to'g'ri keladi?         A. Stansiyadan foydalanuvchining uyigacha bo'lgan qismi",
},
{
    title: "3G texnologiyasi asosida keng polosali abonent tarmog'ini qurish mumkinmi?          A. Ha",
},
{
    title: "xDSL texnologiyasi asosida lokal kompyuter tarmoqlarini yuqori tezlikli Internetga ulash mumkinmi?          A. Ha",
},
{
    title: "Keng polosali abonent tarmog'i texnologiyalarini ko'rsating.           A. xDSL, PON, 3G, 4G, Sputnik",
},
{
    title: "Qanday qurilmalar orqali foydalanuvchilar tarmoq resurslaridan foydalanishi mumkin?       A. Kompyuter, smartfon va oxirgi qurilmalar",
},
{
    title: "Uzatish qurilmalari orqali uzatiladigan ma'lumot birligi nima?         A. Oqimlar",
},
{
    title: "Uzatish muhitlarida oxirgi yillarda eng ko'p foydalanilayotgan muhitini ko'rsating.        A. Optik muhitlar",
},
{
    title: "PDH texnologiyasining kengaytirilgan ko'rinishini ko'rsating       A. Plesiochronous digital hierarchy",
},
{
    title: "SDH uzatish texnologiyasida qanday uzatish tizimlari mavjud?        A. STM",
},
{
    title: "STM-1 tizimining uzatish tezligi qancha?      A. 155 Mbit/s",
},
{
    title: "DWDM texnologiyasi asosida kanallar qanday parametrga ko'ra multipleksorlanadi?        A. To'lqin uzunligiga ko'ra",
},
{
    title: "SONET tizimi bilan SDH tizimi bir xil imkoniyatli texnologiyalarmi?         A. Deyarli bir xil",
},
{
    title: "SDH uzatish tizimlari tarmoqning qaysi qismida foydalaniladi?        A. Shahar tarmoqlarida",
},
{
    title: "Global tarmoqlarni qurishda DWDM texnologiyasi qanday vazifani bajaradi?          A. Mamlakatlar va shaharlarni o'zaro bir biri bilan bog'lashni ta'minlaydi.",
},
{
    title: "Multipleksorlash qanday ma'noni anglatadi.        A. Zichlashtirish",
},
{
    title: "Klient-server arxitekturasi deganda nimani tushunasiz?      A. Kompyuter va serverni o'zaro bog'lanishi va ma'lumot almashish jarayonini taqdim etuvchi arxitektura",
},
{
    title: "Server qanday vazifani amalga oshiradi?        A. Serverga ulangan kompyuterlarni o'zaro bog'lanish, resurs almashish va Internet resurslarida foydalanish imkoniyatini ta'minlaydi",
},
{
    title: "Klient-server arxitekturasi qanday usullarda quriladi?      A. Klient-server va Peer-to-peer arxitekturalariga asosan",
},
{
    title: "Ilova nima?       A. Foydalanuvchilarni kompyuter va tarmoq resurslaridan foydalanish imkoniyatini taqdim etuvchi dasturlar.",
},
{
    title: "Amaliy pog’ona sathlarini ko'rsating.       A. SMTP, DNS",
},
{
    title: "Klient va server qurilmalari qanday topologiyalarda bog'lanishi mumkin?        A. Yulduz, nuqta-nuqta, halqa, shina",
},
{
    title: "Klient va server qanday ko'rinishda bog'lanishni amalga oshiradi?        A. Dastlab klient serverga so'rov jo'natadi va server so'rovga ishlov berib klientga javob qaytaradi.",
},
{
    title: "Smartfon qurilmalari bir vaqtda ham klient ham server bo'la oladimi?         A. Ha, foydalanilayotgan sath va ilovaga muvofiq",
},
{
    title: "Server vazifasini bajarish uchun qanday shartlar topilishi kerak?         A. So'rovlarga ishlov berish va javob qaytarish, resurslarga ega bo'lish va doim faol bo'lish",
},
{
    title: "Peer-to-Peer arxitekturasiga asoslangan saytini tanlang?      A. Bit-torrent",
},
{
    title: "DNS qanday tizim?        A. Domen nomalar tizimi",
},
{
    title: "DNS qanday maqsadlar uchun foydalaniladi?       A. Domen nomini IP adresga yoki aksincha o’zgartiradi",
},
{
    title: "Quyida keltirilgan qaysi domen nomlari to'g'ri ko'rsatilgan?          A. Barcha domenlar to'g'ri ko'rsatilgan",
},
{
    title: "DNS tizimi IP adresini nomga va nomni IP adresga o'zgartiradi, masalan: google.com nomini 173.194.73.94 adresiga o'zgartiradi. Shu holat to'g'rimi?       A. Ha",
},
{
    title: ".uz bilan tugagan barcha domenlar faqat O'zbekiston hududida foydalanish mumkinligini anglatadimi?          A. Yoq",
},
{
    title: "Har bir domen nomiga bitta IP adres mos keladimi?     A. Bittadan ortiq IP adress bo'lishi mumkin",
},
{
    title: "DNS so'rovlariga qaysi qurilma ishlov beradi?      A. DNS serveri.",
},
{
    title: "ICMP nima maqsadda foydalaniladi?       A. Ikki qurilmadagi IP sathlari o'rtasidagi aloqani ta'minlaydi va boshqaradi",
},
{
    title: "Xostlar orasida ICMP boshqaruv xabarlari qanday shakllarda almashadi?          A. So'rov-javob shaklida",
},
{
    title: "ICMP qisqartmasining quyida kengaytirib yozilgan shaklini ko'rsating.         A. Internet control message protocol",
},
{
    title: "ICMP yuzaga kelgan xatoliklar haqida xabardor etadimi?    A. Ha",
},
{
    title: "ICMP xabarlari IP paketga joylashtiriladimi?      A. Ha",
},
{
    title: "ICMP xabari nechi qismdan tashkil topadi?    A. 2 qismdan: Sarlovha va ma'lumot",
},
{
    title: "SNMP qanday ma’noni anglatadi?      A. Tarmoqni boshqarish sathi",
},
{
    title: "SNMP sathi OSI modelining qaysi pog'onasida ishlatiladi?      A. Amaliy pog'ona",
},
{
    title: "SNMP uchun qaysi port belgilangan?       A. UDP 161 va 162 port",
},
{
    title: "SNMP so'rov va javob shakli faqat bitta portdan amalga oshiriladimi?        A. Yoq",
},
{
    title: "SNMP sathining asosiy vazifalari nimadan iborat?       A. Tarmoqni monitoringni uchun tarmoqni boshqarishda ishlatiladi, IP tarmoqlariga ulangan qurilmani boshqarish haqidagi ma'lumotlarni tashkil etish va to'plash uchun standart sath hisbolanadi",
},
{
    title: "Simsiz sensor tarmoqlari deganda nimani tushunasiz?    A. Atrof muhitdagi o’zgarishlarni monitoring qiluvchi va o'zgarishlarni qayt etuvchi qurilmalar",
},
{
    title: "Sensor tarmoqlari elementlariga misol keltiring.    A. Aqlli soat, EKG elektrod, gas sensori",
},
{
    title: "Sensor qurilmalarini asosiy vazifasi nimadan iborat?    A. Atrof muhitdagi o'zgarishlarni monitoring qilish va kontroller qurilmasiga o'zgarishlarni jo'natish",
},
{
    title: "Hozirda qaysi sohalarda IoT texnologiyasidan foydalaniladi?         A. Barcha javob to'g'ri",
},
{
    title: "Sensor qurilmalarida qanday muammolar mavjud?    A. Barcha javob to'g'ri",
},
{
    title: "Sensor tarmoqlari uchun maxsus operatsion tizim talab etiladimi?       A. Ha",
},
{
    title: "Sensor tarmog'i necha qismdan iborat?       A. 3",
},
{
    title: "Sensor qurilmalarni boshqaruvchi qurilma qanday nomlanadi?        A. Kontroller",
},
{
    title: "Nima sababdan sensor tarmoqlarining resurslari cheklangan?       A. Barcha javob to'g'ri",
},
{
    title: "Sensor qurilmalarini taqdim etadigan afzalliklari nimadan iborat?         A. Barcha javob to'g'ri",
},
{
    title: "Nima sababdan sensor qurilmalarida ma'lumot almashish tezligi past?       A. O'kazuvchanlik qobiliyati cheklangan",
},
{
    title: "Sensor tarmoqlarida qanday marshrutlash sathlaridan foydalaniladi?          A. OLSR, MRP",
},
{
    title: "Sensor tarmoqlarini qurishda qanday tarmoq topologiyalaridan foydalaniladi?        A. Barcha javob to'g'ri",
},
{
    title: "Sensor tarmoqlarida axborot xavfsizligi darajasi qay darajada ta'minlangan?        A. Talab darajasida emas",
},
{
    title: "Sensor tarmoqlarini talab darajasida takomillashtirish uchun nimalarga ahamiyat berish lozim?       A. Barcha javob to'g'ri",
},
{
    title: "Tarmoq xavfsizligi qanday vositalar orqali ta'minlanadi?       A. Apparat va dasturiy ta'minot vositalari orqali",
},
{
    title: "Tarmoq pog'onasida kimlar axborot xavfsizligini himoyalashga mas'ul?         A. Barcha javob to'g'ri",
},
{
    title: "Internet foydalanuvchilari uchun xavfsizlik masalalari to’liq kafolatlanganmi?         A. Kafolatlanmagan",
},
{
    title: "Autentifikatsiya nima maqsadda ishlatiladi?        A. Foydalanuvchini identifikatsiya qilish uchun",
},
{
    title: "Internet saytlarida mavjud resurslardan foydalanishga kim ruxsat beradi?          A. Administrator",
},
{
    title: "Axborotlarni maxfiyligi qanday ta'minlanadi?          A. Shifrlash algoritmlari orqali",
},
{
    title: "Foydalanuvchilar axborot xavfsizlini buzulishida aybdor bo'lishlari mumkinmi?      A. Ha",
},
{
    title: "Nima uchun axborot xavfsizligi borgan sari dolzarb bo'lib bormoqda?          A. Axborotlar - intellektual mulk darajasiga etib kelmoqda",
},
{
    title: "Qanday muhitlarda axborot xavfsizligi dajarasi yuqoriroq ta’minlangan?      A. Simli va optik",
},
{
    title: "Ilovalar axborot xavfsizlikni ta'minlashi mumkinmi?    A. Ha",
},
{
    title: "Kompyuter tarmoqlarida xavfsizlikni ta'minlash uchun nima ishlab chiqilishi lozim           A. Xavfsizlik siyosati",
},
{
    title: "Konvergentsiya so'zining ma'nosini ko'rsating.       A. Yaqinlashish",
},
{
    title: "Qanday holatlarda konvergentsiya jarayoni yuzaga keladi?        A. Turli qurilmalar va dasturlarni bitta muhitda ishlash natijasida",
},
{
    title: "Konvergent tarmoqlariga misol keltiring.       A. Bluetooth, WiFi va internetga ulangan qurilmalarni o'zaro ma'lumot almashishi",
},
{
    title: "Turli tarmoqlar va ularning formatini moslashtirib beruvchi qurilmani ko'rsating           A. Shlyuz",
},
{
    title: "Konvergent tarmoqlarining elementlarini ko'rsating      A. Barcha javob to'g'ri",
},
{
    title: "Konvergent tarmoqlariga o'tishning asosiy sababi...     A. Barcha javob to'g'ri",
},
{
    title: "Konvergentsiyaning kamchilik tomonlarini ko'rsating     A. Barcha javob to'g'ri",
},
{
    title: "Tarmoq operatsion tizimiga ta'rif bering.     A. Barcha javob to'g'ri",
},
{
    title: "Windows server tarmoq operatsion tizimi bo'la oladimi?     A. Ha",
},
{
    title: "Windows serverni qaysi tashkilot ishlab chiqqan.      A. Microsoft",
},
{
    title: "IoT qanday ma'noni anglatadi        A. Internet buyumlar",
},
{
    title: "Nima uchun IoT texnologiyasi ishlab chiqildi?     A. Barcha javob to'g'ri",
},
{
    title: "Bulutli texnologiya qanday imkoniyatlarni taqdim etadi?       A. Barcha javob to'g'ri",
},
{
    title: "Tumanli texnologiya qanday imkoniyatlarni taqdim etadi?         A. Barcha javob to'g'ri",
},
{
    title: "Ko'p foydalaniladagin tarmoq operatsion tizimlarining nechta asosiy turi bor?           A. 5",
},
{
    title: "Bulutli texnologiyada axborot xavfsizligi doimiy kafolatlanganmi?            A. Yoq",
},
{
    title: "Zamonaviy kompyuter tarmoqlari bilan an’anaviy kompyuter tarmoqlarini qanday farqlari bor?      A. Imkoniyatlari va sig'imlari kengaytirilgan",
},
{
    title: "Tumanli va bulutli texnologiyalarning farqini tushuntirib bering.          A. Tumanli kichik va bulutli katta hududdagi tarmoqlarni qamrab oladi",
},
{
    title: "Mobil terminallari qaysi qurilma bilan o'zaro bog'lanib tarmoqqa ulanishni amalga oshiradi?          A. Baza stansiyasi",
},
{
    title: "2G va 3G mobil tarmoqlarining farqi nimada?        A. Chastota diapozoni, taqdim etadigan xizmatlari, mobil terminallari, tarmoq elementlari",
},
{
    title: "1G, 2G, 3G, 4G, 5G tarmoqlaridagi 'G' harfining ma'nisi nima?         A. 'G'-inglizcha Generation so'zining bosh harfidan olingan bo'lib, avlod degani",
},
{
    title: "5G tarmoqlarining ma'lumot uzatish tezligi qancha?    A. 1 Gbit/s dan katta",
},
{
    title: "LTE texnologiyalari qaysi avlodga tegishli?         A. 4G",
},
{
    title: "PON so'zining ma'nosini toping.       A. Passiv opkit tarmoq",
},
{
    title: "Kirish tarmog’i - tarmoqning qaysi qismiga to'g'ri keladi?         A. Stansiyadan foydalanuvchining uyigacha bo'lgan qismi",
},
{
    title: "3G texnologiyasi asosida keng polosali abonent tarmog'ini qurish mumkinmi?          A. Ha",
},
{
    title: "xDSL texnologiyasi asosida lokal kompyuter tarmoqlarini yuqori tezlikli Internetga ulash mumkinmi?          A. Ha",
},
{
    title: "Keng polosali abonent tarmog'i texnologiyalarini ko'rsating.          A. xDSL, PON, 3G, 4G, Sputnik",
},
{
    title: "Qanday qurilmalar orqali foydalanuvchilar tarmoq resurslaridan foydalanishi mumkin?       A. Kompyuter, smartfon va oxirgi qurilmalar",
},
{
    title: "Uzatish qurilmalari orqali uzatiladigan ma'lumot birligi nima?            A. Oqimlar",
},
{
    title: "Uzatish muhitlarida oxirgi yillarda eng ko'p foydalanilayotgan muhitini ko'rsating.        A. Optik muhitlar",
},
{
    title: "PDH texnologiyasining kengaytirilgan ko'rinishini ko'rsating           A. Plesiochronous digital hierarchy",
},
{
    title: "SDH uzatish texnologiyasida qanday uzatish tizimlari mavjud?              A. STM",
},
{
    title: "STM-1 tizimining uzatish tezligi qancha?      A. 155 Mbit/s",
},
{
    title: "DWDM texnologiyasi asosida kanallar qanday parametrga ko'ra multipleksorlanadi?             A. To'lqin uzunligiga ko'ra",
},
{
    title: "SONET tizimi bilan SDH tizimi bir xil imkoniyatli texnologiyalarmi?            A. Deyarli bir xil",
},
{
    title: "SDH uzatish tizimlari tarmoqning qaysi qismida foydalaniladi?           A. Shahar tarmoqlarida",
},
{
    title: "Global tarmoqlarni qurishda DWDM texnologiyasi qanday vazifani bajaradi?        A. Mamlakatlar va shaharlarni o'zaro bir biri bilan bog'lashni ta'minlaydi.",
},
{
    title: "Multipleksorlash qanday ma'noni anglatadi.       A. Zichlashtirish",
},
{
    title: "Klient-server arxitekturasi deganda nimani tushunasiz?   A. Kompyuter va serverni o'zaro bog'lanishi va ma'lumot almashish jarayonini taqdim etuvchi arxitektura",
},
{
    title: "Server qanday vazifani amalga oshiradi?          A. Serverga ulangan kompyuterlarni o'zaro bog'lanish, resurs almashish va Internet resurslarida foydalanish imkoniyatini ta'minlaydi",
},
{
    title: "Klient-server arxitekturasi qanday usullarda quriladi?     A. Klient-server va Peer-to-peer arxitekturalariga asosan",
},
{
    title: "Ilova nima?        A. Foydalanuvchilarni kompyuter va tarmoq resurslaridan foydalanish imkoniyatini taqdim etuvchi dasturlar.",
},
{
    title: "Amaliy pog’ona protokollarini ko'rsating.        A. SMTP, DNS",
},
{
    title: "Klient va server qurilmalari qanday topologiyalarda bog'lanishi mumkin?         A. Yulduz, nuqta-nuqta, halqa, shina",
},
{
    title: "Klient va server qanday ko'rinishda bog'lanishni amalga oshiradi?          A. Dastlab klient serverga so'rov jo'natadi va server so'rovga ishlov berib klientga javob qaytaradi.",
},
{
    title: "Smartfon qurilmalari bir vaqtda ham klient ham server bo'la oladimi?        A. Ha, foydalanilayotgan sath va ilovaga muvofiq",
},
{
    title: "Server vazifasini bajarish uchun qanday shartlar topilishi kerak?          A. So'rovlarga ishlov berish va javob qaytarish, resurslarga ega bo'lish va doim faol bo'lish",
},
{
    title: "Peer-to-Peer arxitekturasiga asoslangan saytni tanlang?      A. Bit-torrent",
},
{
    title: "DNS qanday tizim?           A. Domen nomalar tizimi",
},
{
    title: "DNS qanday maqsadlar uchun foydalaniladi?     A. Domen nomini IP adresga yoki aksincha o’zgartiradi",
},
{
    title: "Quyida keltirilgan qaysi domen nomlari to'g'ri ko'rsatilgan?             A. Barcha domenlar to'g'ri ko'rsatilgan",
},
{
    title: "DNS tizimi IP adresini nomga va nomni IP adresga o'zgartiradi, masalan: google.com nomini 173.194.73.94 adresiga o'zgartiradi. Shu holat to'g'rimi?            A. Ha",
},
{
    title: ".uz bilan tugagan barcha domenlar faqat O'zbekiston hududida foydalanish mumkinligini anglatadimi?            A. Yoq",
},
{
    title: "Har bir domen nomiga bitta IP adres mos keladimi?       A. Bittadan ortiq IP adress bo'lishi mumkin",
},
{
    title: "DNS so'rovlariga qaysi qurilma ishlov beradi?       A. DNS serveri.",
},
{
    title: "ICMP nima maqsadda foydalaniladi?        A. Ikki qurilmadagi IP sathlari o'rtasidagi aloqani ta'minlaydi va boshqaradi",
},
{
    title: "Xostlar orasida ICMP boshqaruv xabarlari qanday shakllarda almashadi?            A. So'rov-javob shaklida",
},
{
    title: "ICMP qisqartmasining quyida kengaytirib yozilgan shaklini ko'rsating.              A. Internet control message protocol",
},
{
    title: "ICMP yuzaga kelgan xatoliklar haqida xabardor etadimi?           A. Ha",
},
{
    title: "ICMP xabarlari IP paketga joylashtiriladimi?        A. Ha",
},
{
    title: "ICMP xabari nechi qismdan tashkil topadi?       A. 2 qismdan: Sarlovha va ma'lumot",
},
{
    title: "SNMP qanday ma’noni anglatadi?        A. Tarmoqni boshqarish sathi",
},
{
    title: "SNMP protokoli OSI modelining qaysi pog'onasida ishlatiladi?         A. Amaliy pog'ona",
},
{
    title: "SNMP uchun qaysi port belgilangan?         A. UDP 161 va 162 port",
},
{
    title: "SNMP so'rov va javob shakli faqat bitta portdan amalga oshiriladimi?        A. Yoq",
},
{
    title: "SNMP protokolining asosiy vazifalari nimadan iborat?       A. Tarmoqni monitoringni uchun tarmoqni boshqarishda ishlatiladi, IP tarmoqlariga ulangan qurilmani boshqarish haqidagi ma'lumotlarni tashkil etish va to'plash uchun standart sath hisbolanadi",
},
{
    title: "Simsiz sensor tarmoqlari deganda nimani tushunasiz?        A. Atrof muhitdagi o’zgarishlarni monitoring qiluvchi va o'zgarishlarni qayt etuvchi qurilmalar",
},
{
    title: "Sensor tarmoqlari elementlariga misol keltiring.      A. Aqlli soat, EKG elektrod, gas sensori",
},
{
    title: "Sensor qurilmalarining asosiy vazifasi nimadan iborat?      A. Atrof muhitdagi o'zgarishlarni monitoring qilish va kontroller qurilmasiga o'zgarishlarni jo'natish",
},
{
    title: "Hozirda qaysi sohalarda IoT texnologiyasidan foydalaniladi?              A. Barcha javob to'g'ri",
},
{
    title: "Sensor qurilmalarida qanday muammolar mavjud?      A. Barcha javob to'g'ri",
},
{
    title: "Sensor tarmoqlari uchun maxsus operatsion tizim talab etiladimi?           A. Ha",
},
{
    title: "Sensor tarmog'i necha qismdan iborat?            A. 3",
},
{
    title: "Sensor qurilmalarni boshqaruvchi qurilma qanday nomlanadi?       A. Kontroller",
},
{
    title: "Nima sababdan sensor tarmoqlarining resurslari cheklangan?      A. Barcha javob to'g'ri",
},
{
    title: "Sensor qurilmalarini taqdim etadigan afzalliklari nimadan iborat?       A. Barcha javob to'g'ri",
},
{
    title: "Nima sababdan sensor qurilmalarida ma'lumot almashish tezligi past?          A. O'kazuvchanlik qobiliyati cheklangan",
},
{
    title: "Sensor tarmoqlarida qanday marshrutlash protokollaridan foydalaniladi?              A. OLSR, MRP",
},
{
    title: "Sensor tarmoqlarini qurishda qanday tarmoq topologiyalaridan foydalaniladi?          A. Barcha javob to'g'ri",
},
{
    title: "Sensor tarmoqlarida axborot xavfsizligi darajasi qay darajada ta'minlangan?            A. Talab darajasida emas",
},
{
    title: "Sensor tarmoqlarini talab darajasida takomillashtirish uchun nimalarga ahamiyat berish lozim?         A. Barcha javob to'g'ri",
},
{
    title: "Tarmoq xavfsizligi qanday vositalar orqali ta'minlanadi?      A. Apparat va dasturiy ta'minot vositalari orqali",
},
{
    title: "Tarmoq pog'onasida kimlar axborot xavfsizligini himoyalashga mas'ul?          A. Barcha javob to'g'ri",
},
{
    title: "Internet foydalanuvchilari uchun xavfsizlik masalalari to’liq kafolatlanganmi?        A. Kafolatlanmagan",
},
{
    title: "Autentifikatsiya nima maqsadda ishlatiladi?          A. Foydalanuvchini identifikatsiya qilish uchun",
},
{
    title: "Internet saytlarida mavjud resurslardan foydalanishga kim ruxsat beradi?          A. Administrator",
},
{
    title: "Axborotlarni maxfiyligi qanday ta'minlanadi?      A. Shifrlash algoritmlari orqali",
},
{
    title: "Foydalanuvchilar axborot xavfsizlini buzulishida aybdor bo'lishlari mumkinmi?       A. Ha",
},
{
    title: "Nima uchun axborot xavfsizligi borgan sari dolzarb bo'lib bormoqda?         A. Axborotlar - intellektual mulk darajasiga etib kelmoqda",
},
{
    title: "Qanday muhitlarda axborot xavfsizligi dajarasi yuqoriroq ta’minlangan?         A. Simli va optik",
},
{
    title: "Ilovalar axborot xavfsizlikni ta'minlashi mumkinmi?     A. Ha",
},
{
    title: "Kompyuter tarmoqlarida xavfsizlikni ta'minlash uchun dastlab nima ishlab chiqilishi lozim.      A. Xavfsizlik siyosati",
},
{
    title: "Konvergentsiya so'zining ma'nosini ko'rsating.     A. Yaqinlashish",
},
{
    title: "Qanday holatlarda konvergentsiya jarayoni ta’minlanadi?     A. Turli qurilmalar va dasturlarni bitta muhitda ishlash natijasida",
},
{
    title: "Konvergent tarmoqlariga misol keltiring.      A. Bluetooth, WiFi va internetga ulangan qurilmalarni o'zaro ma'lumot almashishi",
},
{
    title: "Turli tarmoqlar va ularning formatini moslashtirib beruvchi qurilmani ko'rsating             A. Shlyuz",
},
{
    title: "Konvergent tarmoqlarining elementlarini ko'rsating     A. Barcha javob to'g'ri",
},
{
    title: "Konvergent tarmoqlariga o'tishning asosiy sababi...      A. Barcha javob to'g'ri",
},
{
    title: "Konvergentsiyaning kamchilik tomonlarini ko'rsating    A. Barcha javob to'g'ri",
},
{
    title: "Tarmoq operatsion tizimiga ta'rif bering.        A. Barcha javob to'g'ri",
},
{
    title: "Windows server tarmoq operatsion tizimi bo'la oladimi?    A. Ha",
},
{
    title: "Windows serverni qaysi tashkilot ishlab chiqqan.      A. Microsoft",
},
{
    title: "IoT qanday ma'noni anglatadi           A. Internet buyumlar",
},
{
    title: "Nima uchun IoT texnologiyasi ishlab chiqildi?      A. Barcha javob to'g'ri",
},
{
    title: "Bulutli texnologiya qanday imkoniyatlarni taqdim etadi?      A. Barcha javob to'g'ri",
},
{
    title: "Tumanli texnologiya qanday imkoniyatlarni taqdim etadi?         A. Barcha javob to'g'ri",
},
{
    title: "Ko'p foydalaniladagin tarmoq operatsion tizimlarining nechta asosiy turi bor?           A. 5",
},
{
    title: "Bulutli texnologiyada axborot xavfsizligi doimiy kafolatlanganmi?          A. Yoq",
},
{
    title: "Zamonaviy kompyuter tarmoqlari bilan an’anaviy kompyuter tarmoqlarini qanday farqlari bor?        A. Imkoniyatlari va sig'imlari kengaytirilgan",
},
{
    title: "Tumanli va bulutli texnologiyalarning farqini ko’rsating.      A. Tumanli kichik va bulutli katta hududdagi tarmoqlarni qamrab oladi",
},
{
    title: "Qaysi tashkilotlar xalqaro standartlashtirish tashkilotlari hisoblanadi?            A. ISO, ITU, IEEE",
},
{
    title: "Intenet tarmog’ini kim ishlab chiqqan?            A. ARPA",
},
]