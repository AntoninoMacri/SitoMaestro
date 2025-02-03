/// <reference types="../../node_modules/.vue-global-types/vue_3.5_false.d.ts" />
import { ref } from "vue";
// Proprietà
const props = defineProps({
    menu: Array,
    mobile: Boolean,
});
// Stato per gestire l'apertura dei dropdown nel menu mobile
let dropdowns = ref({});
// Funzione per alternare lo stato di apertura dei dropdown
function toggleDropdown(menuName) {
    dropdowns.value[menuName] = !dropdowns.value[menuName];
}
; /* PartiallyEnd: #3632/scriptSetup.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    let __VLS_components;
    let __VLS_directives;
    ['group', 'group',];
    // CSS variable injection 
    // CSS variable injection end 
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    if (!__VLS_ctx.mobile) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({
            ...{ class: ("flex space-x-4") },
        });
        for (const [item] of __VLS_getVForSourceType((__VLS_ctx.menu))) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({
                key: ((item.name)),
                ...{ class: ("relative group") },
            });
            const __VLS_0 = {}.RouterLink;
            /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ] } */ ;
            // @ts-ignore
            const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
                to: ((item.to)),
                ...{ class: ("text-white hover:text-gray-300") },
            }));
            const __VLS_2 = __VLS_1({
                to: ((item.to)),
                ...{ class: ("text-white hover:text-gray-300") },
            }, ...__VLS_functionalComponentArgsRest(__VLS_1));
            (item.name);
            __VLS_5.slots.default;
            var __VLS_5;
            if (item.children && item.children.length > 0) {
                __VLS_elementAsFunction(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({
                    ...{ class: ("absolute left-0 mt-2 w-40 bg-gray-700 text-white rounded-md shadow-lg opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-300") },
                });
                const __VLS_6 = {}.MenuItem;
                /** @type { [typeof __VLS_components.MenuItem, ] } */ ;
                // @ts-ignore
                const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({
                    menu: ((item.children)),
                }));
                const __VLS_8 = __VLS_7({
                    menu: ((item.children)),
                }, ...__VLS_functionalComponentArgsRest(__VLS_7));
            }
        }
    }
    if (__VLS_ctx.mobile) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("flex flex-col items-start space-y-4") },
        });
        for (const [item] of __VLS_getVForSourceType((__VLS_ctx.menu))) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({
                key: ((item.name)),
                ...{ class: ("relative") },
            });
            __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
                ...{ onClick: (...[$event]) => {
                        if (!((__VLS_ctx.mobile)))
                            return;
                        __VLS_ctx.toggleDropdown(item.name);
                    } },
                ...{ class: ("text-white hover:text-gray-300") },
            });
            (item.name);
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
                ...{ class: ("space-y-2 pl-4") },
            });
            __VLS_asFunctionalDirective(__VLS_directives.vShow)(null, { ...__VLS_directiveBindingRestFields, value: (__VLS_ctx.dropdowns[item.name]) }, null, null);
            for (const [child] of __VLS_getVForSourceType((item.children))) {
                const __VLS_12 = {}.RouterLink;
                /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ] } */ ;
                // @ts-ignore
                const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({
                    key: ((child.name)),
                    to: ((child.to)),
                    ...{ class: ("text-white hover:text-gray-300") },
                }));
                const __VLS_14 = __VLS_13({
                    key: ((child.name)),
                    to: ((child.to)),
                    ...{ class: ("text-white hover:text-gray-300") },
                }, ...__VLS_functionalComponentArgsRest(__VLS_13));
                (child.name);
                __VLS_17.slots.default;
                var __VLS_17;
            }
            if (item.children) {
                const __VLS_18 = {}.MenuItem;
                /** @type { [typeof __VLS_components.MenuItem, ] } */ ;
                // @ts-ignore
                const __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({
                    menu: ((item.children)),
                    mobile: (true),
                }));
                const __VLS_20 = __VLS_19({
                    menu: ((item.children)),
                    mobile: (true),
                }, ...__VLS_functionalComponentArgsRest(__VLS_19));
            }
        }
    }
    ['flex', 'space-x-4', 'relative', 'group', 'text-white', 'hover:text-gray-300', 'absolute', 'left-0', 'mt-2', 'w-40', 'bg-gray-700', 'text-white', 'rounded-md', 'shadow-lg', 'opacity-0', 'group-hover:opacity-100', 'group-focus-within:opacity-100', 'transition-opacity', 'duration-300', 'flex', 'flex-col', 'items-start', 'space-y-4', 'relative', 'text-white', 'hover:text-gray-300', 'space-y-2', 'pl-4', 'text-white', 'hover:text-gray-300',];
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
            $props: __VLS_makeOptional(props),
            ...props,
            dropdowns: dropdowns,
            toggleDropdown: toggleDropdown,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {
            $props: __VLS_makeOptional(props),
            ...props,
        };
    },
    __typeEl: {},
});
; /* PartiallyEnd: #4569/main.vue */
