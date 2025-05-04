// دالة لتسجيل الدخول 
async function login() { const email = document.getElementById('email').value; const password = document.getElementById('password').value; // مبدئيًا تسجيل الدخول وهمي فقط (يمكن تعديله لاحقًا)
                        if (email && password) { alert("تم تسجيل الدخول بنجاح!"); document.getElementById("loginForm").style.display = 'none'; document.getElementById("gameArea").style.display = 'block'; } else { alert("يرجى إدخال البريد وكلمة المرور."); } } 

// دالة لحفظ النتيجة عن طريق الباك اند 

async function saveResult(username, result) { try { const response = await fetch("https://assume-backend.onrender.com/api/results", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ username: username, result: result }) }); const data = await response.json(); alert("تم حفظ النتيجة بنجاح!"); } catch (error) { console.error("خطأ في إرسال النتيجة إلى الباك اند:", error); alert("فشل في حفظ النتيجة."); } } 

// دالة لنهاية اللعبة
function endGame(result) { const username = prompt("أدخل اسم المستخدم:"); if (username) { saveResult(username, result); } else { alert("لم يتم إدخال اسم المستخدم."); } }
