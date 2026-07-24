/** Renders a JSON-LD structured-data script tag. */
export default function JsonLd({ data }: { data: object | null }) {
  if (!data) return null
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
