var swiper = new Swiper(".mySwiperPopuler", {
    grabCursor: true,
    spaceBetween: 20,
    centeredSlides: false,
    slidesPerView: "auto",
    navigation: {
        nextEl: ".bx-chevron-right-circle",
        prevEl: ".bx-chevron-left-circle",
    },
});


document.getElementById("lihatSemuaKos").addEventListener("click", function() {
    window.location.href = "sebelum-login/lihat_semua.html";
});


function login(){
    window.location.href = "masuk-login/login.html";
}

function login2(){
    window.location.href = "../masuk-login/login.html";
}

function toPembayaran(){
    window.location.href = "pembayaran.html";
}

// AOS
AOS.init();

function initChat() {
    const chatOverlay = document.getElementById('chat-overlay');
    const chatToggle = document.getElementById('chat-toggle');
    const messageInput = document.getElementById('message-input');
    const sendButton = document.getElementById('send-button');
    const chatIcon = document.getElementById("chat-icon");
    const closeChatButton = document.getElementById("close-chat-overlay");
    const chatMessages = document.getElementById("chat-messages");

    // Event handler untuk menampilkan atau menyembunyikan chat overlay
    chatToggle.addEventListener('click', function () {
        toggleChatOverlay();
    });

    sendButton.addEventListener('click', function () {
        const message = messageInput.value.trim();

        if (message !== '') {
            appendMessage('you', message);
            // Kirim pesan ke backend atau pemilik kos di sini
            messageInput.value = '';
        }
    });

    function appendMessage(sender, text) {
        const messageElement = document.createElement('div');
        messageElement.innerHTML = `<strong>${sender}:</strong> ${text}`;
        chatMessages.appendChild(messageElement);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    // JavaScript untuk menutup chat overlay saat tombol "X" diklik
    closeChatButton.addEventListener("click", function() {
        closeChatOverlay();
    });

    // Saat tombol ikon chat diklik, tampilkan chat overlay
    chatIcon.addEventListener("click", function() {
        openChatOverlay();
    });

    function toggleChatOverlay() {
        if (chatOverlay.style.right === '0px' || chatOverlay.style.right === '') {
            chatOverlay.style.right = '-400px'; // Menyembunyikan chat
        } else {
            chatOverlay.style.right = '0px'; // Menampilkan chat
        }
    }

    function openChatOverlay() {
        chatOverlay.style.right = '0px';
    }

    function closeChatOverlay() {
        chatOverlay.style.right = '-400px';
    }
}

// Panggil fungsi inisialisasi chat saat DOM selesai dimuat
document.addEventListener('DOMContentLoaded', function () {
    initChat();
});
