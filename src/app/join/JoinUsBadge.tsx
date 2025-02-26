import contentData from "@/contentData";
import Link from "next/link";
import { Calendar, ArrowRight } from "lucide-react";

export default function JoinUsBadge() {
  return (
    <section className="w-full bg-primary py-4 px-6 rounded-lg shadow-md">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-4">
        <div className="flex flex-col items-start space-y-2">
          <h2 className="text-lg font-bold text-primary-foreground">
            Applications Closed
          </h2>
          <p className="text-sm text-primary-foreground">
            {/* Apply by 27th January 2024 (Monday, 12 noon) */}
            re-opening soon
          </p>
        </div>
        {/* <Link
          href={contentData.form_link}
          target="_blank"
          className="inline-flex items-center justify-center rounded-md bg-primary-foreground p-2 w-full md:w-fit h-12 text-md font-medium text-primary shadow transition-colors hover:bg-primary-foreground/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
          prefetch={false}
        >
          Applications Open
        </Link> */}
      </div>
    </section>
  );
}
