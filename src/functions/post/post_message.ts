import { GSCloudEvent, GSContext, PlainObject, GSStatus } from "@godspeedsystems/core";

export default function (ctx: GSContext, args: PlainObject) {
    const { inputs: { data: { body } } } = ctx;
    return new GSStatus(true, 200, undefined, { 
        sender: body.sender,
        text: body.text,
        sentAt: new Date().toISOString(),
        message: 'Message sent successfully'
    }, undefined);
}
