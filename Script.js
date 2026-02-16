// Enter key se message send karne ka sahi tareeqa
document.addEventListener('DOMContentLoaded', () => {
    const inputField = document.getElementById('symptomInput');
    
    if (inputField) {
        inputField.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault(); // Page refresh hone se rokne ke liye
                sendSymptom();
            }
        });
    }
});

async function sendSymptom() {
    const input = document.getElementById('symptomInput');
    const message = input.value.trim();
    if (!message) return;

    const chatContainer = document.getElementById('chatContainer');
    const sendButton = document.getElementById('sendButton');

    // User Message dikhana
    const userMsg = document.createElement('div');
    userMsg.className = 'message user';
    userMsg.textContent = message;
    chatContainer.appendChild(userMsg);

    input.value = '';
    sendButton.disabled = true;

    try {
        await new Promise(resolve => setTimeout(resolve, 600)); 
        
        let aiResponse = "";
        const msgLower = message.toLowerCase();

        if (msgLower.includes("headache")) {
            aiResponse = "I understand you have a headache. Rest in a dark room and stay hydrated. See a doctor if it persists.";
        } else if (msgLower.includes("pain")) {
            aiResponse = "Body pain can be due to strain. Rest is recommended. Seek medical help if it's severe.";
        } else if (msgLower.includes("thanks")) {
            aiResponse = "You're welcome! Stay healthy.";
        } else {
            aiResponse = "I've noted: '" + message + "'. Please monitor your symptoms and consult a doctor for diagnosis.";
        }

        const aiMsg = document.createElement('div');
        aiMsg.className = 'message ai';
        aiMsg.textContent = aiResponse;
        chatContainer.appendChild(aiMsg);

    } catch (error) {
        console.error("Error:", error);
    }

    sendButton.disabled = false;
    chatContainer.scrollTop = chatContainer.scrollHeight;
}