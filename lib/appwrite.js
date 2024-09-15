import { Client, Databases, ID } from "react-native-appwrite"

export const appwriteConfig = {
  endpoint: "https://cloud.appwrite.io/v1",
  platform: "com.haunansee.notes",
  projectId: "66e69b3f0032fa72bcdf",
  databaseId: "66e6eb7700049ee4c8a2",
  noteCollectionId: "66e6eb7d0025f7ee031b",
}

const client = new Client()

client
  .setEndpoint(appwriteConfig.endpoint)
  .setProject(appwriteConfig.projectId)
  .setPlatform(appwriteConfig.platform)

const databases = new Databases(client)

// Get all notes
export async function getAllNotes() {
  try {
    const notes = await databases.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.noteCollectionId
    )

    if (!notes) throw new Error("Something went wrong")

    return notes.documents
  } catch (error) {
    throw new Error(error)
  }
}

export async function createNote(data) {
  try {
    const note = await databases.createDocument(
      appwriteConfig.databaseId,
      appwriteConfig.noteCollectionId,
      ID.unique(),
      data
    )

    return note
  } catch (error) {
    throw new Error(error)
  }
}

// Delete all notes
export async function deleteAllNotes() {
  try {
    const allNotes = await databases.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.noteCollectionId
    )

    allNotes.documents.forEach(async (note) => {
      await databases.deleteDocument(
        appwriteConfig.databaseId,
        appwriteConfig.noteCollectionId,
        note["$id"]
      )
    })
  } catch (error) {
    throw new Error(error)
  }
}
