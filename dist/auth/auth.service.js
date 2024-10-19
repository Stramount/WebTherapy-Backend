"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const bcrypt_1 = require("bcrypt");
const firebase_config_1 = require("../firebase.config");
const database_1 = require("firebase/database");
let AuthService = class AuthService {
    async register(userObject) {
        const dataRef = (0, database_1.ref)(firebase_config_1.firebaseDataBase, 'Data');
        const newElementRef = (0, database_1.push)(dataRef, { dataRef: userObject });
        await (0, database_1.set)(newElementRef, userObject);
        const { password } = userObject;
        const plainToHash = await (0, bcrypt_1.hash)(password, 10);
        userObject = { ...userObject, password: plainToHash };
        console.log(userObject);
    }
    async login(userObjectLogin) {
        const { email } = userObjectLogin;
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)()
], AuthService);
//# sourceMappingURL=auth.service.js.map