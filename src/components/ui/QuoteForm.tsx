"use client"

import { useState } from "react"
import { quotes } from "@/data/quotes"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"

export default function QuoteForm() {
  const [topic, setTopic] = useState("")
  const [results, setResults] = useState<string[]>([])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const list = quotes[topic.toLowerCase()]
    setResults(list?.slice(0, 3) ?? [])
  }

  return (
    <>
      <nav className="w-full bg-gray-900 text-white py-4 px-6 mb-6 shadow">
        <div className="max-w-md mx-auto flex items-center justify-between">
          <span className="font-bold text-lg">Quote Finder</span>
        </div>
      </nav>
      <Card className="max-w-md mx-auto mt-10">
        <CardContent className="p-6 space-y-4">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="topic">Enter a Topic</Label>
              <Input
                id="topic"
                placeholder="motivation, success, leadership…"
                value={topic}
                onChange={e => setTopic(e.target.value)}
              />
            </div>
            <Button type="submit" className="w-full">Get Quotes</Button>
          </form>

          {results.length ? (
            <ul className="list-disc pl-5 space-y-2">
              {results.map(q => <li key={q} className="italic">{q}</li>)}
            </ul>
          ) : (
            <p className="text-sm text-muted-foreground">
              No quotes yet. Try a valid topic.
            </p>
          )}
        </CardContent>
      </Card>
    </>
  )
}
