"use client";

import { useEffect, useRef, useState } from "react";
import { m, useReducedMotion, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  ContributionLegend,
  levelClasses,
} from "@/components/contribution-legend";
import type { ContributionDay } from "@/lib/github";

type Active = {
  day: ContributionDay;
  left: number;
  top: number;
  size: number;
};

const dateFormat = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "numeric",
  year: "numeric",
  timeZone: "UTC",
});

const monthFormat = new Intl.DateTimeFormat("en-US", {
  month: "short",
  timeZone: "UTC",
});

const columnVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

function describe(day: ContributionDay) {
  const count = day.count === 0 ? "No" : day.count;
  const noun = day.count === 1 ? "contribution" : "contributions";
  return `${count} ${noun} on ${dateFormat.format(new Date(day.date))}`;
}

// Label a week with its month when the month changes, skipping labels that would collide.
function monthLabels(weeks: ContributionDay[][]) {
  let lastIndex = -3;
  return weeks.map((week, index) => {
    const first = week[0];
    const prev = weeks[index - 1]?.[0];
    if (!first) return null;
    const month = monthFormat.format(new Date(first.date));
    const changed = !prev || month !== monthFormat.format(new Date(prev.date));
    if (!changed || index - lastIndex < 3 || index > weeks.length - 3)
      return null;
    lastIndex = index;
    return month;
  });
}

const columnClass = "flex shrink-0 flex-col gap-1 md:flex-1 md:gap-[3px]";
const rowClass = "flex w-max gap-1 md:w-full md:gap-[3px]";

export function ContributionGrid({ weeks }: { weeks: ContributionDay[][] }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<Active | null>(null);
  const reduceMotion = useReducedMotion();
  const labels = monthLabels(weeks);

  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollLeft = el.scrollWidth;
  }, []);

  function handleEnter(
    event: React.MouseEvent<HTMLSpanElement>,
    day: ContributionDay,
  ) {
    const cell = event.currentTarget;
    setActive({
      day,
      left: cell.offsetLeft,
      top: cell.offsetTop,
      size: cell.offsetWidth,
    });
  }

  return (
    <div className="flex flex-col gap-3">
      <div ref={scrollRef} className="overflow-x-auto pb-1">
        <div aria-hidden="true" className={cn(rowClass, "mb-2 h-4")}>
          {labels.map((label, index) => (
            <div
              key={weeks[index]?.[0]?.date ?? index}
              className={cn(columnClass, "w-3 min-w-0 md:w-auto")}
            >
              {label && (
                <span className="font-mono text-xs leading-4 whitespace-nowrap text-muted-foreground">
                  {label}
                </span>
              )}
            </div>
          ))}
        </div>
        <m.div
          aria-hidden="true"
          className={cn(rowClass, "relative")}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px 0px -40px 0px" }}
          transition={{ staggerChildren: reduceMotion ? 0 : 0.012 }}
          onMouseLeave={() => setActive(null)}
        >
          {weeks.map((week) => (
            <m.div
              key={week[0]?.date}
              variants={columnVariants}
              transition={{
                duration: reduceMotion ? 0 : 0.25,
                ease: "easeOut",
              }}
              className={columnClass}
            >
              {week.map((day) => (
                <span
                  key={day.date}
                  onMouseEnter={(event) => handleEnter(event, day)}
                  className={cn(
                    "size-3 rounded-[1px] transition-[outline-color] duration-150 hover:outline hover:outline-1 hover:outline-muted-foreground md:aspect-square md:size-auto md:w-full",
                    levelClasses[day.level],
                  )}
                />
              ))}
            </m.div>
          ))}
          <Tooltip open={active !== null}>
            <TooltipTrigger asChild>
              <span
                tabIndex={-1}
                className="pointer-events-none absolute"
                style={{
                  left: active?.left ?? 0,
                  top: active?.top ?? 0,
                  width: active?.size ?? 0,
                  height: active?.size ?? 0,
                }}
              />
            </TooltipTrigger>
            <TooltipContent side="top" sideOffset={6}>
              {active ? describe(active.day) : null}
            </TooltipContent>
          </Tooltip>
        </m.div>
      </div>
      <ContributionLegend />
    </div>
  );
}
