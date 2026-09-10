const members = [

    {
        name: "SNOW",
        role: "FOUNDER",
        status: "ONLINE"
    },

    {
        name: "ONSTAR",
        role: "MEMBER",
        status: "ONLINE"
    },

    {
        name: "MIDAIPRO",
        role: "MEMBER",
        status: "OFFLINE"
    },

    {
        name: "XTHREE",
        role: "MEMBER",
        status: "ONLINE"
    }

];


const counter =
    document.getElementById("memberCount");


if (counter) {

    counter.textContent =
        members.length;

}
const music = document.getElementById("bgMusic");
const playButton = document.getElementById("musicPlay");
const volumeControl = document.getElementById("volumeControl");
const musicStatus = document.getElementById("musicStatus");
const statusDot = document.getElementById("musicStatusDot");
const musicPlayer = document.querySelector(".music-player");

music.volume = 0.7;

function updateMusicUI() {

    if (!music.paused) {

        playButton.textContent = "Ⅱ";
        musicStatus.textContent = "PLAYING";
        statusDot.classList.add("playing");
        musicPlayer.classList.add("playing");

    } else {

        playButton.textContent = "▶";
        musicStatus.textContent = "STOPPED";
        statusDot.classList.remove("playing");
        musicPlayer.classList.remove("playing");
    }
}

/* ปุ่ม Play / Pause */

playButton.addEventListener("click", async () => {

    if (music.paused) {

        try {
            await music.play();
        } catch (error) {
            console.log("ไม่สามารถเล่นเพลงอัตโนมัติได้");
        }

    } else {

        music.pause();
    }

    updateMusicUI();
});

/* ปรับเสียง */

volumeControl.addEventListener("input", () => {
    music.volume = volumeControl.value;
});

/* พยายามเล่นอัตโนมัติ */

window.addEventListener("load", async () => {

    try {

        await music.play();

        updateMusicUI();

    } catch (error) {

        /*
         เบราว์เซอร์บล็อก Autoplay
         รอผู้ใช้กดครั้งแรก
        */

        musicStatus.textContent = "CLICK TO PLAY";
        updateMusicUI();
    }

});

section.innerHTML = `
    <div class="role-title ${info.class}">

        <div class="role-name">
            <span class="role-icon">${info.icon}</span>
            <h2>${info.name}</h2>
        </div>

        <p>${info.description}</p>

    </div>

    <div class="member-grid"></div>
`;

const roles = [
    "FOUNDER",
    "MANAGEMENT",
    "STAFF",
    "MEMBER"
];