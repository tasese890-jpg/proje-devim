export interface StatItem {
  icon: string;
  value: string;
  label: string;
  detail?: string;
}

export interface CityPop {
  city: string;
  population: string;
  metroPopulation: string;
  desc: string;
  image: string;
}

export interface TimelineEvent {
  year: string;
  title: string;
  category: 'Antik & Orta Çağ' | 'Keşifler Çağı' | 'Modern Tarih';
  desc: string;
  image?: string;
}

export interface FoodItem {
  id: string;
  name: string;
  category: 'Ana Yemek' | 'Tatlı' | 'Deniz Ürünü' | 'İçecek';
  desc: string;
  history: string;
  image: string;
  ingredients: string[];
}

export interface TouristSpot {
  id: string;
  name: string;
  region: 'Lizbon & Çevresi' | 'Kuzey (Porto)' | 'Algarve' | 'Adalar (Azor & Madeira)' | 'Merkez & Alentejo';
  badge: string;
  desc: string;
  highlights: string[];
  image: string;
  rating: number;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  answer: number;
  explanation: string;
}

export const PORTUGAL_GALLERY_INTRO = [
  {
    title: "Pena Sarayı, Sintra",
    image: "https://images.unsplash.com/photo-1536663815808-535e2280d2c2?w=1200&q=80",
    caption: "Romantizm akımının Avrupa'daki en büyüleyici şatosu"
  },
  {
    title: "Porto Ribeira",
    image: "https://images.unsplash.com/photo-1555881400-69c5bf5f4094?w=1200&q=80",
    caption: "Douro Nehri kıyısında renkli tarihi evler ve Dom Luís Köprüsü"
  },
  {
    title: "Algarve Kayalıkları",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80",
    caption: "Altın sarısı kumsallar ve okyanusun oyduğu muazzam falezler"
  },
  {
    title: "Lizbon Tramvayı",
    image: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=1200&q=80",
    caption: "Tarihi Alfama sokaklarında süzülen efsanevi 28 numaralı sarı tramvay"
  },
  {
    title: "Madeira Adaları",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200&q=80",
    caption: "Atlas Okyanusu'nun ortasında volkanik ve yemyeşil bir cennet"
  },
  {
    title: "Azulejo Sanatı",
    image: "https://images.unsplash.com/photo-1585208798174-6cedd86e019a?w=1200&q=80",
    caption: "Geleneksel mavi-beyaz çinilerle süslenmiş görkemli yapılar"
  }
];

export const GENERAL_STATS: StatItem[] = [
  { icon: "👥", value: "10.38 Milyon", label: "Güncel Nüfus", detail: "Avrupa Birliği'nin %2.3'ü" },
  { icon: "📐", value: "92.212 km²", label: "Yüz Ölçümü", detail: "Anakara + Azorlar ve Madeira" },
  { icon: "🌍", value: "260 Milyon+", label: "Portekizce Konuşan", detail: "Dünyanın en çok konuşulan 9. dili" },
  { icon: "🏛️", value: "1139", label: "Kuruluş Yılı", detail: "Avrupa'nın en eski ulus-devleti" },
  { icon: "💶", value: "$287 Milyar", label: "GSYİH (Nominal)", detail: "Kişi başı ~$27.500" },
  { icon: "✈️", value: "30 Milyon+", label: "Yıllık Turist Sayısı", detail: "Nüfusunun 3 katı ziyaretçi" },
  { icon: "☀️", value: "300 Gün", label: "Güneşli Gün Sayısı", detail: "Avrupa'nın en güneşli ülkelerinden" },
  { icon: "🍷", value: "%52", label: "Dünya Mantar Üretimi", detail: "Açık ara küresel pazar lideri" },
];

export const POPULATION_CITIES: CityPop[] = [
  {
    city: "Lizbon (Lisboa)",
    population: "545.923",
    metroPopulation: "2.87 Milyon",
    desc: "Ülkenin başkenti ve en büyük metropolü. Tejo Nehri'nin Atlas Okyanusu ile buluştuğu yedi tepe üzerine kuruludur. Finans, kültür, teknoloji ve turizmin kalbidir.",
    image: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=800&q=80"
  },
  {
    city: "Porto",
    population: "231.800",
    metroPopulation: "1.73 Milyon",
    desc: "Kuzeyin başkenti ve şarap ticareti merkezi. UNESCO Dünya Mirası Ribeira bölgesi, muhteşem köprüleri ve bohem atmosferiyle ünlü liman şehri.",
    image: "https://images.unsplash.com/photo-1555881400-69c5bf5f4094?w=800&q=80"
  },
  {
    city: "Vila Nova de Gaia",
    population: "304.149",
    metroPopulation: "Porto Metropolü",
    desc: "Douro Nehri'nin güney kıyısında yer alan, Porto şarap mahzenlerine ev sahipliği yapan ve nüfus bakımından anakaranın en kalabalık belediyelerinden biri.",
    image: "https://images.unsplash.com/photo-1513735492761-c3ba6e5653fb?w=800&q=80"
  },
  {
    city: "Sintra",
    population: "385.654",
    metroPopulation: "Lizbon Metropolü",
    desc: "Lizbon'a çok yakın olan, kraliyet sarayları, sisli mikro kliması ve masalsı kaleleriyle UNESCO Dünya Mirası listesindeki büyüleyici bölge.",
    image: "https://images.unsplash.com/photo-1536663815808-535e2280d2c2?w=800&q=80"
  },
  {
    city: "Cascais",
    population: "214.158",
    metroPopulation: "Lizbon Metropolü",
    desc: "Eski bir balıkçı köyüyken asilzadelerin yazlık merkezine dönüşen, lüks marinaları ve altın kumsallarıyla ünlü sahil şehri.",
    image: "https://images.unsplash.com/photo-1580323956656-26bbb7206746?w=800&q=80"
  },
  {
    city: "Braga",
    population: "193.333",
    metroPopulation: "825.000 (Minho)",
    desc: "'Portekiz'in Roması' olarak anılan, tarihi kiliseleri ve aynı zamanda ülkenin en genç nüfusuna sahip canlı üniversite hayatıyla dikkat çeken şehir.",
    image: "https://images.unsplash.com/photo-1548707309-dcebeab426c8?w=800&q=80"
  },
  {
    city: "Coimbra",
    population: "140.796",
    metroPopulation: "460.000",
    desc: "1290 yılında kurulan dünyanın en eski üniversitelerinden birine ev sahipliği yapan, öğrenci gelenekleri ve Fado müziğinin özel bir türüyle yaşayan ilim merkezi.",
    image: "https://images.unsplash.com/photo-1569959220744-ff553533f492?w=800&q=80"
  },
  {
    city: "Funchal (Madeira)",
    population: "105.795",
    metroPopulation: "250.000 (Madeira)",
    desc: "Madeira Özerk Bölgesi'nin başkenti. Tropikal bahçeleri, şarapları, muhteşem yılbaşı havai fişek gösterileri ve Cristiano Ronaldo'nun doğduğu şehir olmasıyla ünlüdür.",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800&q=80"
  }
];

export const DEMOGRAPHIC_INSIGHTS = [
  {
    title: "Yaş Dağılımı ve Ortalama",
    desc: "Portekiz'de ortalama yaşam süresi 82.5 yıl ile Avrupa'nın en yüksekleri arasındadır. Medyan yaş 46.8'dir. Ülke, nitelikli genç göçü ve dijital göçebelerle dinamizmini korumaktadır.",
    stat: "82.5 Yıl"
  },
  {
    title: "Yabancı Nüfus ve Göçmenler",
    desc: "Son yıllarda Brezilya, Birleşik Krallık, Ukrayna, İtalya, Fransa ve Türkiye'den gelen göçmenlerle yabancı uyruklu nüfus 1 milyonun üzerine çıkmış, kültürel çeşitlilik artmıştır.",
    stat: "1.04 Milyon+"
  },
  {
    title: "Kentleşme Oranı",
    desc: "Nüfusun %68'i şehirlerde, özellikle Lizbon ve Porto kıyı şeridinde yaşar. İç kesimler (Alentejo vb.) huzurlu, bakir ve tarımsal zenginlikleriyle öne çıkar.",
    stat: "%68"
  },
  {
    title: "Diaspora ve Küresel Portekizliler",
    desc: "Dünya genelinde, özellikle Fransa, Brezilya, ABD, Kanada, Lüksemburg ve İsviçre'de yaşayan tahmini 5 milyon Portekiz kökenli göçmen bulunmaktadır.",
    stat: "5 Milyon"
  }
];

export const TIMELINE_EVENTS: TimelineEvent[] = [
  {
    year: "MÖ 200 - 19",
    title: "Roma İmparatorluğu ve Lusitania Eyaleti",
    category: "Antik & Orta Çağ",
    desc: "Romalılar İber Yarımadası'nı fethetti ve günümüz Portekiz topraklarını 'Lusitania' olarak adlandırdı. Şarapçılık, mimari ve Latince kökenli Portekizce dilinin temelleri bu dönemde atıldı.",
    image: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=600&q=80"
  },
  {
    year: "711 - 1249",
    title: "Endülüs (Mağribi) Dönemi ve Reconquista",
    category: "Antik & Orta Çağ",
    desc: "Kuzey Afrika'dan gelen Müslüman Mağribiler bölgeyi fethetti. Tarımda sulama teknikleri, badem ve narenciye yetiştiriciliği ve mimaride derin izler bıraktılar. Hristiyan krallıklar yüzyıllar süren 'Reconquista' ile toprakları geri aldı.",
    image: "https://images.unsplash.com/photo-1549893072-4bc678117f45?w=600&q=80"
  },
  {
    year: "1139",
    title: "Portekiz Krallığı'nın Bağımsızlığı",
    category: "Antik & Orta Çağ",
    desc: "Ourique Muharebesi zaferinin ardından Afonso Henriques kendini ilk Portekiz Kralı ilan etti. 1143 Zamora Antlaşması ile bağımsızlık resmen tanındı. Portekiz, Avrupa'nın en eski ulus-devletlerinden biri oldu.",
    image: "https://images.unsplash.com/photo-1548707309-dcebeab426c8?w=600&q=80"
  },
  {
    year: "1415",
    title: "Ceuta'nın Fethi & Keşifler Çağının Başlangıcı",
    category: "Keşifler Çağı",
    desc: "Denizci Henry (Infante Dom Henrique) öncülüğünde Kuzey Afrika'daki Ceuta fethedildi. Sagres'te kurulan denizcilik okulu ve geliştirilen karavel gemileriyle küresel deniz keşifleri başladı.",
    image: "https://images.unsplash.com/photo-1513735492761-c3ba6e5653fb?w=600&q=80"
  },
  {
    year: "1498",
    title: "Vasco da Gama'nın Hindistan'a Ulaşması",
    category: "Keşifler Çağı",
    desc: "Vasco da Gama, Ümit Burnu'nu dolaşarak Hindistan'ın Kalikut limanına ulaştı. Bu tarihi başarı, Avrupa ile Asya arasındaki ilk doğrudan deniz ticaret yolunu açarak küresel baharat tekelini Portekiz'e getirdi.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80"
  },
  {
    year: "1500",
    title: "Brezilya'nın Keşfi",
    category: "Keşifler Çağı",
    desc: "Pedro Álvares Cabral komutasındaki armada, Güney Amerika kıyılarına ulaşarak Brezilya'yı Portekiz Krallığı adına himayesine aldı. Brezilya, imparatorluğun en büyük ve en zengin parçası haline geldi.",
    image: "https://images.unsplash.com/photo-1515443961218-a51367888e4b?w=600&q=80"
  },
  {
    year: "1755",
    title: "Büyük Lizbon Depremi ve Tsunami",
    category: "Modern Tarih",
    desc: "1 Kasım sabahı meydana gelen 8.5-9.0 büyüklüğündeki deprem, tsunami ve yangınlar Lizbon'un büyük bölümünü yok etti. Başbakan Marquês de Pombal, şehri depreme dayanıklı modern ızgara planıyla yeniden inşa etti.",
    image: "https://images.unsplash.com/photo-1529260830199-42c24126f198?w=600&q=80"
  },
  {
    year: "1910",
    title: "Monarşinin Çöküşü ve I. Cumhuriyet",
    category: "Modern Tarih",
    desc: "5 Ekim 1910 devrimiyle yüzyıllar süren monarşi yönetimi devrildi, Kral II. Manuel sürgüne gönderildi ve seküler, demokratik Portekiz Cumhuriyeti ilan edildi.",
    image: "https://images.unsplash.com/photo-1585208798174-6cedd86e019a?w=600&q=80"
  },
  {
    year: "1932 - 1974",
    title: "Estado Novo Diktatörlüğü (Salazar Rejimi)",
    category: "Modern Tarih",
    desc: "António de Oliveira Salazar öncülüğünde kurulan otoriter, milliyetçi ve muhafazakar 'Estado Novo' rejimi. Sıkı sansür, gizli polis (PIDE) ve Afrika'daki yorucu sömürge savaşlarıyla geçen uzun yıllar.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&q=80"
  },
  {
    year: "25 Nisan 1974",
    title: "Karanfil Devrimi (Revolução dos Cravos)",
    category: "Modern Tarih",
    desc: "Genç subayların öncülük ettiği kansız askeri hareketle diktatörlük devrildi. Halkın askerlerin tüfek namlularına kırmızı karanfiller takmasıyla dünya demokrasi tarihinin en şiirsel devrimlerinden biri yaşandı.",
    image: "https://images.unsplash.com/photo-1569959220744-ff553533f492?w=600&q=80"
  },
  {
    year: "1986",
    title: "Avrupa Ekonomik Topluluğu (AB) Üyeliği",
    category: "Modern Tarih",
    desc: "Portekiz ve İspanya aynı anda Avrupa Topluluğu'na katıldı. Bu üyelik, ülkede muazzam bir altyapı hamlesi, ekonomik modernizasyon ve küresel entegrasyon dönemini başlattı.",
    image: "https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?w=600&q=80"
  },
  {
    year: "1998 - 2002",
    title: "Expo '98 ve Euro Para Birimi",
    category: "Modern Tarih",
    desc: "Lizbon, okyanuslar temalı muazzam Expo 98 fuarına ev sahipliği yaptı ve Parque das Nações bölgesi doğdu. 2002 yılında ise Esküdo yerine resmi para birimi olarak Euro (€) kullanılmaya başlandı.",
    image: "https://images.unsplash.com/photo-1504544750208-dc0358e63f7f?w=600&q=80"
  }
];

export const FOOD_MENU: FoodItem[] = [
  {
    id: "bacalhau",
    name: "Bacalhau à Brás",
    category: "Ana Yemek",
    desc: "Kibrit çöpü inceliğinde kızartılmış patates, didilmiş tuzlu morina balığı (bacalhau), soğan, çırpılmış yumurta, siyah zeytin ve taze maydanozun muhteşem uyumu.",
    history: "Portekiz mutfağının baş tacıdır. Ülkede yılın her günü için farklı bir bacalhau tarifi olduğu söylenir. Morina balığını tuzlayarak saklama yöntemi Vikinglerden beri bilinir ve Portekiz denizcileri için vazgeçilmez bir protein kaynağı olmuştur.",
    image: "https://images.unsplash.com/photo-1504544750208-dc0358e63f7f?w=800&q=80",
    ingredients: ["Tuzlu Morina Balığı", "Kızartmalık Patates", "Soğan", "Yumurta", "Siyah Zeytin", "Zeytinyağı", "Maydanoz"]
  },
  {
    id: "nata",
    name: "Pastel de Nata",
    category: "Tatlı",
    desc: "Dışı çıtır çıtır milföy hamuru, içi karamelize olmuş nefis yumurtalı ve sütlü krema dolgusu. Üzerine bol tarçın ve pudra şekeri serpilerek ılık servis edilir.",
    history: "18. yüzyılda Belém'deki Jerónimos Manastırı rahipleri tarafından yaratıldı. Rahipler cübbelerini kolalamak ve şarapları filtrelemek için yumurta akı kullanıyor, kalan sarıları ise tatlılarda değerlendiriyordu. Orijinal tarif 1837'den beri 'Fábrica de Pastéis de Belém'de gizlice üretilmektedir.",
    image: "https://images.unsplash.com/photo-1594997756045-3cac7b4d4bff?w=800&q=80",
    ingredients: ["Milföy Hamuru", "Yumurta Sarısı", "Süt", "Şeker", "Limon Kabuğu", "Tarçın", "Vanilya çubuğu"]
  },
  {
    id: "polvo",
    name: "Polvo à Lagareiro",
    category: "Deniz Ürünü",
    desc: "Önce haşlanıp ardından bol zeytinyağı ve sarımsak eşliğinde fırınlanmış yumuşacık ahtapot bacakları. Yanında fırınlanmış taze küçük patateslerle servis edilir.",
    history: "'Lagareiro' zeytinyağı presinde çalışan kişi anlamına gelir. Bu isim, tarifte kullanılan kaliteli sızma zeytinyağının bolluğuna atıfta bulunur. Noel arifesi ve özel kutlamaların popüler yemeğidir.",
    image: "https://images.unsplash.com/photo-1515443961218-a51367888e4b?w=800&q=80",
    ingredients: ["Ahtapot", "Küçük Patates", "Sızma Zeytinyağı", "Sarımsak", "Kişniş", "Kaba Deniz Tuzu"]
  },
  {
    id: "francesinha",
    name: "Francesinha",
    category: "Ana Yemek",
    desc: "Porto'nun efsanevi sandviçi: Ekmek dilimleri arasında sığır bifteği, jambon, sosis (linguiça), üzeri eritilmiş peynir kaplı ve gizli baharatlı domates-bira sosu içinde yüzer.",
    history: "1950'lerde Fransa ve Belçika'dan dönen göçmen Daniel da Silva tarafından Fransız 'Croque-monsieur' sandviçinin Portekiz damak tadına uyarlanmasıyla icat edilmiştir. Dünyanın en doyurucu lezzetlerinden biri kabul edilir.",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80",
    ingredients: ["Tost Ekmeği", "Biftek", "Linguiça Sosis", "Jambon", "Kaşar Peyniri", "Bira", "Porto Şarabı", "Domates Sosu"]
  },
  {
    id: "caldo",
    name: "Caldo Verde",
    category: "Ana Yemek",
    desc: "Püre haline getirilmiş patates ve soğan bazlı et suyu içinde, iplik gibi incecik kıyılmış karalahana (couve galega) ve tütsülenmiş chouriço sucuğu dilimleri.",
    history: "Kuzey Portekiz'in Minho bölgesine özgü geleneksel bir köylü çorbasıdır. Bugün tüm Portekiz'de kutlamaların, gece yarısı eğlencelerinin ve yağmurlu günlerin iç ısıtan sembol yemeğidir.",
    image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=800&q=80",
    ingredients: ["Patates", "Karalahana", "Chouriço Sucuğu", "Soğan", "Sarımsak", "Zeytinyağı"]
  },
  {
    id: "portwine",
    name: "Porto Şarabı (Vinho do Porto)",
    category: "İçecek",
    desc: "Douro Vadisi'nde teraslanmış bağlarda yetişen üzümlerin fermantasyonu sırasında üzüm alkolü eklenerek güçlendirilmiş, tatlı ve aromatik efsanevi şarap.",
    history: "17. yüzyılda İngiliz tüccarların uzun deniz yolculukları sırasında şarabın bozulmasını önlemek için brendi eklemesiyle tesadüfen doğdu. Ruby, Tawny, Vintage ve White gibi enfes çeşitleri vardır.",
    image: "https://images.unsplash.com/photo-1474722883778-792e7990302f?w=800&q=80",
    ingredients: ["Touriga Nacional Üzümü", "Tinta Roriz", "Tinta Barroca", "Doğal Üzüm Alkolü (Aguardente)"]
  }
];

export const TOURIST_DESTINATIONS: TouristSpot[] = [
  {
    id: "lisbon-belem",
    name: "Lizbon & Belém Tarihi Bölgesi",
    region: "Lizbon & Çevresi",
    badge: "Keşifler Merkezi",
    desc: "Tejo Nehri kıyısında yer alan, Keşifler Çağı anıtları, Jerónimos Manastırı, Belém Kulesi ve eşsiz Fado ezgileriyle çınlayan dar sokaklarıyla büyüleyici başkent.",
    highlights: ["Belém Kulesi (UNESCO)", "Jerónimos Manastırı", "28 No'lu Tarihi Tramvay", "Alfama Sokakları", "São Jorge Kalesi"],
    image: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=800&q=80",
    rating: 4.9
  },
  {
    id: "porto-ribeira",
    name: "Porto & Douro Nehri",
    region: "Kuzey (Porto)",
    badge: "UNESCO Kültür Mirası",
    desc: "Dom Luís I Köprüsü'nün görkemli manzarası, renkli kiremitli evleri, ünlü Livraria Lello kitapçısı ve tarihi şarap mahzenleriyle Portekiz'in romantik kuzey başkenti.",
    highlights: ["Ribeira Meydanı", "Dom Luís I Köprüsü", "Livraria Lello (Harry Potter ilhamı)", "São Bento Çinili İstasyonu", "Gaia Mahzenleri"],
    image: "https://images.unsplash.com/photo-1555881400-69c5bf5f4094?w=800&q=80",
    rating: 4.9
  },
  {
    id: "sintra-palaces",
    name: "Sintra Masal Şehri",
    region: "Lizbon & Çevresi",
    badge: "Kraliyet Mirası",
    desc: "Yemyeşil dağların zirvesinde yükselen rengarenk Pena Sarayı, gizemli kuyularıyla Quinta da Regaleira ve Moorish Kalesi ile bir fantastik roman seti.",
    highlights: ["Palácio da Pena", "Quinta da Regaleira & İnisiyasyon Kuyusu", "Castelo dos Mouros", "Cabo da Roca (En Batı Noktası)"],
    image: "https://images.unsplash.com/photo-1536663815808-535e2280d2c2?w=800&q=80",
    rating: 4.8
  },
  {
    id: "algarve-coast",
    name: "Algarve Sahilleri & Mağaralar",
    region: "Algarve",
    badge: "Okyanus Cenneti",
    desc: "Altın sarısı kumsalları, turkuaz suları, muazzam kireçtaşı falezleri ve özellikle Benagil Deniz Mağarası ile Avrupa'nın en gözde yaz tatili rotası.",
    highlights: ["Benagil Mağarası", "Ponta da Piedade Kayalıkları", "Praia da Marinha", "Lagos ve Faro Kasabaları"],
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
    rating: 4.9
  },
  {
    id: "madeira-island",
    name: "Madeira Adası",
    region: "Adalar (Azor & Madeira)",
    badge: "Atlas'ın İncisi",
    desc: "Subtropikal iklimi, muhteşem 'Levada' su kanalı yürüyüş yolları, volkanik uçurumları, tropik çiçekleri ve leziz şaraplarıyla yüzen bir botanik bahçe.",
    highlights: ["Pico do Arieiro Zirvesi", "Levada Yürüyüşleri", "Cabo Girão Cam Teras", "Funchal Botanik Bahçeleri"],
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800&q=80",
    rating: 4.9
  },
  {
    id: "azores-islands",
    name: "Azor Adaları (Açores)",
    region: "Adalar (Azor & Madeira)",
    badge: "Vahşi Doğa",
    desc: "Atlas Okyanusu'nun ortasında 9 volkanik adadan oluşan, krater gölleri (Sete Cidades), balina izleme turları ve termal kaplıcalarıyla Avrupa'nın Hawaii'si.",
    highlights: ["Sete Cidades İkiz Gölleri", "Furnas Termal Suları", "Pico Dağı Zirvesi", "Balina ve Yunus İzleme"],
    image: "https://images.unsplash.com/photo-1580323956656-26bbb7206746?w=800&q=80",
    rating: 4.9
  },
  {
    id: "douro-valley",
    name: "Douro Şarap Vadisi",
    region: "Kuzey (Porto)",
    badge: "UNESCO Mirası",
    desc: "Kıvrımlı Douro Nehri boyunca uzanan, yüzyıllardır insan eliyle şekillendirilmiş teraslı üzüm bağları ve tarihi şarap çiftlikleri (Quinta).",
    highlights: ["Nehir Tekne Gezileri", "Tarihi Şarap Çiftlikleri (Quintas)", "Pinhão Tren İstasyonu Çinileri", "Panoramik Seyir Terasları"],
    image: "https://images.unsplash.com/photo-1564594985645-4427056e22e2?w=800&q=80",
    rating: 4.8
  },
  {
    id: "evora-alentejo",
    name: "Évora & Alentejo Düzlükleri",
    region: "Merkez & Alentejo",
    badge: "Tarih ve Şarap",
    desc: "Geniş mantar meşesi ormanları, zeytinlikleri ve tarihi Roma Tapınağı ile insan kemikleriyle kaplı Kemikler Şapeli'ne ev sahipliği yapan huzurlu bölge.",
    highlights: ["Capela dos Ossos (Kemikler Şapeli)", "Évora Roma Tapınağı", "Alentejo Şarap Tadımı", "Monsaraz Surlu Kasabası"],
    image: "https://images.unsplash.com/photo-1529260830199-42c24126f198?w=800&q=80",
    rating: 4.7
  }
];

export const FUN_FACTS = [
  {
    number: "01",
    title: "Avrupa'nın En Eski Sınırları",
    desc: "Portekiz'in ulusal sınırları 1249 yılından bu yana neredeyse hiç değişmemiştir. Avrupa'nın en eski ulus-devleti unvanını taşır."
  },
  {
    number: "02",
    title: "Dünyanın En Büyük Dalga Sörfü",
    desc: "Nazaré sahilinde denizaltı kanyonunun etkisiyle oluşan dev dalgalarda Alman sörfçü Sebastian Steudtner 26.21 metrelik dalgayı sörfleyerek Guinness rekoru kırmıştır."
  },
  {
    number: "03",
    title: "En Eski Kitapçı",
    desc: "Lizbon'daki Livraria Bertrand, 1732 yılından bu yana aralıksız hizmet vererek dünyanın hâlâ açık en eski kitapçısı olarak Guinness Rekorlar Kitabı'na girmiştir."
  },
  {
    number: "04",
    title: "Japonya'ya Tempura'yı Tanıttılar",
    desc: "16. yüzyılda Japonya'ya ulaşan Portekizli misyoner ve tüccarlar, sebzeleri ve deniz ürünlerini hamura bulayıp kızartma tekniği olan 'Peixinhos da Horta'yı tanıttı ve Japon 'Tempura'sı doğdu."
  },
  {
    number: "05",
    title: "Çay İçeceğini İngiltere'ye Getiren Kraliçe",
    desc: "İngiltere Kralı II. Charles ile evlenen Portekizli Prenses Catarina de Bragança, İngiliz sarayına çay içme kültürünü, porselen fincanları ve marmeladı tanıtan kişidir."
  },
  {
    number: "06",
    title: "Kansız Devrim",
    desc: "1974 Karanfil Devrimi sırasında tek bir kurşun bile atılmamış, silah sesleri yerine sokaklarda radyolardan çalınan şarkılar ve tüfek namlularına takılan kırmızı karanfiller yer almıştır."
  },
  {
    number: "07",
    title: "Dünya Mantar Lideri",
    desc: "Portekiz, dünyadaki mantar (mantar meşesi ağacı kabuğu) arzının %50'den fazlasını tek başına karşılar. Mantar meşesi ağacını kesmek kanunlarla yasaktır."
  },
  {
    number: "08",
    title: "En Eski Diplomatik İttifak",
    desc: "1386 Windsor Antlaşması ile Portekiz ve İngiltere arasında kurulan ittifak, dünya tarihinde günümüzde hâlâ yürürlükte olan en eski diplomatik anlaşmadır."
  },
  {
    number: "09",
    title: "Yenilenebilir Enerjide Öncü",
    desc: "Portekiz, bazı dönemlerde ülke genelindeki elektrik ihtiyacının tamamını arka arkaya günlerce rüzgar, güneş ve hidroelektrik gibi %100 temiz kaynaklardan karşılayabilmektedir."
  },
  {
    number: "10",
    title: "Barcelos Horozu Efsanesi",
    desc: "Ülkenin her yerinde seramikte ve hediyeliklerde görülen renkli 'Galo de Barcelos' horozu, masum bir hacıyı idamdan kurtarmak için pişmişken canlanıp öttüğüne inanılan efsanevi adalet sembolüdür."
  },
  {
    number: "11",
    title: "Vasco da Gama Köprüsü",
    desc: "Lizbon'da Tejo Nehri üzerinde yer alan 17.2 kilometrelik Vasco da Gama Köprüsü, Avrupa'nın en uzun ve mimari açıdan en etkileyici köprülerinden biridir."
  },
  {
    number: "12",
    title: "Uyuşturucu Politikasında Devrim",
    desc: "2001 yılında Portekiz dünyada bir ilki gerçekleştirerek tüm uyuşturucu maddelerin kişisel kullanımını suç olmaktan çıkarıp tıbbi ve psikolojik rehabilitasyon modeline geçmiştir."
  }
];

export const TURKEY_PORTUGAL_RELATIONS = {
  summary: "Türkiye ve Portekiz, Avrupa'nın doğu ve batı uçlarında yer alan iki köklü Akdeniz ve Atlantik ülkesi olarak NATO ittifakı başta olmak üzere çok güçlü siyasi, ticari ve kültürel bağlara sahiptir.",
  points: [
    {
      title: "NATO Müttefikliği ve Savunma",
      desc: "Her iki ülke de NATO ittifakının önemli üyeleridir. Ortak askeri tatbikatlar, terörle mücadele işbirliği ve deniz güvenliği konularında yakın koordinasyon halindedirler.",
      icon: "🛡️"
    },
    {
      title: "Büyüyen Ticaret ve Ekonomik Köprüler",
      desc: "İki ülke arasındaki ticaret hacmi yıllık 3 milyar dolar seviyesine yaklaşmıştır. Tekstil, otomotiv parçaları, demir-çelik, zeytinyağı ve teknoloji alanlarında karşılıklı yatırımlar mevcuttur.",
      icon: "📈"
    },
    {
      title: "Altın Vize (Golden Visa) ve Yatırımlar",
      desc: "Portekiz'in sunduğu yatırımcı oturum programı (Golden Visa), Türk iş insanları, yazılımcılar ve gayrimenkul yatırımcıları tarafından en çok tercih edilen rotaların başında gelmektedir.",
      icon: "🏡"
    },
    {
      title: "Turizm ve Doğrudan Uçuşlar",
      desc: "Türk Hava Yolları'nın Lizbon ve Porto'ya düzenlediği düzenli doğrudan seferler sayesinde her iki ülkenin vatandaşları arasındaki turistik hareketlilik rekor seviyelere ulaşmıştır.",
      icon: "✈️"
    },
    {
      title: "Futbol ve Spor Kardeşliği",
      desc: "Ricardo Quaresma, Pepe, Nani, Raul Meireles ve Gedson Fernandes gibi dünyaca ünlü Portekizli futbolcuların Türk kulüplerinde sergilediği unutulmaz performanslar iki halk arasında duygusal bir bağ kurmuştur.",
      icon: "⚽"
    },
    {
      title: "Kültürel ve Akademik Değişim",
      desc: "Erasmus programı kapsamında binlerce Türk ve Portekizli üniversite öğrencisi karşılıklı eğitim görmekte; Lizbon ve İstanbul'da film festivalleri ve kültür günleri düzenlenmektedir.",
      icon: "🎓"
    }
  ]
};

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: "Portekiz'in başkenti Lizbon'daki efsanevi tarihi sarı tramvay hattının numarası kaçtır?",
    options: ["Tramvay 12", "Tramvay 28", "Tramvay 15", "Tramvay 33"],
    answer: 1,
    explanation: "Alfama'nın dar yokuşlarından süzülen 28 numaralı sarı tramvay, Lizbon'un en ikonik turistik sembolüdür."
  },
  {
    id: 2,
    question: "Portekizce'ye özgü olan; geçmişteki güzel günlere duyulan nostaljik özlemi ve melankoliyi ifade eden kelime hangisidir?",
    options: ["Saudade", "Obrigado", "Fado", "Azulejo"],
    answer: 0,
    explanation: "'Saudade', tam olarak tek kelimeyle başka dillere çevrilemeyen derin bir özlem ve buruk bir mutluluk halidir."
  },
  {
    id: 3,
    question: "Aşağıdakilerden hangisi Portekiz'in Atlas Okyanusu'ndaki özerk volkanik takımadalarından biridir?",
    options: ["Kanarya Adaları", "Azor Adaları (Açores)", "İbiza", "Sardinya"],
    answer: 1,
    explanation: "Azor Adaları ve Madeira, Portekiz'in Atlas Okyanusu'nda yer alan özerk volkanik ada bölgeleridir."
  },
  {
    id: 4,
    question: "Dünyaca ünlü Portekiz kremalı tartı 'Pastel de Nata' ilk olarak nerede ortaya çıkmıştır?",
    options: ["Porto Şarap Mahzenleri", "Jerónimos Manastırı (Belém)", "Pena Sarayı", "Coimbra Üniversitesi"],
    answer: 1,
    explanation: "Pastel de Nata, 18. yüzyılda Belém'deki Jerónimos Manastırı rahipleri tarafından yaratılmıştır."
  },
  {
    id: 5,
    question: "1974 yılında diktatörlüğü deviren kansız askeri darbeye ne ad verilir?",
    options: ["Gül Devrimi", "Kadife Devrim", "Karanfil Devrimi", "Lale Devrimi"],
    answer: 2,
    explanation: "25 Nisan 1974'te askerlerin silah namlularına karanfiller takıldığı için bu isyan 'Karanfil Devrimi' olarak tarihe geçmiştir."
  }
];

export const MORE_IMAGES_END = [
  {
    url: "https://images.unsplash.com/photo-1548707309-dcebeab426c8?w=1200&q=80",
    title: "Algarve'nin Saklı Kumsalları",
    tag: "Doğa Harikası",
    span: "col-span-1 md:col-span-2 row-span-2"
  },
  {
    url: "https://images.unsplash.com/photo-1585208798174-6cedd86e019a?w=1200&q=80",
    title: "Portekiz Çini Sanatı (Azulejo)",
    tag: "Kültürel Miras",
    span: "col-span-1 row-span-1"
  },
  {
    url: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=1200&q=80",
    title: "Lizbon Gün Batımı",
    tag: "Romantizm",
    span: "col-span-1 row-span-2"
  },
  {
    url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200&q=80",
    title: "Madeira Uçurumları",
    tag: "Macera",
    span: "col-span-1 row-span-1"
  },
  {
    url: "https://images.unsplash.com/photo-1513735492761-c3ba6e5653fb?w=1200&q=80",
    title: "Douro Terasları",
    tag: "Şarap Rotası",
    span: "col-span-1 md:col-span-2 row-span-1"
  },
  {
    url: "https://images.unsplash.com/photo-1536663815808-535e2280d2c2?w=1200&q=80",
    title: "Sintra Ormanları",
    tag: "Masalsı",
    span: "col-span-1 row-span-1"
  }
];
