"use client";

import { useAuth } from "@/lib/auth-context";
import { LessonNavigation } from "@/components/lesson-navigation";
import { LessonMeta } from "@/lib/courses";
import { markLessonComplete, getCourseProgress } from "@/lib/progress";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { LogIn, UserPlus } from "lucide-react";

interface LessonClientProps {
  courseId: string;
  lessonSlug: string;
  prev: LessonMeta | null;
  next: LessonMeta | null;
}

export function LessonClient({
  courseId,
  lessonSlug,
  prev,
  next,
}: LessonClientProps) {
  const { user, loading } = useAuth();
  const [isCompleted, setIsCompleted] = useState(false);
  const [progressLoading, setProgressLoading] = useState(true);

  useEffect(() => {
    async function fetchProgress() {
      if (user) {
        const progress = await getCourseProgress(user.uid, courseId);
        if (progress) {
          setIsCompleted(progress.completedLessons.includes(lessonSlug));
        }
      }
      setProgressLoading(false);
    }

    if (!loading) {
      fetchProgress();
    }
  }, [user, loading, courseId, lessonSlug]);

  const handleMarkComplete = async () => {
    if (!user) return;

    await markLessonComplete(user.uid, courseId, lessonSlug);
    setIsCompleted(true);
  };

  // Show sign-in prompt if not authenticated
  if (!loading && !user) {
    return (
      <div className="mt-12 border-t border-border pt-8">
        <Card className="border-primary/20 bg-primary/5">
          <CardHeader>
            <CardTitle>Sign in to track your progress</CardTitle>
            <CardDescription>
              Create a free account to save your progress and continue where you
              left off.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex gap-4">
            <Link href="/login">
              <Button variant="outline" className="gap-2">
                <LogIn className="h-4 w-4" />
                Sign In
              </Button>
            </Link>
            <Link href="/signup">
              <Button className="gap-2">
                <UserPlus className="h-4 w-4" />
                Create Account
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (loading || progressLoading) {
    return (
      <div className="mt-12 border-t border-border pt-8">
        <div className="flex justify-center">
          <div className="h-10 w-40 animate-pulse rounded-md bg-muted" />
        </div>
      </div>
    );
  }

  return (
    <LessonNavigation
      courseId={courseId}
      prev={prev}
      next={next}
      isCompleted={isCompleted}
      onMarkComplete={handleMarkComplete}
    />
  );
}
