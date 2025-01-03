// Morphing Tool
function openMorphingTool() {
    alert("Morphing Tool Coming Soon! Upload your video/image to apply transformations.");
}

// AI Subtitle Generator
function showSubtitleTool() {
    alert("AI Subtitle Generator is under development. Stay tuned for updates!");
}

// Fetch Latest Videos
async function fetchLatestVideos() {
    try {
        const response = await fetch('https://api.example.com/latest-videos'); // Replace with your API endpoint
        const videos = await response.json();

        const videoFeed = document.querySelector('.videos-feed');
        videoFeed.innerHTML = ''; // Clear existing content
        videos.forEach(video => {
            const videoCard = document.createElement('div');
            videoCard.className = 'video-card';
            videoCard.innerHTML = `
                <img src="${video.thumbnail}" alt="${video.title}">
                <div class="video-title">${video.title}</div>
                <div class="video-description">${video.description}</div>
            `;
            videoFeed.appendChild(videoCard);
        });
    } catch (error) {
        console.error('Error fetching videos:', error);
    }
}

// Load videos when the page loads
window.onload = fetchLatestVideos;
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB6WsJgmolCH3J7NnaFj1-jhRqdZvdRZO0",
  authDomain: "zodak-stream.firebaseapp.com",
  databaseURL: "https://zodak-stream-default-rtdb.firebaseio.com",
  projectId: "zodak-stream",
  storageBucket: "zodak-stream.firebasestorage.app",
  messagingSenderId: "553863110606",
  appId: "1:553863110606:web:374e260904a22f47a4d59f",
  measurementId: "G-5N1ZLRFNG7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
import { getFirestore, collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

const db = getFirestore();

// Add Data
async function addVideo() {
    try {
        const docRef = await addDoc(collection(db, "videos"), {
            title: "Test Video",
            description: "This is a test video."
        });
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}

// Fetch Data
async function fetchVideos() {
    const querySnapshot = await getDocs(collection(db, "videos"));
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
    });
}

addVideo();
fetchVideos();
import { ref, set } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";

function saveVideoData(videoId, title, description) {
    set(ref(database, 'videos/' + videoId), {
        title: title,
        description: description
    }).then(() => {
        console.log("Data saved successfully!");
    }).catch((error) => {
        console.error("Error saving data:", error);
    });
}

saveVideoData("video1", "Sample Video", "This is a test description");import { ref, get } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";

function fetchVideoData(videoId) {
    const videoRef = ref(database, 'videos/' + videoId);
    get(videoRef).then((snapshot) => {
        if (snapshot.exists()) {
            console.log(snapshot.val());
        } else {
            console.log("No data available");
        }
    }).catch((error) => {
        console.error("Error fetching data:", error);
    });
}

fetchVideoData("video1");