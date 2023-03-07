let songs = [
    {
        songName: 'Billiejean',
        musicSrc: './songs/music1.mp3',
        imgSrc: './img/img1.jpg',
        creator: 'Michael Jackson',
        issueDate: '30/11/1982',
        topText: 'According to Jackson\'s biographer J. Randy Taraborrelli, "Billie Jean" was inspired by letters Jackson received in 1981 from a woman claiming he was the father of one of her twins. Jackson, who regularly received letters of this kind, had never met the woman and ignored those claims.',
        reviews: 'Billie jean is the peak of Jackson’s many collaborations with Quincy Jones, “Billie Jean” is a song in which every single element is in its right place. The crisp beat, pulsing bass, and dramatic strings provide a perfect backdrop for one of Jackson’s greatest vocal performances.',
        rate: '9/10'
    },
    {
        songName: 'Random access memories',
        musicSrc: './songs/music2.mp3',
        imgSrc: './img/img2.jpg',
        creator: 'Daft Punk',
        issueDate: '17/5/2013',
        topText: 'Random Access Memories became Daft Punk\'s first and only album to top the US Billboard 200, and has since been certified platinum by the Recording Industry Association of America (RIAA). It also topped the charts in twenty other countries.',
        reviews: 'French duo Daft Punk helped create our current stadium-shaking, Coachload-dominating dance-music moment, and their new album is by far the year’s most anticipated EDM set. The only issue is that it sounds almost nothing like EDM. Enjoy it, it will not let you down.',
        rate: '8/10'
    },
    {
        songName: 'Highway to hell',
        musicSrc: './songs/music3.mp3',
        imgSrc: './img/img3.jpg',
        creator: 'AC/DC',
        issueDate: '27/7/1979',
        topText: 'In 2013, AC/DC fans Steevi Diamond and Jon Morter spearheaded a Facebook campaign to make "Highway to Hell" a Christmas number-one single on the UK Singles Chart. The campaign raised funds for Feel Yourself, a testicular cancer-awareness charity.',
        reviews: 'Highway to Hell, the sixth studio album by AC/DC, is a classic hard rock album. The album showcases the band\'s trademark sound of driving guitar riffs and catchy choruses, making it a must-listen for any fan of rock music. With its energetic and rebellious spirit, "Highway to Hell" became one of AC/DC\'s most enduring works.',
        rate: '8/10'
    },
    {
        songName: 'Bohemian Rhapsody',
        musicSrc: './songs/music4.mp3',
        imgSrc: './img/img4.jpg',
        creator: 'Queen',
        issueDate: '31/10/1975',
        topText: 'It\'s one of those songs which has such a fantasy feel about it. I think people should just listen to it, think about it, and then make up their own minds as to what it says to them ... "Bohemian Rhapsody" didn\'t just come out of thin air. I did a bit of research although it was tongue-in-cheek and mock opera. Why not？ — Freddie Mercury',
        reviews: '"Bohemian Rhapsody" by Queen is an absolute masterpiece. It\'s one of those songs that you can listen to over and over again and still discover new things about it. Freddie Mercury\'s voice is out of this world, and the song\'s mix of styles and genres is pure genius.',
        rate: '9/10'
    },
    {
        songName: "It's Now or Never",
        musicSrc: './songs/music5.mp3',
        imgSrc: './img/img5.jpg',
        creator: 'Elvis Presley',
        issueDate: '5/7/1960',
        topText: 'It\'s Now or Never is one of two popular songs based on the Italian song of the Neapolitan language, \'O Sole mio. the other being There\'s No Tomorrow, recorded by U.S. singer Tony Martin in 1949, which inspired Presley\'s version.',
        reviews: 'It\'s Now or Never by Elvis Presley is a total classic. You can\'t help but feel romantic when you hear that soaring melody and Elvis\'s velvety voice. It\'s the kind of song you want to slow dance to with someone special.',
        rate: '10!'
    },
    {
        songName: 'Wonder of You',
        musicSrc: './songs/music6.mp3',
        imgSrc: './img/img6.jpg',
        creator: 'Elvis Presley',
        issueDate: '21/10/2016',
        topText: 'Ray Peterson told the story that Baker Knight confided that "The Wonder of You" was originally written as a gospel song. The name of the song also becomes the name of the boss’s stand in the comic book JoJo\'s Bizarre Adventure.',
        reviews: 'The Wonder of You by Elvis Presley is a total vibe. It\'s got that classic \'70s sound with the big orchestration and smooth vocals, and the lyrics are just so heartfelt. It\'s a must-listen for any Elvis fan or lover of old-school ballads.',
        rate: '9/10'
    },
    {
        songName: 'Happy',
        musicSrc: './songs/music7.mp3',
        imgSrc: './img/img7.jpg',
        creator: ' Pharrell Williams',
        issueDate: '6/18/2013',
        topText: 'In May 2014, a group of Iranian fans who created a tribute to "Happy" was arrested. According to a police chief, the song represented vulgarity and also hurt public chastity. Williams responded to the arrest in a tweet stating "It\'s beyond sad these kids were arrested for trying to spread happiness."',
        reviews: 'I absolutely love Happy by Pharrell Williams. It\'s one of those songs that just makes you feel good. The melody is so catchy and fun, and the lyrics are all about celebrating life and being happy. It\'s the ultimate feel-good anthem and the perfect song to blast when you\'re driving with the windows down.',
        rate: ' 8/10'
    },
    {
        songName: 'YMCA',
        musicSrc: './songs/music8.mp3',
        imgSrc: './img/img8.jpg',
        creator: 'Village People',
        issueDate: '31/12/1969',
        topText: 'Donald Trump began using the song to close out his rallies during his 2020 re-election campaign. Willis initially approved its use but after several incidents involving the Black Lives Matter protests, he demanded Trump to stop.',
        reviews: 'Even people believe this song got other meanings. YMCA by the Village People is still an absolute party choice. As soon as those opening notes hit, you know it\'s time to get up and start dancing. And everyone knows the dance moves - it\'s a classic that never gets old.',
        rate: '7/10'
    },
    {
        songName: 'Lets groove',
        musicSrc: './songs/music9.mp3',
        imgSrc: './img/img9.jpg',
        creator: 'Earth, Wind & Fire',
        issueDate: '10/5/2010',
        topText: 'The "Let\'s Groove" single and the album Raise! both sport cover art with Egyptian themes. If you notice a lot of Egyptian themes in and around the disco era in the US, that\'s because the whole country was going through an Egyptian fad. This craze was sparked in part by the ancient Egyptian treasures of King Tut being re-discovered',
        reviews: 'Let\'s Groove by Earth, Wind & Fire is a certified bop. It\'s got that funky disco sound that just makes you want to move your feet. And the chorus is so catchy - you can\'t help but sing along. It\'s the perfect song for any dance party or workout playlist.',
        rate: '7/10'
    },
    {
        songName: 'September',
        musicSrc: './songs/music10.mp3',
        imgSrc: './img/img10.jpg',
        creator: 'Earth, Wind & Fire',
        issueDate: '20/10/2007',
        topText: 'The song is one of six randomly-selected songs that may play on the Guardians of the Galaxy: Cosmic Rewind roller coaster. Also, Movies that used this song include Night at the Museum, The Ringer, Soul Food, Dan In Real Life, and Babel.',
        reviews: 'September by Earth, Wind & Fire is a must-have on any party playlist. It\'s the ultimate feel-good song that everyone knows and loves. And even if you don\'t know all the words, you can\'t resist singing along to the "ba-dee-ya" chorus. It\'s a timeless classic that never gets old.',
        rate: '9/10'
    },
]
let songIndex = 0;

let left_img = document.querySelector(".left_img")
let right_img = document.querySelector(".right_img")

let center_img_con = document.querySelector(".center_img_con")
let name = document.querySelector(".name")
let time = document.querySelector(".time")
let creator = document.querySelector(".creator")
let top_text = document.querySelector(".top_text")
let bottom_text_c = document.querySelector(".bottom_text_c")
let big_text = document.querySelector(".big_text")
let audio_ref = document.querySelector(".audio_ref")
let click_hear = document.querySelector(".click_hear")
let click_kz = document.querySelector(".click_kz")
left_img.onclick = function () {
    if(songIndex == 0){
        songIndex = 9
    }else {
        songIndex = songIndex - 1
    }
    setHtmlText(songIndex)
}
right_img.onclick = function () {
    if(songIndex == 9){
        songIndex = 0
    }else {
        songIndex = songIndex + 1
    }
    setHtmlText(songIndex)
}
let musicOr = false
click_hear.onclick = function () {
    musicOr = !musicOr
    if(musicOr){
        click_kz.src = 'img/zanting.png'
        audio_ref.play()
    }else {
        click_kz.src = 'img/kaishi.png'
        audio_ref.pause()
    }
}
function setHtmlText(index) {
    center_img_con.src = songs[index].imgSrc
    name.innerHTML = songs[index].songName
    time.innerHTML = songs[index].issueDate
    creator.innerHTML = songs[index].creator
    top_text.innerHTML = songs[index].topText
    bottom_text_c.innerHTML = songs[index].reviews
    big_text.innerHTML = songs[index].rate
    audio_ref.src = songs[index].musicSrc
    click_kz.src = 'img/kaishi.png'
}
