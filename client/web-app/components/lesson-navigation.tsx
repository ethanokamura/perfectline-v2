"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { LessonMeta } from "@/lib/courses";
import { ChevronLeft, ChevronRight, CheckCircle } from "lucide-react";

interface LessonNavigationProps {
  courseId: string;
  prev: LessonMeta | null;
  next: LessonMeta | null;
  isCompleted: boolean;
  onMarkComplete: () => void;
}

export function LessonNavigation({
  courseId,
  prev,
  next,
  isCompleted,
  onMarkComplete,
}: LessonNavigationProps) {
  return (
    <div className="mt-12 flex flex-col gap-4 border-t border-border pt-8">
      {/* Mark as complete button */}
      <div className="flex justify-center">
        <Button
          onClick={onMarkComplete}
          variant={isCompleted ? "outline" : "default"}
          className="gap-2"
          disabled={isCompleted}
        >
          <CheckCircle className="h-4 w-4" />
          {isCompleted ? "Completed!" : "Mark as Complete"}
        </Button>
      </div>

      {/* Navigation buttons */}
      <div className="flex items-center justify-between">
        {prev ? (
          <Link href={`/courses/${courseId}/${prev.slug}`}>
            <Button variant="ghost" className="gap-2">
              <ChevronLeft className="h-4 w-4" />
              <span className="hidden sm:inline">{prev.title}</span>
              <span className="sm:hidden">Previous</span>
            </Button>
          </Link>
        ) : (
          <div />
        )}

        {next ? (
          <Link href={`/courses/${courseId}/${next.slug}`}>
            <Button variant="ghost" className="gap-2">
              <span className="hidden sm:inline">{next.title}</span>
              <span className="sm:hidden">Next</span>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </Link>
        ) : (
          <Link href={`/courses/${courseId}`}>
            <Button variant="default" className="gap-2">
              Complete Course
              <CheckCircle className="h-4 w-4" />
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
}
