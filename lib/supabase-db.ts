import { createClient as createBrowserClient } from "@/lib/supabase/client"

// Map category slugs to database category names
const categorySlugToName: Record<string, string> = {
  'clothing': 'Clothing',
  'footwear': 'Footwear', 
  'furniture': 'Furniture',
  'automobile': 'Automobile',
  'jewelry': 'Jewelry',
  'gifting': 'Gifting',
  'others': 'Others'
}

// Map database category names back to slugs
const categoryNameToSlug: Record<string, string> = {
  'Clothing': 'clothing',
  'Footwear': 'footwear',
  'Furniture': 'furniture', 
  'Automobile': 'automobile',
  'Jewelry': 'jewelry',
  'Gifting': 'gifting',
  'Others': 'others'
}

export type Ad = {
  id: string
  user_id: string
  category: string
  title: string
  description: string
  location: string
  price_from: number | null
  price_to: number | null
  images: string[]
  created_at: string
  updated_at: string
}

export type Classified = {
  id: string
  user_id: string
  category: string
  title: string
  description: string
  location: string
  price_from: number | null
  price_to: number | null
  images: string[]
  created_at: string
  updated_at: string
}

// Browser client functions
export async function createAd(ad: Omit<Ad, "id" | "user_id" | "created_at" | "updated_at">) {
  const supabase = createBrowserClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) throw new Error("Not authenticated")

  // Convert category slug to proper database category name
  const categoryName = categorySlugToName[ad.category] || ad.category

  const { data, error } = await supabase.from("ads").insert({
    ...ad,
    category: categoryName,
    user_id: user.id,
  }).select()

  if (error) throw error
  return data
}

export async function listAds(filters?: { category?: string; location?: string; sort?: string }) {
  const supabase = createBrowserClient()
  let query = supabase.from("ads").select("*")

  if (filters?.category && filters.category !== "All") {
    // Convert category slug to database category name for filtering
    const categoryName = categorySlugToName[filters.category] || filters.category
    query = query.eq("category", categoryName)
  }

  if (filters?.location && filters.location !== "All locations") {
    query = query.eq("location", filters.location)
  }

  const { data, error } = await query.order("created_at", { ascending: false })

  if (error) throw error
  
  // Convert category names back to slugs for frontend consistency
  return (data || []).map(ad => ({
    ...ad,
    category: categoryNameToSlug[ad.category] || ad.category
  }))
}

export async function getAd(id: string) {
  const supabase = createBrowserClient()
  const { data, error } = await supabase.from("ads").select("*").eq("id", id).single()

  if (error) throw error
  
  // Convert category name back to slug for frontend consistency
  return {
    ...data,
    category: categoryNameToSlug[data.category] || data.category
  }
}

export async function deleteAd(id: string) {
  const supabase = createBrowserClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) throw new Error("Not authenticated")

  const { error } = await supabase.from("ads").delete().eq("id", id).eq("user_id", user.id)

  if (error) throw error
}

export async function createClassified(classified: Omit<Classified, "id" | "created_at" | "updated_at">) {
  const supabase = createBrowserClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) throw new Error("Not authenticated")

  const { data, error } = await supabase.from("classifieds").insert({
    ...classified,
    user_id: user.id,
  })

  if (error) throw error
  return data
}

export async function listClassifieds(filters?: { category?: string; location?: string }) {
  const supabase = createBrowserClient()
  let query = supabase.from("classifieds").select("*")

  if (filters?.category && filters.category !== "All") {
    query = query.eq("category", filters.category)
  }

  if (filters?.location && filters.location !== "All locations") {
    query = query.eq("location", filters.location)
  }

  const { data, error } = await query.order("created_at", { ascending: false })

  if (error) throw error
  return data || []
}

export async function deleteClassified(id: string) {
  const supabase = createBrowserClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) throw new Error("Not authenticated")

  const { error } = await supabase.from("classifieds").delete().eq("id", id).eq("user_id", user.id)

  if (error) throw error
}
