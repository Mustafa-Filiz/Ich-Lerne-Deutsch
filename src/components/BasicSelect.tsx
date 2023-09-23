import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/lib/ui/select'

interface Option {
  value: string
  label: string
}

interface BasicSelectProps {
  options: Option[]
  name: string
  value: string
  onChange: (value: string) => void
  label?: string
  placeholder?: string
  defaultValue?: string
}

function BasicSelect({
  options,
  label,
  placeholder,
  name,
  value,
  defaultValue,
  onChange,
}: BasicSelectProps) {
  return (
    <Select
      name={name}
      value={value}
      defaultValue={defaultValue}
      onValueChange={onChange}
    >
      <SelectTrigger>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {label ? <SelectLabel>{label}</SelectLabel> : null}
          {options.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}

export default BasicSelect
