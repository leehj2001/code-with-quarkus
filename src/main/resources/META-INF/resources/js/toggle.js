// [추가] 다크/라이트 모드 토글 JavaScript
function toggleTheme() {
    const body = document.body;
    const btn = document.getElementById('themeToggleBtn');
    const navbar = document.querySelector('.navbar');

    body.classList.toggle('light-mode');
    
    if (body.classList.contains('light-mode')) {
        btn.textContent = '☀️ LIGHT';
        navbar.classList.remove('navbar-dark', 'bg-dark');
        navbar.classList.add('navbar-light', 'bg-light');
    } else {
        btn.textContent = '🌙 DARK';
        navbar.classList.remove('navbar-light', 'bg-light');
        navbar.classList.add('navbar-dark', 'bg-dark');
    }
}

// // 1. 페이지가 모두 로드되면 실행 (저장된 테마 불러오기 & 이벤트 리스너 등록)
// document.addEventListener('DOMContentLoaded', function() {
//     const body = document.body;
//     const btn = document.getElementById('themeToggleBtn');
//     const navbar = document.querySelector('.navbar');

//     // 브라우저 저장소(localStorage)에서 'theme' 정보 꺼내기
//     const savedTheme = localStorage.getItem('theme');

//     // 저장된 테마가 'light'라면 화면을 라이트 모드로 세팅
//     if (savedTheme === 'light') {
//         body.classList.add('light-mode');
//         if (btn) btn.textContent = '☀️ LIGHT';
//         if (navbar) {
//             navbar.classList.remove('navbar-dark', 'bg-dark');
//             navbar.classList.add('navbar-light', 'bg-light');
//         }
//     }

//     // 이벤트 리스너 등록 (HTML의 onclick 대신 JS에서 클릭 감지)
//     if (btn) {
//         btn.addEventListener('click', toggleTheme);
//     }
// });

// // 2. 버튼 클릭 시 실행될 테마 토글 함수
// function toggleTheme() {
//     const body = document.body;
//     const btn = document.getElementById('themeToggleBtn');
//     const navbar = document.querySelector('.navbar');

//     body.classList.toggle('light-mode');
    
//     // 라이트 모드일 때
//     if (body.classList.contains('light-mode')) {
//         if (btn) btn.textContent = '☀️ LIGHT';
//         if (navbar) {
//             navbar.classList.remove('navbar-dark', 'bg-dark');
//             navbar.classList.add('navbar-light', 'bg-light');
//         }
//         // 상태 저장 (다음 페이지를 위해 메모장에 'light'라고 적어둠)
//         localStorage.setItem('theme', 'light');
//     } 
//     // 다크 모드일 때
//     else {
//         if (btn) btn.textContent = '🌙 DARK';
//         if (navbar) {
//             navbar.classList.remove('navbar-light', 'bg-light');
//             navbar.classList.add('navbar-dark', 'bg-dark');
//         }
//         // 상태 저장 (다음 페이지를 위해 메모장에 'dark'라고 적어둠)
//         localStorage.setItem('theme', 'dark');
//     }
// }