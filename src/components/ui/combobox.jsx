"use client"

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/libs/utils"
import { Button } from "@/components/ui/button"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
} from "@/components/ui/command"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

const asignaturas = [
    {
        value: "Administración de sistemas gestores de bases de datos",
        label: "Administración de sistemas gestores de bases de datos",
    },
    {
        value: "Administración de sistemas operativos",
        label: "Administración de sistemas operativos",
    },
    {
        value: "Implantación de aplicaciones web",
        label: "Implantación de aplicaciones web",
    },
    {
        value: "Seguridad y alta disponibilidad",
        label: "Seguridad y alta disponibilidad",
    },
    {
        value: "Servicios de red e internet",
        label: "Servicios de red e internet",
    },
    {
        value: "Empresa e iniciativa emprendedora",
        label: "Empresa e iniciativa emprendedora",
    }
]

export function Combobox() {
    const [open, setOpen] = React.useState(false)
    const [value, setValue] = React.useState("")

    return (
        <Popover open={open} onOpenChange={setOpen} className="text-black   ">
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="w-[200px] justify-between"
                >
                    {value
                        ? asignaturas.find((asignatura) => asignatura.value === value)?.label
                        : "Asignatura..."}
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0 bg-slate-500">
                <Command>
                    <CommandInput placeholder="Buscar Asignatura..." />
                    <CommandEmpty>Asignatura no encontrada.</CommandEmpty>
                    <CommandGroup>
                        {asignaturas.map((asignatura) => (
                            <CommandItem
                                key={asignatura.value}
                                onSelect={(currentValue) => {
                                    setValue(currentValue === value ? "" : currentValue)
                                    setOpen(false)
                                }}
                            >
                                <Check
                                    className={cn(
                                        "mr-2 h-4 w-4",
                                        value === asignatura.value ? "opacity-100" : "opacity-0"
                                    )}
                                />
                                {asignatura.label}
                            </CommandItem>
                        ))}
                    </CommandGroup>
                </Command>
            </PopoverContent>
        </Popover >
    )
}
