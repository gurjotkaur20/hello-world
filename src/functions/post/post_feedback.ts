import { GSCloudEvent, GSContext, PlainObject, GSStatus } from "@godspeedsystems/core";

export default function (ctx: GSContext, args: PlainObject) {
    const { inputs: { data: { body } } } = ctx;
    return new GSStatus(true, 200, undefined, { 
        rating: body.rating,
        comment: body.comment,
        submittedAt: new Date().toISOString(),
        message: 'Feedback submitted successfully'
    }, undefined);
}
