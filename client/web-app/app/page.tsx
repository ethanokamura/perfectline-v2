import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, BookOpen, Code2, Cpu, Sparkles, Zap } from "lucide-react";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-border">
        {/* Background effects */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-primary/5 to-transparent" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtOS45NCAwLTE4IDguMDYtMTggMThzOC4wNiAxOCAxOCAxOCAxOC04LjA2IDE4LTE4LTguMDYtMTgtMTgtMTh6bTAgMmMxLjEgMCAyIC45IDIgMnMtLjkgMi0yIDItMi0uOS0yLTIgLjktMiAyLTJ6IiBzdHJva2U9IiMzMzMiIHN0cm9rZS1vcGFjaXR5PSIuMDUiLz48L2c+PC9zdmc+')] opacity-30" />

        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="text-center">
            <Badge variant="secondary" className="mb-6 gap-1">
              <Sparkles className="h-3 w-3" />
              Now with Flutter courses
            </Badge>

            <h1 className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              Code with{" "}
              <span className="relative">
                <span className="relative z-10 bg-gradient-to-r from-primary via-primary to-primary/70 bg-clip-text text-transparent">
                  precision
                </span>
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
              Master C++, Flutter, and data structures with hands-on courses
              designed for developers who want to build real skills.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/courses">
                <Button size="lg" className="gap-2 text-base">
                  Explore Courses
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/signup">
                <Button size="lg" variant="outline" className="text-base">
                  Get Started Free
                </Button>
              </Link>
            </div>
          </div>

          {/* Code Preview */}
          <div className="relative mx-auto mt-16 max-w-3xl">
            <div className="overflow-hidden rounded-xl border border-border bg-card shadow-2xl shadow-primary/5">
              <div className="flex items-center gap-2 border-b border-border bg-muted/50 px-4 py-3">
                <div className="h-3 w-3 rounded-full bg-red-500/50" />
                <div className="h-3 w-3 rounded-full bg-yellow-500/50" />
                <div className="h-3 w-3 rounded-full bg-green-500/50" />
                <span className="ml-2 text-xs text-muted-foreground">
                  main.cpp
                </span>
              </div>
              <pre className="overflow-x-auto p-4 text-sm">
                <code className="text-muted-foreground">
                  <span className="text-blue-400">#include</span>{" "}
                  <span className="text-green-400">&lt;iostream&gt;</span>
                  {"\n"}
                  <span className="text-blue-400">#include</span>{" "}
                  <span className="text-green-400">&lt;vector&gt;</span>
                  {"\n\n"}
                  <span className="text-blue-400">int</span>{" "}
                  <span className="text-yellow-400">main</span>() {"{"}
                  {"\n"}
                  {"    "}std::vector&lt;
                  <span className="text-blue-400">int</span>&gt; nums = {"{"}
                  <span className="text-orange-400">1, 2, 3, 4, 5</span>
                  {"}"};{"\n"}
                  {"    "}
                  {"\n"}
                  {"    "}
                  <span className="text-purple-400">for</span> (
                  <span className="text-blue-400">const auto</span>& n : nums){" "}
                  {"{"}
                  {"\n"}
                  {"        "}std::cout &lt;&lt; n &lt;&lt;{" "}
                  <span className="text-green-400">&quot; &quot;</span>;{"\n"}
                  {"    "}
                  {"}"}
                  {"\n"}
                  {"    "}
                  {"\n"}
                  {"    "}
                  <span className="text-purple-400">return</span>{" "}
                  <span className="text-orange-400">0</span>;{"\n"}
                  {"}"}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Everything you need to level up
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Comprehensive courses with real-world projects, clear
              explanations, and hands-on practice.
            </p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <Card className="border-border/50 bg-card/50">
              <CardContent className="pt-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/20">
                  <Code2 className="h-6 w-6 text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold">C++ Fundamentals</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  From basic syntax to advanced templates. Build a strong
                  foundation in systems programming.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-card/50">
              <CardContent className="pt-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-cyan-500/20">
                  <Zap className="h-6 w-6 text-cyan-400" />
                </div>
                <h3 className="text-lg font-semibold">Flutter Development</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Build beautiful cross-platform apps with Flutter and Dart. One
                  codebase, every platform.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border/50 bg-card/50">
              <CardContent className="pt-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-purple-500/20">
                  <Cpu className="h-6 w-6 text-purple-400" />
                </div>
                <h3 className="text-lg font-semibold">Data Structures</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Linked lists, trees, graphs, and more. Ace your interviews and
                  write efficient code.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-border bg-gradient-to-b from-background to-primary/5 py-24">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Ready to start learning?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Join thousands of developers improving their skills with
              perfectline.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/signup">
                <Button size="lg" className="gap-2">
                  <BookOpen className="h-4 w-4" />
                  Create Free Account
                </Button>
              </Link>
              <Link href="/courses">
                <Button size="lg" variant="ghost">
                  View All Courses
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="flex items-center gap-2">
              <Image
                src="/assets/logo.svg"
                alt="Perfectline"
                width={32}
                height={32}
              />
            </div>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} perfectline. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
