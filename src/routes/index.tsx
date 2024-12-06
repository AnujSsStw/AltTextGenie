import { createFileRoute, Link } from "@tanstack/react-router";
import { Logo } from "../ui/logo";
// import { cn } from "@/utils/misc";
import { Globe, Loader2, Wand2, Zap } from "lucide-react";
// import siteConfig from "~/site.config";
// import { ThemeSwitcherHome } from "@/ui/theme-switcher";
import ShadowPNG from "/images/shadow.png";
import { useConvexAuth } from "@convex-dev/react-query";
import { Route as AuthLoginRoute } from "@/routes/_app/login/_layout.index";
import { Route as DashboardRoute } from "@/routes/_app/_auth/dashboard/_layout.index";
import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const { isLoading, isAuthenticated } = useConvexAuth();
  const theme = "dark";
  return (
    <div className="relative flex h-full w-full flex-col bg-card">
      {/* Navigation */}
      <div className="sticky top-0 z-50 mx-auto flex w-full max-w-screen-lg items-center justify-between p-6 py-3">
        <Link to="/" className="flex h-10 items-center gap-1">
          <Logo />
        </Link>
        <div className="flex items-center gap-4">
          <Link
            to={
              isAuthenticated
                ? DashboardRoute.fullPath
                : AuthLoginRoute.fullPath
            }
            className={buttonVariants({ size: "sm" })}
            disabled={isLoading}
          >
            {isLoading && <Loader2 className="animate-spin w-16 h-4" />}
            {!isLoading && isAuthenticated && "Dashboard"}
            {!isLoading && !isAuthenticated && "Get Started"}
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="z-10 mx-auto flex w-full max-w-screen-xl flex-col gap-4 px-6">
        {/* <HeroSection /> */}
        <section className="py-20 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-1/2 mb-10 md:mb-0">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-purple-600">
                  Picture This: AI Magic for Your Images!
                </h1>
                <p className="text-xl mb-8 text-purple-500">
                  Zap your pics with super-smart alt text! Make your content pop
                  and reach everyone, everywhere!
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    asChild
                    size="lg"
                    className="bg-green-500 hover:bg-green-600 text-white"
                  >
                    <Link href="/dashboard">Start the Magic!</Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="border-purple-500 text-purple-500 hover:bg-purple-100"
                  >
                    <Link href="#features">See the Tricks</Link>
                  </Button>
                </div>
              </div>
              <div className="md:w-1/2 relative">
                <div className="absolute top-0 right-0 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                <div className="absolute top-0 -left-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
                <img
                  src="https://img.freepik.com/free-vector/cute-astronaut-samurai-with-kitsune-mask-katana-sword-cartoon-vector-icon-illustration-science_138676-9360.jpg?t=st=1733408124~exp=1733411724~hmac=214e6d7fa3df0ad1c712aa8b190415813b2cf8044749d7a2236fb281f020a694&w=826"
                  alt=""
                  className="relative rounded-full border-8 border-white shadow-2xl"
                  width={400}
                  height={400}
                />
              </div>
            </div>
          </div>
        </section>

        <FeaturesSection />
      </div>

      {/* Footer */}
      <footer className="z-10 flex w-full flex-col items-center justify-center gap-8 py-6">
        {/* <ThemeSwitcherHome /> */}

        <div className="container mx-auto px-4 text-center">
          <p className="text-yellow-300">
            © 2024 Alt Text Generator. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Background */}
      <img
        src={ShadowPNG}
        alt="Hero"
        className={`fixed left-0 top-0 z-0 h-full w-full opacity-60 ${theme === "dark" ? "invert" : ""}`}
      />
      <div className="base-grid fixed h-screen w-screen opacity-40" />
      <div className="fixed bottom-0 h-screen w-screen bg-gradient-to-t from-[hsl(var(--card))] to-transparent" />
    </div>
  );
}

function FeaturesSection() {
  const features = [
    {
      icon: <Wand2 className="h-12 w-12 text-purple-500" />,
      title: "Magic Descriptions",
      description:
        "Our AI wizard conjures up spot-on descriptions for any image you throw its way!",
    },
    {
      icon: <Globe className="h-12 w-12 text-green-500" />,
      title: "Polyglot Power",
      description:
        "Speak to the world! Our alt text speaks many languages, no Babel fish required.",
    },
    {
      icon: <Zap className="h-12 w-12 text-yellow-500" />,
      title: "Bulk Brilliance",
      description:
        "Process pics faster than a speeding bullet with our super-powered batch system!",
    },
  ];

  return (
    <section className=" py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-white text-center mb-12">
          Unleash the Power of AI
        </h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="bg-gray-800 border-gray-700 hover:bg-gray-750 transition-colors duration-300"
            >
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-gray-700 rounded-full">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white text-center mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-300 text-center">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
