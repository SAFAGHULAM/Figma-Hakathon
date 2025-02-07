export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-01-29'

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)

export const token = assertValue(
  "skEGE2XNfYatImKUl47PP4MEtM9Iqyf9Vwvg0ORN7PWdIeWr2p9zs0YMOlYvdVKphAGpVZy7ZGyn4NwIt74CDWGOZeoyMyo2VJqFx2U6C4uuwxKSYfuj5swcuudFixJb2C3AM8DO0HX7pwsNqWbM78M7dVaa91hWVQz38qP2e1GqN8Ql5P2K",
  'Missing environment variable: SANITY_API_TOKEN'
)

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
