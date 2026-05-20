function validateAndLogin() {
    let valid = true;

    const username = document.getElementById('usernameInput').value.trim();
    const password = document.getElementById('passwordInput').value;

    // ① 아이디 유효성 검사 (지난 주 문제 유지)
    const usernameRegex = /^[a-zA-Z0-9]{4,20}$/;
    if (!usernameRegex.test(username)) {
        showError('usernameInput', 'usernameMsg', '아이디는 4~20자 영문/숫자만 가능합니다.');
        valid = false;
    } else {
        clearError('usernameInput');
    }

    // ② 패스워드 유효성 검사 (지난 주 문제 유지)
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;
    if (!passwordRegex.test(password)) {
        showError('passwordInput', 'passwordMsg', '8자 이상, 영문+숫자+특수문자를 포함해야 합니다.');
        valid = false;
    } else {
        clearError('passwordInput');
    }

    // ③ 유효성 통과 시 로그인(암호화 포함) 실행
    if (valid) {
        submitLogin();
    }
}

// 새롭게 추가된 비동기 로그인 제출 함수
async function submitLogin() {
    const password = document.getElementById('passwordInput').value;
    
    // 패스워드 암호화 대기
    const hashed = await hashPassword(password);
    
    // 암호화된 패스워드를 실제 전송될 input에 대입
    document.getElementById('password').value = hashed;
    
    // 폼 제출
    document.getElementById('loginForm').submit();
}

// 아래는 기존에 작성된 에러 메시지 출력/초기화 함수입니다.
function showError(fieldId, msgId, message) {
    const field = document.getElementById(fieldId);
    if (field) field.classList.add('is-invalid');
    
    const msg = document.getElementById(msgId);
    if (msg) msg.textContent = message;
}

function clearError(fieldId) {
    const field = document.getElementById(fieldId);
    if (field) {
        field.classList.remove('is-invalid');
        field.classList.add('is-valid');
    }
}