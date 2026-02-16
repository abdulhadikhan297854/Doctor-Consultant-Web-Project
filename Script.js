async function sendSymptom() {
    const input = document.getElementById('symptomInput');
    const message = input.value.trim();
    if (!message) return;

    const chatContainer = document.getElementById('chatContainer');
    const sendButton = document.getElementById('sendButton');

    // 1. User Message Display
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

        // 2. Comprehensive Keyword Logic
        if (msgLower.includes("hello") || msgLower.includes("hi") || msgLower.includes("hey")) {
            aiResponse = "Hello! I am your AI health assistant. Please tell me your symptoms so I can guide you.";
        } 
        else if (msgLower.includes("headache") || msgLower.includes("head pain")) {
            aiResponse = "For a headache, try resting in a quiet, dark room and stay hydrated. If it persists, please consult a doctor.";
        } 
        else if (msgLower.includes("fever") || msgLower.includes("high temperature")) {
            aiResponse = "If you have a fever, monitor your temperature, rest, and drink plenty of fluids. Seek medical help if the fever stays high.";
        }
        else if (msgLower.includes("pain") || msgLower.includes("body ache") || msgLower.includes("stomach")) {
            aiResponse = "Body or stomach pain can be due to many reasons. Avoid heavy food and rest. If the pain is sharp or severe, see a doctor immediately.";
        }
        else if (msgLower.includes("cold") || msgLower.includes("cough") || msgLower.includes("flu")) {
            aiResponse = "For cold or cough, warm fluids and rest are helpful. If you have breathing difficulties, please seek urgent medical care.";
        }
        else if (msgLower.includes("thanks") || msgLower.includes("thank you")) {
            aiResponse = "You're very welcome! Stay healthy and take care.";
        }
        else {
            // Default response agar koi keyword match na ho
            aiResponse = "I've noted that you're feeling '" + message + "'. Please monitor your symptoms closely and consult a healthcare professional for a proper diagnosis.";
        }

        // 3. AI Message Display
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

// Enter Key Fix: Isay function ke bahar rakhein
document.addEventListener('DOMContentLoaded', () => {
    const inputField = document.getElementById('symptomInput');
    if (inputField) {
        inputField.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                sendSymptom();
            }
        });
    }
});