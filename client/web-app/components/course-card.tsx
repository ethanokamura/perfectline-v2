import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { CourseMeta } from "@/lib/courses";
import { ArrowRight } from "lucide-react";

interface CourseCardProps {
  course: CourseMeta;
  progress?: number;
}

const langColors: Record<string, string> = {
  cpp: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  dart: "bg-cyan-500/20 text-cyan-400 border-cyan-500/30",
  unity: "bg-purple-500/20 text-purple-400 border-purple-500/30",
};

const langLabels: Record<string, string> = {
  cpp: "C++",
  dart: "Flutter/Dart",
  unity: "Unity",
};

export function CourseCard({ course, progress }: CourseCardProps) {
  return (
    <Link href={`/courses/${course.course}`}>
      <Card className="group relative overflow-hidden border-border/50 bg-card transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5">
        {/* Progress indicator */}
        {progress !== undefined && progress > 0 && (
          <div
            className="absolute left-0 top-0 h-1 bg-primary"
            style={{ width: `${progress}%` }}
          />
        )}

        <CardHeader className="p-0">
          <div className="relative aspect-video overflow-hidden bg-muted">
            {course.img ? (
              <Image
                src={course.img}
                alt={course.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            ) : (
              <div className="flex h-full items-center justify-center">
                <span className="text-4xl font-bold text-muted-foreground/30">
                  {langLabels[course.lang] || course.lang}
                </span>
              </div>
            )}
            <Badge
              variant="outline"
              className={`absolute bottom-3 left-3 ${
                langColors[course.lang] || ""
              }`}
            >
              {langLabels[course.lang] || course.lang}
            </Badge>
          </div>
        </CardHeader>

        <CardContent className="p-5">
          <h3 className="mb-2 text-lg font-semibold tracking-tight transition-colors group-hover:text-primary">
            {course.title}
          </h3>
          <p className="line-clamp-2 text-sm text-muted-foreground">
            {course.description}
          </p>
        </CardContent>

        <CardFooter className="flex items-center justify-between border-t border-border/50 px-5 py-3">
          <div className="flex flex-wrap gap-1">
            {course.tags.slice(0, 2).map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
          <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary" />
        </CardFooter>
      </Card>
    </Link>
  );
}
