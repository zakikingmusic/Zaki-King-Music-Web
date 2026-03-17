// ============================================
// 🎵 ZAKI KING MUSIC - Albums Database
// ============================================
// لإضافة ألبوم جديد، انسخ كتلة كاملة
// وأضفها في أول القائمة (أحدث أولاً)
// ============================================

const ALBUMS = [

    // --- ألبوم 5 (قادم) ---
    {
        id: 5,
        title: "Coming Soon",
        description: "The next chapter is being written...",
        cover: "Zaki_King_Music_Logo.jpg",
        spotifyUrl: "#",
        youtubeUrl: "#",
        pushfmUrl: "#",
        year: "2026",
        genre: "Unknown",
        status: "coming_soon"
    },

    // --- ألبوم 4 ---
    {
        id: 4,
        title: "Steel Throne",
        description: "Epic, cinematic music based on military rhythms and drums that immerses you in the atmosphere of war.",
        cover: "Steel_Throne.jpg",
        spotifyUrl: "https://open.spotify.com/track/4W1HVNX3ohK6YTajVvfbbi?si=I8r4hkMuTJSHS91wEWHKog",
        youtubeUrl: "https://www.youtube.com/@zakikingmusic",
        pushfmUrl: "https://push.fm/YOUR_STEEL_THRONE_LINK",
        year: "2025",
        genre: "Epic / Cinematic",
        status: "released"
    },

    // --- ألبوم 3 ---
    {
        id: 3,
        title: "Dimensions Of Memory",
        description: "Music based on string instruments that evokes feelings of calm and tranquility.",
        cover: "Dimensions_Of_Memory.jpg",
        spotifyUrl: "https://open.spotify.com/artist/5SY0LBMYUXGyoj2UwxLSXu/",
        youtubeUrl: "https://www.youtube.com/@zakikingmusic",
        pushfmUrl: "https://push.fm/YOUR_DIMENSIONS_LINK",
        year: "2024",
        genre: "Orchestral / Ambient",
        status: "released"
    },

    // --- ألبوم 1 ---
    {
        id: 1,
        title: "The Drop",
        description: "Electronic music based on powerful rhythms and beats.",
        cover: "The_Drop.png",
        spotifyUrl: "https://open.spotify.com/track/78DU6QcJaSGLB8cUQASYPn?si=_5yEO4J2R1uHWRmm0hiTpw",
        youtubeUrl: "https://www.youtube.com/@zakikingmusic",
        pushfmUrl: "https://push.fm/YOUR_THE_DROP_LINK",
        year: "2023",
        genre: "Electronic",
        status: "released"
    }

];

if (typeof module !== 'undefined') module.exports = ALBUMS;
