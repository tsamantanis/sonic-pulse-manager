
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"

interface StatusSelectProps {
  value: string
  onChange: (value: string) => void
  type: "submission" | "release"
  readOnly?: boolean
}

const submissionStatuses = [
  { value: "submitted", label: "Submitted", color: "bg-orange-100 text-orange-700" },
  { value: "accepted", label: "Accepted", color: "bg-green-100 text-green-700" },
  { value: "rejected", label: "Rejected", color: "bg-red-100 text-red-700" },
]

const releaseStatuses = [
  { value: "drafting contract", label: "Drafting Contract", color: "bg-blue-100 text-blue-700" },
  { value: "ready to sign", label: "Ready to Sign", color: "bg-yellow-100 text-yellow-700" },
  { value: "released", label: "Released", color: "bg-green-100 text-green-700" },
  { value: "canceled", label: "Canceled", color: "bg-red-100 text-red-700" },
]

export function StatusSelect({ value, onChange, type, readOnly = false }: StatusSelectProps) {
  const statuses = type === "submission" ? submissionStatuses : releaseStatuses
  const currentStatus = statuses.find(s => s.value === value)

  if (readOnly) {
    return (
      <Badge className={`${currentStatus?.color} hover:${currentStatus?.color}`}>
        {currentStatus?.label || value}
      </Badge>
    )
  }

  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className="w-fit border-none p-0 h-auto">
        <SelectValue asChild>
          <Badge className={`${currentStatus?.color} hover:${currentStatus?.color} cursor-pointer`}>
            {currentStatus?.label || value}
          </Badge>
        </SelectValue>
      </SelectTrigger>
      <SelectContent>
        {statuses.map((status) => (
          <SelectItem key={status.value} value={status.value}>
            <Badge className={`${status.color} hover:${status.color}`}>
              {status.label}
            </Badge>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
