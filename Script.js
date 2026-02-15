<<<<<<< Updated upstream
const bar = document.getElementById("bar");
const nav = document.getElementById("nav");
const close = document.getElementById("close");

if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
  });
}

if (close) {
  close.addEventListener("click", () => {
    nav.classList.remove("active");
  });
}
=======
function showPage(pageId) {
            document.querySelectorAll('.page').forEach(page => {
                page.classList.remove('active');
            });
            document.getElementById(pageId).classList.add('active');
            window.scrollTo(0, 0);
        }

        async function sendSymptom() {
            const input = document.getElementById('symptomInput');
            const message = input.value.trim();
            
            if (!message) return;
            
            const chatContainer = document.getElementById('chatContainer');
            const sendButton = document.getElementById('sendButton');
            
            // Add user message
            const userMsg = document.createElement('div');
            userMsg.className = 'message user';
            userMsg.textContent = message;
            chatContainer.appendChild(userMsg);
            
            input.value = '';
            sendButton.disabled = true;
            
            // Scroll to bottom
            chatContainer.scrollTop = chatContainer.scrollHeight;
            
            try {
                // Call Claude AI API
                const response = await fetch('https://api.anthropic.com/v1/messages', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        model: 'claude-sonnet-4-20250514',
                        max_tokens: 1000,
                        messages: [{
                            role: 'user',
                            content: `You are a medical AI assistant. A patient describes: "${message}". Provide a helpful, empathetic response with possible causes and recommendations. Always remind them to consult a doctor for proper diagnosis. Keep response concise (3-4 sentences).`
                        }]
                    })
                });
                
                const data = await response.json();
                const aiResponse = data.content[0].text;
                
                // Add AI response
                const aiMsg = document.createElement('div');
                aiMsg.className = 'message ai';
                aiMsg.textContent = aiResponse;
                chatContainer.appendChild(aiMsg);
                
            } catch (error) {
                // Fallback response if API fails
                const aiMsg = document.createElement('div');
                aiMsg.className = 'message ai';
                aiMsg.textContent = "I understand you're experiencing " + message + ". Based on these symptoms, I recommend consulting with a healthcare professional for a proper evaluation. In the meantime, make sure to rest, stay hydrated, and monitor your symptoms. If symptoms worsen or you experience severe pain, seek immediate medical attention.";
                chatContainer.appendChild(aiMsg);
            }
            
            sendButton.disabled = false;
            chatContainer.scrollTop = chatContainer.scrollHeight;
        }

        // Allow Enter key to send message
        document.getElementById('symptomInput')?.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                sendSymptom();
            }
        });

        function bookAppointment(event) {
            event.preventDefault();
            document.getElementById('bookingSuccess').classList.add('show');
            setTimeout(() => {
                document.getElementById('appointmentForm').reset();
                document.getElementById('bookingSuccess').classList.remove('show');
            }, 3000);
        }
>>>>>>> Stashed changes
