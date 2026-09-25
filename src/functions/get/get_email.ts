import { GSCloudEvent, GSContext, PlainObject, GSStatus } from "@godspeedsystems/core";

export default function (ctx: GSContext, args: PlainObject) {
    const { inputs: { data: { query } } } = ctx;
    return new GSStatus(true, 200, undefined, { 
        username: query.username,
        email: query.username + '@example.com',
        message: 'Email generated successfully'
    }, undefined);
}
