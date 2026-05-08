// [추가] 다크/라이트 모드 토글 JavaScript (과제 수정 전)
// function toggleTheme() {
//     const body = document.body;
//     const btn = document.getElementById('themeToggleBtn');
//     const navbar = document.querySelector('.navbar');

//     body.classList.toggle('light-mode');
    
//     if (body.classList.contains('light-mode')) {
//         btn.textContent = '☀️ LIGHT';
//         navbar.classList.remove('navbar-dark', 'bg-dark');
//         navbar.classList.add('navbar-light', 'bg-light');
//     } else {
//         btn.textContent = '🌙 DARK';
//         navbar.classList.remove('navbar-light', 'bg-light');
//         navbar.classList.add('navbar-dark', 'bg-dark');
//     }
// }

// 2. [수정 사항] 버튼에 클릭 이벤트 리스너를 직접 연결합니다.
// document.addEventListener('DOMContentLoaded', () => {
//     const themeBtn = document.getElementById('themeToggleBtn');
//     if (themeBtn) {
//         // HTML의 onclick 대신 여기서 클릭 이벤트를 감시합니다.
//         themeBtn.addEventListener('click', toggleTheme);
//     }
// });

// 최종 수정
function toggleTheme() {
    const body = document.body;
    const btn = document.getElementById('themeToggleBtn');
    const navbar = document.querySelector('.navbar');

    body.classList.toggle('light-mode');
    
    if (body.classList.contains('light-mode')) {
        if (btn) btn.textContent = '☀️ LIGHT';
        // 부트스트랩 5 테마 속성 변경
        if (navbar) {
            navbar.setAttribute('data-bs-theme', 'light');
            navbar.classList.remove('navbar-dark');
            navbar.classList.add('navbar-light');
        }
    } else {
        if (btn) btn.textContent = '🌙 DARK';
        if (navbar) {
            navbar.setAttribute('data-bs-theme', 'dark');
            navbar.classList.remove('navbar-light');
            navbar.classList.add('navbar-dark');
        }
    }
}

// 이벤트 리스너 등록 (HTML 파일 로드 후 실행)
document.addEventListener('DOMContentLoaded', () => {
    const themeBtn = document.getElementById('themeToggleBtn');
    if (themeBtn) {
        themeBtn.addEventListener('click', toggleTheme);
    }
});