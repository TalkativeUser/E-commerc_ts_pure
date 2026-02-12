var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import '../components/categoriesBar.js';
import '../components/header.js';
import '../components/drawer.js';
import '../components/wraperPages.js';
import './core/stateManager.js';
import { login } from '../api/login.js';
import { showToast } from '../services/toast.js';
import { getBaseURL } from '../services/index.js';
const loginForm = document.querySelector('#login-form');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const baseUrl = getBaseURL();
const token = localStorage.getItem("token");
if (token) {
    window.location.replace(`${baseUrl}src/pages/products.html`);
}
// Simple validation
function validate(email, password) {
    let valid = true;
    if (emailInput && passwordInput) {
        // Reset borders
        emailInput.style.borderColor = '#e5dada99';
        passwordInput.style.borderColor = '#e5dada99';
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            emailInput.style.borderColor = 'red';
            valid = false;
        }
        if (!password || password.length < 4) {
            passwordInput.style.borderColor = 'red';
            valid = false;
        }
        return valid;
    }
}
function handleLogin(email, password) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // Call your login function (replace with actual API)
            const res = yield login(email, password);
            console.log('res => ', res);
            showToast(`Login successful`, 'success', 1000);
            localStorage.setItem("token", res.access_token);
            window.location.replace(`${baseUrl}src/pages/products.html`);
        }
        catch (error) {
            showToast(`${error}`, 'error', 1000);
        }
    });
}
loginForm === null || loginForm === void 0 ? void 0 : loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    if (emailInput && passwordInput) {
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();
        if (!validate(email, password)) {
            showToast('Please correct the highlighted fields', 'error', 1000);
            return;
        }
        handleLogin(email, password);
    }
});
//# sourceMappingURL=login.js.map