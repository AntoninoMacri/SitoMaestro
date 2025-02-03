/// <reference types="../../node_modules/.vue-global-types/vue_3.5_false.d.ts" />
import { ref, computed } from "vue";
import Footer from "../components/Footer.vue"; // Aggiungi il percorso corretto al footer
import imagePath from "../assets/wudendummy-Home.jpeg"; // Import dell'immagine
const isLightboxOpen = ref(false);
const imageSrc = ref(imagePath); // Usa l'import invece del percorso stringa
const openLightbox = () => {
    isLightboxOpen.value = true;
};
const closeLightbox = () => {
    isLightboxOpen.value = false;
};
// Computed property per determinare l'ordine della sezione News su mobile
const newsOrderClass = computed(() => {
    return window.innerWidth < 768 ? "order-last" : ""; // Sposta la sezione News sotto l'immagine su schermi piccoli
});
; /* PartiallyEnd: #3632/scriptSetup.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    let __VLS_components;
    let __VLS_directives;
    // CSS variable injection 
    // CSS variable injection end 
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("bg-gray-100 min-h-screen flex flex-col") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.section, __VLS_intrinsicElements.section)({
        ...{ class: ("max-w-7xl mx-auto p-8 flex flex-col md:flex-row justify-between items-start gap-y-6 md:gap-x-8") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("w-full md:w-2/3 flex flex-col gap-8") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("text-left") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("text-lg text-gray-700 space-y-6") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
        ...{ class: ("text-red-600 font-bold text-2xl") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
        ...{ class: ("text-red-600 font-bold text-2xl") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
        ...{ class: ("text-red-600 font-bold text-2xl") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("mt-6 flex justify-start") },
    });
    const __VLS_0 = {}.RouterLink;
    /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ] } */ ;
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
        to: ("/corsi/tutti i corsi"),
        ...{ class: ("inline-block px-6 py-3 bg-red-600 text-white text-lg font-semibold rounded-full shadow-lg hover:bg-red-700 transition-colors duration-300") },
    }));
    const __VLS_2 = __VLS_1({
        to: ("/corsi/tutti i corsi"),
        ...{ class: ("inline-block px-6 py-3 bg-red-600 text-white text-lg font-semibold rounded-full shadow-lg hover:bg-red-700 transition-colors duration-300") },
    }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    __VLS_5.slots.default;
    var __VLS_5;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("w-full md:w-1/3") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({
        ...{ onClick: (__VLS_ctx.openLightbox) },
        src: ((__VLS_ctx.imageSrc)),
        alt: ("Sifu Luca Campiglio che si allena con l'uomo di legno"),
        ...{ class: ("w-full rounded-lg shadow-lg cursor-pointer transition-transform hover:scale-105 md:max-h-90 object-cover") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
        ...{ class: ("text-center text-gray-600 mt-4") },
    });
    if (__VLS_ctx.isLightboxOpen) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ onClick: (__VLS_ctx.closeLightbox) },
            ...{ class: ("fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center") },
        });
        __VLS_elementAsFunction(__VLS_intrinsicElements.img)({
            src: ((__VLS_ctx.imageSrc)),
            alt: ("Immagine Lightbox"),
            ...{ class: ("max-w-full max-h-full rounded-lg shadow-lg") },
        });
    }
    ['bg-gray-100', 'min-h-screen', 'flex', 'flex-col', 'max-w-7xl', 'mx-auto', 'p-8', 'flex', 'flex-col', 'md:flex-row', 'justify-between', 'items-start', 'gap-y-6', 'md:gap-x-8', 'w-full', 'md:w-2/3', 'flex', 'flex-col', 'gap-8', 'text-left', 'text-lg', 'text-gray-700', 'space-y-6', 'text-red-600', 'font-bold', 'text-2xl', 'text-red-600', 'font-bold', 'text-2xl', 'text-red-600', 'font-bold', 'text-2xl', 'mt-6', 'flex', 'justify-start', 'inline-block', 'px-6', 'py-3', 'bg-red-600', 'text-white', 'text-lg', 'font-semibold', 'rounded-full', 'shadow-lg', 'hover:bg-red-700', 'transition-colors', 'duration-300', 'w-full', 'md:w-1/3', 'w-full', 'rounded-lg', 'shadow-lg', 'cursor-pointer', 'transition-transform', 'hover:scale-105', 'md:max-h-90', 'object-cover', 'text-center', 'text-gray-600', 'mt-4', 'fixed', 'inset-0', 'bg-black', 'bg-opacity-75', 'flex', 'items-center', 'justify-center', 'max-w-full', 'max-h-full', 'rounded-lg', 'shadow-lg',];
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
            isLightboxOpen: isLightboxOpen,
            imageSrc: imageSrc,
            openLightbox: openLightbox,
            closeLightbox: closeLightbox,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    __typeEl: {},
});
; /* PartiallyEnd: #4569/main.vue */
