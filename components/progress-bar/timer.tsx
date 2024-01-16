"use client";

import { differenceInDays, differenceInMilliseconds } from "date-fns";
import { useEffect, useState } from "react";
import { Progress } from "../ui/progress";
import { Card, CardContent, CardHeader } from "../ui/card";

export const CountdownTimer: React.FC<{}> = ({ }) => {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      const diff = differenceInDays(new Date(), new Date(2024, 2, 2, 19));

      const startDiff = differenceInDays(
        new Date(2024, 0, 15),
        new Date(2024, 2, 2, 19),
      );

      setPercentage(Math.round(((startDiff - diff) / startDiff) * 100));
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Card className="fixed bottom-2 right-2 bg-card/50 backdrop-blur-lg">
      <CardHeader className="font-bold">Watch this space...</CardHeader>
      <CardContent>
        <div className="flex items-center text-center gap-x-2 w-72">
          {percentage}%
          <Progress value={percentage} className="w-full" />
        </div>
      </CardContent>
    </Card>
  );
};
