const profileImg = document.getElementById('profile-img');

profileImg.addEventListener('mouseover', () => {
    profileImg.src = 'imag/me.png'; // เปลี่ยนเป็น path ของรูปภาพที่คุณต้องการ
});

profileImg.addEventListener('mouseout', () => {
    profileImg.src = 'imag/mekid1.png'; // กลับเป็นรูปภาพเดิม
});