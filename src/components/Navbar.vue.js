/// <reference types="../../node_modules/.vue-global-types/vue_3.5_false.d.ts" />
import { ref } from "vue";
// Variabile per gestire l'apertura/chiusura del menu mobile
let open = ref(false);
// Oggetto per gestire l'apertura dei singoli dropdown
let dropdowns = ref({
    corsi: false,
    storia: false,
    "le-nostre-scuole": false,
});
// Funzione per alternare lo stato dei dropdown
function toggleDropdown(menu) {
    dropdowns.value[menu] = !dropdowns.value[menu];
}
// Funzione per chiudere il menu mobile
function closeMenu() {
    open.value = false;
}
; /* PartiallyEnd: #3632/scriptSetup.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    let __VLS_components;
    let __VLS_directives;
    ['group', 'group', 'md', 'md',];
    // CSS variable injection 
    // CSS variable injection end 
    __VLS_elementAsFunction(__VLS_intrinsicElements.nav, __VLS_intrinsicElements.nav)({
        ...{ class: ("bg-black p-4 text-white flex justify-between items-center") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("flex items-center") },
    });
    if (__VLS_ctx.$route.path !== '/') {
        const __VLS_0 = {}.RouterLink;
        /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ] } */ ;
        // @ts-ignore
        const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
            to: ("/"),
            ...{ class: ("flex items-center") },
        }));
        const __VLS_2 = __VLS_1({
            to: ("/"),
            ...{ class: ("flex items-center") },
        }, ...__VLS_functionalComponentArgsRest(__VLS_1));
        __VLS_elementAsFunction(__VLS_intrinsicElements.img)({
            src: ("../assets/logo.jpg"),
            alt: ("Logo Wing Chun Kung Fu Tradizionale"),
            ...{ class: ("w-12 h-12 mr-2") },
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("text-2xl font-bold") },
        });
        __VLS_5.slots.default;
        var __VLS_5;
    }
    else {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("flex items-center") },
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.img)({
            src: ("../assets/logo.jpg"),
            alt: ("Logo Wing Chun Kung Fu Tradizionale"),
            ...{ class: ("w-12 h-12 mr-2") },
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("text-2xl font-bold") },
        });
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({
        ...{ class: ("hidden md:flex md:space-x-6") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
    if (__VLS_ctx.$route.path !== '/') {
        const __VLS_6 = {}.RouterLink;
        /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ] } */ ;
        // @ts-ignore
        const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({
            to: ("/"),
            ...{ class: ("hover:text-gray-300 text-xl") },
        }));
        const __VLS_8 = __VLS_7({
            to: ("/"),
            ...{ class: ("hover:text-gray-300 text-xl") },
        }, ...__VLS_functionalComponentArgsRest(__VLS_7));
        __VLS_11.slots.default;
        var __VLS_11;
    }
    else {
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
            ...{ class: ("text-xl") },
        });
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({
        ...{ class: ("relative group") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
        ...{ class: ("hover:text-gray-300 text-xl") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({
        ...{ class: ("absolute left-0 mt-2 w-40 bg-black text-white rounded-md shadow-lg opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-300 flex-col") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
    if (__VLS_ctx.$route.path !== '/corsi/tutti i corsi') {
        const __VLS_12 = {}.RouterLink;
        /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ] } */ ;
        // @ts-ignore
        const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({
            to: ("/corsi/tutti i corsi"),
            ...{ class: ("block px-4 py-2 text-xl hover:bg-gray-600") },
        }));
        const __VLS_14 = __VLS_13({
            to: ("/corsi/tutti i corsi"),
            ...{ class: ("block px-4 py-2 text-xl hover:bg-gray-600") },
        }, ...__VLS_functionalComponentArgsRest(__VLS_13));
        __VLS_17.slots.default;
        var __VLS_17;
    }
    else {
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
            ...{ class: ("block px-4 py-2 text-xl") },
        });
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
    if (__VLS_ctx.$route.path !== '/corsi/wingchun') {
        const __VLS_18 = {}.RouterLink;
        /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ] } */ ;
        // @ts-ignore
        const __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({
            to: ("/corsi/wingchun"),
            ...{ class: ("block px-4 py-2 text-xl hover:bg-gray-600") },
        }));
        const __VLS_20 = __VLS_19({
            to: ("/corsi/wingchun"),
            ...{ class: ("block px-4 py-2 text-xl hover:bg-gray-600") },
        }, ...__VLS_functionalComponentArgsRest(__VLS_19));
        __VLS_23.slots.default;
        var __VLS_23;
    }
    else {
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
            ...{ class: ("block px-4 py-2 text-xl") },
        });
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
    if (__VLS_ctx.$route.path !== '/corsi/wingchunadvanced') {
        const __VLS_24 = {}.RouterLink;
        /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ] } */ ;
        // @ts-ignore
        const __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24({
            to: ("/corsi/wingchunadvanced"),
            ...{ class: ("block px-4 py-2 text-xl hover:bg-gray-600") },
        }));
        const __VLS_26 = __VLS_25({
            to: ("/corsi/wingchunadvanced"),
            ...{ class: ("block px-4 py-2 text-xl hover:bg-gray-600") },
        }, ...__VLS_functionalComponentArgsRest(__VLS_25));
        __VLS_29.slots.default;
        var __VLS_29;
    }
    else {
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
            ...{ class: ("block px-4 py-2 text-xl") },
        });
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
    if (__VLS_ctx.$route.path !== '/corsi/ctd') {
        const __VLS_30 = {}.RouterLink;
        /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ] } */ ;
        // @ts-ignore
        const __VLS_31 = __VLS_asFunctionalComponent(__VLS_30, new __VLS_30({
            to: ("/corsi/ctd"),
            ...{ class: ("block px-4 py-2 text-xl hover:bg-gray-600") },
        }));
        const __VLS_32 = __VLS_31({
            to: ("/corsi/ctd"),
            ...{ class: ("block px-4 py-2 text-xl hover:bg-gray-600") },
        }, ...__VLS_functionalComponentArgsRest(__VLS_31));
        __VLS_35.slots.default;
        var __VLS_35;
    }
    else {
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
            ...{ class: ("block px-4 py-2 text-xl") },
        });
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({
        ...{ class: ("relative group") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
        ...{ class: ("text-white hover:text-gray-300 text-xl") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({
        ...{ class: ("absolute left-0 mt-2 w-40 bg-black text-white rounded-md shadow-lg opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-300 flex-col") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
    if (__VLS_ctx.$route.path !== '/le-nostre-scuole/GlobalAssociation') {
        const __VLS_36 = {}.RouterLink;
        /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ] } */ ;
        // @ts-ignore
        const __VLS_37 = __VLS_asFunctionalComponent(__VLS_36, new __VLS_36({
            to: ("/le-nostre-scuole/GlobalAssociation"),
            ...{ class: ("block px-4 py-2 text-xl hover:bg-gray-600") },
        }));
        const __VLS_38 = __VLS_37({
            to: ("/le-nostre-scuole/GlobalAssociation"),
            ...{ class: ("block px-4 py-2 text-xl hover:bg-gray-600") },
        }, ...__VLS_functionalComponentArgsRest(__VLS_37));
        __VLS_41.slots.default;
        var __VLS_41;
    }
    else {
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
            ...{ class: ("block px-4 py-2 text-xl") },
        });
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
    if (__VLS_ctx.$route.path !== '/le-nostre-scuole/MasterLucaCampiglio') {
        const __VLS_42 = {}.RouterLink;
        /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ] } */ ;
        // @ts-ignore
        const __VLS_43 = __VLS_asFunctionalComponent(__VLS_42, new __VLS_42({
            to: ("/le-nostre-scuole/MasterLucaCampiglio"),
            ...{ class: ("block px-4 py-2 text-xl hover:bg-gray-600") },
        }));
        const __VLS_44 = __VLS_43({
            to: ("/le-nostre-scuole/MasterLucaCampiglio"),
            ...{ class: ("block px-4 py-2 text-xl hover:bg-gray-600") },
        }, ...__VLS_functionalComponentArgsRest(__VLS_43));
        __VLS_47.slots.default;
        var __VLS_47;
    }
    else {
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
            ...{ class: ("block px-4 py-2 text-xl") },
        });
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
    if (__VLS_ctx.$route.path !== '/le-nostre-scuole/sifu-loris-vincenzi') {
        const __VLS_48 = {}.RouterLink;
        /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ] } */ ;
        // @ts-ignore
        const __VLS_49 = __VLS_asFunctionalComponent(__VLS_48, new __VLS_48({
            to: ("/le-nostre-scuole/sifu-loris-vincenzi"),
            ...{ class: ("block px-4 py-2 text-xl hover:bg-gray-600") },
        }));
        const __VLS_50 = __VLS_49({
            to: ("/le-nostre-scuole/sifu-loris-vincenzi"),
            ...{ class: ("block px-4 py-2 text-xl hover:bg-gray-600") },
        }, ...__VLS_functionalComponentArgsRest(__VLS_49));
        __VLS_53.slots.default;
        var __VLS_53;
    }
    else {
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
            ...{ class: ("block px-4 py-2 text-xl") },
        });
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({
        ...{ class: ("relative group") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
        ...{ class: ("hover:text-gray-300 text-xl") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({
        ...{ class: ("absolute left-0 mt-2 w-40 bg-black text-white rounded-md shadow-lg opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-300 flex-col") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
    if (__VLS_ctx.$route.path !== '/storia') {
        const __VLS_54 = {}.RouterLink;
        /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ] } */ ;
        // @ts-ignore
        const __VLS_55 = __VLS_asFunctionalComponent(__VLS_54, new __VLS_54({
            to: ("/storia"),
            ...{ class: ("block px-4 py-2 text-xl hover:bg-gray-600") },
        }));
        const __VLS_56 = __VLS_55({
            to: ("/storia"),
            ...{ class: ("block px-4 py-2 text-xl hover:bg-gray-600") },
        }, ...__VLS_functionalComponentArgsRest(__VLS_55));
        __VLS_59.slots.default;
        var __VLS_59;
    }
    else {
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
            ...{ class: ("block px-4 py-2 text-xl") },
        });
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
    if (__VLS_ctx.$route.path !== '/storia/wingchun') {
        const __VLS_60 = {}.RouterLink;
        /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ] } */ ;
        // @ts-ignore
        const __VLS_61 = __VLS_asFunctionalComponent(__VLS_60, new __VLS_60({
            to: ("/storia/wingchun"),
            ...{ class: ("block px-4 py-2 text-xl hover:bg-gray-600") },
        }));
        const __VLS_62 = __VLS_61({
            to: ("/storia/wingchun"),
            ...{ class: ("block px-4 py-2 text-xl hover:bg-gray-600") },
        }, ...__VLS_functionalComponentArgsRest(__VLS_61));
        __VLS_65.slots.default;
        var __VLS_65;
    }
    else {
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
            ...{ class: ("block px-4 py-2 text-xl") },
        });
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
    if (__VLS_ctx.$route.path !== '/storia/ctd') {
        const __VLS_66 = {}.RouterLink;
        /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ] } */ ;
        // @ts-ignore
        const __VLS_67 = __VLS_asFunctionalComponent(__VLS_66, new __VLS_66({
            to: ("/storia/ctd"),
            ...{ class: ("block px-4 py-2 text-xl hover:bg-gray-600") },
        }));
        const __VLS_68 = __VLS_67({
            to: ("/storia/ctd"),
            ...{ class: ("block px-4 py-2 text-xl hover:bg-gray-600") },
        }, ...__VLS_functionalComponentArgsRest(__VLS_67));
        __VLS_71.slots.default;
        var __VLS_71;
    }
    else {
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
            ...{ class: ("block px-4 py-2 text-xl") },
        });
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
    if (__VLS_ctx.$route.path !== '/storia/gm-william-cheung') {
        const __VLS_72 = {}.RouterLink;
        /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ] } */ ;
        // @ts-ignore
        const __VLS_73 = __VLS_asFunctionalComponent(__VLS_72, new __VLS_72({
            to: ("/storia/gm-william-cheung"),
            ...{ class: ("block px-4 py-2 text-xl hover:bg-gray-600") },
        }));
        const __VLS_74 = __VLS_73({
            to: ("/storia/gm-william-cheung"),
            ...{ class: ("block px-4 py-2 text-xl hover:bg-gray-600") },
        }, ...__VLS_functionalComponentArgsRest(__VLS_73));
        __VLS_77.slots.default;
        var __VLS_77;
    }
    else {
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
            ...{ class: ("block px-4 py-2 text-xl") },
        });
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
    if (__VLS_ctx.$route.path !== '/storia/shaolin-temple') {
        const __VLS_78 = {}.RouterLink;
        /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ] } */ ;
        // @ts-ignore
        const __VLS_79 = __VLS_asFunctionalComponent(__VLS_78, new __VLS_78({
            to: ("/storia/shaolin-temple"),
            ...{ class: ("block px-4 py-2 text-xl hover:bg-gray-600") },
        }));
        const __VLS_80 = __VLS_79({
            to: ("/storia/shaolin-temple"),
            ...{ class: ("block px-4 py-2 text-xl hover:bg-gray-600") },
        }, ...__VLS_functionalComponentArgsRest(__VLS_79));
        __VLS_83.slots.default;
        var __VLS_83;
    }
    else {
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
            ...{ class: ("block px-4 py-2 text-xl") },
        });
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
    if (__VLS_ctx.$route.path !== '/blog') {
        const __VLS_84 = {}.RouterLink;
        /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ] } */ ;
        // @ts-ignore
        const __VLS_85 = __VLS_asFunctionalComponent(__VLS_84, new __VLS_84({
            to: ("/blog"),
            ...{ class: ("text-white hover:text-gray-300 text-xl") },
        }));
        const __VLS_86 = __VLS_85({
            to: ("/blog"),
            ...{ class: ("text-white hover:text-gray-300 text-xl") },
        }, ...__VLS_functionalComponentArgsRest(__VLS_85));
        __VLS_89.slots.default;
        var __VLS_89;
    }
    else {
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
            ...{ class: ("text-xl") },
        });
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
    if (__VLS_ctx.$route.path !== '/contact') {
        const __VLS_90 = {}.RouterLink;
        /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ] } */ ;
        // @ts-ignore
        const __VLS_91 = __VLS_asFunctionalComponent(__VLS_90, new __VLS_90({
            to: ("/contact"),
            ...{ class: ("text-white hover:text-gray-300 text-xl") },
        }));
        const __VLS_92 = __VLS_91({
            to: ("/contact"),
            ...{ class: ("text-white hover:text-gray-300 text-xl") },
        }, ...__VLS_functionalComponentArgsRest(__VLS_91));
        __VLS_95.slots.default;
        var __VLS_95;
    }
    else {
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
            ...{ class: ("text-xl") },
        });
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("md:hidden") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
        ...{ onClick: (...[$event]) => {
                __VLS_ctx.open = !__VLS_ctx.open;
            } },
        ...{ class: ("text-white") },
    });
    if (!__VLS_ctx.open) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.svg, __VLS_intrinsicElements.svg)({
            ...{ class: ("w-6 h-6") },
            fill: ("none"),
            stroke: ("currentColor"),
            viewBox: ("0 0 24 24"),
            xmlns: ("http://www.w3.org/2000/svg"),
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.path, __VLS_intrinsicElements.path)({
            'stroke-linecap': ("round"),
            'stroke-linejoin': ("round"),
            'stroke-width': ("2"),
            d: ("M4 6h16M4 12h16M4 18h16"),
        });
    }
    if (__VLS_ctx.open) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.svg, __VLS_intrinsicElements.svg)({
            ...{ class: ("w-6 h-6") },
            fill: ("none"),
            stroke: ("currentColor"),
            viewBox: ("0 0 24 24"),
            xmlns: ("http://www.w3.org/2000/svg"),
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.path, __VLS_intrinsicElements.path)({
            'stroke-linecap': ("round"),
            'stroke-linejoin': ("round"),
            'stroke-width': ("2"),
            d: ("M6 18L18 6M6 6l12 12"),
        });
    }
    if (__VLS_ctx.open) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("text-white flex flex-col items-start space-y-4 md:hidden bg-black p-4") },
        });
        const __VLS_96 = {}.RouterLink;
        /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ] } */ ;
        // @ts-ignore
        const __VLS_97 = __VLS_asFunctionalComponent(__VLS_96, new __VLS_96({
            ...{ 'onClick': {} },
            to: ("/"),
            ...{ class: ("hover:text-gray-300 text-xl") },
        }));
        const __VLS_98 = __VLS_97({
            ...{ 'onClick': {} },
            to: ("/"),
            ...{ class: ("hover:text-gray-300 text-xl") },
        }, ...__VLS_functionalComponentArgsRest(__VLS_97));
        let __VLS_102;
        const __VLS_103 = {
            onClick: (__VLS_ctx.closeMenu)
        };
        let __VLS_99;
        let __VLS_100;
        __VLS_101.slots.default;
        var __VLS_101;
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("relative") },
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
            ...{ onClick: (...[$event]) => {
                    if (!((__VLS_ctx.open)))
                        return;
                    __VLS_ctx.toggleDropdown('corsi');
                } },
            ...{ class: ("hover:text-gray-300 text-xl") },
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("space-y-2 pl-4 flex-col") },
        });
        __VLS_asFunctionalDirective(__VLS_directives.vShow)(null, { ...__VLS_directiveBindingRestFields, value: (__VLS_ctx.dropdowns.corsi) }, null, null);
        const __VLS_104 = {}.RouterLink;
        /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ] } */ ;
        // @ts-ignore
        const __VLS_105 = __VLS_asFunctionalComponent(__VLS_104, new __VLS_104({
            ...{ 'onClick': {} },
            to: ("/corsi/tutti i corsi"),
            ...{ class: ("hover:text-gray-300 text-xl") },
        }));
        const __VLS_106 = __VLS_105({
            ...{ 'onClick': {} },
            to: ("/corsi/tutti i corsi"),
            ...{ class: ("hover:text-gray-300 text-xl") },
        }, ...__VLS_functionalComponentArgsRest(__VLS_105));
        let __VLS_110;
        const __VLS_111 = {
            onClick: (__VLS_ctx.closeMenu)
        };
        let __VLS_107;
        let __VLS_108;
        __VLS_109.slots.default;
        var __VLS_109;
        const __VLS_112 = {}.RouterLink;
        /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ] } */ ;
        // @ts-ignore
        const __VLS_113 = __VLS_asFunctionalComponent(__VLS_112, new __VLS_112({
            ...{ 'onClick': {} },
            to: ("/corsi/wingchun"),
            ...{ class: ("hover:text-gray-300 text-xl") },
        }));
        const __VLS_114 = __VLS_113({
            ...{ 'onClick': {} },
            to: ("/corsi/wingchun"),
            ...{ class: ("hover:text-gray-300 text-xl") },
        }, ...__VLS_functionalComponentArgsRest(__VLS_113));
        let __VLS_118;
        const __VLS_119 = {
            onClick: (__VLS_ctx.closeMenu)
        };
        let __VLS_115;
        let __VLS_116;
        __VLS_117.slots.default;
        var __VLS_117;
        const __VLS_120 = {}.RouterLink;
        /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ] } */ ;
        // @ts-ignore
        const __VLS_121 = __VLS_asFunctionalComponent(__VLS_120, new __VLS_120({
            ...{ 'onClick': {} },
            to: ("/corsi/wingchunadvanced"),
            ...{ class: ("hover:text-gray-300 text-xl") },
        }));
        const __VLS_122 = __VLS_121({
            ...{ 'onClick': {} },
            to: ("/corsi/wingchunadvanced"),
            ...{ class: ("hover:text-gray-300 text-xl") },
        }, ...__VLS_functionalComponentArgsRest(__VLS_121));
        let __VLS_126;
        const __VLS_127 = {
            onClick: (__VLS_ctx.closeMenu)
        };
        let __VLS_123;
        let __VLS_124;
        __VLS_125.slots.default;
        var __VLS_125;
        const __VLS_128 = {}.RouterLink;
        /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ] } */ ;
        // @ts-ignore
        const __VLS_129 = __VLS_asFunctionalComponent(__VLS_128, new __VLS_128({
            ...{ 'onClick': {} },
            to: ("/corsi/ctd"),
            ...{ class: ("hover:text-gray-300 text-xl") },
        }));
        const __VLS_130 = __VLS_129({
            ...{ 'onClick': {} },
            to: ("/corsi/ctd"),
            ...{ class: ("hover:text-gray-300 text-xl") },
        }, ...__VLS_functionalComponentArgsRest(__VLS_129));
        let __VLS_134;
        const __VLS_135 = {
            onClick: (__VLS_ctx.closeMenu)
        };
        let __VLS_131;
        let __VLS_132;
        __VLS_133.slots.default;
        var __VLS_133;
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("relative") },
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
            ...{ onClick: (...[$event]) => {
                    if (!((__VLS_ctx.open)))
                        return;
                    __VLS_ctx.toggleDropdown('le-nostre-scuole');
                } },
            ...{ class: ("hover:text-gray-300 text-xl") },
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("space-y-2 pl-4 flex-col") },
        });
        __VLS_asFunctionalDirective(__VLS_directives.vShow)(null, { ...__VLS_directiveBindingRestFields, value: (__VLS_ctx.dropdowns['le-nostre-scuole']) }, null, null);
        const __VLS_136 = {}.RouterLink;
        /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ] } */ ;
        // @ts-ignore
        const __VLS_137 = __VLS_asFunctionalComponent(__VLS_136, new __VLS_136({
            ...{ 'onClick': {} },
            to: ("/le-nostre-scuole"),
            ...{ class: ("hover:text-gray-300 text-xl") },
        }));
        const __VLS_138 = __VLS_137({
            ...{ 'onClick': {} },
            to: ("/le-nostre-scuole"),
            ...{ class: ("hover:text-gray-300 text-xl") },
        }, ...__VLS_functionalComponentArgsRest(__VLS_137));
        let __VLS_142;
        const __VLS_143 = {
            onClick: (__VLS_ctx.closeMenu)
        };
        let __VLS_139;
        let __VLS_140;
        __VLS_141.slots.default;
        var __VLS_141;
        const __VLS_144 = {}.RouterLink;
        /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ] } */ ;
        // @ts-ignore
        const __VLS_145 = __VLS_asFunctionalComponent(__VLS_144, new __VLS_144({
            ...{ 'onClick': {} },
            to: ("/le-nostre-scuole/scuole-riconosciute"),
            ...{ class: ("hover:text-gray-300 text-xl") },
        }));
        const __VLS_146 = __VLS_145({
            ...{ 'onClick': {} },
            to: ("/le-nostre-scuole/scuole-riconosciute"),
            ...{ class: ("hover:text-gray-300 text-xl") },
        }, ...__VLS_functionalComponentArgsRest(__VLS_145));
        let __VLS_150;
        const __VLS_151 = {
            onClick: (__VLS_ctx.closeMenu)
        };
        let __VLS_147;
        let __VLS_148;
        __VLS_149.slots.default;
        var __VLS_149;
        const __VLS_152 = {}.RouterLink;
        /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ] } */ ;
        // @ts-ignore
        const __VLS_153 = __VLS_asFunctionalComponent(__VLS_152, new __VLS_152({
            ...{ 'onClick': {} },
            to: ("/le-nostre-scuole/sifu-loris-vincenzi"),
            ...{ class: ("hover:text-gray-300 text-xl") },
        }));
        const __VLS_154 = __VLS_153({
            ...{ 'onClick': {} },
            to: ("/le-nostre-scuole/sifu-loris-vincenzi"),
            ...{ class: ("hover:text-gray-300 text-xl") },
        }, ...__VLS_functionalComponentArgsRest(__VLS_153));
        let __VLS_158;
        const __VLS_159 = {
            onClick: (__VLS_ctx.closeMenu)
        };
        let __VLS_155;
        let __VLS_156;
        __VLS_157.slots.default;
        var __VLS_157;
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("relative") },
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
            ...{ onClick: (...[$event]) => {
                    if (!((__VLS_ctx.open)))
                        return;
                    __VLS_ctx.toggleDropdown('storia');
                } },
            ...{ class: ("hover:text-gray-300 text-xl") },
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("space-y-2 pl-4 flex-col") },
        });
        __VLS_asFunctionalDirective(__VLS_directives.vShow)(null, { ...__VLS_directiveBindingRestFields, value: (__VLS_ctx.dropdowns.storia) }, null, null);
        const __VLS_160 = {}.RouterLink;
        /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ] } */ ;
        // @ts-ignore
        const __VLS_161 = __VLS_asFunctionalComponent(__VLS_160, new __VLS_160({
            ...{ 'onClick': {} },
            to: ("/storia"),
            ...{ class: ("hover:text-gray-300 text-xl") },
        }));
        const __VLS_162 = __VLS_161({
            ...{ 'onClick': {} },
            to: ("/storia"),
            ...{ class: ("hover:text-gray-300 text-xl") },
        }, ...__VLS_functionalComponentArgsRest(__VLS_161));
        let __VLS_166;
        const __VLS_167 = {
            onClick: (__VLS_ctx.closeMenu)
        };
        let __VLS_163;
        let __VLS_164;
        __VLS_165.slots.default;
        var __VLS_165;
        const __VLS_168 = {}.RouterLink;
        /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ] } */ ;
        // @ts-ignore
        const __VLS_169 = __VLS_asFunctionalComponent(__VLS_168, new __VLS_168({
            ...{ 'onClick': {} },
            to: ("/storia/wingchun"),
            ...{ class: ("hover:text-gray-300 text-xl") },
        }));
        const __VLS_170 = __VLS_169({
            ...{ 'onClick': {} },
            to: ("/storia/wingchun"),
            ...{ class: ("hover:text-gray-300 text-xl") },
        }, ...__VLS_functionalComponentArgsRest(__VLS_169));
        let __VLS_174;
        const __VLS_175 = {
            onClick: (__VLS_ctx.closeMenu)
        };
        let __VLS_171;
        let __VLS_172;
        __VLS_173.slots.default;
        var __VLS_173;
        const __VLS_176 = {}.RouterLink;
        /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ] } */ ;
        // @ts-ignore
        const __VLS_177 = __VLS_asFunctionalComponent(__VLS_176, new __VLS_176({
            ...{ 'onClick': {} },
            to: ("/storia/ctd"),
            ...{ class: ("hover:text-gray-300 text-xl") },
        }));
        const __VLS_178 = __VLS_177({
            ...{ 'onClick': {} },
            to: ("/storia/ctd"),
            ...{ class: ("hover:text-gray-300 text-xl") },
        }, ...__VLS_functionalComponentArgsRest(__VLS_177));
        let __VLS_182;
        const __VLS_183 = {
            onClick: (__VLS_ctx.closeMenu)
        };
        let __VLS_179;
        let __VLS_180;
        __VLS_181.slots.default;
        var __VLS_181;
        const __VLS_184 = {}.RouterLink;
        /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ] } */ ;
        // @ts-ignore
        const __VLS_185 = __VLS_asFunctionalComponent(__VLS_184, new __VLS_184({
            ...{ 'onClick': {} },
            to: ("/storia/gm-william-cheung"),
            ...{ class: ("hover:text-gray-300 text-xl") },
        }));
        const __VLS_186 = __VLS_185({
            ...{ 'onClick': {} },
            to: ("/storia/gm-william-cheung"),
            ...{ class: ("hover:text-gray-300 text-xl") },
        }, ...__VLS_functionalComponentArgsRest(__VLS_185));
        let __VLS_190;
        const __VLS_191 = {
            onClick: (__VLS_ctx.closeMenu)
        };
        let __VLS_187;
        let __VLS_188;
        __VLS_189.slots.default;
        var __VLS_189;
        const __VLS_192 = {}.RouterLink;
        /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ] } */ ;
        // @ts-ignore
        const __VLS_193 = __VLS_asFunctionalComponent(__VLS_192, new __VLS_192({
            ...{ 'onClick': {} },
            to: ("/storia/shaolin-temple"),
            ...{ class: ("hover:text-gray-300 text-xl") },
        }));
        const __VLS_194 = __VLS_193({
            ...{ 'onClick': {} },
            to: ("/storia/shaolin-temple"),
            ...{ class: ("hover:text-gray-300 text-xl") },
        }, ...__VLS_functionalComponentArgsRest(__VLS_193));
        let __VLS_198;
        const __VLS_199 = {
            onClick: (__VLS_ctx.closeMenu)
        };
        let __VLS_195;
        let __VLS_196;
        __VLS_197.slots.default;
        var __VLS_197;
        const __VLS_200 = {}.RouterLink;
        /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ] } */ ;
        // @ts-ignore
        const __VLS_201 = __VLS_asFunctionalComponent(__VLS_200, new __VLS_200({
            ...{ 'onClick': {} },
            to: ("/blog"),
            ...{ class: ("hover:text-gray-300 text-xl") },
        }));
        const __VLS_202 = __VLS_201({
            ...{ 'onClick': {} },
            to: ("/blog"),
            ...{ class: ("hover:text-gray-300 text-xl") },
        }, ...__VLS_functionalComponentArgsRest(__VLS_201));
        let __VLS_206;
        const __VLS_207 = {
            onClick: (__VLS_ctx.closeMenu)
        };
        let __VLS_203;
        let __VLS_204;
        __VLS_205.slots.default;
        var __VLS_205;
        const __VLS_208 = {}.RouterLink;
        /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ] } */ ;
        // @ts-ignore
        const __VLS_209 = __VLS_asFunctionalComponent(__VLS_208, new __VLS_208({
            ...{ 'onClick': {} },
            to: ("/contact"),
            ...{ class: ("hover:text-gray-300 text-xl") },
        }));
        const __VLS_210 = __VLS_209({
            ...{ 'onClick': {} },
            to: ("/contact"),
            ...{ class: ("hover:text-gray-300 text-xl") },
        }, ...__VLS_functionalComponentArgsRest(__VLS_209));
        let __VLS_214;
        const __VLS_215 = {
            onClick: (__VLS_ctx.closeMenu)
        };
        let __VLS_211;
        let __VLS_212;
        __VLS_213.slots.default;
        var __VLS_213;
    }
    ['bg-black', 'p-4', 'text-white', 'flex', 'justify-between', 'items-center', 'flex', 'items-center', 'flex', 'items-center', 'w-12', 'h-12', 'mr-2', 'text-2xl', 'font-bold', 'flex', 'items-center', 'w-12', 'h-12', 'mr-2', 'text-2xl', 'font-bold', 'hidden', 'md:flex', 'md:space-x-6', 'hover:text-gray-300', 'text-xl', 'text-xl', 'relative', 'group', 'hover:text-gray-300', 'text-xl', 'absolute', 'left-0', 'mt-2', 'w-40', 'bg-black', 'text-white', 'rounded-md', 'shadow-lg', 'opacity-0', 'group-hover:opacity-100', 'group-focus-within:opacity-100', 'transition-opacity', 'duration-300', 'flex-col', 'block', 'px-4', 'py-2', 'text-xl', 'hover:bg-gray-600', 'block', 'px-4', 'py-2', 'text-xl', 'block', 'px-4', 'py-2', 'text-xl', 'hover:bg-gray-600', 'block', 'px-4', 'py-2', 'text-xl', 'block', 'px-4', 'py-2', 'text-xl', 'hover:bg-gray-600', 'block', 'px-4', 'py-2', 'text-xl', 'block', 'px-4', 'py-2', 'text-xl', 'hover:bg-gray-600', 'block', 'px-4', 'py-2', 'text-xl', 'relative', 'group', 'text-white', 'hover:text-gray-300', 'text-xl', 'absolute', 'left-0', 'mt-2', 'w-40', 'bg-black', 'text-white', 'rounded-md', 'shadow-lg', 'opacity-0', 'group-hover:opacity-100', 'group-focus-within:opacity-100', 'transition-opacity', 'duration-300', 'flex-col', 'block', 'px-4', 'py-2', 'text-xl', 'hover:bg-gray-600', 'block', 'px-4', 'py-2', 'text-xl', 'block', 'px-4', 'py-2', 'text-xl', 'hover:bg-gray-600', 'block', 'px-4', 'py-2', 'text-xl', 'block', 'px-4', 'py-2', 'text-xl', 'hover:bg-gray-600', 'block', 'px-4', 'py-2', 'text-xl', 'relative', 'group', 'hover:text-gray-300', 'text-xl', 'absolute', 'left-0', 'mt-2', 'w-40', 'bg-black', 'text-white', 'rounded-md', 'shadow-lg', 'opacity-0', 'group-hover:opacity-100', 'group-focus-within:opacity-100', 'transition-opacity', 'duration-300', 'flex-col', 'block', 'px-4', 'py-2', 'text-xl', 'hover:bg-gray-600', 'block', 'px-4', 'py-2', 'text-xl', 'block', 'px-4', 'py-2', 'text-xl', 'hover:bg-gray-600', 'block', 'px-4', 'py-2', 'text-xl', 'block', 'px-4', 'py-2', 'text-xl', 'hover:bg-gray-600', 'block', 'px-4', 'py-2', 'text-xl', 'block', 'px-4', 'py-2', 'text-xl', 'hover:bg-gray-600', 'block', 'px-4', 'py-2', 'text-xl', 'block', 'px-4', 'py-2', 'text-xl', 'hover:bg-gray-600', 'block', 'px-4', 'py-2', 'text-xl', 'text-white', 'hover:text-gray-300', 'text-xl', 'text-xl', 'text-white', 'hover:text-gray-300', 'text-xl', 'text-xl', 'md:hidden', 'text-white', 'w-6', 'h-6', 'w-6', 'h-6', 'text-white', 'flex', 'flex-col', 'items-start', 'space-y-4', 'md:hidden', 'bg-black', 'p-4', 'hover:text-gray-300', 'text-xl', 'relative', 'hover:text-gray-300', 'text-xl', 'space-y-2', 'pl-4', 'flex-col', 'hover:text-gray-300', 'text-xl', 'hover:text-gray-300', 'text-xl', 'hover:text-gray-300', 'text-xl', 'hover:text-gray-300', 'text-xl', 'relative', 'hover:text-gray-300', 'text-xl', 'space-y-2', 'pl-4', 'flex-col', 'hover:text-gray-300', 'text-xl', 'hover:text-gray-300', 'text-xl', 'hover:text-gray-300', 'text-xl', 'relative', 'hover:text-gray-300', 'text-xl', 'space-y-2', 'pl-4', 'flex-col', 'hover:text-gray-300', 'text-xl', 'hover:text-gray-300', 'text-xl', 'hover:text-gray-300', 'text-xl', 'hover:text-gray-300', 'text-xl', 'hover:text-gray-300', 'text-xl', 'hover:text-gray-300', 'text-xl', 'hover:text-gray-300', 'text-xl',];
    var __VLS_slots;
    var $slots;
    let __VLS_inheritedAttrs;
    var $attrs;
    const __VLS_refs = {};
    var $refs;
    var $el;
    return {
        attrs: {},
        slots: __VLS_slots,
        refs: $refs,
        rootEl: $el,
    };
}
;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            open: open,
            dropdowns: dropdowns,
            toggleDropdown: toggleDropdown,
            closeMenu: closeMenu,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
