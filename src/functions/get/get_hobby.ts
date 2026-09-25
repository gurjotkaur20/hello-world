import { GSCloudEvent, GSContext, PlainObject, GSStatus } from "@godspeedsystems/core";

export default function (ctx: GSContext, args: PlainObject) {
    const { inputs: { data: { query } } } = ctx;
    return new GSStatus(true, 200, undefined, { 
        category: query.category,
        description: 'Hobby for category ' + query.category,
        message: 'Hobby retrieved successfully'
    }, undefined);
}
