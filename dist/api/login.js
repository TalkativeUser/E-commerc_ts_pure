var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export function login(email, password) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const res = yield fetch("https://api.escuelajs.co/api/v1/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email,
                    password,
                }),
            });
            let data = yield res.json();
            if (!res.ok) {
                throw new Error(data.message || "Login failed");
            }
            return data;
        }
        catch (error) {
            throw error;
        }
    });
}
//# sourceMappingURL=login.js.map