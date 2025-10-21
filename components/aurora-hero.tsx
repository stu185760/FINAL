"use client";

import { motion } from "framer-motion";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function AuroraHero() {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-6 items-center justify-center px-4 text-center"
      >
        <div className="text-4xl md:text-7xl font-bold dark:text-white">
          EasyCustomized
        </div>
        <div className="font-light text-lg md:text-2xl dark:text-neutral-200 max-w-2xl">
          Connect with skilled artisans for your custom projects. Post your requirements and get quotes from verified vendors.
        </div>
        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
            <Link href="/post-ad">Post Your Project</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/vendor/browse">Browse Projects</Link>
          </Button>
        </div>
      </motion.div>
    </AuroraBackground>
  );
}