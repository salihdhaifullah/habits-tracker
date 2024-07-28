import { ButtonHTMLAttributes, Events, HTMLAttributes, InputHTMLAttributes, ReservedProps } from "vue";

export type VueButton = /* @vue-ignore */ ButtonHTMLAttributes & ReservedProps;
export type VueSpan = /* @vue-ignore */ HTMLAttributes & ReservedProps;
export type VueInput = /* @vue-ignore */ InputHTMLAttributes & ReservedProps 

export type VueEvents = /* @vue-ignore */ EventHandlers<Events>

type EventHandlers<E> = {
    [K in keyof E]?: E[K] extends (...args: any) => any ? E[K] : (payload: E[K]) => void;
};