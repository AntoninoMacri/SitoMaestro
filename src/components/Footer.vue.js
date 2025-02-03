/// <reference types="../../node_modules/.vue-global-types/vue_3.5_false.d.ts" />
import ContactInfo from "./ContactInfo.vue";
; /* PartiallyEnd: #3632/scriptSetup.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    let __VLS_components;
    let __VLS_directives;
    // CSS variable injection 
    // CSS variable injection end 
    __VLS_elementAsFunction(__VLS_intrinsicElements.footer, __VLS_intrinsicElements.footer)({
        ...{ class: ("bg-black text-white py-8 mt-auto") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("max-w-7xl mx-auto px-8") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("flex flex-col items-start space-y-4") },
    });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
        ...{ class: ("text-lg") },
    });
    // @ts-ignore
    /** @type { [typeof ContactInfo, ] } */ ;
    // @ts-ignore
    const __VLS_0 = __VLS_asFunctionalComponent(ContactInfo, new ContactInfo({}));
    const __VLS_1 = __VLS_0({}, ...__VLS_functionalComponentArgsRest(__VLS_0));
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
        ...{ class: ("text-right w-full") },
    });
    ['bg-black', 'text-white', 'py-8', 'mt-auto', 'max-w-7xl', 'mx-auto', 'px-8', 'flex', 'flex-col', 'items-start', 'space-y-4', 'text-lg', 'text-right', 'w-full',];
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
            ContactInfo: ContactInfo,
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
