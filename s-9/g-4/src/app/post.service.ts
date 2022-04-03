import { Posts } from "./models/posts";

export async function getPost():Promise <Posts[]> {
  return await (await fetch('assets/db.json')).json()
}
