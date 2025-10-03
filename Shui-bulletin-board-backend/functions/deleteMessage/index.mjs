import { sendResponse } from "../../utils/responses/index.mjs";
import { client } from "../../services/db.mjs";
import { DeleteItemCommand } from "@aws-sdk/client-dynamodb";

export const handler = async (event) => {
    try {
       const { id } = event.pathParameters;

       if(!id) return sendResponse(400, {error: "messageId måste anges"});

       const command = new DeleteItemCommand({
        TableName: "ShuiBulletinBoard",
        Key: {
            messageId: { S: id },
        },
       });

       await client.send(command);

        return sendResponse(200, {
            success: true,
            message: "Meddelandet raderat"
        })
    } catch (error) {
        return sendResponse(500, {error: error.message})
    }
}