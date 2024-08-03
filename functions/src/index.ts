/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable max-len */
/* eslint-disable object-curly-spacing */
import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

admin.initializeApp();

export const deleteUser = functions.https.onRequest(async (req: functions.Request, res: functions.Response) => {
  console.log(req.body);
  const { uid } = req.body;
  console.log(uid);
  try {
    console.log("in try");
    await admin.auth().deleteUser(uid);
    console.log("deleted user");
    res.status(200).send({ message: "Successfully deleted user" });
  } catch ( error : any) {
    res.status(500).send({ error: error.message });
  }
});
