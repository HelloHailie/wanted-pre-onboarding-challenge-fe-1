function emailCheck(email: string): boolean {
  if (email.includes("@") && email.includes(".")) {
    return true;
  } else {
    alert("올바른 이메일 형식이 아닙니다.");
    return false;
  }
}

function passwordCheck(password: string) {
  if (password.length >= 8) {
    return true;
  }
}

export { emailCheck, passwordCheck };
