"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useAuth } from "@/lib/auth-context";
import { AuthGuard } from "@/components/auth-guard";
import { getUserProgress, UserProgress, calculateCourseCompletion } from "@/lib/progress";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { BookOpen, Clock, PlayCircle, Trophy, Loader2 } from "lucide-react";

// Course metadata for display - this would ideally come from a shared source
const courseInfo: Record<string, { title: string; totalLessons: number; lang: string }> = {
  "cpp-101": { title: "Intro to C++", totalLessons: 17, lang: "cpp" },
  "linked-list": { title: "Linked Lists", totalLessons: 12, lang: "cpp" },
  "graphs": { title: "Graphs", totalLessons: 5, lang: "cpp" },
  "trees": { title: "Trees", totalLessons: 6, lang: "cpp" },
  "maze": { title: "Maze Generator", totalLessons: 12, lang: "cpp" },
  "flutter-101": { title: "Introduction to Flutter", totalLessons: 1, lang: "dart" },
  "unity-101": { title: "Intro to Unity", totalLessons: 6, lang: "unity" },
};

const langColors: Record<string, string> = {
  cpp: "bg-blue-500/20 text-blue-400",
  dart: "bg-cyan-500/20 text-cyan-400",
  unity: "bg-purple-500/20 text-purple-400",
};

function DashboardContent() {
  const { user } = useAuth();
  const [progress, setProgress] = useState<UserProgress | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProgress() {
      if (user) {
        const userProgress = await getUserProgress(user.uid);
        setProgress(userProgress);
      }
      setLoading(false);
    }

    fetchProgress();
  }, [user]);

  if (loading) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  const coursesInProgress = progress ? Object.entries(progress) : [];
  const totalCompleted = coursesInProgress.reduce(
    (acc, [, cp]) => acc + cp.completedLessons.length,
    0
  );

  const getInitials = (name: string | null) => {
    if (!name) return "U";
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="border-b border-border bg-gradient-to-b from-primary/5 to-background py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-6">
            <Avatar className="h-20 w-20 border-2 border-primary/20">
              <AvatarImage src={user?.photoURL || undefined} />
              <AvatarFallback className="text-2xl">
                {getInitials(user?.displayName || null)}
              </AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-3xl font-bold">
                Welcome back, {user?.displayName?.split(" ")[0] || "Learner"}!
              </h1>
              <p className="mt-1 text-muted-foreground">
                Track your progress and continue learning
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Stats */}
        <div className="mb-12 grid gap-4 sm:grid-cols-3">
          <Card className="border-border/50">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Courses Started</CardTitle>
              <BookOpen className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{coursesInProgress.length}</div>
            </CardContent>
          </Card>

          <Card className="border-border/50">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Lessons Completed</CardTitle>
              <Trophy className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{totalCompleted}</div>
            </CardContent>
          </Card>

          <Card className="border-border/50">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Last Active</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">Today</div>
            </CardContent>
          </Card>
        </div>

        {/* Continue Learning */}
        <section>
          <h2 className="mb-6 text-2xl font-bold">Continue Learning</h2>

          {coursesInProgress.length === 0 ? (
            <Card className="border-border/50 border-dashed">
              <CardContent className="flex flex-col items-center justify-center py-12">
                <BookOpen className="mb-4 h-12 w-12 text-muted-foreground" />
                <CardTitle className="mb-2">No courses started yet</CardTitle>
                <CardDescription className="mb-6 text-center">
                  Start learning today by exploring our courses
                </CardDescription>
                <Link href="/courses">
                  <Button>Browse Courses</Button>
                </Link>
              </CardContent>
            </Card>
          ) : (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {coursesInProgress.map(([courseId, courseProgress]) => {
                const info = courseInfo[courseId];
                if (!info) return null;

                const completionPercent = calculateCourseCompletion(
                  courseProgress,
                  info.totalLessons
                );

                return (
                  <Card key={courseId} className="border-border/50">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <Badge className={langColors[info.lang]}>
                          {info.lang.toUpperCase()}
                        </Badge>
                        <span className="text-sm text-muted-foreground">
                          {completionPercent}%
                        </span>
                      </div>
                      <CardTitle className="mt-2">{info.title}</CardTitle>
                      <CardDescription>
                        {courseProgress.completedLessons.length} / {info.totalLessons} lessons
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Progress value={completionPercent} className="mb-4" />
                      <Link href={`/courses/${courseId}/${courseProgress.currentLesson}`}>
                        <Button className="w-full gap-2">
                          <PlayCircle className="h-4 w-4" />
                          Continue
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}

export default function DashboardPage() {
  return (
    <AuthGuard>
      <DashboardContent />
    </AuthGuard>
  );
}
