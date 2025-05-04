//
// إعداد Firebase 
const firebaseConfig = { apiKey: "API_KEY", // استبدلها بالمفتاح الفعلي 
                        authDomain: "PROJECT_ID.firebaseapp.com", projectId: "PROJECT_ID", storageBucket: "PROJECT_ID.appspot.com", messagingSenderId: "SENDER_ID", appId: "APP_ID" }; 

// تهيئة Firebase 
const app = firebase.initializeApp(firebaseConfig); const db = firebase.firestore(app); const auth = firebase.auth(); // دالة لتسجيل الدخول 
async function login() { const email = document.getElementById('email').value; const password = document.getElementById('password').value; try { await auth.signInWithEmailAndPassword(email, password); alert("تم تسجيل الدخول بنجاح!"); document.getElementById("loginForm").style.display = 'none'; // إخفاء نموذج تسجيل الدخول // إخفاء نموذج تسجيل الدخول 
                                                                                                                                                document.getElementById("gameArea").style.display = 'block'; 
                                                                                                                                                // إظهار اللعبة 
                                                                                                                                               } catch (error) { alert("خطأ في تسجيل الدخول: " + error.message); } } 
                                                                                                                                                // دالة لحفظ النتيجة في Firebase 
async function saveResult(username, result) { try { await db.collection("game_results").add({ username: username, result: result, timestamp: new Date() }); alert("تم حفظ النتيجة بنجاح!"); } catch (error) { console.error("خطأ في حفظ النتيجة: ", error); } } // دالة لتفعيل نهاية اللعبة 
function endGame(result) { const username = prompt("أدخل اسم المستخدم:"); saveResult(username, result); // حفظ النتيجة في Firebase }
