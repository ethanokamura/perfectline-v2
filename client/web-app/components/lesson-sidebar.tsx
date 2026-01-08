"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { LessonMeta } from "@/lib/courses";
import { CheckCircle2, Circle, PlayCircle } from "lucide-react";

interface LessonSidebarProps {
  courseId: string;
  courseTitle: string;
  lessons: LessonMeta[];
  completedLessons?: string[];
}

export function LessonSidebar({
  courseId,
  courseTitle,
  lessons,
  completedLessons = [],
}: LessonSidebarProps) {
  const pathname = usePathname();

  return (
    <aside className="sticky top-20 hidden h-[calc(100vh-5rem)] w-72 shrink-0 overflow-y-auto border-r border-border bg-background lg:block">
      <div className="p-6">
        <Link
          href={`/courses/${courseId}`}
          className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          ← Back to course
        </Link>
        <h2 className="mt-4 text-lg font-semibold">{courseTitle}</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          {completedLessons.length} / {lessons.length} completed
        </p>
      </div>

      <nav className="px-3 pb-6">
        <ul className="space-y-1">
          {lessons.map((lesson, index) => {
            const isActive = pathname === `/courses/${courseId}/${lesson.slug}`;
            const isCompleted = completedLessons.includes(lesson.slug);

            return (
              <li key={lesson.slug}>
                <Link
                  href={`/courses/${courseId}/${lesson.slug}`}
                  className={cn(
                    "flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors",
                    isActive
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  )}
                >
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center">
                    {isCompleted ? (
                      <CheckCircle2 className="h-4 w-4 text-green-500" />
                    ) : isActive ? (
                      <PlayCircle className="h-4 w-4" />
                    ) : (
                      <Circle className="h-4 w-4" />
                    )}
                  </span>
                  <span className="flex-1 truncate">
                    {index + 1}. {lesson.title}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
