import { BookOpen, ChartArea, GraduationCap, House, Settings2, Square } from "lucide-react";
import { title } from "process";

export const routes = [
    {
        title: "Home",
        url: "/",
        icon: House
    },
    {
        title: "Cursos",
        url: "/courses",
        icon: Square
    },
    {
        title: "Mis Cursos",
        url: "/my-courses",
        icon: BookOpen
    },
    {
        title: "Ajustes",
        url: "/settings",
        icon: Settings2
    },
]


export const routesTeacher = [
    {
        title: 'Cursos',
        url: '/teacher',
        icon: GraduationCap
    },
    {
        title: 'Analíticas',
        url: '/teacher/analytics',
        icon: ChartArea
    }
]