import { GSCloudEvent, GSContext, PlainObject, GSStatus } from "@godspeedsystems/core";

export default function (ctx: GSContext, args: PlainObject) {
    const { inputs: { data: { body } } } = ctx;
    return new GSStatus(true, 200, undefined, { 
        author: body.author,
        body: body.body,
        commentedAt: new Date().toISOString(),
        message: 'Comment posted successfully'
    }, undefined);
}
