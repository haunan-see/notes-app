import { getAllNotes } from "@/lib/appwrite"
import useAppwrite from "@/lib/useAppwrite"
import { useMemo } from "react"

type NoteType = { [key: string]: { title: string; data: string[] } }

interface DataItem {
  $collectionId: string
  $createdAt: string
  $databaseId: string
  $id: string
  $permissions: any[]
  $updatedAt: string
  category: string
  content: string
}

interface GroupedData {
  [category: string]: DataItem[]
}

interface TransformedData {
  title: string
  data: string[]
}

export const useNotes = () => {
  const { data, loading, refetch } = useAppwrite(getAllNotes)

  const categories = [
    {
      value: "Work and study",
    },
    {
      value: "Life",
    },
    {
      value: "Health and wellness",
    },
    {
      value: "Well being",
    },
  ]

  const notes = useMemo(() => {
    const groupedData: GroupedData = data.reduce(
      (acc: GroupedData, item: DataItem) => {
        const { category } = item
        if (!acc[category]) {
          acc[category] = []
        }
        acc[category].push(item)
        return acc
      },
      {}
    )

    // Transform and sort each category's entries by updatedAt
    const result: TransformedData[] = Object.keys(groupedData).map(
      (category) => {
        const items = groupedData[category]
        items.sort(
          (a, b) =>
            new Date(b.$updatedAt).getTime() - new Date(a.$updatedAt).getTime()
        )

        return {
          title: category,
          data: items.map((item) => item.content),
        }
      }
    )

    return result
  }, [data])

  const getNoteCategoryCount = (category: string) => {
    return notes.find((note) => note.title === category)?.data.length ?? 0
  }

  return {
    refetch,
    loading,
    notes,
    categories,
    getNoteCategoryCount,
  }
}
