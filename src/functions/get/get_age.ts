import { GSCloudEvent, GSContext, PlainObject, GSStatus } from "@godspeedsystems/core";

export default function (ctx: GSContext, args: PlainObject) {
    const { inputs: { data: { query } } } = ctx;
    const currentYear = new Date().getFullYear();
    const age = currentYear - query.birthYear;
    return new GSStatus(true, 200, undefined, { 
        age: age,
        birthYear: query.birthYear,
        message: 'Age calculated successfully'
    }, undefined);
}
