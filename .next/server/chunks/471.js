exports.id = 471;
exports.ids = [471];
exports.modules = {

/***/ 2791:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 1251));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 7504))

/***/ }),

/***/ 5303:
/***/ (() => {



/***/ }),

/***/ 1251:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SideNav)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9719);
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5050);
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9195);
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6885);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1440);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7114);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);
/* __next_internal_client_entry_do_not_use__ default auto */ 



const items = [
    {
        href: "/dashboard/device-mode",
        label: "홈",
        icon: _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z
    },
    {
        href: "/dashboard/notice",
        label: "알림",
        icon: _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z
    },
    {
        href: "/dashboard/device-list",
        label: "기기목록",
        icon: _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z
    },
    {
        href: "/dashboard/cs",
        label: "설정",
        icon: _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z
    }
];
function SideNav({ className }) {
    const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.usePathname)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("nav", {
        className: `${className} bg-[#e5f0f1] text-[#9db2ce] flex h-16`,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
            className: "grow flex justify-center gap-4 text-sm",
            children: items.map((item)=>pathname === item.href ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                    className: "w-16",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                        className: "flex flex-col gap-1 w-full h-full items-center justify-center bg-[#e8ebd9] text-[#ffc000] border-t-4 border-[#ffc000]",
                        href: item.href,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(item.icon, {
                                width: 26
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                children: item.label
                            })
                        ]
                    })
                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                    className: "w-16",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                        className: "flex flex-col gap-1 w-full h-full items-center justify-center",
                        href: item.href,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(item.icon, {
                            width: 26
                        })
                    })
                }))
        })
    });
}


/***/ }),

/***/ 7504:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SideNav)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2451);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1440);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7114);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_3__);
/* __next_internal_client_entry_do_not_use__ default auto */ 



const linkStyle = "hover:bg-[#197785] hover:border-white border-s-8 border-primary flex w-full px-10 py-3";
const selectedStyle = `${linkStyle} bg-[#197785] border-white`;
const items = [
    {
        label: "기기 모드",
        href: "/dashboard/device-mode"
    },
    {
        label: "알림",
        href: "/dashboard/notice"
    },
    {
        label: "기기 목록",
        href: "/dashboard/device-list"
    },
    {
        label: "고객센터",
        href: "/dashboard/cs"
    },
    {
        liStyle: "pt-10",
        label: "마이 페이지",
        href: "/dashboard/my-page"
    }
];
function SideNav({ className }) {
    const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.usePathname)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("nav", {
        className: `${className} bg-primary`,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "py-3",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                    href: "/dashboard/device-list",
                    className: "relative flex w-72 h-16",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                        src: "/images/logo_mark.svg",
                        alt: "로고",
                        fill: true,
                        className: "object-contain"
                    })
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                className: "text-white flex flex-col pt-10",
                children: [
                    items.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                            className: item.liStyle,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                href: item.href,
                                className: pathname === item.href ? selectedStyle : linkStyle,
                                children: item.label
                            })
                        })),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                        className: "text-zinc-400 text-sm border-s-8 border-primary hover:text-white py-1",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                            className: "px-10",
                            href: "/",
                            children: "로그아웃"
                        })
                    })
                ]
            })
        ]
    });
}


/***/ }),

/***/ 8102:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ MyFormsLayout)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(1363);
;// CONCATENATED MODULE: ./app/dashboard/components/SideNav.tsx

const proxy = (0,module_proxy.createProxy)(String.raw`C:\Users\TFX5470H\Desktop\TaejoWangun\app\dashboard\components\SideNav.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const SideNav = (__default__);
;// CONCATENATED MODULE: ./app/dashboard/components/BottomNav.tsx

const BottomNav_proxy = (0,module_proxy.createProxy)(String.raw`C:\Users\TFX5470H\Desktop\TaejoWangun\app\dashboard\components\BottomNav.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: BottomNav_esModule, $$typeof: BottomNav_$$typeof } = BottomNav_proxy;
const BottomNav_default_ = BottomNav_proxy.default;


/* harmony default export */ const BottomNav = (BottomNav_default_);
;// CONCATENATED MODULE: ./app/dashboard/layout.tsx



function MyFormsLayout({ children }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "flex h-screen flex-col sm:flex-row justify-between sm:justify-normal",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(SideNav, {
                className: "hidden sm:block"
            }),
            children,
            /*#__PURE__*/ jsx_runtime_.jsx(BottomNav, {
                className: "block sm:hidden"
            })
        ]
    });
}


/***/ })

};
;