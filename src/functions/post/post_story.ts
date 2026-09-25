import { GSCloudEvent, GSContext, PlainObject, GSStatus } from "@godspeedsystems/core";

export default function (ctx: GSContext, args: PlainObject) {
    const { inputs: { data: { body } } } = ctx;
    return new GSStatus(true, 200, undefined, { 
        title: body.title,
        content: body.content,
        postedAt: new Date().toISOString(),
        message: 'Story posted successfully'
    }, undefined);
}
