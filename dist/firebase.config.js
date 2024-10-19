"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.firebaseDataBase = exports.app = exports.firebaseConfig = void 0;
const app_1 = require("firebase/app");
const database_1 = require("firebase/database");
exports.firebaseConfig = {
    apiKey: "AIzaSyBgby_JgCSw2mmEbxMEFnzC9HvLM21q0A8",
    authDomain: "webtherapy-db.firebaseapp.com",
    projectId: "webtherapy-db",
    storageBucket: "webtherapy-db.appspot.com",
    messagingSenderId: "453381215611",
    appId: "1:453381215611:web:b057e4896457e91f0399de",
    measurementId: "G-4DT4NW7SFB"
};
exports.app = (0, app_1.initializeApp)(exports.firebaseConfig);
exports.firebaseDataBase = (0, database_1.getDatabase)(exports.app);
//# sourceMappingURL=firebase.config.js.map