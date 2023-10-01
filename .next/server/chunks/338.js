"use strict";
exports.id = 338;
exports.ids = [338];
exports.modules = {

/***/ 2295:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  z: () => (/* binding */ signIn),
  y: () => (/* binding */ signUp)
});

// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__(4722);
// EXTERNAL MODULE: ./node_modules/axios/lib/axios.js + 46 modules
var lib_axios = __webpack_require__(3258);
;// CONCATENATED MODULE: ./app/api/main.ts

const API = lib_axios["default"].create({
    baseURL: "http://3.34.4.220:3000/",
    headers: {
    }
});
/* harmony default export */ const main = (API);

;// CONCATENATED MODULE: ./app/lib/auth/setToken.ts
const setToken = ({ key, value })=>{
    if (!value) return;
    if (typeof value !== "string") {
        localStorage.setItem(key, JSON.stringify(value));
        return;
    }
    localStorage.setItem(key, JSON.stringify(value));
};
/* harmony default export */ const auth_setToken = (setToken);

;// CONCATENATED MODULE: ./app/api/auth/auth.ts



const signUp = async (userId, email, password)=>{
    try {
        const response = await main.post("/auth/register", {
            userId,
            email,
            password
        });
        return response;
    } catch (e) {
        if (e instanceof axios/* AxiosError */.d7) {
            const message = e.response?.data.message;
            return message;
        }
        return "";
    }
};
const signIn = async (username, password)=>{
    try {
        const response = await main.post("/auth/login", {
            username,
            password
        });
        auth_setToken({
            key: "accessToken",
            value: response.data.access_token
        });
        return response;
    } catch (e) {
        if (e instanceof axios/* AxiosError */.d7) {
            const message = e.response?.data.message;
            return message;
        }
        return "";
    }
};


/***/ }),

/***/ 8622:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ Button)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function Button({ text }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        className: "w-[300px] sm:w-[580px] h-10 sm:h-16 bg-[#FFC000] rounded-full font-medium text-sm sm:text-xl mb-6 sm:mb-10",
        type: "submit",
        children: text
    });
}


/***/ }),

/***/ 8584:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ Header)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function Header({ text }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
        className: "text-xl sm:text-3xl font-medium mt-4 mb-2",
        children: text
    });
}


/***/ }),

/***/ 6829:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ Modal)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2451);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



function Modal({ closeModal, text }) {
    const modalRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        const handler = (e)=>{
            if (modalRef.current && !modalRef.current.contains(e.target)) {
                closeModal();
            }
        };
        document.addEventListener("mousedown", handler);
        return ()=>{
            document.removeEventListener("mousedown", handler);
        };
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "z-[9999] fixed flex justify-center items-center bg-[rgb(52,64,84,0.7)] top-0 bottom-0 right-0 left-0",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            ref: modalRef,
            className: "w-64 sm:w-96 rounded-xl border absolute bg-white p-4 sm:p-6",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex justify-between items-start mb-2 sm:mb-4",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                            src: "/images/exclamation_mark.svg",
                            alt: "느낌표 이미지",
                            width: 32,
                            height: 32,
                            className: "sm:w-12 sm:h-12"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            type: "button",
                            onClick: closeModal,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                src: "/images/close.svg",
                                alt: "닫기 이미지",
                                width: 18,
                                height: 18,
                                className: "sm:w-6 sm:h-6"
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                    className: "font-semibold text-base sm:text-lg mb-5 sm:mb-8",
                    children: text
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                    type: "button",
                    onClick: closeModal,
                    className: "bg-[#FFC000] w-full h-8 sm:h-11 rounded-lg",
                    children: "확인"
                })
            ]
        })
    });
}


/***/ })

};
;