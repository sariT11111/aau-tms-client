import{Temporal} from "@js-temporal/polyfill";
export interface Course {
    readonly id: string;
    Title: string;
    capacity: number   ;
    startDate?: Temporal.PlainDate;
}