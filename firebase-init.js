< !--Firebase App(core) SDK-- >
    <script type="module">
        import {initializeApp} from "https://www.gstatic.com/firebasejs/12.12.0/firebase-app.js";
        import {getAnalytics} from "https://www.gstatic.com/firebasejs/12.12.0/firebase-analytics.js";
        import {getFirestore, setDoc, doc, getDoc} from "https://www.gstatic.com/firebasejs/12.12.0/firebase-firestore.js";

        const firebaseConfig = {
            apiKey: "AIzaSyCjKko57BvZd3phCt9Kw9rZdqLnoM-Z24c",
        authDomain: "question-750ae.firebaseapp.com",
        projectId: "question-750ae",
        storageBucket: "question-750ae.firebasestorage.app",
        messagingSenderId: "652425702514",
        appId: "1:652425702514:web:a251a7f0916407f35c66eb",
        measurementId: "G-9R80SV7VHG"
  };

        // Inicializa Firebase
        const app = initializeApp(firebaseConfig);
        const analytics = getAnalytics(app);
        const db = getFirestore(app);

        // Torna o Firestore acessível globalmente
        window.firebaseDB = db;
        window.firebaseSetDoc = setDoc;
        window.firebaseDoc = doc;
        window.firebaseGetDoc = getDoc;
    </script>
