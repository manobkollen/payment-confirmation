// ফর্ম সাবমিশন হ্যান্ডেল করুন
document.getElementById('paymentForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // ইনপুট ভ্যালু পান
    const sender = document.getElementById('sender').value;
    const amount = document.getElementById('amount').value;
    const transaction = document.getElementById('transaction').value;
    const datetime = document.getElementById('datetime').value;

    // ডেটা ফরম্যাট করুন
    const formattedAmount = '৳ ' + parseFloat(amount).toLocaleString('en-BD');
    const formattedDatetime = formatDateTime(datetime);

    // সাফল্য পেজে ডেটা দেখান
    document.getElementById('displaySender').textContent = sender;
    document.getElementById('displayAmount').textContent = formattedAmount;
    document.getElementById('displayTransaction').textContent = transaction;
    document.getElementById('displayDatetime').textContent = formattedDatetime;

    // ফর্ম লুকান এবং সাফল্য পেজ দেখান
    document.getElementById('formSection').classList.remove('active');
    document.getElementById('successSection').classList.add('active');

    // স্ক্রল টপে নিয়ে যান
    window.scrollTo(0, 0);
});

// তারিখ ও সময় ফরম্যাট করুন (বাংলা ফরম্যাট)
function formatDateTime(datetimeString) {
    const date = new Date(datetimeString);
    
    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
    };
    
    return date.toLocaleString('bn-BD', options);
}

// ফর্ম রিসেট করুন
function resetForm() {
    document.getElementById('paymentForm').reset();
    document.getElementById('successSection').classList.remove('active');
    document.getElementById('formSection').classList.add('active');
    window.scrollTo(0, 0);
}

// স্বয়ংক্রিয়ভাবে বর্তমান তারিখ ও সময় সেট করুন
document.addEventListener('DOMContentLoaded', function() {
    const datetimeInput = document.getElementById('datetime');
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    
    datetimeInput.value = `${year}-${month}-${day}T${hours}:${minutes}`;
});